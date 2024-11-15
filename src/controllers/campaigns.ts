import payload from "payload";
export async function createCampaign (query){
  console.log(query, 'here starts')
  const data = await payload.create({
    collection: `${query.projectData.campaignType}`, // change to campaignType for dynamic search
    data:query,
    overrideAccess: true,
  });
  return data;
};
export async function updateCampaign (query){
  console.log(query, 'here starts update')
  const data = await payload.update({
    collection: `${query.projectData.campaignType}`, // change to campaignType for dynamic search
    data:query,
    overrideAccess: true,
    where: {
      id: {
        equals: query.id,// cambiar a campaign id
      },
    },
  });
  console.log(data)
  return data;
};
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
export const getCampaignById= async(query) => {
  const data = await payload.find({
    collection: `${query.campaignType}`, // change to campaignType for dynamic search
    overrideAccess: true,
    where:{
      clientId: {
        equals: query.clientId,
      },
      and: [
        {
          id: {
            equals: query.id,
          },
        },
      ],
    }
  });
}


