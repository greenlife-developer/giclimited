import express from "express";
import { authMiddleware } from "../utils/auth.js";
import { Campaign } from "../models/Campaign.js";

export const campaignsRouter = express.Router();

campaignsRouter.post("/", authMiddleware("supervisor"), async (req, res) => {
  const camp = await Campaign.create(req.body);
  res.json(camp);
});

campaignsRouter.get("/", authMiddleware("agent"), async (req, res) => {
  const camps = await Campaign.find().lean();
  res.json(camps);
});
