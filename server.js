const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const User = require("./models/User");
const Campaign = require("./models/Campaign");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/fundyoursol", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error: " + err);
  });

// POST route to create a new campaign
app.post("/create-campaign", async (req, res) => {
  try {
    const { name, target } = req.body;
    const campaign = new Campaign({ name, target });
    await campaign.save();
    res.status(201).send(campaign);
  } catch (err) {
    res.status(500).send({ error: "Failed to create campaign" });
  }
});

// User registration endpoint
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.status(201).send("User registered");
  } catch (error) {
      res.status(500).send("Error registering user");
  }
});

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
