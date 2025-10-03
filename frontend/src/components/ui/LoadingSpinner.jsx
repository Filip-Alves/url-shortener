import React from 'react';

/**
 * Composant LoadingSpinner réutilisable
 * @param {Object} props - Propriétés du spinner
 * @param {string} props.size - Taille du spinner (sm, md, lg)
 * @param {string} props.color - Couleur du spinner
 * @param {string} props.className - Classes CSS supplémentaires
 */
export const LoadingSpinner = ({
  size = 'md',
  color = 'text-blue-600',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  const classes = `animate-spin rounded-full border-b-2 ${sizeClasses[size]} ${color} ${className}`;

  return <div className={classes}></div>;
};
