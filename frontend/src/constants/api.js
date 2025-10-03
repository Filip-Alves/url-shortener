/**
 * Constantes pour les endpoints de l'API
 */
export const API_ENDPOINTS = {
  SHORTEN: '/shorten',
  SHORTEN_BY_CODE: (code) => `/shorten/${code}`,
  SHORTEN_STATS: (code) => `/shorten/${code}/stats`,
  REDIRECT: (code) => `/shorten/r/${code}`,
};

/**
 * Configuration de l'API
 */
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};
