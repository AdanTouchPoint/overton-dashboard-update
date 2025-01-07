import { Router } from "express";
import { createCampaign } from "../lib/createCampaign";
import {batch_email, emailBuilder} from "../controllers/emailController";
import {checker} from "../lib/misc";
import {keywords} from "../lib/restrictedWords";
import { ParsedQs } from 'qs'

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
router.get("/email-batch", async (req, res) => {
  try {
    const query = req.query;
    console.log(query);
    const email = await batch_email(query);
    console.log(email)
    if(email === false)
      {
        throw new Error("email not sent");
        
      }
    res.json({
      success: true,
      message: "Email Sent"
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
router.get("/email-builder", async (req, res) => {

  try {
    interface MyQuery extends ParsedQs {
      user: string;
      questions: string;
    }
    const query = req.query as MyQuery;

    let user = JSON.parse(query.user);
    let questions = JSON.parse(query.questions);
    console.log(questions)
    const checkText = await checker(questions, keywords);
    const email = await emailBuilder(questions, user);
    if(email === false)
      {
        throw new Error("email not sent");
        
      }
    res.json({
      success: true,
      data: email,
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