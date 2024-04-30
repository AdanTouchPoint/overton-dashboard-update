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
        AlertthePressForm
        </p>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>button<input type='text'></input></div>
      </div>
	</div> 

	);
};

export default AlertthePressForm;