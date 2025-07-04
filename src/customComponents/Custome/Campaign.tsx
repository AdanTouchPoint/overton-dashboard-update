import React, { useState,useReducer } from "react";
import { DefaultTemplate } from "payload/components/templates";
import MainForm from "./MainForm";
import SubmissionBuilderForm from "./SubmissionBuilder/NoAI/SubmissionBuilderForm_Refactored";
import PoliticallDirectForm from "./Politicall/NoAI//PoliticallDirectForm";
import AlertthePressForm from "./AlertthePress/NoAI/AlertthePressForm";
import Success from "./Success";
import { ProjectData } from "../interfaces";
import { Button } from "payload/components/elements";
import './campaignList.css'

const baseClass = "after-dashboard";
const Campaing: React.FC = () => {
  const [activeForm,setActiveForm] = useState('main')
  const [projectData, setProjectData] = useState<ProjectData>();
  const [err,setErr] = useState(false)

  const modal = () => {
    const closemodal = () => {
      setErr(false)
    }
    return(
      <div className="modal-overlay" >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Este es el Modal de error </h2>
        <p>Verifica tu informacion.</p>
        <Button onClick={closemodal} className="close-button">Cerrar</Button>
      </div>
      </div>
    )
  }
  return (
    <DefaultTemplate>
      <div className={baseClass}>
        {activeForm === 'main' &&(        
          <MainForm
          setActiveForm={setActiveForm}
          err={err}
          setErr={setErr}
          projectData={projectData}
          setProjectData={setProjectData}
        />) }
        { activeForm === 'SB' && (
          <SubmissionBuilderForm
          mode="create"
          projectData={projectData}
          setActiveForm={setActiveForm}
          activeForm={activeForm}
          setProjectData={setProjectData}
          />
        )}

        { activeForm === 'PD' && (
          <PoliticallDirectForm
          projectData={projectData}
          setActiveForm={setActiveForm}
          />
        ) }
        { activeForm === 'AP' && (
          <AlertthePressForm
          projectData={projectData}
          setActiveForm={setActiveForm}
          />
        ) }
        { activeForm === 'success' && (
          <Success
          projectData={projectData}
          setProjectData={setProjectData}
          err={err}
          setErr={setErr}
          setActiveForm={setActiveForm}
        />
        ) }
        {
          err && modal()
        }
      </div>
    </DefaultTemplate>
  );
};

export default Campaing;
