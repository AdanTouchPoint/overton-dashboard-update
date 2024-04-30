import React,{useState} from 'react';
import { useAuth } from 'payload/components/utilities';
import { DefaultTemplate } from 'payload/components/templates';
const baseClass = 'after-dashboard';

const EditCampaing: React.FC = () => {
const user = useAuth()
	return (
    <DefaultTemplate>
		<div className="gutter--left gutter--right collection-list__wrap">
            <p>EDIT</p>
		</div> 
    </DefaultTemplate>
	);
};

export default EditCampaing;