
import React from "react";
import TabSystem from "./TabSystem";
import StylesTab from "./StyleTab";
import ContentEditorRefactored from "./ContentEditor_Refactored"; // Usamos el refactorizado
import DeploySettings from "./DeploySettings";
import "./control-panel.css";
import { styleProps } from "../../../lib/contentState"; // Asegúrate de que este tipo esté definido correctamente
type ActiveSection = "mainform" | "privacy" | "questions" | "email" | "ty" | "modal-warning" | "emailreview";
interface ControlPanelProps {
  styles: styleProps;
  updateStyle: (key: string, value: string | number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveForm: (value: string) => void;
  content: any; // Debería ser un tipo más específico, pero lo dejamos flexible
  activeSection: string;
  onContentChange: (keys: string[], value: any) => void;
  mode: string;
  modalMessage?: string;
  setModalMessage?: (value: string) => void;
  setActiveSection?: (value: ActiveSection) => void;
  setMode?: (value: string) => void;
  // NUEVA PROP:
  availableSections: string[];
}

export default function ControlPanelRefactored({
  mode,
  setMode,
  styles,
  updateStyle,
  activeTab,
  setActiveTab,
  setActiveForm,
  content,
  activeSection,
  onContentChange,
  setActiveSection,
  setModalMessage,
  availableSections, // Recibimos la nueva prop
}: ControlPanelProps) {
  return (
    <div className="control-panel">
      <TabSystem activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* NAVEGACIÓN DE SECCIONES - AHORA ES DINÁMICA */}
      {activeTab === 'content' && (
        <div className="section-navigation">
          <h4>Sections</h4>
          {availableSections.map(sectionId => (
            <button 
              key={sectionId}
              className={`section-nav-button ${activeSection === sectionId ? 'active' : ''}`}
              onClick={() => setActiveSection(sectionId as ActiveSection)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="tab-content">
        {activeTab === "styles" && (
          <StylesTab styles={styles} updateStyle={updateStyle} />
        )}
        {activeTab === "content" && (
          <ContentEditorRefactored
            content={content}
            activeSection={activeSection}
            onContentChange={onContentChange}
          />
        )}
        {activeTab === "settings" && (
          <DeploySettings
            content={content}
            setModalMessage={setModalMessage}
            setActiveSection={setActiveSection}
            mode={"delete"}
            setMode={setMode}
          />
        )}
      </div>
 
    </div>
  );
}
