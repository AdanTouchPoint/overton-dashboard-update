import { Router } from "express";
const router = Router();
router.post("/deploy-project", async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({ status: 'OK' });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });  
  router.get('/deployment-status/:deploymentId', async (req, res) => {
    const { deploymentId } = req.params;
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