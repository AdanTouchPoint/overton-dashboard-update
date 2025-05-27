import payload from "payload";
export async function createCampaign(query) {
  console.log(query, "here starts");
    const formType = query.projectData.campaignType.toUpperCase();
  const data = await payload.create({
    collection: formType, // change to campaignType for dynamic search
    data: query,
    overrideAccess: true,
  });
  return data;
}
export async function updateCampaign(query) {
  console.log(query, "here starts update");
  const data = await payload.update({
    collection: `${query.projectData.campaignType}`, // change to campaignType for dynamic search
    data: query,
    overrideAccess: true,
    where: {
      id: {
        equals: query.projectData.id, // cambiar a campaign id
      },
    },
  });
  console.log(data);
  return data;
}
export const getAllCampaigns = async (query) => {
  const findOptions = {
    sort: "-updatedAt",
    limit: 0,
    depth: 0,
    where: {
      clientId: {
        equals: query.info,
      },
    },
  };
  // Ejecutar consultas en paralelo
  const [SB, AP, PD] = await Promise.all([
    payload.find({ ...findOptions, collection: "SB" }),
    payload.find({ ...findOptions, collection: "AP" }),
    payload.find({ ...findOptions, collection: "PD" }),
  ]);
  return { SB, AP, PD };
};
export const getCampaignById = async (query) => {
  const options = {
    sort: "-updatedAt",
    limit: 0,
    depth: 0,
    overrideAccess: true,
    where: {
      id: {
        equals: query.info? query.info : query.id,
      },
    },
  };
  const getData = async () => {
    const dataSB = await payload.find({ ...options, collection: "SB" });
    if (dataSB.docs.length > 0) {
      return dataSB;
    }
    const dataAP = await payload.find({ ...options, collection: "AP" });
    if (dataAP.docs.length > 0) {
      return dataAP;
    }
    const dataPD = await payload.find({ ...options, collection: "PD" });
    if (dataPD.docs.length > 0) {
      return dataPD;
    }
    return null; // Si no se encuentra ningún dato, devuelve null
  };
  const campaign = await getData();
  if (!campaign) {
    throw new Error("Campaign not found");
  }
  return campaign;
};
export const deleteCampaign = async (query) => {
  const collection = query.projectData.campaignType.toUpperCase(); 
  const id = query.projectData.id;
  const result = await payload.delete({
    collection,
    where: {
      id: {
        equals: id,
      },
    },
    overrideAccess: true,
  });
  return result;
};
