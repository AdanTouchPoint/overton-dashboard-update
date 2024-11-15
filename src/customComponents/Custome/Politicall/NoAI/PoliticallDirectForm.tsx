
import React, { useReducer, useState, useEffect } from 'react';
import StyleEditor from '../../Editors/StyleEditor';
import ContentEditor from '../../Editors/ContentEditor';
import { PDprops, ProjectData } from '../../../interfaces';
import "../../sb.css";
import { renderMainFormSection } from '../../components base/MainFormSection';
import { renderEmailSection } from '../../components base/EmailFormSection';
import { renderEmailReviewSection} from '../../components base/EmailReviewSection'
import { renderTYSection } from '../../components base/TYSection';
import { initialContentStatePD, ContentStatePD } from '../../../../lib/contentStatePD';
import { contentReducerPD, ContentActionPD } from '../../../../lib/contentReducerPD';
type ActiveSection = 'mainform' | 'emailform' | 'emailreview' | 'ty';

const PoliticallDirectForm: React.FC<PDprops> = ({ projectData, setActiveForm
}) => {
  const [content, dispatchContent] = useReducer<React.Reducer<ContentStatePD, ContentActionPD>>(contentReducerPD, initialContentStatePD);
  const [styles, setStyles] = useState({
    backgroundColor: '#2c3e50',
    inputBackground: '#34495e',
    fontFamily: 'Arial, sans-serif',
    formWidth: '400px',
    formPadding: '30px',
    borderRadius: '10px',
  });
  const [flexDirect,setFlexDirec] = useState<string>()
  const [activeSection, setActiveSection] = useState<ActiveSection>('mainform');
  const handleContentChange = (keys: string[], value: any) => {
    dispatchContent({
      type: 'UPDATE_CONTENT',
      payload: { keys, value },
    });
  };
  const handleStyleChange = (key: string, value: string) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [key]: value,
    }));
  };
  const responsiveViews = (size,setState) => {
    if(size === '1200px') return setState('row')
    if(size ==='800px' || size === '400px') return setState('column')
  }
  useEffect(() => {
  const flexD = responsiveViews(styles.formWidth, setFlexDirec)
  return flexD
  }, [styles]);

  useEffect(() => {
  const path=['projectData']
  handleContentChange(path,projectData)
},[projectData])
  const renderSection = () => {
    switch (activeSection) {
      case 'mainform':
        return renderMainFormSection(content,styles,setActiveSection,flexDirect);
      case 'emailform':
        return renderEmailSection(content,styles,setActiveSection);
      case 'emailreview':
        return renderEmailReviewSection(content,styles,setActiveSection);
      case 'ty':
        return renderTYSection(content,styles,setActiveSection);
      default:
        return renderMainFormSection(content,styles,setActiveSection,flexDirect);
    }
  };

  return (
    <div className="main-flex-container">
      <div className="style-editor-container">
        <StyleEditor styles={styles} onStyleChange={handleStyleChange} />
      </div>
      <div className="content-editor-container">
        <ContentEditor
          setActiveForm={setActiveForm}
          content={content}
          activeSection={activeSection}
          onContentChange={handleContentChange}
        />
      </div>
      <div className="preview-container">{renderSection()}</div>
    </div>
  )
};

export default PoliticallDirectForm;