import React, { useState } from "react";
import { useAuth } from "payload/components/utilities";
import { DefaultTemplate } from "payload/components/templates";
import MainForm from "./MainForm";
import SubmissionBuilderForm from "./SubmissionBuilderForm";
import PoliticallDirectForm from "./PoliticallDirectForm";
import AlertthePressForm from "./AlertthePressForm";
import Success from "./Success";
import { ProjectData } from "../interfaces";
const baseClass = "after-dashboard";

const Campaing: React.FC = () => {
  const user = useAuth();
  const [hideMainForm, setHideMainForm] = useState(false);
  const [hideSB, setHideSB] = useState(true);
  const [hidePD, setHidePD] = useState(true);
  const [hideAP, setHideAP] = useState(true);
  const [hideSuccess, setHideSuccess] = useState(true);
  const [projectData, setProjectData] = useState<ProjectData>();
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
        />
        { !hideSB && (
          <SubmissionBuilderForm
            projectData={projectData}
            setProjectData={setProjectData}
            hideSB={hideSB}
            setHideSuccess={setHideSuccess}
            setHideSB={setHideSB}
          />
        )}

        { !hidePD && (
          <PoliticallDirectForm
            projectData={projectData}
            setProjectData={setProjectData}
            hidePD={hidePD}
            setHideSuccess={setHideSuccess}
          />
        ) }
        { !hideAP && (
          <AlertthePressForm
            projectData={projectData}
            setProjectData={setProjectData}
            hideAP={hideAP}
            setHideSuccess={setHideSuccess}
          />
        ) }
        { !hideSuccess && (
          <Success
          projectData={projectData}
          setProjectData={setProjectData}
          hideSuccess={hideSuccess}
          setHideSuccess={setHideSuccess}
        />
        ) }
      </div>
    </DefaultTemplate>
  );
};

export default Campaing;
