import payload from "payload";
import { ProjectData } from "../customComponents/interfaces";
import { prepareData } from "../lib/createCampaign";
export async function createCampaign (query){

  const data = await payload.create({
    collection: `${query.campaignType}`, // change to campaignType for dynamic search
    data:prepareData(query),
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


