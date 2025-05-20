

import React, { useState } from 'react';
import { PenIcon } from 'lucide-react';
import './deploy-settings.css'; // Asegúrate de tener estilos para tus clases
export default function DeploySettings({ content, mode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState(content?.projectData?.homepage || '');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    setErrorMessage('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUrl(content?.projectData?.homepage || '');
  };

  const save = async () => {
    if (!editedUrl) {
      setErrorMessage('La URL no puede estar vacía');
      return;
    }

    setIsLoading(true);
    try {
      // Simular llamada a API
      // Reemplazar con tu lógica real de guardado
      const response = await fetch(`/api/projects/${content.clientId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ homepage: editedUrl }),
      });

      if (!response.ok) throw new Error('Error al guardar');

      // Actualizar el estado local después de guardar exitosamente
      content.projectData.homepage = editedUrl;
      setIsEditing(false);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || 'Algo salió mal al guardar');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="settings-tab">
      <h1>Settings</h1>
      
      <div className="url-section">
        <label>URL:</label>
        
        {isEditing ? (
          <div className="edit-container">
            <input
              type="url"
              value={editedUrl}
              onChange={(e) => setEditedUrl(e.target.value)}
              disabled={isLoading}
            />
            <div className="button-group">
              <button 
                onClick={save} 
                disabled={isLoading}
                className="save-button"
              >
                {isLoading ? 'Guardando...' : 'Guardar'}
              </button>
              <button 
                onClick={handleCancel} 
                disabled={isLoading}
                className="cancel-button"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="display-container">
            <a href={content?.projectData?.homepage} target="_blank" rel="noopener noreferrer">
              {content?.projectData?.homepage}
            </a>
            <button 
              onClick={handleEditClick}
              className="edit-button"
              aria-label="Editar URL"
            >
                <PenIcon />
            </button>
          </div>
        )}
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>

      <p>Client ID: {content?.clientId}</p>
      <button className="delete-button">Delete Project</button>
    </div>
  );
}

