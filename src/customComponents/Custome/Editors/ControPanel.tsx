import React from "react";
import TabSystem from "./TabSystem";
import StylesTab from "./StyleTab";
import ContentEditor from "./ContentEditor";
//import SettingsTab from "./settings-tab"
import "./control-panel.css";
import { ContentState } from "../../../lib/contentState";

interface ControlPanelProps {
  styles: { [key: string]: string };
  updateStyle: (key: string, value: string | number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveForm: (value: string) => void;
  content: ContentState;
  activeSection: string;
  onContentChange: (keys: string[], value: any) => void;
}

export default function ControlPanel({
  styles,
  updateStyle,
  activeTab,
  setActiveTab,
  setActiveForm,
  content,
  activeSection,
  onContentChange,
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
            setActiveForm={setActiveForm}
            content={content}
            activeSection={activeSection}
            onContentChange={onContentChange}
          />
        )}
      </div>
    </div>
  );
}
