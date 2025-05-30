import React, { useState, useEffect } from "react";
import { useAuth } from "payload/components/utilities";
import { DefaultTemplate } from "payload/components/templates";
import { getCampaigns, getCampaignsById } from "../../lib/requestsAPI";
import { campaignEditData } from "../interfaces";
import SubmissionBuilderForm from "./SubmissionBuilder/NoAI/SubmissionBuilderForm";
import  {formSelector} from "../../lib/misc";
const baseClass = "after-dashboard";
import "./edit-campaign.css";
const campaignTypes = ["SB", "PD", "AP"];
const EditCampaing: React.FC = () => {
  const [renderCamp, setRenderCamp] = useState();
  const user = useAuth();
  const userId = user.user.id;
  const [activeView, setActiveView] = useState("all");
  const [campaignEditData, setCampaignEditData] = useState<campaignEditData>();
  const [mode, setMode] = useState("create");
  const [projectData, setProjectData] = useState({});
  
  const edit = async (e) => {
    e.preventDefault();
    const id = e.target.id;
    const payload = await getCampaignsById(id);
    const data = payload?.data?.docs[0];
    data.projectData = { ...data?.projectData, id: id };
    const formType = formSelector(data?.projectData?.campaignType)
    setCampaignEditData(data);
    setProjectData(data?.projectData);
    setActiveView(formType ? formType : "all");
    //setMode("edit");
  };

  useEffect(() => {
    if (userId) {
      // Asegúrate de que userId esté definido antes de ejecutar la llamada
      const fetchCampaigns = async () => {
        try {
          const data = await getCampaigns(userId);
          console.log(data, "fetch");
          setRenderCamp(data);
        } catch (error) {
          console.error("Error fetching campaigns:", error);
        }
      };
      fetchCampaigns();
    }
  }, [userId]); // Añadir userId como dependencia

  const renderAllData = (campaignTypes, renderCamp) => {
    return campaignTypes.map((ele) => (
      <div
        key={ele}
        className="gutter--left gutter--right collection-list__wrap"
      >
        <p>EDIT {ele}</p>

        {/* Encabezados de columnas */}
        <div className="campaign-columns-header">
          <div>Title</div>
          <div>Description</div> {/* Columna nueva 1 */}
          <div>Type</div> {/* Columna nueva 2 */}
        </div>
        {renderCamp?.data?.[ele]?.docs?.length > 0 ? (
          renderCamp.data[ele].docs.map((el: any) => (
            <div onClick={edit} key={el.id ? el.id : ""} className="campaign-row" id={el.id ? el.id : ""}>
              {/* Contenido de las columnas */}
              <div>
                <p id={el.id ? el.id : ""} className="campaign-title">
                  {el.projectData.title || "Sin autor"}
                </p>
              </div>

              {/* Nueva columna 1 - Autor */}
              <div>
                <p id={el.id ? el.id : ""}>{el.projectData.description || "Sin autor"}</p>
              </div>

              {/* Nueva columna 2 - Fecha */}
              <div>
                <p id={el.id ? el.id : ""}>{el.projectData.campaignType || "Sin autor"}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No campaigns found</p>
        )}
      </div>
    ));
  };
  return (
    <DefaultTemplate>
      {activeView === "all" && renderAllData(campaignTypes, renderCamp)}
      {activeView === "SB" && (
        <SubmissionBuilderForm
          mode="edit"
          campaignEditData={campaignEditData}
          projectData={projectData}
          setActiveView={setActiveView}
          userId={userId}
          setProjectData={setProjectData}
        />
      )}
      {activeView === "PD" && console.log("HEllO PD")}
      {activeView === "AP" && console.log("HEllO AP")}
    </DefaultTemplate>
  );
};

export default EditCampaing;
