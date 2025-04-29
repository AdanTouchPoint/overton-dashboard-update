
import React, { useReducer, useState, useEffect } from 'react';
import StyleEditor from '../../Editors/StyleTab';
import ContentEditor from '../../Editors/ContentEditor';
import { SBprops, ProjectData } from '../../../interfaces';
import "../../Editors/preview-panel.css";
import { renderMainFormSection } from './MainFormSection';
import { renderPrivacySection } from '../../components base/PrivacySection';
import { renderQuestionsSection } from '../../components base/QuestionsSection';
import { renderEmailSection } from './EmailSection';
import { renderTYSection } from './TYSection';
import { initialContentStateSB, ContentState } from '../../../../lib/contentState';
import { contentReducer, ContentAction } from '../../../../lib/contentReducer';
import Header from '../../Editors/Header';
import ControlPanel from '../../Editors/ControPanel';
type ActiveSection = 'mainform' | 'privacy' | 'questions' | 'email' | 'ty';

const SubmissionBuilderForm: React.FC<SBprops> = ({ projectData, setActiveForm
}) => {
  const [activeTab, setActiveTab] = useState("styles")
  const [content, dispatchContent] = useReducer<React.Reducer<ContentState, ContentAction>>(contentReducer, initialContentStateSB);
  const [styles, setStyles] = useState({
    formWidth: '400px',
    backgroundColor: '#2c3e50',
    textColor: '#34495e',
    labelColor: '#34495e',
    inputBackground: '#FFFFFF',
    linkColor: '#2980b9',
    inputTextColor: '#34495e',
    buttonColor: '',
    buttonTextColor: '',
    buttonBColor: '',
    buttonBTextColor: '',
  });
  const [flexDirect,setFlexDirect] = useState<string>()
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
  const flexD = responsiveViews(styles.formWidth, setFlexDirect)
  const path = ['style']
  handleContentChange(path,styles)
  return flexD
  }, [styles]);
  useEffect(() => {
  const path=['projectData']
  handleContentChange(path,projectData)
},[projectData])
/*  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
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
  };*/
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
    <>
    <Header/>
    <div className="main-flex-container">
     <ControlPanel 
       activeTab={activeTab}
       setActiveTab={setActiveTab}
        styles={styles} 
        updateStyle={handleStyleChange}
        setActiveForm= {setActiveForm}
        content={content}
        activeSection={activeSection}
        onContentChange={handleContentChange}/>
      <div className="preview-panel">
      <div className="preview-header">
        <h2>Vista Previa</h2>
      </div>
      <div className="preview-container">
        {/*< styles={styles} emailContent={emailContent}>*/}
        {renderSection()}
      </div>
    </div>
    </div>
    </>
  )
};

export default SubmissionBuilderForm;

