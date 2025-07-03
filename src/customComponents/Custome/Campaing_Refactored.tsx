
import React from 'react';
import { DefaultTemplate } from 'payload/components/templates';
import { CampaignFlowProvider, useCampaignFlow } from './context/CampaignFlowContext';
import MainFormRefactored from "./MainForm_Refactored"; // Asumimos que crearemos este
import SubmissionBuilderForm from "./SubmissionBuilder/NoAI/SubmissionBuilderForm_Refactored";
import PoliticallDirectForm from "./Politicall/NoAI/PoliticallDirectForm_Refactored";
import AlertthePressForm from "./AlertthePress/NoAI/AlertthePressForm_Refactored";
import SuccessRefactored from "./Success_Refactored"; // Asumimos que crearemos este
import { Button } from "payload/components/elements";
import './campaignList.css'
import { useAuth } from "payload/components/utilities";

// El componente que renderiza el contenido basado en el contexto
const CampaignFlowView: React.FC = () => {
  const { activeForm, projectData, error, setError, setActiveForm, setProjectData } = useCampaignFlow();
const baseClass = "after-dashboard";
const user = useAuth();
const userId = user.user.id;
  const closeModal = () => {
    setError(null);
  }

  const renderErrorModal = () => (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Error</h2>
        <p>{error}</p>
        <Button onClick={closeModal} className="close-button">Cerrar</Button>
      </div>
    </div>
  );

  return (
    <div className={baseClass}>
      {activeForm === 'main' && <MainFormRefactored userId={userId} />}
      {activeForm === 'SB' && (
          <SubmissionBuilderForm
            mode="create"
            projectData={projectData}
            setActiveForm={setActiveForm} // Algunas props aún pueden ser necesarias temporalmente
            activeForm={activeForm}
            setProjectData={setProjectData}
            userId={userId} // Pasamos el userId al formulario
          />
        )}
      {activeForm === 'PD' && (
        <PoliticallDirectForm
            mode="create"
            projectData={projectData}
            setActiveForm={setActiveForm} // Algunas props aún pueden ser necesarias temporalmente
            activeForm={activeForm}
            setProjectData={setProjectData}
            userId={userId}
        />
      )}
      {activeForm === 'AP' && (
        <AlertthePressForm
            mode="create"
            projectData={projectData}
            setActiveForm={setActiveForm} // Algunas props aún pueden ser necesarias temporalmente
            activeForm={activeForm}
            setProjectData={setProjectData}
            userId={userId}
        />
      )}
      {activeForm === 'success' && <SuccessRefactored />}
      {error && renderErrorModal()}
    </div>
  );
}

// El componente principal que envuelve todo en el proveedor
const CampaingRefactored: React.FC = () => {
  return (
    <DefaultTemplate>
      <CampaignFlowProvider>
        <CampaignFlowView />
      </CampaignFlowProvider>
    </DefaultTemplate>
  );
};

export default CampaingRefactored;
