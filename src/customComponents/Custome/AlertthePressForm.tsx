import React, {FormEvent,useEffect} from 'react';
import { useAuth } from 'payload/components/utilities';
import { APprops } from '../interfaces';
import {getProjectInfo} from '../../lib/vercelRequests'
import { ProjectData } from '../interfaces';
import { CreateRepoLabel } from '../../lib/gitHubRequests';
const baseClass = 'after-dashboard';
const AlertthePressForm: React.FC<APprops> = ({projectData, setProjectData, hideAP, setHideSuccess}) => {
const user = useAuth()
const handleOnChange = (event: FormEvent<HTMLInputElement>)  => {
  const info : ProjectData = {
    ...projectData,
    [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
  }
  return setProjectData(info)
}
const click = async () => {
  const deployInfo = await getProjectInfo(projectData.repo)
  console.log(deployInfo)
   setHideSuccess(false)
 }
 useEffect(()=>{
  CreateRepoLabel(projectData.repo) 
  },[])
	return (
	<div hidden={hideAP} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Alert the Press Form
        </p>
       <span> 
        <h3>Main Form</h3>
        <div>title<input name='mf-name' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='mf-description' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>email form</h3>
        <div>title<input name='ef-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='ef-description' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='ef-instructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>reviewEmail page</h3>
        <div>title<input name='rep-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='rep-description' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span> 
        <h3>ThankYou Page</h3>
        <div>title<input name='typ-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='typ-description' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='typ-instructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <span>message email, message tweet, tym</span>
        <button onClick={click}>Create</button>
      </div>
	</div> 

	);
};

export default AlertthePressForm;