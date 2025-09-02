import express from "express";
import { authMiddleware } from "../utils/auth.js";
import { Call } from "../models/Call.js";

export const callsRouter = express.Router();

callsRouter.get("/", authMiddleware("agent"), async (req, res) => {
  const calls = await Call.find().sort({ createdAt: -1 }).limit(200).lean();
  res.json(calls);
});

callsRouter.post(
  "/:id/disposition",
  authMiddleware("agent"),
  async (req, res) => {
    const { id } = req.params;
    const { disposition, wrapupNotes } = req.body;
    const call = await Call.findById(id);
    if (!call) return res.status(404).json({ error: "not found" });
    call.disposition = disposition;
    call.wrapupNotes = wrapupNotes;
    await call.save();
    res.json({ ok: true });
  }
);
