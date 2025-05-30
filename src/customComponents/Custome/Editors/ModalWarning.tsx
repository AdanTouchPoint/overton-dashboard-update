import React from 'react';
import './modal-warning.css'; // Asegúrate de tener un archivo CSS para los estilos del modal
import { deleteCampaign } from '../../../lib/requestsAPI'; // Asegúrate de que esta función esté correctamente importada
interface ModalWarningProps {
  setActiveForm: (value: string) => void;
  onClose: () => void; // Nuevo prop para cerrar el modal
  mode?: "edit" | "create"; // Hacer explícitos los valores posibles
  projectData?: any; // Cambia el tipo según tu estructura de datos
  setProjectData: (data: any) => void; // Cambia el tipo según tu estructura de datos
}

const ModalWarning: React.FC<ModalWarningProps> = ({ setActiveForm, mode, onClose,projectData,setProjectData }) => {
  const handleProceed = () => {
    if (mode === "edit") {
      setActiveForm("all");
    } else if (mode === "create") {
      const deletedData = deleteCampaign(projectData); // Llama a la función deleteCampaign
      setProjectData(''); // Actualiza el estado eliminando los datos
      setActiveForm("main");
     
    }
    onClose(); // Cierra el modal después de la acción
  };

  return (
    <div className="modal-div">
      <div className="modal-content">
        <h2>Warning</h2>
        <p>This is a warning modal.</p>
        <p>Are you sure you want to proceed?</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button> {/* Cierra el modal */}
          <button onClick={handleProceed}>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default ModalWarning;