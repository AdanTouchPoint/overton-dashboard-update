import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload

const start = async () :Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen( port, async () => {
    payload.logger.info(`Server listening on port: ${port}`)
  })

}

start();
