import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
    callerId: { type: String },
    maxAttempts: { type: Number, default: 3 },
    retryMinutes: { type: Number, default: 30 },
    pacingRatio: { type: Number, default: 1.0 }, // calls per ready agent
    timezone: { type: String, default: "Africa/Lagos" },
  },
  { timestamps: true }
);

export const Campaign = mongoose.model("Campaign", CampaignSchema);
