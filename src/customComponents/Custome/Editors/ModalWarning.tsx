import React from 'react';
import './modal-warning.css'; // Asegúrate de tener un archivo CSS para los estilos del modal
interface ModalWarningProps {
  setActiveForm: (value: string) => void;
  onClose: () => void; // Nuevo prop para cerrar el modal
  mode?: "edit" | "create"; // Hacer explícitos los valores posibles
}

const ModalWarning: React.FC<ModalWarningProps> = ({ setActiveForm, mode, onClose }) => {
  const handleProceed = () => {
    if (mode === "edit") {
      setActiveForm("all");
    } else if (mode === "create") {
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