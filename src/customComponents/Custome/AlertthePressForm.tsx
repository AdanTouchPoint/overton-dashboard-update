import React, {FormEvent,useEffect} from 'react';
import { APprops, ProjectData } from '../interfaces';
import {createCampaign} from '../../lib/createCampaign'
const baseClass = 'after-dashboard';
const AlertthePressForm: React.FC<APprops> = ({projectData, setProjectData, hideAP, setHideSuccess,setErr,err,setHideAP,setHideSB,setHidePD}) => {
const handleOnChange = (event: FormEvent<HTMLInputElement>)  => {
  const info : ProjectData = {
    ...projectData,
    [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
  }
  return setProjectData(info)
}
const click = async () => {
  const data = await  createCampaign(projectData,setErr,setHideSB,setHideAP,setHidePD,setProjectData)
  if(data === true ){
    setHideSuccess(false)
  }
  }
	return (
	<div hidden={hideAP} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Alert the Press Form
        </p>
       <span> 
        <h3>Main Form</h3>
        <div>title<input name='mftitle' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='mfdescription' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>email form</h3>
        <div>title<input name='eftitle' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='efdescription' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='efinstructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>reviewEmail page</h3>
        <div>title<input name='reptitle' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='repinstructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>ThankYou Page</h3>
        <div>title<input name='typtitle' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='typdescription' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='typinstructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <button onClick={click}>Create</button>
      </div>
	</div> 

	);
};

export default AlertthePressForm;