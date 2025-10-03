import { useState } from 'react';
import { urlService } from '../services/urlService.js';
import { MESSAGES } from '../constants/messages.js';

/**
 * Hook personnalisé pour gérer les statistiques des URLs
 * @returns {Object} État et fonctions pour gérer les statistiques
 */
export const useUrlStats = () => {
  const [stats, setStats] = useState({});
  const [showStats, setShowStats] = useState(null);
  const [error, setError] = useState('');

  /**
   * Charge les statistiques d'une URL
   * @param {string} shortCode - Code court de l'URL
   */
  const fetchStats = async (shortCode) => {
    try {
      setError('');
      const data = await urlService.getUrlStats(shortCode);
      setStats(prev => ({ ...prev, [shortCode]: data }));
      setShowStats(showStats === shortCode ? null : shortCode);
    } catch (err) {
      setError(MESSAGES.ERROR.LOADING_STATS);
    }
  };

  /**
   * Ferme l'affichage des statistiques
   * @param {string} shortCode - Code court de l'URL
   */
  const hideStats = (shortCode) => {
    if (showStats === shortCode) {
      setShowStats(null);
    }
  };

  /**
   * Réinitialise les statistiques affichées
   */
  const resetStats = () => {
    setShowStats(null);
  };

  return {
    stats,
    showStats,
    error,
    fetchStats,
    hideStats,
    resetStats,
  };
};
