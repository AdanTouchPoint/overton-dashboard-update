import { Dispatch, SetStateAction } from 'react';
export interface ProjectData {
    repo: string;
    description : string;
    campaignType: string;
    content: string;
    clientId: string;
    title: string;
    homepage: string;
    typdescription,
    typinstructions,
    typtitle,
    mfdescription,
    mftitle,
    repinstructions,
    reptitle,
    qptitle,
    qpinstructions,
    pptitle,
    eftitle,
    efinstructions,
    efdescription,
    name
  }

export interface MainFormProps {
    setHideMainForm: (value: boolean) => void;
    hideMainForm: boolean;
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    setHideSB: (value: boolean) => void;
    setHidePD: (value: boolean) => void;
    setHideAP: (value: boolean) => void;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface SBprops {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    hideSB: boolean;
    setHideSuccess: (value: boolean) => void;
    setHideSB: (value: boolean) => void;
    setHidePD: (value: boolean) => void;
    setHideAP: (value: boolean) => void;
    err:boolean;
    setErr: (value: boolean) => void;
  }
  export interface APprops {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    hideAP: boolean;
    setHideSuccess: (value: boolean) => void;
    setHideSB: (value: boolean) => void;
    setHidePD: (value: boolean) => void;
    setHideAP: (value: boolean) => void;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface PDprops {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    hidePD: boolean;
    setHideSuccess: (value: boolean) => void;
    setHideSB: (value: boolean) => void;
    setHidePD: (value: boolean) => void;
    setHideAP: (value: boolean) => void;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface SuccessProps {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    hideSuccess: boolean;
    setHideSuccess: Dispatch<SetStateAction<boolean>>;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface GHLinks {
    AP: string;
    PD: string;
    SB: string;
  }
