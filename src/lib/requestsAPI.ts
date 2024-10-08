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
async function postCampaignData (projectData) {
    const petition = {
        backendURLBase : process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
        endpoint: "/dashBoardContent/campaign",
        method: "POST",
    }
    const objPrepare = await prepareData(projectData)
    const readyData = await JSON.stringify(objPrepare)
    const request = await fetchData(petition.method,petition.backendURLBase,petition.endpoint,readyData)
    return request
}
// añadir update request

async function updateCampaignData (projectData) {
    const petition = {
        backendURLBase : process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
        endpoint: "/dashBoardContent/campaign",
        method: "PUT",
    }
    const objPrepare = await prepareData(projectData)
    const readyData = await JSON.stringify(objPrepare)
    const request = await fetchData(petition.method,petition.backendURLBase,petition.endpoint,readyData)
    console.log(request)
}
async function getCampaigns (clientId) {
    const petition = {
        backendURLBase : process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
        endpoint: "/dashBoardContent/campaign",
        method: "GET",
    }
    const request = await fetchData(petition.method,petition.backendURLBase,petition.endpoint,clientId)
    //console.log(request)
    return request
}
export {
    fetchData, postCampaignData,updateCampaignData,getCampaigns
}

