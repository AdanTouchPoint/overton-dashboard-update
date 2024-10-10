import { Router } from "express";
const router = Router();
import payload from "payload";
import {createCampaign, updateCampaign, getAllCampaigns} from '../controllers/campaigns'
import { ParsedQs } from 'qs'
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
  router.put("/campaign", async (req, res) => {
    try {
      const query = req.query;
      console.log(query)
      //const objReady = await JSON.parse(query.info)
      const data = await updateCampaign(query)
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
  export default router