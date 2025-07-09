
import React, { useState } from "react";
import "./mainform.css";
import { useCampaignFlow } from "./context/CampaignFlowContext";
import { postCampaignData } from "../../lib/requestsAPI"; 
import sbImage from "../assets/SBImage.png";
import pdImage from "../assets/PDImage.png";
import apImage from "../assets/APImage.png";

type ActiveSection = "campaign-type" | "data-form";

const MainFormRefactored: React.FC<{ userId: string }> = ({ userId }) => {
  const { projectData, setProjectData, setActiveForm, setError } = useCampaignFlow();
  const [activeSection, setActiveSection] = useState<ActiveSection>("campaign-type");

  const verifyInputs = () => {
    if (
      !projectData?.campaignType?.trim() ||
      !projectData?.repo?.trim() ||
      !projectData?.description?.trim() ||
      !projectData?.title?.trim()
    ) {
      setError("Todos los campos del formulario son requeridos.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleNextClick = async () => {
    if (!verifyInputs()) return;

    try {
      const prepareData = { projectData, clientId: userId };
      const data = await postCampaignData(prepareData);
      const id = await data.data.id;
      
      const payload = {
        ...projectData!,
        id: id,
        clientId: userId
      };

      setProjectData(payload);
      setActiveForm(projectData!.campaignType.toUpperCase());
    } catch (error: any) {
      setError(`Error: ${error.message}`);
    }
  };

  const handleCampaignTypeChange = (campaignType: string) => {
    setProjectData({ ...projectData, campaignType });
    setActiveSection("data-form"); // Cambia a la sección del formulario de datos
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'repo') {
      processedValue = value
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .slice(0, 100)
        .replace(/^-|-$/g, '');
    }

    setProjectData({ ...projectData, [name]: processedValue });
  };

  const handleBackClick = () => {
    setActiveSection("campaign-type"); // Vuelve a la selección del tipo de campaña
  };

  const renderCampaignType = () => (
    <div className="ctype">
      <p className="section-title">Choose Campaign Type:</p>
      <div className="campaign-options">
        <div className="campaign-card">
          <input
            onChange={() => handleCampaignTypeChange('SB')}
            name="campaignType"
            type="radio"
            id="campaign-sb"
            hidden
            checked={projectData?.campaignType === 'SB'}
          />
          <label htmlFor="campaign-sb">
            <img src={sbImage} alt="Submission Builder" />
            <h3>Submission Builder</h3>
            <p>Crea un formulario para que los usuarios envíen datos.</p>
          </label>
        </div>
        <div className="campaign-card">
          <input
            onChange={() => handleCampaignTypeChange('PD')}
            name="campaignType"
            value="PD"
            type="radio"
            id="campaign-pd"
            hidden
            checked={projectData?.campaignType === 'PD'}
          />
          <label htmlFor="campaign-pd">
            <img src={pdImage} alt="Option 2 Image" />
            <h3>Politicall Direct</h3>
            <p>Breve descripción de la Opción 2.</p>
          </label>
        </div>
        <div className="campaign-card">
          <input
            onChange={() => handleCampaignTypeChange('AP')}
            name="campaignType"
            value="AP"
            type="radio"
            id="campaign-ap"
            hidden
            checked={projectData?.campaignType === 'AP'}
          />
          <label htmlFor="campaign-ap">
            <img src={apImage} alt="Option 3 Image" />
            <h3>Alert the Press</h3>
            <p>Breve descripción de la Opción 3.</p>
          </label>
        </div>
      </div>
    </div>
  );

  const renderForm = () => (
    <div className="form-container">
      <div className="form-card">
        <div className="form-section">
          <p className="section-title">Campaign Info</p>
          <div className="form-group">
            <label>Name (Repo):</label>
            <input name="repo" onChange={handleInputChange} type="text" value={projectData?.repo || ''} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input name="description" onChange={handleInputChange} type="text" value={projectData?.description || ''} />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input name="title" onChange={handleInputChange} type="text" value={projectData?.title || ''} />
          </div>
          <button onClick={handleBackClick} className="submit-button">Back</button>
          <button onClick={handleNextClick} className="submit-button">Next</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {activeSection === "campaign-type" && renderCampaignType()}
      {activeSection === "data-form" && renderForm()}
    </>
  );
};

export default MainFormRefactored;
