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
  const [inputStyles, setInputStyles] = useState({
    fontFamily: 'Arial',
    fontSize: '16px',
    color: '#000000',
  });

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setInputStyles((prevStyles) => ({
      ...prevStyles,
      [name]: value,
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
      <section>
        <h3>Main form</h3>
        <div>
        <label htmlFor="fontFamily">Font:</label>
        <select
          name="fontFamily"
          id="fontFamily"
          value={inputStyles.fontFamily}
          onChange={handleStyleChange}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>

        <label htmlFor="fontSize">Size:</label>
        <select
          name="fontSize"
          id="fontSize"
          value={inputStyles.fontSize}
          onChange={handleStyleChange}
        >
          <option value="12px">12px</option>
          <option value="16px">16px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </select>

        <label htmlFor="color">Color:</label>
        <input
          type="color"
          name="color"
          id="color"
          value={inputStyles.color}
          onChange={handleStyleChange}
        />
      </div>

      <div>
        title
        <input
          name="mftitle"
          onChange={handleOnChange}
          type="text"
          style={{
            fontFamily: inputStyles.fontFamily,
            fontSize: inputStyles.fontSize,
            color: inputStyles.color,
          }}
        />
      </div>

      <div>
        description
        <input
          className="main-form-inputs"
          name="mfdescription"
          onChange={handleOnChange}
          type="text"
          style={{
            fontFamily: inputStyles.fontFamily,
            fontSize: inputStyles.fontSize,
            color: inputStyles.color,
          }}
        />
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
      </section>
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
