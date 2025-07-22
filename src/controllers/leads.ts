import payload from "payload";
export async function createLeads (query){
  const data = await payload.create({
    collection: "leads", 
    data:query,
    overrideAccess: true,
  });
  return data;
};
export async function countLeads (query){
  const data = await payload.count({
    collection: "leads",
    where: {
      projectId: {
        equals: query.id,
      },
    },
    overrideAccess: true,
  });
  return data;
}
export async function countEmailSent (query){
  const data = await payload.count({
    collection: "leads",
    where: {
      projectId: {
        equals: query.id,
      },
      sended: {
        equals: true,
      },
    },

    overrideAccess: true,
  });
  return data;
}