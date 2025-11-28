const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "API Key Server Running" });
});

app.get("/youtube-key", (req, res) => {
  res.json({ apiKey: process.env.YOUTUBE_API_KEY });
});

app.get("/lastfm-key", (req, res) => {
  res.json({ apiKey: process.env.LASTFM_API_KEY });
});

app.get("/rapidapi-key", (req, res) => {
  res.json({ apiKey: process.env.RAPID_API_KEY });
});

// Security check
app.get("/secure-key", (req, res) => {
  const token = req.query.token;

  if (token !== process.env.YOUR_SERVER_SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.json({ apiKey: process.env.YOUR_SECURE_KEY });
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
