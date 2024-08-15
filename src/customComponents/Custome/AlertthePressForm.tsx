import React from 'react';
import { useAuth } from 'payload/components/utilities';
import { APprops } from '../interfaces';
const baseClass = 'after-dashboard';

const AlertthePressForm: React.FC<APprops> = ({hideAP, setHideSuccess}) => {
const user = useAuth()
	return (
	<div hidden={hideAP} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Alert the Press Form
        </p>
       <span> 
        <h3>Main Page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>color</div>
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
        </span>
        <span> 
        <h3>ThankYou Page</h3>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>instructions<input type='text'></input></div>
        </span>
        <span>message email, message tweet, tym</span>
      </div>
	</div> 

	);
};

export default AlertthePressForm;