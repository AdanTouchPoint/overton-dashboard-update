  //Funcion que crea repo y proyecto en vercel dependiendo el tipo de proyecto elegido
  //si todo OK oculta MainForm y Muestra el Form correspondiente el tipo elegido 
import { createGhRepo, setPermissions, CreateRepoLabel } from "./gitHubRequests";
import  {hideForms}  from "./hideComponents";
import { createProject } from "./vercelRequests";
import { ProjectData } from "../customComponents/interfaces";

const createCampaing  = async (projectData: ProjectData) => {
  try {
  console.log("here")
    //crear repo en GH
   const createRepo = await createGhRepo(projectData)
   const {name} = createRepo
    //crear permisos de escritura en el repo de GH
    await setPermissions(name)
    //Crear proyecto en vercel
   const project = await createProject(projectData, name)
   return project
/*     //label en GH para despliegue automatico
    await CreateRepoLabel(name)
    // muestra 0el form seleccionado si los pasos previos fueron exitosos
    await hideForms(projectData,setHideSB,setHidePD,setHideAP,setHideMainForm) */
  } catch (error) {
    console.error('Oops! Algo salio mal:', error.message);
  }
}

export {
  createCampaing
}