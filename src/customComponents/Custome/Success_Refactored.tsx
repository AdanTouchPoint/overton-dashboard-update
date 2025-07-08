
import React from 'react';
import { useCampaignFlow } from './context/CampaignFlowContext';

const SuccessRefactored: React.FC = () => {
  const { projectData, setProjectData, setActiveForm } = useCampaignFlow();

  const handleNewCampaign = () => {
    // Resetea el estado para una nueva campaña
    setProjectData(undefined);
    setActiveForm('main');
  };

  return (
    <div className="success-container">
      <h2>¡Campaña Creada con Éxito!</h2>
      <p>Tu campaña "{projectData?.title}" ha sido creada.</p>
      <div>
        <h3>Detalles del Proyecto:</h3>
        <ul>
          <li><strong>ID:</strong> {projectData?.id}</li>
          <li><strong>Nombre (Repo):</strong> {projectData?.repo}</li>
          <li><strong>Tipo:</strong> {projectData?.campaignType}</li>
          <li><strong>URL:</strong> {projectData?.homepage}</li>
        </ul>
      </div>
      <button onClick={handleNewCampaign} className="submit-button">
        Crear Nueva Campaña
      </button>
    </div>
  );
};

export default SuccessRefactored;
