/**
 * Service pour gérer les opérations de presse-papiers
 */
class ClipboardService {
  /**
   * Copie du texte dans le presse-papiers
   * @param {string} text - Texte à copier
   * @returns {Promise<boolean>} Succès de l'opération
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  }

  /**
   * Vérifie si l'API Clipboard est disponible
   * @returns {boolean} Disponibilité de l'API
   */
  isClipboardSupported() {
    return navigator.clipboard && typeof navigator.clipboard.writeText === 'function';
  }
}

// Export d'une instance singleton
export const clipboardService = new ClipboardService();
