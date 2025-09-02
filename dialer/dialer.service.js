import { Agent } from "../models/Agent.js";
import { Lead } from "../models/Lead.js";
import { Call } from "../models/Call.js";
import { Campaign } from "../models/Campaign.js";
import { AMI } from "./ami.js";
import { config } from "../config.js";
import { computeTargetCalls } from "./pacing.js";

class DialerService {
  constructor() {
    this.loopHandle = null;
    this.activeOriginations = 0;
  }

  async start() {
    await AMI.connect();

    AMI.on("bridgeenter", async (evt) => {
      // Can be used when agent leg + customer leg bridge
    });

    AMI.on("hangup", async (evt) => {
      // Update call on hangup
      const uniqueid = evt.Uniqueid;
      const call = await Call.findOne({ "asterisk.uniqueid": uniqueid });
      if (call) {
        call.state = "COMPLETED";
        call.endAt = new Date();
        await call.save();
        // Free agent to WRAPUP
        if (call.agent) {
          const agent = await Agent.findById(call.agent);
          if (agent) {
            agent.state = "WRAPUP";
            agent.wrapupUntil = new Date(
              Date.now() + config.dial.wrapupSeconds * 1000
            );
            agent.currentCall = null;
            await agent.save();
          }
        }
      }
    });

    AMI.on("userevent", (evt) => {
      // Optionally handle custom dialplan user events
    });

    this.loopHandle = setInterval(() => this.tick().catch(console.error), 1500);
    console.log("[dialer] service started");
  }

  async tick() {
    // 1) Figure out READY agents
    const now = new Date();
    await Agent.updateMany(
      { state: "WRAPUP", wrapupUntil: { $lte: now } },
      { $set: { state: "READY", wrapupUntil: null } }
    );

    const readyAgents = await Agent.countDocuments({ state: "READY" });
    if (readyAgents <= 0) return;

    // 2) Active campaigns
    const camps = await Campaign.find({ active: true });
    for (const camp of camps) {
      const target = computeTargetCalls(readyAgents, camp.pacingRatio);
      const inProgress = await Call.countDocuments({
        campaign: camp._id,
        state: { $in: ["ORIGINATED", "RINGING", "ANSWERED"] },
      });
      const deficit = Math.max(0, target - inProgress);
      if (deficit <= 0) continue;
      for (let i = 0; i < deficit; i++) {
        await this.tryOriginateOne(camp);
      }
    }
  }

  async tryOriginateOne(campaign) {
    // Grab next lead
    const lead = await Lead.findOneAndUpdate(
      {
        campaign: campaign._id,
        status: { $in: ["NEW", "QUEUED"] },
        $or: [{ nextAttemptAt: null }, { nextAttemptAt: { $lte: new Date() } }],
      },
      { $set: { status: "DIALED" }, $inc: { attempts: 1 } },
      { sort: { updatedAt: 1 }, new: true }
    );
    if (!lead) return false;

    // Pick an available agent (first ready)
    const agent = await Agent.findOneAndUpdate(
      { state: "READY" },
      { $set: { state: "RINGING" } },
      { sort: { updatedAt: 1 }, new: true }
    );
    if (!agent) {
      // put lead back
      await Lead.findByIdAndUpdate(lead._id, { $set: { status: "QUEUED" } });
      return false;
    }

    // Create Call record
    const call = await Call.create({
      agent: agent._id,
      campaign: campaign._id,
      lead: lead._id,
      phone: lead.phone,
      state: "CREATED",
      startAt: new Date(),
    });

    // Originate via AMI
    const customerNumber = lead.phone; // already normalized
    const trunkChannel = `Local/${customerNumber}@${config.dial.context}`; // or SIP/trunk/number depending on your dialplan

    try {
      const resp = await AMI.originate({
        channel: trunkChannel,
        context: config.dial.context,
        exten: config.dial.extension,
        priority: 1,
        callerId: campaign.callerId || config.dial.callerId,
        timeoutMs: config.dial.timeoutSec * 1000,
        variable: {
          X_AGENT_EXT: agent.sipExtension || "",
          X_CALL_ID: call._id.toString(),
        },
      });

      // AMI returns ActionID/Response. We’ll store basic identifiers if present.
      call.state = "ORIGINATED";
      if (resp && resp.Uniqueid) call.asterisk.uniqueid = resp.Uniqueid;
      await call.save();

      // Move agent to IN_CALL when your dialplan bridges to agent leg
      agent.currentCall = call._id;
      await agent.save();

      return true;
    } catch (e) {
      console.error("[dialer] originate failed", e.message);
      // Mark lead for retry
      const next = new Date(Date.now() + campaign.retryMinutes * 60 * 1000);
      await Lead.findByIdAndUpdate(lead._id, {
        $set: {
          status: "FAILED",
          lastResult: "ORIGINATE_FAILED",
          nextAttemptAt: next,
        },
      });
      await Agent.findByIdAndUpdate(agent._id, {
        $set: { state: "READY", currentCall: null },
      });
      await Call.findByIdAndUpdate(call._id, {
        $set: { state: "FAILED", endAt: new Date() },
      });
      return false;
    }
  }
}

export const dialerService = new DialerService();
