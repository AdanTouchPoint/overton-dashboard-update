import { application } from "express";
import { ProjectData } from "../customComponents/interfaces";
import { prepareData } from "./createCampaign";
async function fetchData (petitionMethod, backendURLBase,endpoint,info){
    const requestOptions : RequestInit = {
        method: `${petitionMethod}`,
        redirect: 'follow',
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
    //const objPrepare = await prepareData(projectData)
    const readyData =  JSON.stringify(projectData)
    console.log(readyData)
    const request = await fetchData(petition.method,petition.backendURLBase,petition.endpoint,encodeURIComponent(readyData))
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
async function deployProject(projectData) {
      const stringifyData = JSON.stringify(projectData)
    const petition = {
        backendURLBase : process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
        endpoint: "/dashboardServices/deploy-project"
       
    }
    const requestOptions = {
        method: "POST",
        body : projectData,
        headers: {
        "Content-Type": "application/json",
    },
    }
    const request = await fetch(`${petition.backendURLBase}${petition.endpoint}`,requestOptions)
    return request
}
async function deployStatus(deployId) {
    const petition = {
        backendURLBase : process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:8080',
        endpoint: "/dashboardServices/deploy-status",
        method: "GET",
    }
    const requestOptions = {
        method: "GET",
    }
    const request = await fetch(`${petition.backendURLBase}${petition.endpoint}?deployId=${deployId}`,requestOptions)
    return request
}
export {
    fetchData, postCampaignData,updateCampaignData,getCampaigns, deployProject, deployStatus
}

