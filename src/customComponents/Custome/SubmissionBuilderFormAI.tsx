import React, {FormEvent} from 'react';
import { useAuth } from 'payload/components/utilities';
const baseClass = 'after-dashboard';
import { SBprops,ProjectData } from '../interfaces';
const SubmissionBuilderFormAI: React.FC<SBprops> = ({projectData, setProjectData, hideSB , setHideSuccess}) => {
const user = useAuth()
const handleOnChange = (event: FormEvent<HTMLInputElement>)  => {
  const info : ProjectData = {
    ...projectData,
    [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value
  }
  return setProjectData(info)
}
const click = () => {
  setHideSuccess(false)
}
	return (
	<div hidden={hideSB} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Submission Builder AI Form
        </p>
       <span> 
        <h3>Main Page</h3>
        <div>title<input name='mf-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='mf-description' onChange={handleOnChange} type='text'></input></div>
        <div>isntructions<input name='mf-instructions' type='text'></input></div>
        </span>
        <span> 
        <h3>privacy page</h3>
        <div>title<input name='pp-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='pp-description' type='text'></input></div>
        <div>instructions<input name='pp-instructions' type='text'></input></div>
        </span>
        <span> 
        <h3>reviewEmail page</h3>
        <div>title<input name='rep-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='rep-description' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='rep-instructions'  type='text'></input></div>
        </span>
        <span> 
        <h3>ThankYou Page</h3>
        <div>title<input name='typ-title' onChange={handleOnChange} type='text'></input></div>
        <div>description<input name='typ-description' onChange={handleOnChange} type='text'></input></div>
        <div>instructions<input name='typ-instructions' onChange={handleOnChange} type='text'></input></div>
        </span>
        <button onClick={click}>Create</button>
      </div>
	</div>  
	);
};

export default SubmissionBuilderFormAI;