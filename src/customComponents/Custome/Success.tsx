import React,{useEffect} from 'react';
import { useAuth } from 'payload/components/utilities';
import { SuccessProps } from '../interfaces';
import {getProjectInfo} from '../../lib/vercelRequests'
const baseClass = 'after-dashboard';

const Success: React.FC<SuccessProps> = ({projectData, setProjectData, hideSuccess, setHideSuccess}) => {
const user = useAuth()
useEffect(()=>{
  console.log(getProjectInfo(projectData.repo) )
  },[])
	return (
	<div hidden={hideSuccess} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        <p>
            Campaing was created Successfully!
        </p>
        <p>URL: </p>
      </div>
	</div> 

	);
};

export default Success;