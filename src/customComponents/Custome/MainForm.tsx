import React, { FormEvent, useEffect, useState } from "react";
import "./mainform.css";
import { useAuth } from "payload/components/utilities";
import { MainFormProps, ProjectData } from "../interfaces";
import { postCampaignData } from "../../lib/requestsAPI";
import sbImage from "../assets/SBImage.png";
import pdImage from "../assets/PDImage.png";
import apImage from "../assets/APImage.png";
type ActiveSection = "campaign-type" | "data-form";
const MainForm: React.FC<MainFormProps> = ({
  setErr,
  err,
  setActiveForm,
  projectData,
  setProjectData,
}) => {
  const user = useAuth();
  const userId = user.user.id;
  const [activeSection, setActiveSection] =
    useState<ActiveSection>("campaign-type");
  const verifyInputs = (projectData) => {
    if (
      !projectData?.campaignType?.trim() ||
      !projectData?.repo?.trim() ||
      !projectData?.description?.trim() ||
      !projectData?.title?.trim()
    ) {
      setErr(true);
      throw new Error("Llena todos los campos");
    }
  };
  const click = async () => {
    try {
      const validate = await verifyInputs(projectData);
      // guardar en BD
      //const sanitizedData =  sanitizeProjectObject(projectData)
      const prepareData = {projectData, clientId: userId };
      const data = await postCampaignData(prepareData);
      const id = await data.data.id;
      const payload = {
        ...projectData,
        id: id,
        clientId: userId
      };
      setProjectData(payload);
      setActiveForm(projectData.campaignType.toUpperCase());
    } catch (error) {
      throw new Error(error);
    }
  };
  const back = () => {
    setActiveSection("campaign-type");
  };
  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    const info: ProjectData = {
      ...projectData,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value.replace(/^(https?:\/\/|www\.)/i, '')
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 100)
        .replace(/^-|-$/g, '')
    };
    setProjectData(info);
    setActiveSection("data-form");
  };
  const renderCampaignType = () => (
    <div className="ctype">
      <p className="section-title">Choose Campaign Type:</p>
      <div className="campaign-options">
        {/* Tarjeta 1 */}
        <div className="campaign-card">
          <input
            onClick={handleOnChange}
            name="campaignType"
            value="SB"
            type="radio"
            id="campaign-sb"
            hidden
          />
          <label htmlFor="campaign-sb">
            <img src={sbImage} alt="Option 1 Image" />
            <h3>Submission Builder</h3>
            <p>Breve descripción de la Opción 1.</p>
          </label>
        </div>
        {/* Tarjeta 2 */}
        <div className="campaign-card">
          <input
            onClick={handleOnChange}
            name="campaignType"
            value="PD"
            type="radio"
            id="campaign-pd"
            hidden
          />
          <label htmlFor="campaign-pd">
            <img src={pdImage} alt="Option 2 Image" />
            <h3>Politicall Direct</h3>
            <p>Breve descripción de la Opción 2.</p>
          </label>
        </div>
        {/* Tarjeta 3 */}
        <div className="campaign-card">
          <input
            onClick={handleOnChange}
            name="campaignType"
            value="AP"
            type="button"
            id="campaign-ap"
            hidden
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
    <>
      {/* Resto del formulario */}
      <div className="baseClass">
        <div className="form-container">
          <div className="form-card">
            <div className="form-section">
              <p className="section-title">Campaign Info</p>
              <div className="form-group">
                <label>Name:</label>
                <input name="repo" onChange={handleOnChange} type="text" />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input
                  name="description"
                  onChange={handleOnChange}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Title:</label>
                <input name="title" onChange={handleOnChange} type="text" />
              </div>
              <button onClick={back} className="submit-button">
                Back
              </button>
              <button onClick={click} className="submit-button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {activeSection === "campaign-type" && renderCampaignType()}
      {activeSection === "data-form" && renderForm()}
    </>
  );
};

export default MainForm;
