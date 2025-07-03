
import React, { useReducer, useState, useEffect } from "react";
import { SBprops } from "../../../interfaces";
import "../../Editors/preview-panel.css";
import { renderMainFormSection } from "../../components base/MainFormSection";
import { renderPrivacySection } from "../../components base/PrivacySection";
import { renderQuestionsSection } from "../../components base/QuestionsSection";
import { renderEmailSection } from "../../components base/EmailFormSection";
import { renderTYSection } from "../../components base/TYSection";
import ModalWarning from '../../Editors/ModalWarning';
import { initialContentStateSB, ContentState } from "../../../../lib/contentState";
import { genericContentReducer, GenericAction } from "../../../../lib/genericContentReducer"; // IMPORTAMOS EL GENÉRICO
import Header from "../../Editors/Header_Refactored";
import ControlPanelRefactored from "../../Editors/ControlPanel_Refactored";
import "../../Editors/editorBaseView.css";
export interface styleProps {
  [key: string]: string;
  backgroundColor: string;
  formWidth: string;
  // ...other style properties
}
type ActiveSection = "mainform" | "privacy" | "questions" | "email" | "ty" | "modal-warning" | "emailreview";

const SubmissionBuilderFormRefactored: React.FC<SBprops> = ({
  setActiveView,
  mode,
  campaignEditData,
  projectData,
  setActiveForm,
  setProjectData,
  setMode,
  userId
}) => {
  const [modalMessage, setModalMessage] = useState<string>("");
  const [activeTab, setActiveTab] = useState("styles");
  const [flexDirect, setFlexDirect] = useState<string>();
  const [activeSection, setActiveSection] = useState<ActiveSection>("mainform");

  // --- Gestión de Estado Refactorizada ---
  const [content, dispatchContent] = useReducer<
    React.Reducer<ContentState, GenericAction>
  >(genericContentReducer, initialContentStateSB);

  // --- Inicialización Correcta ---
  useEffect(() => {
    if (mode === 'edit' && campaignEditData) {
      // Fusión profunda para asegurar que todos los campos tengan valor
      const mergedState = {
        ...initialContentStateSB,
        ...campaignEditData,
        projectData: {
          ...initialContentStateSB.projectData,
          ...(campaignEditData.projectData || {}),
        },
        style: {
          ...initialContentStateSB.style,
          ...(campaignEditData.style || {}),
        },
        mainform: {
          ...initialContentStateSB.mainform,
          ...(campaignEditData.mainform || {}),
        },
        privacy: {
            ...initialContentStateSB.privacy,
            ...(campaignEditData.privacy || {}),
        },
        questions: {
            ...initialContentStateSB.questions,
            ...(campaignEditData.questions || {}),
        },
        email: {
            ...initialContentStateSB.email,
            ...(campaignEditData.email || {}),
        },
        ty: {
            ...initialContentStateSB.ty,
            ...(campaignEditData.ty || {}),
        },
      };
      dispatchContent({ type: 'RESET_STATE', payload: mergedState });
    } else if (mode === 'create') {
      dispatchContent({ type: 'UPDATE_CONTENT', payload: { keys: ['projectData'], value: projectData } });
      dispatchContent({ type: 'UPDATE_CONTENT', payload: { keys: ['clientId'], value: userId } });
    }
  }, [mode, campaignEditData, projectData]);

  // --- Manejadores de Cambio ---
  const handleContentChange = (keys: string[], value: any) => {
    dispatchContent({
      type: "UPDATE_CONTENT",
      payload: { keys, value },
    });
  };

  const handleStyleChange = (key: string, value: string) => {
    dispatchContent({
      type: "UPDATE_STYLE",
      payload: { key, value },
    });
  };

  const availableSections = ["mainform", "privacy", "questions", "email", "ty"];

  const renderSection = () => {
    // Ahora pasamos content.style en lugar del estado local 'styles'
    const styles = content.style;
    switch (activeSection) {
      case "mainform":
        return renderMainFormSection(content, styles, setActiveSection, flexDirect);
      case "privacy":
        return renderPrivacySection(content, styles, setActiveSection);
      case "questions":
        return renderQuestionsSection(content, styles, setActiveSection);
      case "email":
        return renderEmailSection(content, styles, setActiveSection);
      case "ty":
        return renderTYSection(content, styles, setActiveSection);
      default:
        return renderMainFormSection(content, styles, setActiveSection, flexDirect);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        setActiveSection={setActiveSection}
        setActiveView={setActiveView}
        content={content}
        mode={mode}
        setActiveForm={setActiveForm}
        setModalMessage={setModalMessage}
        modalMessage={modalMessage}
      />
      <div className="main-flex-container" style={{ flexGrow: 1 }}>
        {activeSection === "modal-warning" && (
          <ModalWarning
            setActiveForm={setActiveForm}
            mode={mode}
            onClose={() => setActiveSection("mainform")}
            projectData={projectData}
            setProjectData={setProjectData}
            modalMessage={modalMessage}
          />
        )}
        <ControlPanelRefactored
          setMode={setMode}
          mode={mode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          styles={content.style }
          updateStyle={handleStyleChange}
          setActiveForm={setActiveForm}
          content={content}
          activeSection={activeSection}
          onContentChange={handleContentChange}
          modalMessage={modalMessage}
          setActiveSection={setActiveSection}
          setModalMessage={setModalMessage}
          availableSections={availableSections}
        />
        <div className="preview-panel">
          <div className="preview-header">
            <h2>Vista Previa</h2>
          </div>
          <div className="preview-container">
            <div className="activism-platform-container">
              <div className="activism-form-container">
                <div
                  className="activism-form"
                  style={{
                    flexDirection: flexDirect === "row" ? "row" : "column",
                    display: flexDirect === "row" ? "block" : "flex",
                    backgroundColor: content.style.backgroundColor,
                    width: content.style.formWidth,
                  }}
                >
                  {renderSection()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionBuilderFormRefactored;
