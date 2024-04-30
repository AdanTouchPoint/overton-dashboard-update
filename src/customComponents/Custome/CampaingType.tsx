import React from 'react';
import { useAuth } from 'payload/components/utilities';

const baseClass = 'after-dashboard';

const CampaingType = () => {

const user = useAuth()


console.log(user.user.gtagUrl)
	return (
	<div  className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
        Choose Campaing Type:
        </p>
        <div>option 1<input type='checkbox'></input></div>
        <div>option 2<input type='checkbox'></input></div>
        <div>option 3<input type='checkbox'></input></div>
      </div>
	</div> 

	);
};

export default CampaingType;