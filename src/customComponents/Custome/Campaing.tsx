import React,{useState} from 'react';
import { useAuth } from 'payload/components/utilities';
import { DefaultTemplate } from 'payload/components/templates';
import MainForm from './MainForm';
import SubmissionBuilderForm from './SubmissionBuilderForm';
import PoliticallDirectForm from './PoliticallDirectForm';
import AlertthePressForm from './AlertthePressForm';
import Success from './Success';
import {ProjectData} from '../interfaces'
const baseClass = 'after-dashboard';

const Campaing: React.FC = () => {  
const user = useAuth()
//Estados para ocultar forms
const [hideMainForm,setHideMainForm] =useState(false)
const [hideSB,setHideSB] =  useState(true)
const [hidePD, setHidePD] = useState(true)
const [hideAP, setHideAP] = useState(true)
const [hideSuccess,setHideSuccess] = useState(true)
const [projectData,setProjectData]= useState<ProjectData>()
	return (
    <DefaultTemplate>
		<div className={baseClass}>
      <MainForm 
        setHideMainForm={setHideMainForm}
        hideMainForm={hideMainForm}
        projectData={projectData}
        setProjectData={setProjectData}
        setHideSB= {setHideSB}
        setHidePD={setHidePD}
        setHideAP={setHideAP}
      />
      <SubmissionBuilderForm 
        hideSB={hideSB}
        setHideSuccess={setHideSuccess}
      />
      <PoliticallDirectForm 
        hidePD={hidePD}
        setHideSuccess={setHideSuccess}
      />
      <AlertthePressForm 
        hideAP={hideAP}
        setHideSuccess={setHideSuccess}
      />
      <Success
        hideSuccess={hideSuccess}
        setHideSuccess={setHideSuccess}
      />
		</div> 
    </DefaultTemplate>
	);
};

export default Campaing;