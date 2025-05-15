import React,{useState,useEffect} from 'react';
import { useAuth } from 'payload/components/utilities';
import { DefaultTemplate } from 'payload/components/templates';
import { getCampaigns, getCampaignsById } from '../../lib/requestsAPI';
import { campaignEditData } from '../interfaces';
import SubmissionBuilderForm from './SubmissionBuilder/NoAI/SubmissionBuilderForm';
const baseClass = 'after-dashboard';
const campaignTypes=['SB','PD','AP']
const EditCampaing: React.FC = () => {
const [renderCamp,setRenderCamp]= useState()
const user = useAuth()
const userId = user.user.id
const [activeView,setActiveView] = useState('all')
const [campaignEditData,setCampaignEditData] = useState<campaignEditData>()
const [mode,setMode] = useState('')
const [projectData,setProjectData] = useState()
const edit = async (e) => {
	e.preventDefault()
	const id = e.target.innerText  
	const payload = await  getCampaignsById(id)
	const data = payload.data.docs[0]
	data.projectData = { ...data.projectData, id: id }
	setCampaignEditData(data)
	setProjectData(data.projectData)
	
	setActiveView(data.projectData.campaignType)
	
	setMode('edit')
}

useEffect(() => {
    if (userId) {  // Asegúrate de que userId esté definido antes de ejecutar la llamada
      const fetchCampaigns = async () => {
        try {
          const data = await getCampaigns(userId);
		  console.log(data)
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
	  <div key={ele} className="gutter--left gutter--right collection-list__wrap">
		<p>EDIT {ele}</p>
		{renderCamp?.data?.[ele]?.docs?.length > 0 ? (
		  renderCamp.data[ele].docs.map((el: any) => (
			<div key={el.id}>
			  <a onClick={edit} >{el.id}</a>
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
		{activeView === 'all' && renderAllData(campaignTypes,renderCamp)}
		{activeView === 'SB' && 
		(<SubmissionBuilderForm
			mode={mode}
		  	campaignEditData={campaignEditData}
			projectData={projectData}
          />) }
		{activeView === 'PD' && console.log("HEllO PD")}
		{activeView === 'AP' && console.log("HEllO AP")}
	  </DefaultTemplate>
	);
};

export default EditCampaing;