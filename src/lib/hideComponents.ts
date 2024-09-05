import { ProjectData } from "../customComponents/interfaces";

const hideForms = async (projectData: ProjectData,setHideSB ,setHidePD,setHideAP,setHideMainForm) => {
    const {campaignType} = projectData;
    console.log(campaignType)
    campaignType === 'SB' ? setHideSB(false) : null
    campaignType === 'PD' ? setHidePD(false) : null
    campaignType === 'AP' ? setHideAP(false) : null
    setHideMainForm(true)
  }
const hideElements = (state) => {
  return 
}
export {
    hideForms
}