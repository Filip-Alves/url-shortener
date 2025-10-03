import React from 'react';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

/**
 * Composant Layout principal pour la structure de l'application
 * @param {Object} props - Propriétés du layout
 * @param {React.ReactNode} props.children - Contenu à afficher
 */
export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};
