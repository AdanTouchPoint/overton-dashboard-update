import React from 'react';
import { useAuth } from 'payload/components/utilities';
import { PDprops } from '../interfaces';
const baseClass = 'after-dashboard';

const PoliticallDirectForm: React.FC<PDprops> = ({hidePD,setHideSuccess}) => {
const user = useAuth()
	return (
	<div hidden={hidePD} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        PoliticallDirectForm
        </p>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>button<input type='text'></input></div>
      </div>
	</div> 

	);
};

export default PoliticallDirectForm;