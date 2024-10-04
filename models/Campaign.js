const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  name: String,
  target: Number,
  raised: { type: Number, default: 0 },
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;

