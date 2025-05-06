import React,{useState,useEffect} from 'react';
import { useAuth } from 'payload/components/utilities';
import { DefaultTemplate } from 'payload/components/templates';
import { getCampaigns, getCampaignsById } from '../../lib/requestsAPI';
const baseClass = 'after-dashboard';
const campaignTypes=['SB','PD','AP']
const EditCampaing: React.FC = () => {
const [renderCamp,setRenderCamp]= useState()
const user = useAuth()
const userId = user.user.id

const edit = async (e) => {
	e.preventDefault()
	const id = e.target.innerText  
	const payload = await  getCampaignsById(id)
	console.log(payload)
	
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
		{renderAllData(campaignTypes,renderCamp)}
	  </DefaultTemplate>
	);
};

export default EditCampaing;