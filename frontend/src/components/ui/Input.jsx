import React from 'react';

/**
 * Composant Input réutilisable
 * @param {Object} props - Propriétés de l'input
 * @param {string} props.type - Type de l'input
 * @param {string} props.placeholder - Placeholder
 * @param {string} props.value - Valeur
 * @param {Function} props.onChange - Fonction de changement
 * @param {boolean} props.required - Champ requis
 * @param {boolean} props.disabled - État désactivé
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {Object} props...rest - Autres propriétés
 */
export const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
  ...rest
}) => {
  const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const classes = `${baseClasses} ${disabledClasses} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={classes}
      {...rest}
    />
  );
};
