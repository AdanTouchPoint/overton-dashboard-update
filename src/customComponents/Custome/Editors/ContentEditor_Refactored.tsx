
import React from 'react';
import { ContentState } from "../../../lib/contentState";
import GenericSectionEditor from './GenericSectionEditor';
import MainFormEditor from './MainFormEditor';
import QuestionsEditor from './QuestionsEditor';
import "./contentEditor.css";

interface ContentEditorProps {
  content: ContentState;
  activeSection: string;
  onContentChange: (keys: string[], value: any) => void;
}

const ContentEditorRefactored: React.FC<ContentEditorProps> = ({
  content,
  activeSection,
  onContentChange,
}) => {

  const renderActiveEditor = () => {
    const sectionContent = content[activeSection];

    if (!sectionContent) {
      return <p>No hay contenido disponible para esta sección.</p>;
    }

    switch (activeSection) {
      case 'mainform':
        return <MainFormEditor content={sectionContent} onContentChange={onContentChange} />;
      case 'questions':
        return <QuestionsEditor content={sectionContent} onContentChange={onContentChange} />;
      // Para todas las demás secciones, usamos el editor genérico
      default:
        return <GenericSectionEditor content={sectionContent} onContentChange={onContentChange} parentKeys={[activeSection]} />;
    }
  }

  return (
    <div className="content-panel">
      <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
      {renderActiveEditor()}
    </div>
  );
};

export default ContentEditorRefactored;
