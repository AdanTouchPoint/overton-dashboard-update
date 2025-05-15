
import React, { useReducer, useState, useEffect } from 'react';
import { SBprops, ProjectData } from '../../../interfaces';
import "../../Editors/preview-panel.css";
import { renderMainFormSection } from '../../components base/MainFormSection';
import { renderPrivacySection } from '../../components base/PrivacySection';
import { renderQuestionsSection } from '../../components base/QuestionsSection';
import { renderEmailSection } from '../../components base/EmailFormSection';
import { renderTYSection } from '../../components base/TYSection';
import { initialContentStateSB, ContentState } from '../../../../lib/contentState';
import { contentReducer, ContentAction } from '../../../../lib/contentReducer';
import Header from '../../Editors/Header';
import ControlPanel from '../../Editors/ControPanel';
type ActiveSection = 'mainform' | 'privacy' | 'questions' | 'email' | 'ty';

const SubmissionBuilderForm: React.FC<SBprops> = ({ mode, campaignEditData,projectData, setActiveForm
}) => {
  const [activeTab, setActiveTab] = useState("styles")
  const [content, dispatchContent] = useReducer<React.Reducer<ContentState, ContentAction>>(contentReducer, initialContentStateSB);
  const [styles, setStyles] = useState({
    formWidth:  '600px',
    backgroundColor:  '#2c3e50',
    textColor:  '#34495e',
    labelColor: '#34495e',
    inputBackground:  '#FFFFFF',
    linkColor: '#2980b9',
    inputTextColor:  '#34495e',
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

  const setEditData = (mode, campaignEditData, projectData,styles) => {
  if (mode === 'edit' && campaignEditData) {
    const {style, mainform, email, privacy, questions, ty} = campaignEditData
    const projectDataPath=['projectData']
    handleContentChange(projectDataPath,projectData)
    setStyles(style)
    const stylePath = ['style']
    handleContentChange(stylePath,style)
    const matinformPath=['mainform']
    handleContentChange(matinformPath,mainform)
    const emailPath= ['email']
    handleContentChange(emailPath,email)
    const privacyPath = ['privacy']
    handleContentChange(privacyPath,privacy)
    const questionsPath = ['questions']
    handleContentChange(questionsPath,questions)
    const tyPath = ['ty']
    handleContentChange(tyPath,ty)
    console.log("completed edit")
  }
  if(mode === 'create') {
    const flexD = responsiveViews(styles.formWidth, setFlexDirect)
    const style = ['style']
    handleContentChange(style,styles)
    const projectDataPath=['projectData']
    handleContentChange(projectDataPath,projectData)
    console.log("completed create")
  }
}
 useEffect(() => { 
  setEditData(mode, campaignEditData, projectData,styles)
}, [campaignEditData,projectData]);

useEffect(() => {
      const style = ['style']
    handleContentChange(style,styles)
},[styles])
 /* useEffect(() => {
  const flexD = responsiveViews(styles.formWidth, setFlexDirect)
  const path = ['style']
  handleContentChange(path,styles)
  return flexD
  }, [styles]);
  useEffect(() => {
  const path=['projectData']
  handleContentChange(path,projectData)
},[projectData]) */
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
    console.log('content',content)
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
      mode={mode}
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
      <div className="activism-platform-container">
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            flexDirection: flexDirect === 'row' ? 'row' : 'column',
            display: flexDirect === 'row' ? 'block' : 'flex',
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            
          }}
        >
           {renderSection()}
        </div>
      </div>
    </div>
        {/*< styles={styles} emailContent={emailContent}>*/}
       
      </div>
    </div>
    </div>
    </>
  )
};

export default SubmissionBuilderForm;

