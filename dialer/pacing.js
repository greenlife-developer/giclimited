import { config } from "../config.js";

export function computeTargetCalls(readyAgents, pacingRatioFromCampaign) {
  const ratio = pacingRatioFromCampaign || config.dial.maxCallsPerReadyAgent;
  return Math.max(0, Math.floor(readyAgents * ratio));
}
