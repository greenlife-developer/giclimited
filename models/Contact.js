import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    CUST_ID: { type: String, required: true, unique: true },
    CUSTOMER_NAME: { type: String, required: true },
    REF_NO: String,
    SETTLEMENT_ACCOUNT: String,
    PRODUCT_NAME: String,
    PRODUCT_CODE: String,
    PRODUCT: String,
    LOAN_AMOUNT_LCY: String,
    TOTAL_EXPOSURE_LCY: String,
    UNPAID: String,
    DCAs: String,
    DPD: String,
    RANGE: String,
    TENOR: String,
    RATE: String,
    BOOKING_DATE: String,
    MATURITY_DATE: String,
    PHONE_NUMBER: String,
    ADDRESS: String,
    EMAIL_ADDRESS: String,
    STATUS: { type: String, enum: ["Called", "Not Called"], default: "Not Called" },
    RECORDING: { type: String, default: "N/A" },
    LAST_CALLED: { type: Date, default: null },
    NOTES: [{ body: String, createdAt: { type: Date, default: Date.now } }],
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
