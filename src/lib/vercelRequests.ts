import { response } from "express";
import { ProjectData } from "../customComponents/interfaces";
import { validatestring } from "./misc";
const token = process.env.VERCEL_TOKEN;
const createProject = async (projectData,name: string) => {
    try {
        const myHeaders: Headers = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        const data = projectData.projectData
        const {repo,description,content,title,clientId} = data
        const raw: string = JSON.stringify({
            "name": name.toLowerCase(),
            "framework": "nextjs",
            "gitRepository": {
              "type": "github",
              "repo": `AdanTouchpoint/${name}`
            },
            "environmentVariables": [
                {
                  "key": "NEXT_PUBLIC_PAGE_CONTENT",
                  "target": "production",
                  "type": "plain",
                  "value": description
                },
                {
                  "key": "NEXT_PUBLIC_PAGE_TITLE",
                  "target": "production",
                  "type": "plain",
                  "value": title
                },
                {
                  "key": "NEXT_PUBLIC_PAGE_DESCRIPTION",
                  "target": "production",
                  "type": "plain",
                  "value": description
                },
                {
                  "key": "NEXT_PUBLIC_PAGE_OGDESCRIPTION",
                  "target": "production",
                  "type": "plain",
                  "value": description
                },
                {
                  "key": "NEXT_PUBLIC_CLIENT_ID",
                  "target": "production",
                  "type": "plain",
                  "value": "63eeadb6349fdc3da0069046"
                },
                {
                  "key": "NEXT_PUBLIC_URL",
                  "target": "production",
                  "type": "plain",
                  "value": "https://app.overton.services/dashboardContent"
                },
                {
                  "key": "NEXT_PUBLIC_URL_SERVICES",
                  "target": "production",
                  "type": "plain",
                  "value": "https://app.overton.services/dashboardServices"
                },
                {
                  "key": "NEXT_PUBLIC_URL_GA_ID",
                  "target": "production",
                  "type": "plain",
                  "value": "G-ZCY9S9T997"
                },
                {
                  "key": "NEXT_PUBLIC_URL_GTM_ID",
                  "target": "production",
                  "type": "plain",
                  "value": "GTM-5P8R25X"
                }
            ]
        });
        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        const response = await fetch("https://api.vercel.com/v9/projects", requestOptions)
        if (response.status !== 200) {
          throw new Error(`Error al crear un proyecto en vercel por favor verifica tus datos`);
         }
        return response
    } catch (error) {
        throw new Error(error.message);
    }
}
/*const updateProject = async (projectData : ProjectData) => {
  try {
    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    const raw = string = JSON.stringify({})
    const requestOptions: RequestInit = {
      method: "patch",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
  };
    cons response = await fetch("https://api.vercel.com/v9/projects/prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",requestOptions)
  } catch (error) {
    
  }
}*/
const deployProject = async (fullName: string, id: number,name :string) => {
  try {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", token);

const raw = JSON.stringify({
  "name": name.toLowerCase(),
  "gitSource": {
    "type": "github",
    "repo": fullName,
    "ref": "master",
    "repoId": id
  }
});

const requestOptions: RequestInit = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const deploy = fetch("https://api.vercel.com/v13/deployments", requestOptions)
return deploy
  } catch (error) {
    console.error(error)
  }
}
const getProjectInfo = async (project: string) => {
    try {
        const myHeaders: Headers = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions: RequestInit = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        const response = await fetch(`https://api.vercel.com/v9/projects/${project}`, requestOptions) // Realiza la petición al endpoint
        if (response.status !== 200) {
          throw new Error(`Error al consultar el repositorio por favor verifica tus datos`);
         }
        return await response.json(); // Retorna los datos de la respuesta en formato JSON
    } catch (error) {
        throw new Error(error.message);
    }
}
export {createProject, getProjectInfo,deployProject}
