import React from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

/**
 * Composant Alert réutilisable
 * @param {Object} props - Propriétés de l'alerte
 * @param {string} props.type - Type d'alerte (error, success, warning, info)
 * @param {string} props.message - Message à afficher
 * @param {boolean} props.dismissible - Peut être fermée
 * @param {Function} props.onDismiss - Fonction de fermeture
 * @param {string} props.className - Classes CSS supplémentaires
 */
export const Alert = ({
  type = 'info',
  message,
  dismissible = false,
  onDismiss,
  className = '',
}) => {
  const typeConfig = {
    error: {
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      iconColor: 'text-red-600',
      icon: AlertCircle,
    },
    success: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
      icon: CheckCircle,
    },
    warning: {
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-600',
      icon: AlertCircle,
    },
    info: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600',
      icon: Info,
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  const baseClasses = `p-4 border rounded-lg flex items-center space-x-2 ${config.bgColor} ${config.borderColor}`;
  const classes = `${baseClasses} ${className}`;

  return (
    <div className={classes}>
      <Icon className={`h-5 w-5 ${config.iconColor}`} />
      <span className={`flex-1 ${config.textColor}`}>{message}</span>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className={`${config.textColor} hover:opacity-75 transition-opacity`}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
