import React from 'react';
import './pause-modal.css'; // Asegúrate de tener estilos para tus clases
import { updateCampaignData } from '../../../lib/requestsAPI';
import { AppWindow } from 'lucide-react';
interface PauseModalProps {
  onClose: () => void; // Función para cerrar el modal
  projectData: any; // Cambia el tipo según tu estructura de datos
  setProjectData: (data: any) => void; // Cambia el tipo según tu estructura de datos
}
const PauseModal = ({ onClose, projectData, setProjectData }) => {
const status = projectData.status || "active"; // Asegúrate de que status esté definido
  const handleContinue = async () => {
    // Lógica para pausar la campaña
    if(status === 'paused') {
      projectData.status = 'active'; // Cambia el estado a activo si ya estaba en pausa
    } else {
      projectData.status = 'paused'; // Actualiza el estado de la campaña
    }
   const payload = await updateCampaignData({projectData});
    console.log("Payload after pause/resume:", payload.data.docs[0]);    
    onClose();
  };

  return (
    <div className="pause-modal">
      <div className="pause-modal-content">
{        status === 'paused' ? (
          <h2>Resume Campaign</h2>
        ) : (
          <h2>Pause Campaign</h2>
        )}
        <p>Are you sure you want to {status === 'paused' ? 'resume' : 'pause'} the campaign "{projectData.title}"?</p>
        <div className="pause-modal-buttons">
          <button onClick={handleContinue}>Yes, {status === 'paused' ? 'Resume' : 'Pause'}</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PauseModal;
