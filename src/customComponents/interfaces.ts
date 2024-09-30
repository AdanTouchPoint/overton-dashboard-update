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
    id
  }
export interface QuestionInputs {
  name: string,
  label: string,
  type: string
}
export interface MainFormProps {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    err: boolean;
    setErr: (value: boolean) => void;
    setActiveForm: (value: string) => void;
  }
  export interface SBprops {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    err:boolean;
    setErr: (value: boolean) => void;
    setActiveForm: (value: string) => void;
  }
  export interface APprops {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    setActiveForm: (value: string) => void;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface PDprops {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    setActiveForm: (value: string) => void;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface SuccessProps {
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    setActiveForm: (value: string) => void;
    err: boolean;
    setErr: (value: boolean) => void;
  }
  export interface GHLinks {
    AP: string;
    PD: string;
    SB: string;
  }
