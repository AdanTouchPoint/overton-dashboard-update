

import React, { useState } from 'react';
import { PenIcon } from 'lucide-react';
import './deploy-settings.css'; // Asegúrate de tener estilos para tus clases
import { updateProjectURL } from '../../../lib/requestsAPI'; // Asegúrate de que la ruta sea correcta
export default function DeploySettings({ content, mode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState(content?.projectData?.homepage || '');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
          </div>
        ) : (
          <div className="display-container">
            <a href={content?.projectData?.homepage} target="_blank" rel="noopener noreferrer">
              {content?.projectData?.homepage}
            </a>
          </div>
        )}
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      <button className="delete-button">Delete Project</button>
    </div>
  );
}

