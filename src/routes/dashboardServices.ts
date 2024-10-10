import { Router } from "express";
const router = Router();
router.post("/deploy-project", async (req, res) => {
    try {
        console.log(req)
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });  
export default router  