import React,{useEffect,useState} from 'react';
import { useAuth } from 'payload/components/utilities';
import { SuccessProps } from '../interfaces';
import {getRepoInfo} from '../../lib/gitHubRequests'
import './loading.css'
import { postCampaignData } from '../../lib/requestsAPI';
const baseClass = 'after-dashboard';

const Success: React.FC<SuccessProps> = ({projectData, setProjectData, hideSuccess, setHideSuccess}) => {
const [loading, setLoading] = useState(false) 
const user = useAuth()
const renderWaitMessage = () => {
  return(
    <>
    <h1>Procesando...</h1>
    <p>Esto tomara alrededor de 50 segundos , por favor espera.</p>
    <div className='loader'>
    </div>
    </>
  )
}
const renderSuccessMessage = () => {
  return (
    <div>
      <h1>Success!</h1>
       <h2>URL :{projectData.homepage} </h2>
    </div>
   
  )
}
 useEffect( () => {
const fetchInfo = async (projectData) => {
const data = await getRepoInfo(projectData?.name)
const urlDeploy= await data.json()
if ( !urlDeploy.homepage) {
  setTimeout(async () => {
    const data = await getRepoInfo(projectData?.name)
    const urlDeploy= await data.json()
   await setProjectData({
      ...projectData,
      homepage: urlDeploy.homepage
    })
    return postCampaignData(projectData) 
  }, 5000);
}
setProjectData({
  ...projectData,
  homepage: urlDeploy.homepage
})
return postCampaignData(projectData)
}
setLoading(true)
setTimeout(() => {
  fetchInfo(projectData)
  setLoading(false) 
}, 60000);
  // si el deploy fue exitoso despues de 1 minuto , preparar data para guardar en bd
  }, [] )
  console.log(projectData)
	return (
	<div hidden={hideSuccess} className={baseClass}>
      <div className="gutter--left gutter--right collection-list__wrap">
      <br/>
        { loading && renderWaitMessage() }
        { !loading && renderSuccessMessage() }
      </div>
	</div> 

	);
};

export default Success;