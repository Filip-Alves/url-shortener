import { useState } from 'react';

/**
 * Hook personnalisé pour gérer les formulaires d'URL
 * @returns {Object} État et fonctions pour gérer les formulaires
 */
export const useUrlForm = () => {
  const [newUrl, setNewUrl] = useState('');
  const [editingUrl, setEditingUrl] = useState(null);
  const [editData, setEditData] = useState({ originalUrl: '', shortCode: '' });

  /**
   * Réinitialise le formulaire de création
   */
  const resetCreateForm = () => {
    setNewUrl('');
  };

  /**
   * Initialise le formulaire d'édition
   * @param {Object} url - URL à éditer
   */
  const startEditing = (url) => {
    setEditingUrl(url.shortCode);
    setEditData({
      originalUrl: url.url,
      shortCode: url.shortCode,
    });
  };

  /**
   * Annule l'édition
   */
  const cancelEditing = () => {
    setEditingUrl(null);
    setEditData({ originalUrl: '', shortCode: '' });
  };

  /**
   * Met à jour les données d'édition
   * @param {string} field - Champ à mettre à jour
   * @param {string} value - Nouvelle valeur
   */
  const updateEditData = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Vérifie si une URL est en cours d'édition
   * @param {string} shortCode - Code court à vérifier
   * @returns {boolean} True si l'URL est en cours d'édition
   */
  const isEditing = (shortCode) => {
    return editingUrl === shortCode;
  };

  return {
    newUrl,
    setNewUrl,
    editingUrl,
    editData,
    resetCreateForm,
    startEditing,
    cancelEditing,
    updateEditData,
    isEditing,
  };
};
