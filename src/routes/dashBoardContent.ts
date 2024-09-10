import { Router } from "express";
const router = Router();
import payload from "payload";
import {createCampaign} from '../controllers/campaigns'

router.post("/campaign", async (req, res) => {
    try {
      const query = req.query;
      const objReady = await JSON.parse(query.info)
      const data = await createCampaign(objReady)
      res.json({
        success: true,
        message: "theme founded",
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