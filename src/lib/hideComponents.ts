import { ProjectData } from "../customComponents/interfaces";

const hideForms = async (projectData: ProjectData,setHideSB ,setHidePD,setHideAP,status) => {
    const {campaignType} = projectData;
    campaignType === 'SB' ? setHideSB(status) : null
    campaignType === 'PD' ? setHidePD(status) : null
    campaignType === 'AP' ? setHideAP(status) : null
}
export {
    hideForms
}