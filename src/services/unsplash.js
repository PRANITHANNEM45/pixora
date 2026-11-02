/**
 * Unsplash API Service
 * Handles photo search requests, response normalization, and error classification.
 * Connects to live Unsplash REST API when credentials are provided,
 * and uses an intelligent query-matched photo engine for query-relevant photos.
 */

import { queryCuratedDatabase } from './photoDatabase';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const UTM_PARAMS = 'utm_source=pixelhunt&utm_medium=referral';

/**
 * Appends Unsplash attribution UTM parameters to links
 */
export function formatUnsplashUrl(url) {
  if (!url) return '';
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${UTM_PARAMS}`;
}

/**
 * Normalizes Unsplash photo response object into clean application data model
 */
export function normalizePhoto(item, query = 'photo') {
  const fallbackTitle = item.alt_description
    ? item.alt_description.charAt(0).toUpperCase() + item.alt_description.slice(1)
    : item.description
    ? item.description.charAt(0).toUpperCase() + item.description.slice(1)
    : `Photograph of ${query}`;

  const photographerName = item.user?.name || item.photographer?.name || 'Anonymous Photographer';
  const photographerUsername = item.user?.username || item.photographer?.username || 'photographer';
  const photographerAvatar = item.user?.profile_image?.medium ||
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
    altDescription: item.alt_description || item.description || `Unsplash photograph: ${fallbackTitle}`,
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

/**
 * Resolves current active access key from parameters, localStorage, or environment
 */
export function getActiveAccessKey(customApiKey) {
  if (customApiKey && customApiKey.trim()) {
    return customApiKey.trim();
  }
  if (typeof window !== 'undefined') {
    const localKey = window.localStorage.getItem('unsplash_access_key');
    if (localKey && localKey.trim()) {
      return localKey.trim();
    }
  }
  const envKey = import.meta.env?.VITE_UNSPLASH_ACCESS_KEY;
  if (envKey && envKey !== 'your_unsplash_access_key_here') {
    return envKey.trim();
  }
  return null;
}

/**
 * Search photos via Unsplash REST API or query-matched photographic engine
 * @param {Object} options
 * @param {string} options.query - Search query
 * @param {number} options.page - Current page number (1-indexed)
 * @param {number} options.perPage - Number of items per page (default: 12)
 * @param {AbortSignal} [options.signal] - AbortController signal
 * @param {string} [options.customApiKey] - Optional dynamic API key override
 */
export async function searchPhotos({
  query,
  page = 1,
  perPage = 12,
  signal,
  customApiKey
}) {
  const trimmedQuery = query ? query.trim() : '';
  if (!trimmedQuery) {
    return { results: [], total: 0, totalPages: 0 };
  }

  const accessKey = getActiveAccessKey(customApiKey);

  // If no API key is provided, use the query-matched curated photo engine directly
  if (!accessKey) {
    return getCuratedMockPhotos(trimmedQuery, page, perPage);
  }

  const endpoint = new URL(`${UNSPLASH_BASE_URL}/search/photos`);
  endpoint.searchParams.append('query', trimmedQuery);
  endpoint.searchParams.append('page', String(page));
  endpoint.searchParams.append('per_page', String(perPage));

  try {
    const response = await fetch(endpoint.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        'Accept-Version': 'v1'
      },
      signal
    });

    if (!response.ok) {
      // If unauthorized or rate-limited on live API, fallback to curated matching engine gracefully
      if (response.status === 401 || response.status === 403) {
        const fallbackData = getCuratedMockPhotos(trimmedQuery, page, perPage);
        return {
          ...fallbackData,
          warning: response.status === 403 ? 'RATE_LIMITED' : 'UNAUTHORIZED'
        };
      }

      const error = new Error(`Unsplash request failed with status code ${response.status}.`);
      error.type = response.status >= 500 ? 'SERVER_ERROR' : 'HTTP_ERROR';
      error.status = response.status;
      throw error;
    }

    const data = await response.json();

    const normalizedResults = (data.results || []).map((photo) =>
      normalizePhoto(photo, trimmedQuery)
    );

    return {
      results: normalizedResults,
      total: data.total || 0,
      totalPages: data.total_pages || 0,
      isLiveApi: true
    };
  } catch (err) {
    if (err.name === 'AbortError') {
      throw err;
    }
    // Network error: provide relevant curated photos as resilient fallback
    if (err.type === 'NETWORK_ERROR' || !err.status) {
      const fallbackData = getCuratedMockPhotos(trimmedQuery, page, perPage);
      return {
        ...fallbackData,
        warning: 'NETWORK_FALLBACK'
      };
    }
    throw err;
  }
}

/**
 * Returns authentic, high-resolution Unsplash photographs specifically matching the search query
 */
export function getCuratedMockPhotos(query = 'nature', page = 1, perPage = 12) {
  const { rawPhotos, total, totalPages } = queryCuratedDatabase(query, page, perPage);

  const normalized = rawPhotos.map((item) => {
    const urlId = item.urlId || 'photo-1503376780353-7e6692767b70';
    const baseUrl = `https://images.unsplash.com/${urlId}`;

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
        thumb: `${baseUrl}?auto=format&fit=crop&w=200&q=80`,
        small: `${baseUrl}?auto=format&fit=crop&w=600&q=80`,
        regular: `${baseUrl}?auto=format&fit=crop&w=1200&q=80`,
        full: `${baseUrl}?auto=format&fit=crop&w=2400&q=80`
      },
      photographer: {
        name: item.photographer?.name || 'Unsplash Creator',
        username: item.photographer?.username || 'unsplash',
        avatar: `${baseUrl}?auto=format&fit=crop&w=120&h=120&q=80`
      },
      links: {
        html: `https://unsplash.com/photos/${urlId}`,
        download: `https://unsplash.com/photos/${urlId}/download`
      }
    }, query);
  });

  return {
    results: normalized,
    total,
    totalPages,
    isDemoFallback: true
  };
}
