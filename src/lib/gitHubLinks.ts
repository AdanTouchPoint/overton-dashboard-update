import { GHLinks } from "../customComponents/interfaces"

const GHLinks :  GHLinks = { 
    AP: "https://github.com/AdanTouchPoint/alrert_the_press_NOAI/generate",

    PD: "https://github.com/AdanTouchPoint/overtonredesignNOAI/generate",
    
    SB: "https://github.com/AdanTouchPoint/originalBuilderNoAI/generate"
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