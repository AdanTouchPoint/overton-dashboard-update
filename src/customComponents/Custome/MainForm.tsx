import React, {FormEvent,useId,useEffect} from 'react';
import { useAuth } from 'payload/components/utilities';
import { hideForms } from '../../lib/hideComponents';
import { MainFormProps, ProjectData } from '../interfaces';
import { createCampaign } from '../../lib/createCampaign';
import { postCampaignData } from '../../lib/requestsAPI';
const baseClass = 'after-dashboard';
const MainForm: React.FC<MainFormProps> = ({setProjectData,projectData,setErr,err,setActiveForm}) => {
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
useEffect(() => {
  const data  : ProjectData =  {
    ...projectData,
    clientId: userId
  }
  return setProjectData(data)
}, []);

  const click = async () => {
  try {
  const validate = await verifyInputs(projectData)
  //añadir request para guardar en BD
    const data = await postCampaignData(projectData)
    const id = await  data.data.id
    setProjectData({
      ...projectData,
      id: id 
    })
    await setActiveForm(projectData.campaignType)
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
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
      <p>
        Choose Campaing Type:
        </p>
        <div>option 1<input onChange={handleOnChange} name='campaignType' value={'SB'} type='checkbox'></input></div>
        <div>option 2<input onChange={handleOnChange} name='campaignType' value={'PD'} type='checkbox'></input></div>
        <div>option 3<input onChange={handleOnChange} name='campaignType' value={'AP'} type='checkbox'></input></div>
      <p>
        Campaing Info
      </p>
      <div>
        <label>Name:</label>
        <input name='repo' onChange={handleOnChange} type="text" />
      </div>
      <div>
        <label>Description:</label>
        <input name='description' onChange={handleOnChange} type="text" />
      </div>
      <div>
        <label>Title:</label>
        <input name='title' onChange={handleOnChange} type="text" />
      </div>
      <button onClick={click}>Next</button>
      </div>
		</div> 
	);
};

export default MainForm;