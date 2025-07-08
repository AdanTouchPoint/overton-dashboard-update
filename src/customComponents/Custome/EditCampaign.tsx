import React, { useState, useEffect } from "react";
import { useAuth } from "payload/components/utilities";
import { DefaultTemplate } from "payload/components/templates";
import { getCampaigns, getCampaignsById } from "../../lib/requestsAPI";
import { campaignEditData } from "../interfaces";
import { formSelector } from "../../lib/misc";
import SubmissionBuilderFormRefactored from "./SubmissionBuilder/NoAI/SubmissionBuilderForm_Refactored";
import PoliticallDirectFormRefactored from "./Politicall/NoAI/PoliticallDirectForm_Refactored";
import AlertthePressFormRefactored from "./AlertthePress/NoAI/AlertthePressForm_Refactored";
import { CampaignFlowProvider, useCampaignFlow } from './context/CampaignFlowContext';

const baseClass = "after-dashboard";
import "./edit-campaign.css";
const campaignTypes = ["SB", "PD", "AP"];
const EditCampaingView: React.FC = () => {
  const [renderCamp, setRenderCamp] = useState();
  const user = useAuth();
  const userId = user.user.id;
  const [activeView, setActiveView] = useState("all");
  const [campaignEditData, setCampaignEditData] = useState<campaignEditData>();
  const [mode, setMode] = useState("edit");
  const [projectData, setProjectData] = useState({});
  
  const edit = async (id) => {
    console.log(`[1] Starting edit for ID: ${id}`);
    try {
      const payload = await getCampaignsById(id);
      console.log('[2] API Payload received:', payload);

      const campaignData = payload?.data?.docs[0]; // Corrected data extraction
      if (!campaignData) {
        console.error('[Error] No campaign document found in payload');
        return;
      }
      console.log('[3] Extracted campaign data:', campaignData);

      campaignData.projectData = { ...campaignData?.projectData, id: id };
      console.log('[4] Campaign type to check:', campaignData?.projectData?.campaignType);

      const formType = formSelector(campaignData?.projectData?.campaignType);
      console.log(`[5] formSelector result (formType): ${formType}`);

      setCampaignEditData(campaignData);
      setProjectData(campaignData?.projectData);
      setActiveView(formType ? formType : "all");
      console.log(`[6] States updated. activeView is now: ${formType || 'all'}`);
    } catch (error) {
      console.error('[Error] An error occurred during the edit process:', error);
    }
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
            <div onClick={() => edit(el.id)} key={el.id ? el.id : ""} className="campaign-row" id={el.id ? el.id : ""}>
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
    <>
    {activeView === "all" && renderAllData(campaignTypes, renderCamp)}
      {activeView === "SB" && (
        <SubmissionBuilderFormRefactored
          mode={mode}
          setMode={setMode}
          campaignEditData={campaignEditData}
          projectData={projectData}
          setActiveView={setActiveView}
          userId={userId}
          setProjectData={setProjectData}
        />
      )}
      {activeView === "PD" && (
        <PoliticallDirectFormRefactored
          mode={mode}
          setMode={setMode}
          campaignEditData={campaignEditData}
          projectData={projectData}
          setActiveView={setActiveView}
          userId={userId}
          setProjectData={setProjectData}
        />
      )}
      {activeView === "AP" && (
        <AlertthePressFormRefactored
          mode={mode}
          setMode={setMode}
          campaignEditData={campaignEditData}
          projectData={projectData}
          setActiveView={setActiveView}
          userId={userId}
          setProjectData={setProjectData}
        />
      )}
    </>
  );
};

const EditCampaing: React.FC = () => {
  return (
    <DefaultTemplate>
      <CampaignFlowProvider>
        <EditCampaingView />
      </CampaignFlowProvider>
    </DefaultTemplate>
  );
}
export default EditCampaing;
