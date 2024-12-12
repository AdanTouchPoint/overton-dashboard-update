import payload from "payload";
export async function createLeads (query){
  const data = await payload.create({
    collection: "leads", 
    data:query,
    overrideAccess: true,
  });
  return data;
};