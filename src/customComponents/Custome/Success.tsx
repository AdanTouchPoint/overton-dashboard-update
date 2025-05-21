import React, { useEffect, useState } from "react";
import { useAuth } from "payload/components/utilities";
import { SuccessProps } from "../interfaces";
import { getRepoInfo } from "../../lib/gitHubRequests";
import { getProjectInfo } from "../../lib/vercelRequests";
import "./loading.css";
import { updateCampaignData } from "../../lib/requestsAPI";
const baseClass = "after-dashboard";
const Success: React.FC<SuccessProps> = ({ projectData, setProjectData }) => {
  const [loading, setLoading] = useState(true);
  const user = useAuth();
  const renderWaitMessage = () => {
    return (
      <>
        <h1>Procesando...</h1>
        <p>Esto tomara alrededor de 50 segundos , por favor espera.</p>
        <div className="loader"></div>
      </>
    );
  };
  const renderSuccessMessage = () => {
    const content= {projectData: projectData}
    const updateData = updateCampaignData(content);
    return (
      <div>
        <h1>Success!</h1>
        <h2>URL :{projectData.homepage} </h2>
      </div>
    );
  };
  useEffect(() => {
    const fetchInfo = async (projectData) => {
      const data = await getRepoInfo(projectData?.repo);
      const payload = await  getProjectInfo(projectData?.repo)
      const urlDeploy = await data.json();
      if (urlDeploy.homepage) {
        setProjectData({
          ...projectData,
          homepage: urlDeploy.homepage,
          projectId: payload.id,
        });
        setLoading(false);
        return
      }
      setTimeout(() => {
        fetchInfo(projectData);
      }, 35000);
    };
    setLoading(true);
    setTimeout(() => {
      fetchInfo(projectData);
    }, 35000);
    // si el deploy fue exitoso despues de 1 minuto , preparar data para guardar en bd
  }, []);
  return (
    <div className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
        <br />
        {loading && renderWaitMessage()}
        {!loading && renderSuccessMessage()}
      </div>
    </div>
  );
};

export default Success;
