import express from "express";
import { authMiddleware } from "../utils/auth.js";
import { Agent } from "../models/Agent.js";

export const agentsRouter = express.Router();

agentsRouter.get("/", authMiddleware("supervisor"), async (req, res) => {
  const agents = await Agent.find().lean();
  res.json(agents);
});

agentsRouter.post("/:id/state", authMiddleware("agent"), async (req, res) => {
  const { id } = req.params;
  const { state } = req.body; // READY / OFFLINE / WRAPUP
  const agent = await Agent.findById(id);
  if (!agent) return res.status(404).json({ error: "not found" });
  agent.state = state;
  if (state === "WRAPUP") {
    const until = new Date(
      Date.now() + Number(process.env.WRAPUP_SECONDS || 20) * 1000
    );
    agent.wrapupUntil = until;
  } else {
    agent.wrapupUntil = null;
  }
  await agent.save();
  res.json({ ok: true, state: agent.state, wrapupUntil: agent.wrapupUntil });
});
