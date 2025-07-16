import React from 'react';
import './delete-modal.css';
import { destroyProject } from '../../../lib/requestsAPI'; // Asegúrate de que la ruta sea correcta
interface DeleteModalProps {
  onClose: () => void; // Función para cerrar el modal
  projectData: any; // Cambia el tipo según tu estructura de datos
  setProjectData: (data: any) => void; // Cambia el tipo según tu estructura de datos
}
export default function DeleteModal({ onClose, projectData, setProjectData }: DeleteModalProps) {
  const handleDelete = async () => {
    try {
      await destroyProject(projectData); // Llama a la función destroyProject
      setProjectData(''); // Actualiza el estado eliminando los datos
      onClose(); // Cierra el modal después de la acción
      window.location.reload(); // Recarga la página para reflejar los cambios
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this project?</p>
        <div className="delete-modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}