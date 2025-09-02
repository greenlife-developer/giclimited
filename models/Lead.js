import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      index: true,
      required: true,
    },
    phone: { type: String, index: true, required: true },
    firstName: String,
    lastName: String,
    custom: { type: Object, default: {} },
    status: {
      type: String,
      enum: [
        "NEW",
        "QUEUED",
        "DIALED",
        "NO_ANSWER",
        "BUSY",
        "FAILED",
        "CONNECTED",
        "DISPOSED",
      ],
      default: "NEW",
      index: true,
    },
    attempts: { type: Number, default: 0 },
    nextAttemptAt: { type: Date, default: null },
    lastResult: { type: String },
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", LeadSchema);
