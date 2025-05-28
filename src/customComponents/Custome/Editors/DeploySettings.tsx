

import React, { useState } from 'react';
import './deploy-settings.css'; // Asegúrate de tener estilos para tus clases
import { deleteCampaign, destroyProject } from '../../../lib/requestsAPI'; // Asegúrate de que la ruta sea correcta
export default function DeploySettings ({ content, mode })  {
  const [errorMessage, setErrorMessage] = useState('');
  const totallyCampaignDelete  = async ()  => {
    try {
      const projectData = content?.projectData;
      const response = await destroyProject(projectData);
      if (response.status === 200) {
        // Aquí puedes manejar la respuesta si es necesario
        console.log('Project deleted successfully');
      } else {
        setErrorMessage('Failed to delete project');
      }
    } catch (error) {
      setErrorMessage('An error occurred while deleting the project');
      console.error(error);
    }
  }
  return (
    <div className="settings-tab">
      <h1>Settings</h1>
      <div className="url-section">
        <label>URL:</label>
          <div className="display-container">
            <a href={content?.projectData?.homepage} target="_blank" rel="noopener noreferrer">
              {content?.projectData?.homepage}
            </a>
          </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
      <button className="delete-button">Delete Project</button>
    </div>
  );
}

