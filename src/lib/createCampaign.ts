import { createGhRepo, setPermissions, CreateRepoLabel } from "./gitHubRequests";
import { createProject, deployProject } from "./vercelRequests";
import { ProjectData } from "../customComponents/interfaces";

const createCampaign  = async (projectData: ProjectData, setErr,setHideSB,setHideAP,setHidePD, setProjectData) => {
  try {
  const GHRepo = await createGhRepo(projectData)
  statusValidator(GHRepo.status, 201,'Error al crear  el repositorio , por favor verifica los datos',setErr)
  const requestdata = await GHRepo.json()
  const {name,fullName, id } = requestdata
  //extract id, fullName of repo info
  setProjectData({
    ...projectData,
    name: name
  })
  const writePermisions = await setPermissions(name)
  statusValidator(writePermisions.status, 204,`Error al modificar los permisos en el repositorio por favor verifica tus datos`,setErr)
  const vercelRequest = await createProject(projectData,name)
 statusValidator(vercelRequest.status,200,'Error al crear un proyecto en vercel por favor verifica tus datos',setErr)
  const deploy = await deployProject(fullName , id, name)
  statusValidator(deploy.status,200,'Error al desplegar el proyecto por favor verifica tus datos',setErr)
  hideForms(projectData, setHideSB,setHideAP,setHidePD)
  return true
  } catch (error) {
    console.error('Oops! Algo salio mal:', error.message);
    return error
  }
}
const hideForms = (projectData: ProjectData, setHideSB,setHideAP,setHidePD) => {
  if(projectData.campaignType === 'SB'){
    setHideSB(true) 
  }
  if(projectData.campaignType === 'AP')  {
    setHideAP(true) 
  }
  if(projectData.campaignType === 'PD')  {
    setHidePD(true) 
  }  
}
const statusValidator = (status,code,message,setErr) : void => {
  if (status !== code ) {
    setErr(true)
    throw new Error(message);
  }
}
function prepareData(params:ProjectData) {
  const {
    clientId,
    campaignType,
    description,
    mfdescription,
    mftitle,
    repinstructions,
    reptitle,
    repo,
    title,
    typdescription,
    typinstructions,
    typtitle,
    homepage
  } = params;
  const SBObj = {
    campaignData: {
      name: repo,
      title:title,
      description: description,
      url: homepage,
      clientId: clientId
    },
    mainform: {
      mainTitle: mftitle,
      instructions: mfdescription,
    },
    questions: {
      title: params?.qptitle,
      instructions: params?.qpinstructions,
    },
    privacy: {
      title: params?.pptitle,
    },
    emailPreview: {
      title: reptitle,
      instructions: repinstructions,
    },
    successPage: {
      title: typtitle,
      description: typdescription,
      instructions: typinstructions,
    },
    clientId: clientId,
    campaignType: campaignType
  };
  const PDObj = {
    campaignData: {
      name: repo,
      title:title,
      description: description,
      url: homepage,
      clientId: clientId
    },
    mainform: {
      mainTitle: mftitle,
      instructions: mfdescription,
    },
    emailform: {
      title: params?.eftitle,
      instructions: params?.efinstructions,
      description: params?.efdescription,

    },
    emailPreview: {
      title: reptitle,
      instructions: repinstructions,
    },
    successPage: {
      title: typtitle,
      description: typdescription,
      instructions: typinstructions,
    },
    clientId: clientId,
    campaignType: campaignType
  };
  const APObj = {
    campaignData: {
      name: repo,
      title:title,
      description: description,
      url: homepage,
      clientId: clientId
    },
    mainform: {
      mainTitle: mftitle,
      instructions: mfdescription,
    },
    emailform: {
      title: params?.eftitle,
      instructions: params?.efinstructions,
      description: params?.efdescription,
    },
    emailPreview: {
      title: reptitle,
      instructions: repinstructions,
    },
    successPage: {
      title: typtitle,
      description: typdescription,
      instructions: typinstructions,
    },
    clientId: clientId,
    campaignType: campaignType
  };
  const readyData = (campaignType: string) => {
    if (campaignType === "SB") {
      return SBObj;
    } 
    if (campaignType === "PD") {
      return PDObj
    }
    if( campaignType === "AP") {
      return APObj
    }
  };
  return readyData(campaignType)
} 
export {
  createCampaign, statusValidator,prepareData
}