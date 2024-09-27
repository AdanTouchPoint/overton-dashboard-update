import React, { FormEvent, useState } from "react";
const baseClass = "after-dashboard";
import { createCampaign } from "../../lib/createCampaign";
import { SBprops, ProjectData, QuestionInputs } from "../interfaces";
import DynamicQuestions from "./DynamicQuestions";
import DynamicLeadInputs from "./DynamicLeadInputs";
import "./sb.css";
import StyleEditor from "./StyleEditor";
import ContentEditor from "./ContentEditor";
const SubmissionBuilderForm: React.FC<SBprops> = ({
  projectData,
  setProjectData,
  hideSB,
  setHideSuccess,
  setErr,
  err,
  setHideAP,
  setHideSB,
  setHidePD,
  setHideMainForm,
}) => {
  const [showMainSection, setShowMainSection] = useState(true);
  const [showQuestionsSection, setShowQuestionsSection] = useState(false);
  const [showPrivacySection, setShowPrivacySection] = useState(false);
  const [showEmailSection, setShowEmailSection] = useState(false);
  const [showTYSection, setShowTYSection] = useState(false);
  const [styles, setStyles] = useState({
    backgroundColor: '#2c3e50',
    inputBackground: '#34495e',
    buttonColor: '#e74c3c',
    linkColor: '#3498db',
    fontFamily: 'Arial, sans-serif',
    formWidth: '400px',
    formPadding: '30px',
    borderRadius: '10px',
  });
  const [content,setContent] = useState({
    title: {
      text: 'xxx',
      textColor:'#ffffff',
      fontSize: '16px',
    },
    instructions: {
      text: 'xxx',
      textColor:'#ffffff',
      fontSize: '16px',
    },
    tac:  {
      text: 'xxx',
      textColor:'#ffffff',
      fontSize: '16px',
    },
    button:'sss' //color
  })
  const handleStyleChange = (key: string, value: string) => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [key]: value
    }));
  };
  const handleContentChange = (key: string, value: string) => {
    setContent(prevContent => ({
      ...prevContent,
      [key]: value
    }));
  };
  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const info: ProjectData = {
      ...projectData,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    };
    return setProjectData(info);
  };
  const click = async () => {
    const data = await createCampaign(
      projectData,
      setErr,
      setHideSB,
      setHideAP,
      setHidePD,
      setProjectData
    );
    if (data === true) {
      setHideSuccess(false);
    }
  };
  const renderMainFormSection = () => {
    return (
      <div
        className="activism-platform-container"
        style={{
          fontFamily: styles.fontFamily,
        }}
      >
        <div className="contentEditor-container">
          <ContentEditor content={content} onContentChange={handleContentChange}/>
        </div>
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
            <h1 className="form-title">{content.title.text}</h1>
            <p className="form-description">
            {content.instructions.text}
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
                  //checked={formData.termsAccepted}
                  onChange={handleOnChange}
                  required
                />
                <span style={{ color: styles.linkColor }}>
                  {content.tac.text}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="submit-button"
              style={{
                backgroundColor: styles.buttonColor,
                color: content.button,
              }}
            >
              {content.button}
            </button>
          </div>
          <button
            onClick={() =>
              handleClicks(setShowMainSection, setShowPrivacySection)
            }
          >
            Next
          </button>
          <button onClick={() => handleClicks(setHideMainForm, setHideSB)}>
            Back
          </button>
        </div>
      </div>
    );
  };
  const renderPrivacySection = () => {
    return (
      <section>
        <h3>privacy page</h3>
        <div>
          title
          <input name="pptitle" onChange={handleOnChange} type="text"></input>
        </div>
        <button
          onClick={() =>
            handleClicks(setShowPrivacySection, setShowEmailSection)
          }
        >
          Next
        </button>
        <button
          onClick={() =>
            handleClicks(setShowPrivacySection, setShowMainSection)
          }
        >
          Back
        </button>
      </section>
    );
  };
  const renderQuestionsSection = () => {
    return (
      <section>
        <h3>questions page</h3>
        <div>
          title
          <input name="qptitle" onChange={handleOnChange} type="text"></input>
        </div>
        <div>
          instructions
          <input
            name="qpinstructions"
            onChange={handleOnChange}
            type="text"
          ></input>
        </div>
        <DynamicQuestions
          projectData={projectData}
          setProjectData={setProjectData}
        />
        <button
          onClick={() =>
            handleClicks(setShowQuestionsSection, setShowEmailSection)
          }
        >
          Next
        </button>
        <button
          onClick={() =>
            handleClicks(setShowQuestionsSection, setShowPrivacySection)
          }
        >
          Back
        </button>
      </section>
    );
  };
  const renderEmailSection = () => {
    return (
      <div>
        <h3>reviewEmail page</h3>
        <div>
          title
          <input name="reptitle" onChange={handleOnChange} type="text"></input>
        </div>
        <div>
          instructions
          <input
            name="repinstructions"
            onChange={handleOnChange}
            type="text"
          ></input>
        </div>
        <button
          onClick={() => handleClicks(setShowEmailSection, setShowTYSection)}
        >
          Next
        </button>
        <button
          onClick={() =>
            handleClicks(setShowEmailSection, setShowQuestionsSection)
          }
        >
          Back
        </button>
      </div>
    );
  };
  const renderTYSection = () => {
    return (
      <div>
        <h3>ThankYou Page</h3>
        <div>
          title
          <input name="typtitle" onChange={handleOnChange} type="text"></input>
        </div>
        <div>
          description
          <input
            name="typdescription"
            onChange={handleOnChange}
            type="text"
          ></input>
        </div>
        <div>
          instructions
          <input
            name="typinstructions"
            onChange={handleOnChange}
            type="text"
          ></input>
        </div>
        <button
          onClick={() => handleClicks(setShowTYSection, setShowEmailSection)}
        >
          Back
        </button>
      </div>
    );
  };
  const handleClicks = (set1, set2) => {
    set1(false);
    set2(true);
  };
  console.log(projectData);
  console.log(styles)
  console.log(content)
  return (
    <div hidden={hideSB} className={"main-flex-container"}>

          <div className="styleEditor-container">
          <StyleEditor styles={styles} onStyleChange={handleStyleChange} />
          </div>

          <div className="pageView-container">
          {showMainSection && renderMainFormSection()}
          {showPrivacySection && renderPrivacySection()}
          {showQuestionsSection && renderQuestionsSection()}
          {showEmailSection && renderEmailSection()}
          {showTYSection && renderTYSection()}
          </div>
          {/*<button onClick={click}>Create</button>*/}
    </div> 
  );
};

export default SubmissionBuilderForm;
