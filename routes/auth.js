import express from "express";
import { Agent } from "../models/Agent.js";
import { signToken } from "../utils/auth.js";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

export const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const {
    email,
    password,
    displayName,
    role = "agent",
    sipExtension,
  } = req.body;
  const exists = await Agent.findOne({ email });
  if (exists) return res.status(400).json({ error: "email taken" });
  const agent = new Agent({ email, displayName, role, sipExtension });
  await agent.setPassword(password);
  await agent.save();
  res.json({ id: agent._id });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const agent = await Agent.findOne({ email });
  if (!agent) return res.status(401).json({ error: "invalid credentials" });
  const ok = await agent.checkPassword(password);
  if (!ok) return res.status(401).json({ error: "invalid credentials" });
  const token = signToken({
    sub: agent._id.toString(),
    role: agent.role,
    email: agent.email,
  });

  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    expires: new Date(Date.now() + 86400 * 1000), // 1 day
  });

  res.json({
    token,
    agent: {
      id: agent._id,
      email: agent.email,
      displayName: agent.displayName,
      role: agent.role,
      state: agent.state,
      sipExtension: agent.sipExtension,
    },
  });
});

authRouter.get("/loggedin-status", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  // Verify Token
  const verified = jwt.verify(token, config.jwtSecret);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});
