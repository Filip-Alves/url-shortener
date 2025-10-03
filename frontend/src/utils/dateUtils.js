/**
 * Utilitaires pour la gestion des dates
 */

/**
 * Formate une date selon le format français
 * @param {string|Date} dateString - Date à formater
 * @returns {string} Date formatée
 */
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Vérifie si une date a été modifiée après sa création
 * @param {string|Date} createdAt - Date de création
 * @param {string|Date} updatedAt - Date de modification
 * @returns {boolean} True si la date a été modifiée
 */
export const hasBeenModified = (createdAt, updatedAt) => {
  return new Date(updatedAt).getTime() !== new Date(createdAt).getTime();
};
