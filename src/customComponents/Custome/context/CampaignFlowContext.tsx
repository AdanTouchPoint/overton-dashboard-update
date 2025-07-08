
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProjectData } from '../../interfaces';

// 1. Definir la forma del estado del contexto
interface CampaignFlowContextState {
  activeForm: string;
  setActiveForm: (form: string) => void;
  projectData: ProjectData | undefined;
  setProjectData: (data: ProjectData) => void;
  error: string | null;
  setError: (error: string | null) => void;
  isDeploying: boolean;
  setIsDeploying: (isDeploying: boolean) => void;
}

// 2. Crear el Contexto
const CampaignFlowContext = createContext<CampaignFlowContextState | undefined>(undefined);

// 3. Crear el Proveedor (Provider)
interface CampaignFlowProviderProps {
  children: ReactNode;
}

export const CampaignFlowProvider: React.FC<CampaignFlowProviderProps> = ({ children }) => {
  const [activeForm, setActiveForm] = useState('main');
  const [projectData, setProjectData] = useState<ProjectData>();
  const [error, setError] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  const value = {
    activeForm,
    setActiveForm,
    projectData,
    setProjectData,
    error,
    setError,
    isDeploying,
    setIsDeploying,
  };

  return (
    <CampaignFlowContext.Provider value={value}>
      {children}
    </CampaignFlowContext.Provider>
  );
};

// 4. Crear un Hook personalizado para usar el contexto fácilmente
export const useCampaignFlow = () => {
  const context = useContext(CampaignFlowContext);
  if (context === undefined) {
    throw new Error('useCampaignFlow must be used within a CampaignFlowProvider');
  }
  return context;
};
