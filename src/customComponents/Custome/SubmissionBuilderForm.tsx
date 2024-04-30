import React from 'react';
import { useAuth } from 'payload/components/utilities';
const baseClass = 'after-dashboard';
import { SBprops } from '../interfaces';
const SubmissionBuilderForm: React.FC<SBprops> = ({hideSB , setHideSuccess}) => {
const user = useAuth()
	return (
	<div hidden={hideSB} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        SubmissionBuilderForm
        </p>
        <div>title<input type='text'></input></div>
        <div>description<input type='text'></input></div>
        <div>button<input type='text'></input></div>
      </div>
	</div> 

	);
};

export default SubmissionBuilderForm;