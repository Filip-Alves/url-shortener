import React from 'react';
import { Link } from 'lucide-react';
import { UrlCard } from './UrlCard.jsx';

/**
 * Composant pour afficher la liste des URLs raccourcies
 * @param {Object} props - Propriétés du composant
 * @param {Array} props.urls - Liste des URLs
 * @param {Object} props.stats - Statistiques des URLs
 * @param {string} props.showStats - Code de l'URL dont on affiche les stats
 * @param {Function} props.isEditing - Fonction pour vérifier si une URL est en édition
 * @param {Object} props.editData - Données d'édition
 * @param {Function} props.onEdit - Fonction d'édition
 * @param {Function} props.onUpdate - Fonction de mise à jour
 * @param {Function} props.onCancelEdit - Fonction d'annulation d'édition
 * @param {Function} props.onUpdateEditData - Fonction de mise à jour des données d'édition
 * @param {Function} props.onDelete - Fonction de suppression
 * @param {Function} props.onShowStats - Fonction d'affichage des statistiques
 * @param {Function} props.onCopy - Fonction de copie
 * @param {Function} props.isCopied - Fonction pour vérifier si une URL est copiée
 */
export const UrlList = ({
  urls,
  stats,
  showStats,
  isEditing,
  editData,
  onEdit,
  onUpdate,
  onCancelEdit,
  onUpdateEditData,
  onDelete,
  onShowStats,
  onCopy,
  isCopied,
}) => {
  if (urls.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
        <Link className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Aucun lien raccourci
        </h3>
        <p className="text-gray-600">
          Commencez par créer votre premier lien raccourci ci-dessus
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">
        Liens raccourcis
      </h2>
      {urls.map((url) => (
        <UrlCard
          key={url.shortCode}
          url={url}
          stats={stats[url.shortCode]}
          showStats={showStats === url.shortCode}
          isEditing={isEditing(url.shortCode)}
          editData={editData}
          onEdit={onEdit}
          onUpdate={onUpdate}
          onCancelEdit={onCancelEdit}
          onUpdateEditData={onUpdateEditData}
          onDelete={onDelete}
          onShowStats={onShowStats}
          onCopy={onCopy}
          isCopied={isCopied(url.shortCode)}
        />
      ))}
    </div>
  );
};
