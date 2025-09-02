import mongoose from "mongoose";

const CallSchema = new mongoose.Schema(
  {
    agent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
    campaign: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
    lead: { type: mongoose.Schema.Types.ObjectId, ref: "Lead" },
    phone: { type: String, required: true },
    direction: { type: String, enum: ["OUTBOUND"], default: "OUTBOUND" },
    state: {
      type: String,
      enum: [
        "CREATED",
        "ORIGINATED",
        "RINGING",
        "ANSWERED",
        "FAILED",
        "COMPLETED",
      ],
      default: "CREATED",
    },
    asterisk: {
      channel: String,
      uniqueid: String,
      linkedid: String,
    },
    startAt: Date,
    answerAt: Date,
    endAt: Date,
    disposition: { type: String }, // e.g., SALE, CALL_BACK, NOT_INTERESTED
    wrapupNotes: { type: String },
    recordingUrl: { type: String },
  },
  { timestamps: true }
);

export const Call = mongoose.model("Call", CallSchema);
