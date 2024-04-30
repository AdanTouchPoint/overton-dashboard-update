import { MainFormProps, ProjectData } from "../customComponents/interfaces";

const hideForms  = async (projectData: ProjectData,setHideSB ,setHidePD,setHideAP,setHideMainForm)  => {
    const {campaingType} = projectData;
    console.log(campaingType)
    campaingType === 'SB' ? setHideSB(false) : null
    campaingType === 'PD' ? setHidePD(false) : null
    campaingType === 'AP' ? setHideAP(false) : null
    setHideMainForm(true)
  }

export {
    hideForms
}