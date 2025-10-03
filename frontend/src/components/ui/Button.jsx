import React from 'react';

/**
 * Composant Button réutilisable
 * @param {Object} props - Propriétés du bouton
 * @param {string} props.variant - Variante du bouton (primary, secondary, danger, success)
 * @param {string} props.size - Taille du bouton (sm, md, lg)
 * @param {boolean} props.disabled - État désactivé
 * @param {boolean} props.loading - État de chargement
 * @param {React.ReactNode} props.children - Contenu du bouton
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {Function} props.onClick - Fonction de clic
 * @param {Object} props...rest - Autres propriétés
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  className = '',
  onClick,
  ...rest
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all focus:ring-2 focus:ring-offset-2 outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
      )}
      {children}
    </button>
  );
};
