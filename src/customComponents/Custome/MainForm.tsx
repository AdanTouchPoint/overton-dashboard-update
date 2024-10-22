import React, {FormEvent,useEffect} from 'react';
import "./sb.css"
import { useAuth } from 'payload/components/utilities';
import { MainFormProps, ProjectData } from '../interfaces';
import { postCampaignData } from '../../lib/requestsAPI';
import sbImage from '../assets/SBImage.png'
import pdImage from '../assets/PDImage.png'
import apImage from '../assets/APImage.png'


const baseClass = 'after-dashboard';
const MainForm: React.FC<MainFormProps> = ({setErr,err,setActiveForm,projectData,setProjectData}) => {
const  user = useAuth();
const userId = user.user.id

const verifyInputs = ( projectData ) => {
  if (
    !projectData?.campaignType?.trim() || 
    !projectData?.repo?.trim() || 
    !projectData?.description?.trim() || 
    !projectData?.title?.trim()
  )
    { setErr(true)
    throw new Error("Llena todos los campos"); 
  }

}
  const click = async () => {
  try {
  const validate = await verifyInputs(projectData)
  //añadir request para guardar en BD
    const prepareData= { projectData, clientId: userId}
    const data = await postCampaignData(prepareData)
    const id = await  data.data.id
    const payload = {
      ...projectData,
      id: id 
    }
    setProjectData(payload)
    setActiveForm(projectData.campaignType)
    
} catch (error) {
    throw new Error (error)
  }
}
const handleOnChange = (event: FormEvent<HTMLInputElement>)  => {
  const info : ProjectData = {
    ...projectData,
    [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
  }
  return setProjectData(info)
} 
	return (
<div className={baseClass}>
  <div className="gutter--left gutter--right collection-list__wrap form-container">
    <br />
    <p className="section-title">Choose Campaign Type:</p>
    <div className="campaign-options">
      <div className="campaign-card">
        <input
          onChange={handleOnChange}
          name="campaignType"
          value="SB"
          type="checkbox"
          id="campaign-sb"
        />
        <label htmlFor="campaign-sb">
          <img src={sbImage} alt="Option 1 Image" />
          <h3>Option 1</h3>
          <p>Brief description of Option 1.</p>
        </label>
      </div>

      <div className="campaign-card">
        <input
          onChange={handleOnChange}
          name="campaignType"
          value="PD"
          type="checkbox"
          id="campaign-pd"
        />
        <label htmlFor="campaign-pd">
          <img src={pdImage} alt="Option 2 Image" />
          <h3>Option 2</h3>
          <p>Brief description of Option 2.</p>
        </label>
      </div>

      <div className="campaign-card">
        <input
          onChange={handleOnChange}
          name="campaignType"
          value="AP"
          type="checkbox"
          id="campaign-ap"
        />
        <label htmlFor="campaign-ap">
          <img src={apImage} alt="Option 3 Image" />
          <h3>Option 3</h3>
          <p>Brief description of Option 3.</p>
        </label>
      </div>
    </div>

  </div>
</div>

  
	);
};

export default MainForm;