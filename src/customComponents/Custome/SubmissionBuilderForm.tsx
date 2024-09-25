import React, { FormEvent, useState } from "react";
const baseClass = "after-dashboard";
import { createCampaign } from "../../lib/createCampaign";
import { SBprops, ProjectData, QuestionInputs } from "../interfaces";
import DynamicQuestions from "./DynamicQuestions";
import DynamicLeadInputs from "./DynamicLeadInputs";
import "./sb.css";
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
      <span>
        <h3>Main form</h3>
        <div>
          title
          <input name="mftitle" onChange={handleOnChange} type="text"></input>
        </div>
        <div>
          description
          <input
            className="main-form-inputs"
            name="mfdescription"
            onChange={handleOnChange}
            type="text"
          ></input>
        </div>
        <DynamicLeadInputs
          projectData={projectData}
          setProjectData={setProjectData}
        />
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
      </span>
    );
  };
  const renderPrivacySection = () => {
    return (
      <span>
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
      </span>
    );
  };
  const renderQuestionsSection = () => {
    return (
      <span>
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
      </span>
    );
  };
  const renderEmailSection = () => {
    return (
      <span>
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
      </span>
    );
  };
  const renderTYSection = () => {
    return (
      <span>
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
      </span>
    );
  };
  const handleClicks = (set1, set2) => {
    set1(false);
    set2(true);
  };
  console.log(projectData);
  return (
    <div hidden={hideSB} className={"contenedor main-form-flex-container"}>
      <div className={"container instructions"}>
        <br />
        <div className={"form-container container-content"}>
          <p>Submission Builder Form</p>
          {showMainSection && renderMainFormSection()}
          {showPrivacySection && renderPrivacySection()}
          {showQuestionsSection && renderQuestionsSection()}
          {showEmailSection && renderEmailSection()}
          {showTYSection && renderTYSection()}
          <button onClick={click}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionBuilderForm;
