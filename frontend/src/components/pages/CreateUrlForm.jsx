import React from 'react';
import { Link } from 'lucide-react';
import { Button, Input } from '../ui/index.js';
import { MESSAGES } from '../../constants/messages.js';

/**
 * Composant pour le formulaire de création d'URL raccourcie
 * @param {Object} props - Propriétés du composant
 * @param {string} props.newUrl - URL à raccourcir
 * @param {Function} props.setNewUrl - Fonction pour mettre à jour l'URL
 * @param {Function} props.onSubmit - Fonction de soumission
 * @param {boolean} props.loading - État de chargement
 */
export const CreateUrlForm = ({
  newUrl,
  setNewUrl,
  onSubmit,
  loading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUrl.trim()) return;
    onSubmit(e);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Créer un lien raccourci
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder={MESSAGES.PLACEHOLDERS.URL_INPUT}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading || !newUrl.trim()}
          loading={loading}
        >
          <Link className="h-5 w-5" />
          <span>Raccourcir</span>
        </Button>
      </form>
    </div>
  );
};
