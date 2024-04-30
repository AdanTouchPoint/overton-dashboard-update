import React, {Dispatch, SetStateAction,FormEvent} from 'react';
import { useAuth } from 'payload/components/utilities';
import { createCampaing } from '../../lib/createCampaing';
import { CreateRepoLabel } from '../../lib/gitHubRequests';
import { hideForms } from '../../lib/hideComponents';
import { MainFormProps, ProjectData } from '../interfaces';
const baseClass = 'after-dashboard';


const MainForm: React.FC<MainFormProps> = ({setHideSB,setHidePD,setHideAP,setProjectData,projectData,setHideMainForm,hideMainForm}) => {
const user = useAuth()
const click = async () => {
  //Funcion que crea repo y proyecto en vercel dependiendo el tipo de proyecto elegido
  //si todo OK oculta MainForm y Muestra el Form correspondiente el tipo elegid
 //const campaing = await createCampaing(projectData)
 console.log(projectData) 
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
      <div hidden={hideMainForm} className="gutter--left gutter--right collection-list__wrap">
      <br/>
      <p>
        Choose Campaing Type:
        </p>
        <div>option 1<input onChange={handleOnChange} name='campaingType' value={'SB'} type='checkbox'></input></div>
        <div>option 2<input onChange={handleOnChange} name='campaingType' value={'PD'} type='checkbox'></input></div>
        <div>option 3<input onChange={handleOnChange} name='campaingType' value={'AP'} type='checkbox'></input></div>
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