import payload from "payload";
import { ProjectData } from "../customComponents/interfaces";

export async function createCampaign (query){
  const {
    clientId,
    campaignType,
    description,
    mfdescription,
    mftitle,
    repinstructions,
    reptitle,
    repo,
    title,
    typdescription,
    typinstructions,
    typtitle,
    homepage
  } = query;
  const SBObj = {
    campaignData: {
      name: repo,
      title:title,
      description: description,
      url: homepage,
      clientId: clientId
    },
    mainform: {
      mainTitle: mftitle,
      instructions: mfdescription,
    },
    questions: {
      title: query?.qptitle,
      instructions: query?.qpinstructions,
    },
    privacy: {
      title: query?.pptitle,
    },
    emailPreview: {
      title: reptitle,
      instructions: repinstructions,
    },
    successPage: {
      title: typtitle,
      description: typdescription,
      instructions: typinstructions,
    },
    clientId: clientId
  };
  const PDObj = {
    campaignData: {
      name: repo,
      title:title,
      description: description,
      url: homepage,
      clientId: clientId
    },
    mainform: {
      mainTitle: mftitle,
      description: mfdescription,
    },
    emailform: {
      title: query?.eftitle,
      instructions: query?.efinstructions,
      description: query?.efdescription,

    },
    emailPreview: {
      title: reptitle,
      instructions: repinstructions,
    },
    successPage: {
      title: typtitle,
      description: typdescription,
      instructions: typinstructions,
    },
  };
  const APObj = {
    campaignData: {
      name: repo,
      title:title,
      description: description,
      url: homepage,
      clientId: clientId
    },
    mainform: {
      mainTitle: mftitle,
      description: mfdescription,
    },
    emailform: {
      title: query?.eftitle,
      instructions: query?.efinstructions,
      description: query?.efdescription,
    },
    emailPreview: {
      title: reptitle,
      instructions: repinstructions,
    },
    successPage: {
      title: typtitle,
      description: typdescription,
      instructions: typinstructions,
    },
  };
  const dbSave = () => {
    if (campaignType === "SB") {
      return SBObj;
    }
    if (campaignType === "PD") {
      return PDObj
    }
    if( campaignType === "AP") {
      return APObj
    }
  };
  const data = await payload.create({
    collection: `${campaignType}`, // change to campaignType for dynamic search
    data:dbSave(),
    overrideAccess: true,
  });
  return data;
};

export const getAllCampaign = async (query) => {
  const leads = await payload.find({
    collection: "conversiones",
    sort: "-updatedAt",
    limit: 0,
    depth: 0,
    where: {
      clientId: {
        equals: query.clientId,
      },
    },
  });
  return leads;
};


