import { Router } from "express";
const router = Router();
import {createCampaign, updateCampaign, getAllCampaigns, getCampaignById} from '../controllers/campaigns'
import { ParsedQs } from 'qs'
import {getElectorate,getDivision,getRepsByState} from "../controllers/representatives"
router.post("/campaign", async (req, res) => {
    try {
      interface MyQuery extends ParsedQs {
        info: string;
      }
      const query = req.query as MyQuery;
      const objReady = JSON.parse(query.info);
      console.log(objReady)
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
      console.log(body)
      //const objReady = await JSON.parse(query.info)
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
router.get("/find-mp", async (req, res) => {
    try {
      const query = req.query;
      let mps = [];
      let senators = [];
      console.log(query);
      const data = await getElectorate(query);
      if (data.length === 0) {
        console.log("hola");
        return res.json({
          message: "Postal Code has not Found",
          data: data,
          success: true,
        });
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
  export default router