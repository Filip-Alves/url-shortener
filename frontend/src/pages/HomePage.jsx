import React from 'react';
import { Layout } from '../components/layout/index.js';
import { CreateUrlForm, UrlList } from '../components/pages/index.js';
import { Alert } from '../components/ui/index.js';
import { useUrls } from '../hooks/useUrls.js';
import { useUrlStats } from '../hooks/useUrlStats.js';
import { useClipboard } from '../hooks/useClipboard.js';
import { useUrlForm } from '../hooks/useUrlForm.js';

/**
 * Page principale de l'application
 */
export const HomePage = () => {
  // Hooks pour la gestion des URLs
  const {
    urls,
    loading,
    error: urlsError,
    createUrl,
    updateUrl,
    deleteUrl,
  } = useUrls();

  // Hooks pour les statistiques
  const {
    stats,
    showStats,
    error: statsError,
    fetchStats,
  } = useUrlStats();

  // Hooks pour le presse-papiers
  const {
    error: clipboardError,
    copyToClipboard,
    isCopied,
  } = useClipboard();

  // Hooks pour les formulaires
  const {
    newUrl,
    setNewUrl,
    editingUrl,
    editData,
    resetCreateForm,
    startEditing,
    cancelEditing,
    updateEditData,
    isEditing,
  } = useUrlForm();

  // Gestion des erreurs
  const error = urlsError || statsError || clipboardError;

  // Handlers
  const handleCreateUrl = async (e) => {
    const success = await createUrl(newUrl);
    if (success) {
      resetCreateForm();
    }
  };

  const handleUpdateUrl = async () => {
    const success = await updateUrl(editingUrl, editData.originalUrl);
    if (success) {
      cancelEditing();
    }
  };

  const handleDeleteUrl = async (shortCode) => {
    await deleteUrl(shortCode);
  };

  const handleCopyUrl = async (url, shortCode) => {
    await copyToClipboard(url, shortCode);
  };

  return (
    <Layout>
      {/* Error Message */}
      {error && (
        <div className="mb-6">
          <Alert type="error" message={error} />
        </div>
      )}

      {/* Create URL Form */}
      <CreateUrlForm
        newUrl={newUrl}
        setNewUrl={setNewUrl}
        onSubmit={handleCreateUrl}
        loading={loading}
      />

      {/* URLs List */}
      <UrlList
        urls={urls}
        stats={stats}
        showStats={showStats}
        isEditing={isEditing}
        editData={editData}
        onEdit={startEditing}
        onUpdate={handleUpdateUrl}
        onCancelEdit={cancelEditing}
        onUpdateEditData={updateEditData}
        onDelete={handleDeleteUrl}
        onShowStats={fetchStats}
        onCopy={handleCopyUrl}
        isCopied={isCopied}
      />
    </Layout>
  );
};
