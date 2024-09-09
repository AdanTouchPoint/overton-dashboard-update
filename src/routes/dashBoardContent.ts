import { Router } from "express";
const router = Router();
import payload from "payload";
import {createCampaign} from '../controllers/campaigns'

router.post("/campaign", async (req, res) => {
    try {
      const query = req.query;
      console.log(query)
      const data = await createCampaign(query)
      console.log(data);

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