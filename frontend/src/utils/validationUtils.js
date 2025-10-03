/**
 * Utilitaires pour la validation des données
 */

/**
 * Valide une URL
 * @param {string} url - URL à valider
 * @returns {boolean} True si l'URL est valide
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Valide un code court
 * @param {string} shortCode - Code court à valider
 * @returns {boolean} True si le code est valide
 */
export const isValidShortCode = (shortCode) => {
  // Code court doit contenir uniquement des caractères alphanumériques et des tirets
  const regex = /^[a-zA-Z0-9-_]+$/;
  return regex.test(shortCode) && shortCode.length > 0;
};

/**
 * Nettoie et valide une URL
 * @param {string} url - URL à nettoyer
 * @returns {string|null} URL nettoyée ou null si invalide
 */
export const cleanUrl = (url) => {
  const trimmedUrl = url.trim();
  
  if (!trimmedUrl) {
    return null;
  }

  // Ajouter le protocole si manquant
  if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
    return `https://${trimmedUrl}`;
  }

  return trimmedUrl;
};
