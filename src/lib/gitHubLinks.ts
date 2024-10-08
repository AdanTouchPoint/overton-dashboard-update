import { GHLinks } from "../customComponents/interfaces"

const GHLinks :  GHLinks = { 
    AP: "https://api.github.com/repos/AdanTouchPoint/alrert_the_press_NOAI/generate",

    PD: "https://api.github.com/repos/AdanTouchPoint/overtonredesignNOAI/generate",
    
    SB: "https://api.github.com/repos/AdanTouchPoint/originalBuilderNoAI/generate"
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