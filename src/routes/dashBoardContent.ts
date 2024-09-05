import { Router } from "express";
const router = Router();
import payload from "payload";
/*router.post("/campaign", async (req, res) => {
    try {
      const query = req.query;
      const theme = await ThemeController.Theme(query);
      console.log(theme);
      const newData = [
        {
          "background_color": theme.docs[0].background_color.color,
          "text_color": theme.docs[0].text_color.color,
          "label_color": theme.docs[0].label_color.color,
          "input_color": theme.docs[0].input_color.color,
          "link_color": theme.docs[0].link_color.color,
          "input_text_color": theme.docs[0].input_text_color.color,
          "buttonA_color": theme.docs[0].buttonA_color.color,
          "buttonA_text_color": theme.docs[0].buttonA_text_color.color,
          "buttonB_color": theme.docs[0].buttonB_color.color,
          "buttonB_text_color": theme.docs[0].buttonB_text_color.color,
        },
      ];
      res.json({
        success: true,
        message: "theme founded",
        data: newData,
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });*/