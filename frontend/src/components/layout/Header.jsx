import React from 'react';
import { Link } from 'lucide-react';

/**
 * Composant Header pour l'en-tête de l'application
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Link className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              URL Shortener
            </h1>
            <p className="text-gray-600">
              Raccourcissez vos liens en un clic
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
