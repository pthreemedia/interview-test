const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.json());

// Route to handle incoming webhook
app.post("/webhook", async (req, res) => {
  console.log("Received webhook:", req.body);

  // Perform any necessary processing of the webhook data
  // ...

  // Send a success response
  res.status(200).send("Webhook received");
});

app.listen(port, () => {
  console.log(`Webhook listener app running on port ${port}`);
});
