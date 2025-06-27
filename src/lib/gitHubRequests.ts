import { ProjectData } from "../customComponents/interfaces";
import repoSelector from "./gitHubLinks";
const token = process.env.GH_TOKEN;
const createGhRepo = async (projectData) => {
  try {
    const myHeaders: Headers = new Headers();
    myHeaders.append("X-GitHub-Api-Version", "2022-11-28");
    myHeaders.append("accept", "application/vnd.github+json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    console.log(projectData.projectData)
    const data = projectData.projectData
    const { repo, description, campaignType } = data;
    const raw: string = JSON.stringify({
      name: repo,
      description: description,
      include_all_branches: false,
      private: false,
      owner: "AdanTouchPoint",
    });
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(repoSelector(campaignType.toUpperCase()), requestOptions);
    console.log(response)
    if (response.status !== 201) {
      throw new Error(`Error creating repository: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const setPermissions = async (name: string) => {
  try {
    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    const raw: string = JSON.stringify({
      owner: "AdanTouchPoint",
      repo: name,
      default_workflow_permissions: "write",
    });

    const requestOptions: RequestInit = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      `https://api.github.com/repos/AdanTouchPoint/${name}/actions/permissions/workflow`,
      requestOptions
    ); // Realiza la petición al endpoint
    return response; // Retorna los datos de la respuesta en formato JSON
  } catch (error) {
    throw new Error(error.message);
  }
};

const CreateRepoLabel = async (name: string) => {
  try {
    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    const raw: string = JSON.stringify({
      name: `deploying ${name}`,
      description: `label to deploy ${name}`,
      color: "f29513",
    });
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      `https://api.github.com/repos/AdanTouchPoint/${name}/labels`,
      requestOptions
    ); // Realiza la petición al endpoint
    return response; // Retorna los datos de la respuesta en formato JSON
  } catch (error) {
    throw new Error(error.message);
  }
};
const getRepoInfo = async (name: string) => {
  try {
    const myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = fetch(
    `https://api.github.com/repos/AdanTouchPoint/${name.replace(/ /g, "-")}`,
    requestOptions
  );
  return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteRepo = async (name: string) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const requestOptions: RequestInit = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://api.github.com/repos/AdanTouchPoint/${name.replace(/ /g, "-")}`,
      requestOptions
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { createGhRepo, setPermissions, CreateRepoLabel, getRepoInfo, deleteRepo };
