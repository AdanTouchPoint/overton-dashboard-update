import { Router } from "express";
const router = Router();
router.get("/campaign", async (req, res) => {
    try {

    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });  
export default router  