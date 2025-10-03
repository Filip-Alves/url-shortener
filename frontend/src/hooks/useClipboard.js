import { useState } from 'react';
import { clipboardService } from '../services/clipboardService.js';
import { MESSAGES } from '../constants/messages.js';

/**
 * Hook personnalisé pour gérer les opérations de presse-papiers
 * @returns {Object} État et fonctions pour gérer le presse-papiers
 */
export const useClipboard = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [error, setError] = useState('');

  /**
   * Copie du texte dans le presse-papiers
   * @param {string} text - Texte à copier
   * @param {string} id - Identifiant pour le feedback visuel
   */
  const copyToClipboard = async (text, id) => {
    try {
      setError('');
      const success = await clipboardService.copyToClipboard(text);
      
      if (success) {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      } else {
        setError(MESSAGES.ERROR.COPYING);
      }
    } catch (err) {
      setError(MESSAGES.ERROR.COPYING);
    }
  };

  /**
   * Vérifie si un élément a été copié récemment
   * @param {string} id - Identifiant à vérifier
   * @returns {boolean} True si l'élément a été copié
   */
  const isCopied = (id) => {
    return copiedId === id;
  };

  /**
   * Réinitialise l'état de copie
   */
  const resetCopyState = () => {
    setCopiedId(null);
  };

  return {
    copiedId,
    error,
    copyToClipboard,
    isCopied,
    resetCopyState,
  };
};
