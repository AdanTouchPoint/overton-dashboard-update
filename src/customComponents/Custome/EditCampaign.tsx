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
import "./Details/Details"
import "./edit-campaign.css";
import CampaignDetails from "./Details/Details";
const baseClass = "after-dashboard";
const campaignTypes = ["SB", "PD", "AP"];
const EditCampaingView: React.FC = () => {
  const [renderCamp, setRenderCamp] = useState();
  const user = useAuth();
  const userId = user.user.id;
  const [activeView, setActiveView] = useState("all");
  const [campaignEditData, setCampaignEditData] = useState<campaignEditData>();
  const [mode, setMode] = useState("edit");
  const [projectData, setProjectData] = useState({});
  const [viewDetails, setViewDetails] = useState(false);
  const edit = async (id) => {
    try {
      const payload = await getCampaignsById(id);
      const campaignData = payload?.data?.docs[0]; // Corrected data extraction
      if (!campaignData) {
        console.error('[Error] No campaign document found in payload');
        return;
      }
      campaignData.projectData = { ...campaignData?.projectData, id: id };
      const formType = formSelector(campaignData?.projectData?.campaignType);
      setCampaignEditData(campaignData);
      setProjectData(campaignData?.projectData);
      setActiveView(formType ? formType : "all");
    } catch (error) {
      console.error('[Error] An error occurred during the edit process:', error);
    }
  };
  const view = (id)=> {
    // search the id  on renderCamp 
    setActiveView("Details");
  }
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

        {/* Column Headers */}
        <div className="campaign-columns-header">
          <div>Title</div>
          <div>URL</div>
          <div>Details</div>
          <div>Edit</div>
          <div>Status</div>
        </div>
        {renderCamp?.data?.[ele]?.docs?.length > 0 ? (
          renderCamp.data[ele].docs.map((el: any) => (
            <div key={el.id} className="campaign-row">
              <div>
                <p className="campaign-title">
                  {el.projectData.title || "Sin título"}
                </p>
              </div>
              <div>
                <a href={el.projectData.homepage || "#"} target="_blank">{el.projectData.homepage || "Sin URL"}</a>
              </div>
              <div>
                <button onClick={() => view(el.id)} className="view-button">VIEW</button>
              </div>
              <div>
                <button onClick={() => edit(el.id)} className="edit-button">
                  EDIT
                </button>
              </div>
              <div>
                <p>{el.projectData.homepage ? "online" : "offline"}</p>
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
      {activeView === "Details" && (
        <CampaignDetails
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
