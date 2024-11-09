import { Router } from "express";
import { createCampaign } from "../lib/createCampaign";
const router = Router();
router.post("/deploy-project", async (req, res) => {
    try {
        console.log(req.body)
        const projectData = req.body
        const data = await createCampaign(projectData)
        res.status(200).json({ data: data });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });  
  router.get('/deployment-status/:deployId', async (req, res) => {
    const { deployId } = req.params;
    console.log(deployId)
      try {
       /* const statusResponse = await axios.get(`https://api.vercel.com/v13/deployments/${deploymentId}`, {
            headers: { Authorization: `Bearer ${process.env.VERCEL_TOKEN}` }
        });

        const deploymentStatus = statusResponse.data.state;
        const deploymentUrl = statusResponse.data.url;

        // Verificar si está listo
        if (deploymentStatus === 'READY') {
            res.status(200).json({ status: 'READY', url: `https://${deploymentUrl}` });
        } else {
            res.status(200).json({ status: deploymentStatus });
        } */
      } catch (error) {
        res.status(500).json({ error: 'Error al verificar estado del despliegue' });
      }
});

export default router  