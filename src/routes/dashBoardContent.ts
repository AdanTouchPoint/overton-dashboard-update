import { Router } from "express";
import { createLeads } from "../controllers/leads";
import {createCampaign, updateCampaign, getAllCampaigns, getCampaignById} from '../controllers/campaigns'
import { ParsedQs } from 'qs'
import {getElectorate,getDivision,getRepsByState, getAllRepresentatives} from "../controllers/representatives"
import { deleteCampaign } from '../controllers/campaigns';
const router = Router();
router.post("/campaign", async (req, res) => {
    try {
      interface MyQuery extends ParsedQs {
        info: string;
      }
      const query = req.query as MyQuery;
      const objReady = JSON.parse(query.info);
      const data = await createCampaign(objReady)
      res.json({
        success: true,
        message: "campaign create done",
        data
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
});
router.put("/updateCampaign", async (req, res) => {
    try {
      const body = req.body;
      if (req.user) {
        body.clientId = req.user.id;
      }
      console.log(body, "update Start")
      const data = await updateCampaign(body)
      res.json({
        success: true,
        message: "campaign update done",
        data
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
});
router.get("/campaign", async (req, res) => {
    try {
      const query = req.query;
      console.log(query)
      //const objReady = await JSON.parse(query.info)
      const data = await getAllCampaigns(query)
      res.json({
        success: true,
        message: "campaign update done",
        data
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
});
router.get("/campaignContentId", async (req, res) => {
    try {
      const query = req.query;
      console.log(query)
      //const objReady = await JSON.parse(query.info)
      const data = await getCampaignById(query)
      if(!data) {
        throw new Error("No content found check your data");
      }
      res.json({
        success: true,
        message: "campaign found",
        data
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
});
// delete campaign endpoint
router.delete("/deleteCampaign", async (req, res) => {
  try {
    const query = req.body;
    const data = await deleteCampaign(query);
    res.json({
      success: true,
      message: "campaign delete done",
      data
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/find-mp", async (req, res) => {
    try {
      const query = req.query;
      let mps = [];
      let senators = [];
      console.log(query);
      const data = await getElectorate(query);
      if (data.length === 0) {
        throw new Error("No reps check your data");
      }
      await Promise.all(
        data.map(async (el) => {
          let request = await getDivision(el);
          return request;
        })
      )
        .then(async (request) => {
          mps = request.flatMap((element) => element)
          let req  = await getRepsByState(mps)
          senators = req.filter(
            (senator) => senator.govt_type === "Federal Senators"
          )
        })
      res.json({
        success: true,
        message: "all representatives found",
        data: senators,
        mps,
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
});
router.get("/all-representatives", async (req, res) => {
  try {
    const query = req.query;
    console.log(query)
    //const objReady = await JSON.parse(query.info)
    const data = await getAllRepresentatives(query)
    res.json({
      success: true,
      message: "campaign update done",
      data
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
router.post("/leads", async (req, res) => {
  try {
    const query = req.query
    const data = await createLeads(query)
    res.json({
      success: true,
      message: "lead create done",
      data: data
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
/* router.put("/update-project-url", async (req, res) => {
    try {
      const body = req.body;
      console.log(body)
      //const objReady = await JSON.parse(query.info)
      const data = await safeUpdateProjectName(body)
      res.json({
        success: true,
        message: "campaign update done",
        data
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
}); */
  export default router