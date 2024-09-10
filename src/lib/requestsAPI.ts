import { ProjectData } from "../customComponents/interfaces";
import { prepareData } from "./createCampaign";
async function fetchData (petitionMethod, backendURLBase,endpoint,info){
    const requestOptions : RequestInit = {
        method: `${petitionMethod}`,
        redirect: 'follow'
    }   
    const data = await fetch(`${backendURLBase}${endpoint}?info=${info}`, requestOptions);
    const datos = await data.json()
    return datos
}
async function fetchCampaignData (projectData) {
    const petition = {
        backendURLBase : "http://localhost:8080/",
        endpoint: "dashBoardServices/campaigns",
        method: "POST",
    }
    const objPrepare = await prepareData(projectData)
    const readyData = await JSON.stringify(objPrepare)
    const request = await fetchData(petition.method,petition.backendURLBase,petition.endpoint,readyData)
    console.log(request)
}





export {
    fetchData
}

