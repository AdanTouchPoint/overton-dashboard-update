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
  console.log("Counting leads for project ID:", query);
  const data = await payload.count({
    collection: "leads",
    where: {
      projectId: {
        equals: query.info,
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
        equals: query.info,
      },
      sended: {
        equals: "true",
      },
    },

    overrideAccess: true,
  });
  return data;
}