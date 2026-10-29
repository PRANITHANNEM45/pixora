/**
 * Unsplash API Service
 * Handles photo search requests, response normalization, and error classification.
 */

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

  return {
    id: item.id,
    title: fallbackTitle,
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
      name: item.user?.name || 'Anonymous Photographer',
      username: item.user?.username || 'photographer',
      avatar: item.user?.profile_image?.medium || item.user?.profile_image?.small || '',
      link: formatUnsplashUrl(item.user?.links?.html)
    },
    links: {
      html: formatUnsplashUrl(item.links?.html),
      download: item.links?.download || item.urls?.full || ''
    }
  };
}

/**
 * Search photos via Unsplash REST API
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

  const accessKey = customApiKey || import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  if (!accessKey || accessKey === 'your_unsplash_access_key_here') {
    const error = new Error('Missing Unsplash API Key');
    error.type = 'MISSING_KEY';
    error.message = 'No Unsplash Access Key was detected in your environment.';
    throw error;
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
      const error = new Error();
      if (response.status === 401) {
        error.type = 'UNAUTHORIZED';
        error.message = 'Invalid Unsplash Access Key. Please verify your credentials.';
      } else if (response.status === 403) {
        error.type = 'RATE_LIMITED';
        error.message = 'Unsplash API rate limit exceeded (50 requests/hour limit for demo apps). Please wait before trying again.';
      } else if (response.status >= 500) {
        error.type = 'SERVER_ERROR';
        error.message = 'Unsplash server error occurred. Please try again shortly.';
      } else {
        error.type = 'HTTP_ERROR';
        error.message = `Unsplash request failed with status code ${response.status}.`;
      }
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
      totalPages: data.total_pages || 0
    };
  } catch (err) {
    if (err.name === 'AbortError') {
      throw err; // Let caller ignore aborts
    }
    if (err.type) {
      throw err; // Already classified
    }
    // Network or parse error
    const networkError = new Error('Network error: Unable to reach the Unsplash API. Check your internet connection.');
    networkError.type = 'NETWORK_ERROR';
    networkError.originalError = err;
    throw networkError;
  }
}

/**
 * Curated Fallback Mock Data for demo / evaluation when API key is not yet configured
 */
