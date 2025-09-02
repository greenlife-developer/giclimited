import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AgentSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    displayName: { type: String, required: true },
    role: {
      type: String,
      enum: ["agent", "supervisor", "admin"],
      default: "agent",
    },
    state: {
      type: String,
      enum: ["OFFLINE", "READY", "RINGING", "IN_CALL", "WRAPUP"],
      default: "OFFLINE",
    },
    currentCall: { type: mongoose.Schema.Types.ObjectId, ref: "Call" },
    wrapupUntil: { type: Date },
    sipExtension: { type: String }, // e.g., 1001 maps to your PBX
  },
  { timestamps: true }
);

AgentSchema.methods.setPassword = async function (plain) {
  this.passwordHash = await bcrypt.hash(plain, 10);
};

AgentSchema.methods.checkPassword = async function (plain) {
  return bcrypt.compare(plain, this.passwordHash);
};

export const Agent = mongoose.model("Agent", AgentSchema);
