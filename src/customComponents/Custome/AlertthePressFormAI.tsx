import React from 'react';
import { useAuth } from 'payload/components/utilities';
const baseClass = 'after-dashboard';
import { SBprops } from '../interfaces';
const AlertthePressFormAI: React.FC<SBprops> = ({projectData, setProjectData, hideSB , setHideSuccess}) => {
const user = useAuth()
	return (
	<div hidden={hideSB} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Alert the Press AI Form
        </p>
       <span> 
        <h3>Main Page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        </span>
        <span> 
        <h3>emailAI page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>instructions<input type='text'></input></div>
        </span>
        <span> 
        <h3>email page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>instructions<input type='text'></input></div>
        </span>
        <span> 
        <h3>reviewEmail page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>instructions<input type='text'></input></div>
        </span>
        <span> 
        <h3>ThankYou Page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>instructions<input type='text'></input></div>
        </span>
      </div>
	</div>  
	);
};

export default AlertthePressFormAI;