export function getCuratedMockPhotos(query = 'nature', page = 1, perPage = 12) {
  const mockDatabase = [
    {
      id: 'mock-1',
      title: 'Majestic mountain peaks during golden hour',
      description: 'Sunlight casting warm light on snow-capped mountain ridge',
      alt_description: 'Snow covered mountain at sunset',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80'
      },
      width: 4000,
      height: 2667,
      likes: 3420,
      color: '#4a5568',
      user: {
        name: 'Benjamin Voros',
        username: 'vorosbenbi',
        profile_image: { medium: 'https://images.unsplash.com/profile-1470404480996-586fe08fe376?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@vorosbenbi' }
      },
      links: {
        html: 'https://unsplash.com/photos/snow-covered-mountain-phS37e8oBiE',
        download: 'https://unsplash.com/photos/phS37e8oBiE/download'
      }
    },
    {
      id: 'mock-2',
      title: 'Futuristic modern architecture with curves',
      description: 'Abstract architectural facade with glass and steel flowing lines',
      alt_description: 'White curved building architectural photography',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=80'
      },
      width: 3840,
      height: 2400,
      likes: 2180,
      color: '#e2e8f0',
      user: {
        name: 'Joel Filipe',
        username: 'joelfilip',
        profile_image: { medium: 'https://images.unsplash.com/profile-1463177740280-9289290faef5?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@joelfilip' }
      },
      links: {
        html: 'https://unsplash.com/photos/white-concrete-building-RF4FDCE6S5k',
        download: 'https://unsplash.com/photos/RF4FDCE6S5k/download'
      }
    },
    {
      id: 'mock-3',
      title: 'Neon futuristic city street at rainy night',
      description: 'Tokyo street reflections with neon signs glowing in the dark',
      alt_description: 'City street illuminated with neon signs during rainy night',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=2400&q=80'
      },
      width: 4200,
      height: 2800,
      likes: 5410,
      color: '#1a102f',
      user: {
        name: 'Aleksandar Pasaric',
        username: 'apasaric',
        profile_image: { medium: 'https://images.unsplash.com/profile-1509204066795-1f74fa5a39cb?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@apasaric' }
      },
      links: {
        html: 'https://unsplash.com/photos/neon-city-street-Tokyo',
        download: 'https://unsplash.com/photos/Tokyo/download'
      }
    },
    {
      id: 'mock-4',
      title: 'Tropical turquoise coastline with coral reef',
      description: 'Aerial view of vibrant sea waters and clean sandy beaches',
      alt_description: 'Aerial photography of turquoise sea near white sand beach',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80'
      },
      width: 3900,
      height: 2600,
      likes: 4120,
      color: '#0ea5e9',
      user: {
        name: 'Sean Oulashin',
        username: 'oulashin',
        profile_image: { medium: 'https://images.unsplash.com/profile-1477439527771-460b135bb02e?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@oulashin' }
      },
      links: {
        html: 'https://unsplash.com/photos/tropical-beach-sea',
        download: 'https://unsplash.com/photos/beach/download'
      }
    },
    {
      id: 'mock-5',
      title: 'Vintage sports car parked in alpine road',
      description: 'Classic automotive photography against mountain scenery',
      alt_description: 'Vintage classic coupe car on open road',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=80'
      },
      width: 3600,
      height: 2400,
      likes: 2900,
      color: '#334155',
      user: {
        name: 'Campbell',
        username: 'campbell',
        profile_image: { medium: 'https://images.unsplash.com/profile-1496660143896-189ca85e51fa?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@campbell' }
      },
      links: {
        html: 'https://unsplash.com/photos/sports-car-road',
        download: 'https://unsplash.com/photos/car/download'
      }
    },
    {
      id: 'mock-6',
      title: 'Foggy pine forest morning stillness',
      description: 'Misty evergreen forest with atmospheric morning haze',
      alt_description: 'Mist rolling through pine trees in dense forest',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80'
      },
      width: 4100,
      height: 2700,
      likes: 3880,
      color: '#15803d',
      user: {
        name: 'Sebastian Unrau',
        username: 'sebastian_unrau',
        profile_image: { medium: 'https://images.unsplash.com/profile-1473950462211-1335b2e9e2fe?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@sebastian_unrau' }
      },
      links: {
        html: 'https://unsplash.com/photos/forest-mist-morning',
        download: 'https://unsplash.com/photos/forest/download'
      }
    },
    {
      id: 'mock-7',
      title: 'Minimalist interior with warm sunlight',
      description: 'Clean architectural interior styling with natural shadows',
      alt_description: 'Minimalist room with wooden furniture and soft morning sun shadow',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80'
      },
      width: 3700,
      height: 2500,
      likes: 1950,
      color: '#fef3c7',
      user: {
        name: 'Jean-Philippe Delberghe',
        username: 'jpholland',
        profile_image: { medium: 'https://images.unsplash.com/profile-1491741761821-4171d1796be5?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@jpholland' }
      },
      links: {
        html: 'https://unsplash.com/photos/minimal-interior-sun',
        download: 'https://unsplash.com/photos/interior/download'
      }
    },
    {
      id: 'mock-8',
      title: 'Cosmic night sky with Andromeda galaxy',
      description: 'Deep space astrophotography revealing stars and nebulas',
      alt_description: 'Night sky filled with millions of stars and galactic dust',
      urls: {
        thumb: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=200&q=80',
        small: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80',
        regular: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
        full: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=2400&q=80'
      },
      width: 4000,
      height: 2600,
      likes: 6730,
      color: '#0f172a',
      user: {
        name: 'Graham Holtshausen',
        username: 'graham_h',
        profile_image: { medium: 'https://images.unsplash.com/profile-1496660143896-189ca85e51fa?auto=format&fit=crop&w=100&q=80' },
        links: { html: 'https://unsplash.com/@graham_h' }
      },
      links: {
        html: 'https://unsplash.com/photos/galaxy-milkyway-stars',
        download: 'https://unsplash.com/photos/stars/download'
      }
    }
  ];

  const normalized = mockDatabase.map((item) => normalizePhoto(item, query));
  return {
    results: normalized,
    total: mockDatabase.length,
    totalPages: Math.ceil(mockDatabase.length / perPage),
    isDemoFallback: true
  };
}
