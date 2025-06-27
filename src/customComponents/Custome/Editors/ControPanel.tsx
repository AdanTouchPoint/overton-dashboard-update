import React from "react";
import TabSystem from "./TabSystem";
import StylesTab from "./StyleTab";
import ContentEditor from "./ContentEditor";
//import SettingsTab from "./settings-tab"
import "./control-panel.css";
import { ContentState } from "../../../lib/contentState";
import DeploySettings from "./DeploySettings";
 type ActiveSection = "mainform" | "privacy" | "questions" | "email" | "ty" | "modal-warning";
interface ControlPanelProps {
  styles: { [key: string]: string };
  updateStyle: (key: string, value: string | number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveForm: (value: string) => void;
  content: ContentState;
  activeSection: string;
  onContentChange: (keys: string[], value: any) => void;
  mode: string;
  modalMessage?: string;
  setModalMessage?: (value: string) => void;
  setActiveSection?: (value: ActiveSection) => void;
  setMode?: (value: string) => void;
}

export default function ControlPanel({
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
}: ControlPanelProps) {
  return (
    <div className="control-panel">
      <TabSystem activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === "styles" && (
          <StylesTab styles={styles} updateStyle={updateStyle} />
        )}
        {activeTab === "content" && (
          <ContentEditor
            mode={mode}
            setActiveForm={setActiveForm}
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
