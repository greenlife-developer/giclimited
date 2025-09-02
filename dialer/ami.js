import AmiClient from "asterisk-ami-client";
import { config } from "../config.js";

class AMIWrapper {
  constructor() {
    this.client = new AmiClient({ reconnect: true, keepAlive: true });
    this.connected = false;
  }

  async connect() {
    if (this.connected) return this.client;
    await this.client.connect(config.ami.username, config.ami.password, {
      host: config.ami.host,
      port: config.ami.port,
    });
    this.connected = true;
    console.log("[ami] connected");
    return this.client;
  }

  on(event, handler) {
    this.client.on(event, handler);
  }

  async originate({
    channel,
    context,
    exten,
    priority = 1,
    callerId,
    timeoutMs,
    variable = {},
  }) {
    const action = {
      action: "Originate",
      channel, // e.g., "SIP/trunkname/2348xxxxxxx" or "Local/2348xxxxxxx@from-internal"
      context,
      exten,
      priority,
      callerid: callerId,
      timeout: timeoutMs,
      variable,
    };
    return this.client.action(action);
  }
}

export const AMI = new AMIWrapper();
