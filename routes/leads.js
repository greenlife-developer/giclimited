import express from "express";
import { authMiddleware } from "../utils/auth.js";
import { Lead } from "../models/Lead.js";
import { Campaign } from "../models/Campaign.js";
import { normalizeNigerian } from "../utils/phone.js";

export const leadsRouter = express.Router();

leadsRouter.post("/import", authMiddleware("supervisor"), async (req, res) => {
  const { campaignId, leads } = req.body; // leads = [{ phone, firstName, lastName, custom }]
  const camp = await Campaign.findById(campaignId);
  if (!camp) return res.status(400).json({ error: "invalid campaign" });

  const bulk = leads.map((l) => ({
    insertOne: {
      document: {
        campaign: camp._id,
        phone: normalizeNigerian(l.phone),
        firstName: l.firstName || "",
        lastName: l.lastName || "",
        custom: l.custom || {},
        status: "NEW",
      },
    },
  }));
  const result = await Lead.bulkWrite(bulk);
  res.json({ inserted: result.insertedCount || bulk.length });
});
