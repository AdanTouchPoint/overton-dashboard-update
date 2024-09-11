import React, { useState,useEffect } from "react";
import { useAuth } from "payload/components/utilities";
import { DefaultTemplate } from "payload/components/templates";
import MainForm from "./MainForm";
import SubmissionBuilderForm from "./SubmissionBuilderForm";
import PoliticallDirectForm from "./PoliticallDirectForm";
import AlertthePressForm from "./AlertthePressForm";
import Success from "./Success";
import { ProjectData } from "../interfaces";
import { Button } from "payload/components/elements";
import './campaignList.css'

const baseClass = "after-dashboard";

const Campaing: React.FC = () => {
  const [hideMainForm, setHideMainForm] = useState(false);
  const [hideSB, setHideSB] = useState(true);
  const [hidePD, setHidePD] = useState(true);
  const [hideAP, setHideAP] = useState(true);
  const [hideSuccess, setHideSuccess] = useState(true);
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
        <MainForm
          setHideMainForm={setHideMainForm}
          hideMainForm={hideMainForm}
          projectData={projectData}
          setProjectData={setProjectData}
          setHideSB={setHideSB}
          setHidePD={setHidePD}
          setHideAP={setHideAP}
          err={err}
          setErr={setErr}
        />
        { !hideSB && (
          <SubmissionBuilderForm
            projectData={projectData}
            setProjectData={setProjectData}
            hideSB={hideSB}
            setHideSuccess={setHideSuccess}
            setHideSB={setHideSB}
            err={err}
            setErr={setErr}
            setHidePD={setHidePD}
            setHideAP={setHideAP}
          />
        )}

        { !hidePD && (
          <PoliticallDirectForm
            projectData={projectData}
            setProjectData={setProjectData}
            hidePD={hidePD}
            setHideSuccess={setHideSuccess}
            setHidePD={setHidePD}
            err={err}
            setErr={setErr}
            setHideSB={setHideSB}
            setHideAP={setHideAP}
          />
        ) }
        { !hideAP && (
          <AlertthePressForm
            projectData={projectData}
            setProjectData={setProjectData}
            hideAP={hideAP}
            setHideSuccess={setHideSuccess}
            setHideAP={setHideAP}
            err={err}
            setErr={setErr}
            setHideSB={setHideSB}
            setHidePD={setHidePD}
          />
        ) }
        { !hideSuccess && (
          <Success
          projectData={projectData}
          setProjectData={setProjectData}
          hideSuccess={hideSuccess}
          setHideSuccess={setHideSuccess}
          err={err}
          setErr={setErr}
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
