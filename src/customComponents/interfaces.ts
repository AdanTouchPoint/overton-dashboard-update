import { Dispatch, SetStateAction } from 'react';
export interface ProjectData {
    repo: string;
    description : string;
    campaingType: string;
    content: string;
    clientId: string;
    title: string;
  }

export interface MainFormProps {
    setHideMainForm: (value: boolean) => void;
    hideMainForm: boolean;
    projectData: ProjectData | undefined; // Cambia 'ProjectData' por el tipo adecuado de tus datos de proyecto
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    setHideSB: (value: boolean) => void;
    setHidePD: (value: boolean) => void;
    setHideAP: (value: boolean) => void;
  }
  export interface SBprops {
    hideSB: boolean;
    setHideSuccess: (value: boolean) => void;
  }
  export interface APprops {
    hideAP: boolean;
    setHideSuccess: (value: boolean) => void;
  }
  export interface PDprops {
    hidePD: boolean;
    setHideSuccess: (value: boolean) => void;
  }
  export interface SuccessProps {
    hideSuccess: boolean;
    setHideSuccess: Dispatch<SetStateAction<boolean>>;
  }
  export interface GHLinks {
    AP: string;
    PC: string;
    SB: string;
  }
