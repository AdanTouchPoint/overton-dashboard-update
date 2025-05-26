import { Dispatch, SetStateAction } from 'react';
import { ViewContent,styleProps,typ } from '../lib/contentState';
export interface campaignEditData {
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
  typdescription?,
  typinstructions?,
  typtitle?,
  mfdescription?,
  mftitle?,
  repinstructions?,
  reptitle?,
  qptitle?,
  qpinstructions?,
  pptitle?,
  eftitle?,
  efinstructions?,
  efdescription?,
  name?,
  id?

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
    mode?: "edit" | "create";	
    setActiveView?: (value: string) => void;
    userId?: string
    activeForm?: string;
    //setCampaignEditData: Dispatch<SetStateAction<campaignEditData[]>>;
  }
  export interface APprops {
    projectData: ProjectData | undefined;
    setActiveForm: (value: string) => void;

  }
  export interface PDprops {
    projectData: ProjectData | undefined; 
    setActiveForm: (value: string) => void;
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
