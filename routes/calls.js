import express from "express";
import { authMiddleware } from "../utils/auth.js";
import { Call } from "../models/Call.js";

// const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";
import twilio from "twilio";

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

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// async function createCall() {
//   const call = await client.calls.create({
//     from: "+19016686661",
//     to: "+2348065109764",
//     twiml: `<Response>
//       <Dial callerId="+19016686661">+2348065109764</Dial> 
//     </Response>`,
//   });

//   console.log(call.sid);
// }

// createCall();
