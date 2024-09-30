
import React, { useReducer, useState, FormEvent } from 'react';
import { initialContentState, ContentState } from '../../lib/contentState';
import { contentReducer, ContentAction } from '../../lib/contentReducer';
import StyleEditor from './StyleEditor';
import ContentEditor from './ContentEditor';
import DynamicLeadInputs from './DynamicLeadInputs';
import { SBprops, ProjectData } from '../interfaces';
import { createCampaign } from '../../lib/createCampaign';
import "./sb.css";
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

  const renderMainFormSection = () => {
    const { mainform } = content;

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
            <DynamicLeadInputs
              projectData={projectData}
              setProjectData={setProjectData}
            />
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
  };

  const renderPrivacySection = () => {
    const { privacy } = content;

    return (
      <section
        style={{
          backgroundColor: styles.backgroundColor,
          width: styles.formWidth,
          padding: styles.formPadding,
          borderRadius: styles.borderRadius,
        }}
      >
        <h3
          style={{
            color: privacy.title.textColor,
            fontSize: privacy.title.fontSize,
          }}
        >
          {privacy.title.text}
        </h3>
        {/* Contenido adicional */}
        <button onClick={() => setActiveSection('questions')}>Next</button>
        <button onClick={() => setActiveSection('mainform')}>Back</button>
      </section>
    );
  };

  const renderQuestionsSection = () => {
    const { questions } = content;

    return (
      <section>
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
      </section>
    );
  };

  const renderEmailSection = () => {
    const { email } = content;

    return (
      <section>
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
        {/* Contenido adicional */}
        <button onClick={() => setActiveSection('ty')}>Next</button>
        <button onClick={() => setActiveSection('questions')}>Back</button>
      </section>
    );
  };

  const renderTYSection = () => {
    const { ty } = content;

    return (
      <section>
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
      </section>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'mainform':
        return renderMainFormSection();
      case 'privacy':
        return renderPrivacySection();
      case 'questions':
        return renderQuestionsSection();
      case 'email':
        return renderEmailSection();
      case 'ty':
        return renderTYSection();
      default:
        return renderMainFormSection();
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
