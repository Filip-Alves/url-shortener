import { useState, useEffect } from 'react';
import { urlService } from '../services/urlService.js';
import { MESSAGES } from '../constants/messages.js';

/**
 * Hook personnalisé pour gérer les URLs raccourcies
 * @returns {Object} État et fonctions pour gérer les URLs
 */
export const useUrls = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Charge toutes les URLs
   */
  const fetchUrls = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await urlService.getAllUrls();
      setUrls(data);
    } catch (err) {
      setError(MESSAGES.ERROR.LOADING_URLS);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Crée une nouvelle URL raccourcie
   * @param {string} url - URL à raccourcir
   * @returns {Promise<boolean>} Succès de l'opération
   */
  const createUrl = async (url) => {
    try {
      setLoading(true);
      setError('');
      const newUrl = await urlService.createShortUrl(url);
      setUrls(prev => [newUrl, ...prev]);
      return true;
    } catch (err) {
      setError(MESSAGES.ERROR.CREATING_URL);
      return false;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Met à jour une URL existante
   * @param {string} shortCode - Code court de l'URL
   * @param {string} newUrl - Nouvelle URL
   * @returns {Promise<boolean>} Succès de l'opération
   */
  const updateUrl = async (shortCode, newUrl) => {
    try {
      setError('');
      const updatedUrl = await urlService.updateUrl(shortCode, newUrl);
      setUrls(prev => 
        prev.map(url => url.shortCode === shortCode ? updatedUrl : url)
      );
      return true;
    } catch (err) {
      setError(MESSAGES.ERROR.UPDATING_URL);
      return false;
    }
  };

  /**
   * Supprime une URL
   * @param {string} shortCode - Code court de l'URL
   * @returns {Promise<boolean>} Succès de l'opération
   */
  const deleteUrl = async (shortCode) => {
    try {
      setError('');
      await urlService.deleteUrl(shortCode);
      setUrls(prev => prev.filter(url => url.shortCode !== shortCode));
      return true;
    } catch (err) {
      setError(MESSAGES.ERROR.DELETING_URL);
      return false;
    }
  };

  // Charger les URLs au montage du composant
  useEffect(() => {
    fetchUrls();
  }, []);

  return {
    urls,
    loading,
    error,
    createUrl,
    updateUrl,
    deleteUrl,
    fetchUrls,
  };
};
