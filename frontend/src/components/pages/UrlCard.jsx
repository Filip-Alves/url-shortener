import React from 'react';
import {
  ExternalLink,
  Copy,
  Trash2,
  Edit3,
  BarChart3,
  Check,
} from 'lucide-react';
import { Button, Input, StatsCard } from '../ui/index.js';
import { formatDate, hasBeenModified } from '../../utils/dateUtils.js';
import { urlService } from '../../services/urlService.js';

/**
 * Composant pour afficher une carte d'URL raccourcie
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.url - Données de l'URL
 * @param {Object} props.stats - Statistiques de l'URL
 * @param {boolean} props.showStats - Afficher les statistiques
 * @param {boolean} props.isEditing - URL en cours d'édition
 * @param {Object} props.editData - Données d'édition
 * @param {Function} props.onEdit - Fonction d'édition
 * @param {Function} props.onUpdate - Fonction de mise à jour
 * @param {Function} props.onCancelEdit - Fonction d'annulation d'édition
 * @param {Function} props.onUpdateEditData - Fonction de mise à jour des données d'édition
 * @param {Function} props.onDelete - Fonction de suppression
 * @param {Function} props.onShowStats - Fonction d'affichage des statistiques
 * @param {Function} props.onCopy - Fonction de copie
 * @param {boolean} props.isCopied - État de copie
 */
export const UrlCard = ({
  url,
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
  const redirectUrl = urlService.getRedirectUrl(url.shortCode);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* URL Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {url.url}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Court:</span>
                <a
                  href={redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-mono text-sm flex items-center space-x-1"
                >
                  <span>/shorten/r/{url.shortCode}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Créé:</span>
                <span className="text-sm text-gray-700">
                  {formatDate(url.createdAt)}
                </span>
              </div>
              {hasBeenModified(url.createdAt, url.updatedAt) && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Modifié:</span>
                  <span className="text-sm text-gray-700">
                    {formatDate(url.updatedAt)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => onShowStats(url.shortCode)}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              title="Statistiques"
            >
              <BarChart3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => onEdit(url)}
              className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
              title="Modifier"
            >
              <Edit3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => onDelete(url.shortCode)}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              title="Supprimer"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Input
                type="url"
                value={editData.originalUrl}
                onChange={(e) => onUpdateEditData('originalUrl', e.target.value)}
                placeholder={MESSAGES.PLACEHOLDERS.ORIGINAL_URL}
                className="flex-1"
              />
              <Input
                type="text"
                value={editData.shortCode}
                onChange={(e) => onUpdateEditData('shortCode', e.target.value)}
                placeholder={MESSAGES.PLACEHOLDERS.SHORT_CODE}
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="success" onClick={onUpdate}>
                Sauvegarder
              </Button>
              <Button variant="secondary" onClick={onCancelEdit}>
                Annuler
              </Button>
            </div>
          </div>
        )}

        {/* Stats */}
        {showStats && (
          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatsCard
                title="Clics totaux"
                value={stats?.accessCount || 0}
                color="blue"
              />
              <StatsCard
                title="Visiteurs uniques"
                value={stats?.uniqueVisitors || 0}
                color="green"
              />
              <StatsCard
                title="Dernier accès"
                value={stats?.lastAccessed ? formatDate(stats.lastAccessed) : 'Jamais'}
                color="purple"
              />
            </div>
          </div>
        )}

        {/* Copy Button */}
        <div className="flex justify-end mt-4">
          <Button
            variant="secondary"
            onClick={() => onCopy(redirectUrl, url.shortCode)}
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-green-600">Copié!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copier le lien</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
