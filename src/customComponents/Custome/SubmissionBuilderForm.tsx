import React, {FormEvent,useEffect} from 'react';
const baseClass = 'after-dashboard';
import {createCampaign} from '../../lib/createCampaign'
import { SBprops, ProjectData } from '../interfaces';

const SubmissionBuilderForm: React.FC<SBprops> = ({projectData, setProjectData, hideSB, setHideSuccess,setErr,err, setHideAP,setHideSB,setHidePD}) => {
const handleOnChange = (event: FormEvent<HTMLInputElement>)  => {
  const info : ProjectData = {
    ...projectData,
    [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
  }
  return setProjectData(info)
}
const click = async () => {
  const data = await  createCampaign(projectData,setErr,setHideSuccess,setHideSB,setHideAP,setHidePD)
 }
	return (
	<div hidden={hideSB} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Submission Builder Form
        </p>
       <span> 
        <h3>Main form</h3>
        <div>title<input name='mftitle' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='mfdescription' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>questions page</h3>
        <div>title<input name='qptitle' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='qpinstructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>privacy page</h3>
        <div>title<input name='pptitle' onChange={handleOnChange} type='text'></input></div>
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

export default SubmissionBuilderForm;