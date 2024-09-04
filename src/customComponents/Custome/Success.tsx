import React,{useEffect,useState} from 'react';
import { useAuth } from 'payload/components/utilities';
import { SuccessProps } from '../interfaces';
import {getRepoInfo} from '../../lib/gitHubRequests'
import './loading.css'
import { createCampaign } from '../../controllers/campaigns';
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
    <div>Success!</div>
  )
}
 useEffect( () => {
const fetchInfo = async () => {
const data = await getRepoInfo('popo')
const urlDeploy= await data.json()
setProjectData({
  ...projectData,
  homepage: urlDeploy.homepage
})
createCampaign 
}
fetchInfo()
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