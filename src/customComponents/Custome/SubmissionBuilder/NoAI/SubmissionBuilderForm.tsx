
import React, { useReducer, useState, FormEvent,useEffect } from 'react';
import { initialContentState, ContentState } from '../../../../lib/contentState';
import { contentReducer, ContentAction } from '../../../../lib/contentReducer';
import StyleEditor from '../../Editors/StyleEditor';
import ContentEditor from '../../Editors/ContentEditor';
import DynamicLeadInputs from '../../DynamicLeadInputs';
import { SBprops, ProjectData } from '../../../interfaces';
import { createCampaign } from '../../../../lib/createCampaign';
import "../../sb.css";
import { renderMainFormSection } from './MainFormSection';
import { renderPrivacySection } from './PrivacySection';
import { renderQuestionsSection } from './QuestionsSection';
import { renderEmailSection } from './EmailSection';
import { renderTYSection } from './TYSection';
type ActiveSection = 'mainform' | 'privacy' | 'questions' | 'email' | 'ty';
const SubmissionBuilderForm: React.FC<SBprops> = ({
  projectData,
  setProjectData,
  setErr,
  setActiveForm
}) => {
  const [styles, setStyles] = useState({
    backgroundColor: '#2c3e50',
    inputBackground: '#34495e',
    fontFamily: 'Arial, sans-serif',
    formWidth: '400px',
    formPadding: '30px',
    borderRadius: '10px',
  });
  const [flexDirect,setFlexDirec] = useState<string>()
  const responsiveViews = (size,setState) => {
    if(size === '1200px') return setState('row')
    if(size ==='800px' || size === '400px') return setState('column')
  }
  useEffect(() => {
  const flexD = responsiveViews(styles.formWidth, setFlexDirec)
  return flexD
  }, [styles]);
  const [activeSection, setActiveSection] = useState<ActiveSection>('mainform');
  const [content, dispatchContent] = useReducer<
    React.Reducer<ContentState, ContentAction>
  >(contentReducer, initialContentState);

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

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const click = async () => {
    try {
      const data = await createCampaign(
        projectData,
        setErr,
        setProjectData
      );
      if (data === true) {
        setActiveForm('success');
      }
    } catch (error: any) {
      console.error('Error creating campaign:', error);
      setErr(error.message || 'An error occurred');
    }
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'mainform':
        return renderMainFormSection(content,styles,setActiveSection,flexDirect);
      case 'privacy':
        return renderPrivacySection(content,styles,setActiveSection);
      case 'questions':
        return renderQuestionsSection(content,styles,setActiveSection);
      case 'email':
        return renderEmailSection(content,styles,setActiveSection);
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
          content={content}
          activeSection={activeSection}
          onContentChange={handleContentChange}
        />
      </div>
      <div className="preview-container">{renderSection()}</div>
    </div>
  )
};

export default SubmissionBuilderForm;

