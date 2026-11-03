import { queryCuratedDatabase } from './photoDatabase';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const UTM_SOURCE = 'utm_source=pixora&utm_medium=referral';

// Append UTM parameters required by Unsplash API terms
export function formatUnsplashUrl(url) {
  if (!url) return '';
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}${UTM_SOURCE}`;
}

// Convert raw API response into our standard photo format
export function normalizePhoto(item, query = 'photo') {
  const fallbackTitle = item.alt_description
    ? item.alt_description.charAt(0).toUpperCase() + item.alt_description.slice(1)
    : item.description
    ? item.description.charAt(0).toUpperCase() + item.description.slice(1)
    : `Photo of ${query}`;

  const photographerName = item.user?.name || item.photographer?.name || 'Photographer';
  const photographerUsername = item.user?.username || item.photographer?.username || 'photographer';
  const photographerAvatar =
    item.user?.profile_image?.medium ||
    item.user?.profile_image?.small ||
    item.photographer?.avatar ||
    '';

  const photographerLink = formatUnsplashUrl(
    item.user?.links?.html || `https://unsplash.com/@${photographerUsername}`
  );

  return {
    id: item.id,
    title: item.title || fallbackTitle,
    description: item.description || item.alt_description || 'No description provided.',
    altDescription: item.alt_description || item.description || fallbackTitle,
    urls: {
      thumb: item.urls?.thumb || '',
      small: item.urls?.small || item.urls?.regular || '',
      regular: item.urls?.regular || item.urls?.small || '',
      full: item.urls?.full || item.urls?.regular || ''
    },
    width: item.width || 1920,
    height: item.height || 1080,
    likes: item.likes || 0,
    color: item.color || '#e2e8f0',
    photographer: {
      name: photographerName,
      username: photographerUsername,
      avatar: photographerAvatar,
      link: photographerLink
    },
    links: {
      html: formatUnsplashUrl(item.links?.html || `https://unsplash.com/photos/${item.id}`),
      download: item.links?.download || item.urls?.full || ''
    }
  };
}

// Check for user-configured key in local storage, props, or .env
export function getActiveAccessKey(customKey) {
  if (customKey && customKey.trim()) return customKey.trim();
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem('unsplash_access_key');
    if (saved && saved.trim()) return saved.trim();
  }
  const envKey = import.meta.env?.VITE_UNSPLASH_ACCESS_KEY;
  if (envKey && envKey !== 'your_unsplash_access_key_here') {
    return envKey.trim();
  }
  return null;
}

// Search photos from Unsplash with automatic fallback if offline or no key
export async function searchPhotos({
  query,
  page = 1,
  perPage = 12,
  signal,
  customApiKey
}) {
  const cleanQuery = query ? query.trim() : '';
  if (!cleanQuery) {
    return { results: [], total: 0, totalPages: 0 };
  }

  const accessKey = getActiveAccessKey(customApiKey);

  // If user hasn't provided an access key, use the curated offline database
  if (!accessKey) {
    return getCuratedMockPhotos(cleanQuery, page, perPage);
  }

  const url = new URL(`${UNSPLASH_BASE_URL}/search/photos`);
  url.searchParams.append('query', cleanQuery);
  url.searchParams.append('page', String(page));
  url.searchParams.append('per_page', String(perPage));

  try {
    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        'Accept-Version': 'v1'
      },
      signal
    });

    if (!res.ok) {
      // If demo rate limit is reached or key is expired, gracefully fall back
      if (res.status === 401 || res.status === 403) {
        const fallback = getCuratedMockPhotos(cleanQuery, page, perPage);
        return {
          ...fallback,
          warning: res.status === 403 ? 'RATE_LIMITED' : 'UNAUTHORIZED'
        };
      }
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    const results = (data.results || []).map((p) => normalizePhoto(p, cleanQuery));

    return {
      results,
      total: data.total || 0,
      totalPages: data.total_pages || 0,
      isLiveApi: true
    };
  } catch (err) {
    if (err.name === 'AbortError') throw err;

    // Resilient fallback on network failure
    const fallback = getCuratedMockPhotos(cleanQuery, page, perPage);
    return {
      ...fallback,
      warning: 'NETWORK_FALLBACK'
    };
  }
}

// Returns query-matched photos formatted from the local database
export function getCuratedMockPhotos(query = 'nature', page = 1, perPage = 12) {
  const { rawPhotos, total, totalPages } = queryCuratedDatabase(query, page, perPage);

  const results = rawPhotos.map((item) => {
    const urlId = item.urlId || 'photo-1503376780353-7e6692767b70';
    const cdnUrl = `https://images.unsplash.com/${urlId}`;

    return normalizePhoto({
      id: item.id,
      title: item.title,
      description: item.description,
      alt_description: item.alt_description,
      width: item.width || 3840,
      height: item.height || 2400,
      likes: item.likes || 1200,
      color: item.color || '#334155',
      urls: {
        thumb: `${cdnUrl}?auto=format&fit=crop&w=200&q=80`,
        small: `${cdnUrl}?auto=format&fit=crop&w=600&q=80`,
        regular: `${cdnUrl}?auto=format&fit=crop&w=1200&q=80`,
        full: `${cdnUrl}?auto=format&fit=crop&w=2400&q=80`
      },
      photographer: {
        name: item.photographer?.name || 'Unsplash Photographer',
        username: item.photographer?.username || 'unsplash',
        avatar: `${cdnUrl}?auto=format&fit=crop&w=120&h=120&q=80`
      },
      links: {
        html: `https://unsplash.com/photos/${urlId}`,
        download: `https://unsplash.com/photos/${urlId}/download`
      }
    }, query);
  });

  return {
    results,
    total,
    totalPages,
    isDemoFallback: true
  };
}
