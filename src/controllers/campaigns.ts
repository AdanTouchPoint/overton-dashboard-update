import payload from "payload";

export const createCampaign = async (query) => {
  const {
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
      url: homepage
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
  };
  const PDObj = {
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
  const leads = await payload.create({
    collection: `${campaignType}`, // change to campaignType for dynamic search
    data: {
      // required
      mainform: {
        mainTitle: mftitle,
        description: mfdescription,
      },
    },
    overrideAccess: true,
  });
  return leads;
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


