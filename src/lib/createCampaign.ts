import { createGhRepo, setPermissions, CreateRepoLabel } from "./gitHubRequests";
import { createProject, deployProject } from "./vercelRequests";
import { ProjectData } from "../customComponents/interfaces";

const createCampaign  = async (projectData: ProjectData) => {
  try {
  const GHRepo = await createGhRepo(projectData)
  statusValidator(GHRepo.status, 201,'Error al crear  el repositorio , por favor verifica los datos')
  const requestdata = await GHRepo.json()
  const {name,fullName, id } = requestdata
  //extract id, fullName of repo info
  const writePermisions = await setPermissions(name)
  statusValidator(writePermisions.status, 204,`Error al modificar los permisos en el repositorio por favor verifica tus datos`)
  const vercelRequest = await createProject(projectData,name)
  statusValidator(vercelRequest.status,200,'Error al crear un proyecto en vercel por favor verifica tus datos')
  const deploy = await deployProject(fullName , id, projectData.repo)
  statusValidator(deploy.status,200,'Error al desplegar el proyecto por favor verifica tus datos')
  return deploy
  } catch (error) {
    console.error('Oops! Algo salio mal:', error.message);
    return error
  }
}
const statusValidator = (status,code,message) : void => {
  if (status !== code ) {
    throw new Error(message);
  }}
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
      description: mfdescription,
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
      description: mfdescription,
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