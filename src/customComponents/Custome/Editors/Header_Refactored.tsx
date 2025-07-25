
import React from 'react';
import { Eye, Check, XIcon } from "lucide-react"
import "./header.css"
import { ContentState } from "../../../lib/contentState";
import { deployProject, updateCampaignData } from '../../../lib/requestsAPI';

interface HeaderProps {
  content: ContentState;
  setActiveView:(value: string) => void;
  setActiveForm:(value: string) => void;
  modalMessage?: string;
  mode: "edit" | "create";
  setActiveSection?: (value: string) => void;
  setModalMessage?: (value: string) => void;
  setIsDeploying: (value: boolean) => void;
}

export default function Header ({content,mode,setActiveView,setActiveForm,setActiveSection,modalMessage,setModalMessage, setIsDeploying} ) {

  const deploy = async (content) => {
    try {
      const deploy = await deployProject(content);
      console.log("deploy response:", deploy);
      if (deploy.ok === false) {
        setModalMessage("Project hasnt been deployed successfully!");
        setActiveSection("modal-warning");
        return;
      }
      const saveData = await updateCampaignData(content);
      console.log("saveData after deploy:", saveData);
      setIsDeploying(true);
    } catch (error) {
      console.error("Error in deploy function:", error);
      setModalMessage("Something went wrong during deploy!");
      setActiveSection("modal-warning");
    }
  };

  const save = async (content) => {
    try {
      const saveData = await updateCampaignData(content);
      console.log("saveData after save:", saveData);
      if( saveData.success === true ) {
        setModalMessage("Project has been saved successfully!");
        setActiveSection("modal-warning");
      }
        if( saveData.success === false ) {
        setModalMessage("Project hasnt been saved successfully!");
        setActiveSection("modal-warning");
      }
    } catch (error) {
      console.error("Error in save function:", error);
      setModalMessage("Something went wrong during save!");
      setActiveSection("modal-warning");
    }
  };

  const click =async  (mode, content) => {
    if(mode === 'edit') {
      const payload = await save(content)
      return payload
    }
    if (mode === 'create') {
      const payload = await  deploy(content)
      return payload
    }
  }
 
  const back = (mode) => {
    if (mode === 'edit')
    return setActiveView('all')
    if(mode === 'create' )
    {
      console.log(mode)
      if (!content.projectData.homepage || content.projectData.homepage === undefined ) {
        return setActiveSection('modal-warning')
      }

    }
    return setActiveForm('main')
  }

  return (
    <header className="editor-header">
      <h1>Editor de Estilos de Email</h1>
      <div className="header-actions">
        <button onClick={() => click(mode,content)} className="save-button">
          <Check size={16} />
          {mode === 'edit' ? 'Save' : "Deploy"}
        </button>
          <button onClick={() => back(mode)} className="save-button">
          <XIcon size={16} />
          Back
        </button>
      </div>
    </header>
  )
}

