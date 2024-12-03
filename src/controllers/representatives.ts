import payload from "payload";

export const getDivision = async (el) => {
    const { clientId, division } = el;
    console.log(clientId, division);
    const result = await payload.db.collections[
      "representatives"
    ].aggregate([
      { $match: { electorates: el.division } },
      {
        $group: {
          _id: "$email",
          documento: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$documento" } },
    ]);
    //console.log(result)
    return result;
};
export  const getElectorate = async (query) => {
    const { clientId, postcode } = query;
    console.log("here Electorate");
    const result = await payload.db.collections['electorates'].aggregate([
      { $match: { postcode: postcode, division: { $exists: true, $ne: null } } },
      {
        $group: {
          _id: "$division",
          documento: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$documento" } },
    ]);
    console.log(result)
    return result;
};
 export const getRepsByState = async (query) => {
    console.log(query[0].state);
    const result = await payload.db.collections[
      "representatives"
    ].aggregate([
      { $match: { state: query[0]?.state } },
      {
        $group: {
          _id: "$email",
          documento: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$documento" } },
    ]);

    return result;
  };