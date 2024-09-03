import { createGhRepo, setPermissions, CreateRepoLabel } from "./gitHubRequests";
import { createProject } from "./vercelRequests";
import { ProjectData } from "../customComponents/interfaces";

const createCampaign  = async (projectData: ProjectData) => {
  try {
  const GHRepo = await createGhRepo(projectData)
  statusValidator(GHRepo.status, 201,'Error al crear  el repositorio , por favor verifica los datos')
  const requestdata = await GHRepo.json()
  const name: string = requestdata.name
  const writePermisions = await setPermissions(name)
  statusValidator(writePermisions.status, 204,`Error al modificar los permisos en el repositorio por favor verifica tus datos`)
  const vercelRequest = await createProject(projectData,name)
  statusValidator(vercelRequest.status,200,'Error al crear un proyecto en vercel por favor verifica tus datos')
      //crear repolabel
  /*const deployLabel = await CreateRepoLabel(name)
  statusValidator(deployLabel.status,201,'Error al crear etiqueta de autodeploy para el proyecto')*/
      //fin
  return vercelRequest
  } catch (error) {
    console.error('Oops! Algo salio mal:', error.message);
    return error
  }
}
const statusValidator = (status,code,message) : void => {
  if (status !== code ) {
    throw new Error(message);
  }}
export {
  createCampaign, statusValidator
}