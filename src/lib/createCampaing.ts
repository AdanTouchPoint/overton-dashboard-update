import { createGhRepo, setPermissions, CreateRepoLabel } from "./gitHubRequests";
import { createProject } from "./vercelRequests";
import { ProjectData } from "../customComponents/interfaces";

const createCampaing  = async (projectData: ProjectData) => {
  try {
  const GHRepo = await createGhRepo(projectData) 
  console.log(GHRepo)
  const name : string = GHRepo.name
  const writePermisions = await setPermissions(name)
  return  await createProject(projectData,name)
  } catch (error) {
    console.error('Oops! Algo salio mal:', error.message);
    return error
  }
}
export {
  createCampaing
}