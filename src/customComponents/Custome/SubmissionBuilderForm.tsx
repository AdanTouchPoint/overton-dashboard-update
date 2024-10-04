
import React, { useReducer, useState, FormEvent,useEffect } from 'react';
import { initialContentState, ContentState } from '../../lib/contentState';
import { contentReducer, ContentAction } from '../../lib/contentReducer';
import StyleEditor from './StyleEditor';
import ContentEditor from './ContentEditor';
import DynamicLeadInputs from './DynamicLeadInputs';
import { SBprops, ProjectData } from '../interfaces';
import { createCampaign } from '../../lib/createCampaign';
import "./sb.css";
import { renderMainFormSection } from './SubmissionBuilder/NoAI/MainFormSection';
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

  /*const renderMainFormSection = () => {
    const { mainform } = content;
    const inputs = mainform?.mainFormInputs || [] 
    return (
      <div
        className="activism-platform-container"
        style={{
          fontFamily: styles.fontFamily,
        }}
      >
        <div className="activism-form-container">
          <div
            className="activism-form"
            style={{
              backgroundColor: styles.backgroundColor,
              width: styles.formWidth,
              padding: styles.formPadding,
              borderRadius: styles.borderRadius,
            }}
          >
            <h1
              style={{
                color: mainform.title.textColor,
                fontSize: mainform.title.fontSize,
              }}
              className="form-title"
            >
              {mainform.title.text}
            </h1>
            <p
              style={{
                color: mainform.instructions.textColor,
                fontSize: mainform.instructions.fontSize,
              }}
              className="form-description"
            >
              {mainform.instructions.text}
            </p>
             <div className='dynamic-inputs' style={{flexDirection: flexDirect}}>
             {
                inputs.length > 0 ? inputs.map((element,index)=>{
                return(  
                <div key={index} className="form-group checkbox-group">
                  <label>
                    <span
                      style={{
                        color: mainform.tac.textColor,
                        fontSize: mainform.tac.fontSize,
                      }}
                    >
                      {element}
                      <input
                      type="text"
                      name={element}
                      disabled
                    />
                    </span>
                  </label>
                </div>
                )
                }) : null
              }
             </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  onChange={handleOnChange}
                  required
                />
                <span
                  style={{
                    color: mainform.tac.textColor,
                    fontSize: mainform.tac.fontSize,
                  }}
                >
                  {mainform.tac.text}
                </span>
              </label>
            </div>
            <button
              type="button"
              className="submit-button"
              style={{
                backgroundColor: mainform.button,
              }}
              onClick={() => setActiveSection('privacy')}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  };*/

  const renderPrivacySection = () => {
    const { privacy } = content;
    //const data = privacy?.privacyOptions
    return (
      <div
      className="activism-platform-container"
      style={{
        fontFamily: styles.fontFamily,
      }}
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            padding: styles.formPadding,
            borderRadius: styles.borderRadius,
          }}
        ><h3 
        className="form-title"
        style={{
          color: privacy.title.textColor,
          fontSize: privacy.title.fontSize,
        }}
      >
        {privacy.title.text}
      </h3>
        <div className='activism-form' >
        <label> Public</label>
        <h5 style={{
        color: privacy.privacyOptions.public.textColor,
        fontSize: privacy.privacyOptions.public.fontSize,
      }}>{privacy.privacyOptions.public.text}</h5>
        <label> Confidential</label>
        <h5 style={{
        color: privacy.privacyOptions.confidential.textColor,
        fontSize: privacy.privacyOptions.confidential.fontSize,
      }}>{privacy.privacyOptions.confidential.text}</h5>
        <label> NameWithHeld</label>
        <h5 style={{
        color: privacy.privacyOptions.nameWithHeld.textColor,
        fontSize: privacy.privacyOptions.nameWithHeld.fontSize,
      }}>{privacy.privacyOptions.nameWithHeld.text}</h5>
        </div>
      {/* Contenido adicional */}
      <button className="submit-button" onClick={() => setActiveSection('mainform')}>Back</button>
      <button className="submit-button" onClick={() => setActiveSection('questions')}>Next</button>
        </div>
      </div>
    </div>
    );
  };

  const renderQuestionsSection = () => {
    const { questions } = content;

    return (
      <div
      className="activism-platform-container"
      style={{
        fontFamily: styles.fontFamily,
      }}
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            padding: styles.formPadding,
            borderRadius: styles.borderRadius,
          }}
        >
        <h3
          style={{
            color: questions.title.textColor,
            fontSize: questions.title.fontSize,
          }}
        >
          {questions.title.text}
        </h3>
        <p
          style={{
            color: questions.instructions.textColor,
            fontSize: questions.instructions.fontSize,
          }}
        >
          {questions.instructions.text}
        </p>
        {/* Componente DynamicQuestions o contenido adicional */}
        <button onClick={() => setActiveSection('email')}>Next</button>
        <button onClick={() => setActiveSection('privacy')}>Back</button>
  
        </div>
      </div>
    </div>
    );
  };

  const renderEmailSection = () => {
    const { email } = content;

    return (
      <div
      className="activism-platform-container"
      style={{
        fontFamily: styles.fontFamily,
      }}
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            padding: styles.formPadding,
            borderRadius: styles.borderRadius,
          }}
        >
        <h3
          style={{
            color: email.title.textColor,
            fontSize: email.title.fontSize,
          }}
        >
          {email.title.text}
        </h3>
        <p
          style={{
            color: email.instructions.textColor,
            fontSize: email.instructions.fontSize,
          }}
        >
          {email.instructions.text}
        </p>
        <textarea style={{resize: 'none'}} disabled rows="10" cols="50">Email ... </textarea>
        {/* Contenido adicional */}
        <button onClick={() => setActiveSection('questions')}>Back</button>
        <button onClick={() => setActiveSection('ty')}>Next</button>
        </div>
      </div>
    </div>
    );
  };

  const renderTYSection = () => {
    const { ty } = content;

    return (
      <div
      className="activism-platform-container"
      style={{
        fontFamily: styles.fontFamily,
      }}
    >
      <div className="activism-form-container">
        <div
          className="activism-form"
          style={{
            backgroundColor: styles.backgroundColor,
            width: styles.formWidth,
            padding: styles.formPadding,
            borderRadius: styles.borderRadius,
          }}
        >
        <h3
          style={{
            color: ty.title.textColor,
            fontSize: ty.title.fontSize,
          }}
        >
          {ty.title.text}
        </h3>
        <p
          style={{
            color: ty.description.textColor,
            fontSize: ty.description.fontSize,
          }}
        >
          {ty.description.text}
        </p>
        <p
          style={{
            color: ty.instructions.textColor,
            fontSize: ty.instructions.fontSize,
          }}
        >
          {ty.instructions.text}
        </p>
        {/* Contenido adicional */}
        <button onClick={() => setActiveSection('email')}>Back</button>
        </div>
      </div>
    </div>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'mainform':
        return renderMainFormSection(content,styles,setActiveSection,flexDirect);
      case 'privacy':
        return renderPrivacySection();
      case 'questions':
        return renderQuestionsSection();
      case 'email':
        return renderEmailSection();
      case 'ty':
        return renderTYSection();
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

