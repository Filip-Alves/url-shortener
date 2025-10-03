import { API_ENDPOINTS, API_CONFIG } from '../constants/api.js';

/**
 * Service pour gérer les opérations liées aux URLs raccourcies
 */
class UrlService {
  /**
   * Effectue une requête HTTP avec gestion d'erreur
   * @param {string} url - URL de la requête
   * @param {Object} options - Options de la requête
   * @returns {Promise<Object>} Réponse de l'API
   */
  async makeRequest(url, options = {}) {
    const config = {
      headers: API_CONFIG.HEADERS,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  /**
   * Récupère toutes les URLs raccourcies
   * @returns {Promise<Array>} Liste des URLs
   */
  async getAllUrls() {
    return this.makeRequest(API_ENDPOINTS.SHORTEN);
  }

  /**
   * Crée une nouvelle URL raccourcie
   * @param {string} url - URL à raccourcir
   * @returns {Promise<Object>} URL raccourcie créée
   */
  async createShortUrl(url) {
    return this.makeRequest(API_ENDPOINTS.SHORTEN, {
      method: 'POST',
      body: JSON.stringify({ url }),
    });
  }

  /**
   * Met à jour une URL raccourcie
   * @param {string} shortCode - Code court de l'URL
   * @param {string} newUrl - Nouvelle URL
   * @returns {Promise<Object>} URL mise à jour
   */
  async updateUrl(shortCode, newUrl) {
    return this.makeRequest(API_ENDPOINTS.SHORTEN_BY_CODE(shortCode), {
      method: 'PUT',
      body: JSON.stringify({ url: newUrl }),
    });
  }

  /**
   * Supprime une URL raccourcie
   * @param {string} shortCode - Code court de l'URL
   * @returns {Promise<void>}
   */
  async deleteUrl(shortCode) {
    return this.makeRequest(API_ENDPOINTS.SHORTEN_BY_CODE(shortCode), {
      method: 'DELETE',
    });
  }

  /**
   * Récupère les statistiques d'une URL
   * @param {string} shortCode - Code court de l'URL
   * @returns {Promise<Object>} Statistiques de l'URL
   */
  async getUrlStats(shortCode) {
    return this.makeRequest(API_ENDPOINTS.SHORTEN_STATS(shortCode));
  }

  /**
   * Génère l'URL complète de redirection
   * @param {string} shortCode - Code court de l'URL
   * @returns {string} URL complète
   */
  getRedirectUrl(shortCode) {
    return `${window.location.origin}${API_ENDPOINTS.REDIRECT(shortCode)}`;
  }
}

// Export d'une instance singleton
export const urlService = new UrlService();
