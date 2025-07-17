

import React, { useState } from 'react';
import './deploy-settings.css'; // Asegúrate de tener estilos para tus clases
import { deleteCampaign, destroyProject } from '../../../lib/requestsAPI'; // Asegúrate de que la ruta sea correcta
import { Radius } from 'lucide-react';
interface DeploySettingsProps {
  content: any; // Cambia el tipo según tu estructura de datos
  setModalMessage?: (value: string) => void; // Opcional, si necesitas un mensaje específico
  setActiveSection?: (value: string) => void; // Opcional, si necesitas cambiar la sección acti
  mode?: string; // Hacer explícitos los valores posibles
  setMode?: (value: string) => void; // Opcional, si necesitas cambiar el modo
}
export default function DeploySettings ({ content,setModalMessage, setActiveSection,mode,setMode }: DeploySettingsProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const totallyCampaignDelete  = async ()  => {
    try {
      setMode('delete');
      setModalMessage('are you sure you want to delete this project?');
      setActiveSection('modal-warning');
    } catch (error) {
      setErrorMessage('An error occurred while deleting the project');
      console.error(error);
    }
  }
const renderDates = () => {
  return (
    <>
      <div className="url-section">
        <label>start date:</label>
        <div className="display-container">
          <input type="date" />
        </div>
      </div>
      <div className="url-section">
        <label>end date:</label>
        <div className="display-container">
          <input type="date" />
        </div>
      </div>
    </>
  );
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
      <div className="url-section">
        <label>Program Campaign:</label>
          <div className="display-container">
            <input type={"radio"} /> Program Dates

          </div>

      </div>
      <button onClick={totallyCampaignDelete} className="delete-button">Pause Project</button>
      <button onClick={totallyCampaignDelete} className="delete-button">Delete Project</button>
    </div>
  );
}

