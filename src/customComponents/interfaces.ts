import { Dispatch, SetStateAction } from 'react';
import { ViewContent,styleProps,typ } from '../lib/contentState';

export interface DetailsProps{
  projectData: ProjectData;
  setActiveView: (value: string) => void;
  setProjectData: Dispatch<SetStateAction<ProjectData>>;
}
export interface campaignEditData {
      projectData?: ProjectData;
      mainform?: ViewContent;
      style?: styleProps;
      //mainFormInputs: inputOptions;
      emailform?: ViewContent;
      emailreview?: ViewContent
      privacy?: ViewContent;
      questions?: ViewContent;
      email?: ViewContent;
      ty: typ;
}
export interface ProjectData {
  repo?: string;
  description? : string;
  campaignType?: string;
  content?: string;
  clientId?: string;
  title?: string;
  homepage?: string;
  id?,
  startDate?: string;
  endDate?: string;
  leads?: number;
  status?: string;
  emailSent?: number;
  }
export interface QuestionInputs {
  name: string,
  label: string,
  type: string
}
export interface MainFormProps {
    err: boolean;
    setErr: (value: boolean) => void;
    setActiveForm: (value: string) => void;
    projectData: ProjectData | undefined; 
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
  }
  export interface SBprops {
    projectData?: ProjectData | undefined; 
    setActiveForm?: (value: string) => void;
    campaignEditData?: campaignEditData | undefined;
    mode?: string	
    setMode?: (value: string) => void;
    setActiveView?: (value: string) => void;
    userId?: string
    activeForm?: string;
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
    //setCampaignEditData: Dispatch<SetStateAction<campaignEditData[]>>;
  }
  export interface APprops {
    projectData?: ProjectData | undefined; 
    setActiveForm?: (value: string) => void;
    campaignEditData?: campaignEditData | undefined;
    mode?: string	
    setMode?: (value: string) => void;
    setActiveView?: (value: string) => void;
    userId?: string
    activeForm?: string;
    setProjectData: Dispatch<SetStateAction<ProjectData>>;

  }
  export interface PDprops {
    projectData?: ProjectData | undefined; 
    setActiveForm?: (value: string) => void;
    campaignEditData?: campaignEditData | undefined;
    mode?: string	
    setMode?: (value: string) => void;
    setActiveView?: (value: string) => void;
    userId?: string
    activeForm?: string;
    setProjectData: Dispatch<SetStateAction<ProjectData>>;
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
