import { GHLinks } from "../customComponents/interfaces"

const GHLinks :  GHLinks = { 
    AP: "https://api.github.com/repos/AdanTouchPoint/moira-template/generate",

    PD: "https://api.github.com/repos/AdanTouchPoint/emailbuilder-demo/generate",
    
    SB: "https://api.github.com/repos/AdanTouchPoint/politicall-mrBeaton/generate"
}

const repoSelector = (campaingType: string) : string => {
    if (campaingType === 'SB') {
        return GHLinks.SB
    }
    if (campaingType === 'AP') {
        return GHLinks.AP
    }
    if (campaingType === 'PD') {
        return GHLinks.PD
    }
}
export default repoSelector