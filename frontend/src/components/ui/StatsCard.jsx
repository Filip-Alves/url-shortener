import React from 'react';

/**
 * Composant StatsCard pour afficher les statistiques
 * @param {Object} props - Propriétés de la carte de statistiques
 * @param {string} props.title - Titre de la statistique
 * @param {string|number} props.value - Valeur de la statistique
 * @param {string} props.color - Couleur du thème (blue, green, purple)
 * @param {string} props.className - Classes CSS supplémentaires
 */
export const StatsCard = ({
  title,
  value,
  color = 'blue',
  className = '',
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      title: 'text-blue-800',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      title: 'text-green-800',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      title: 'text-purple-800',
    },
  };

  const config = colorClasses[color];
  const baseClasses = `rounded-lg p-4 ${config.bg}`;
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes}>
      <div className={`text-2xl font-bold ${config.text}`}>
        {value}
      </div>
      <div className={`text-sm ${config.title}`}>
        {title}
      </div>
    </div>
  );
};
