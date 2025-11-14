import express from "express";
import axios from "axios";
import Contact from "../models/Contact.js";

export const smsRoute = express.Router();

const MULTITEXT_EMAIL = process.env.MULTITEXT_EMAIL;
const MULTITEXT_PASSWORD = process.env.MULTITEXT_PASSWORD;
const MULTITEXT_API_BASE = "https://app.multitexter.com/v2/app";

function formatMessage(row, template) {
  return template.replace(/\{(.*?)\}/g, (_, key) => {
    let cleanKey = key.trim().toLowerCase();
    let value = row[key] || row[key.toUpperCase()] || "";

    if (cleanKey === "customer_name") {
      return value ? String(value).split(" ")[0] : "";
    }

    if (cleanKey === "unpaid") {
      return value ? `${Number(value).toLocaleString()}` : "₦0.00";
    }

    return value !== undefined ? String(value) : "";
  });
}

smsRoute.get("/get-balance", async (req, res) => {
  try {
    const response = await axios.get(`${MULTITEXT_API_BASE}/getbalance`, {
      params: {
        email: MULTITEXT_EMAIL,
        password: MULTITEXT_PASSWORD,
        format: true,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.log("Error fetching balance:", err);
    res.status(500).json({
      message: "Error fetching balance",
      error: err.message,
    });
  }
});

// @route   POST /api/sms/send-sms
// @desc    Send SMS to recipients
// @access  Private
// smsRoute.post("/send-sms", async (req, res) => {
//   const { rows } = req.body;

//   if (!rows || rows.length === 0) {
//     return res.status(400).json({ message: "No rows provided" });
//   }

//   let results = [];

//   for (const row of rows) {
//     const { message, recipient } = row;
//     try {
//       const response = await axios.post(`${MULTITEXT_API_BASE}/sms`, {
//         email: MULTITEXT_EMAIL,
//         password: MULTITEXT_PASSWORD,
//         message,
//         recipients: recipient,
//         sender_name: "ReMiNDERz",
//       });

//       results.push({
//         recipient,
//         status: response.data.status,
//         msg: response.data.msg || "Sent",
//       });
//     } catch (err) {
//       results.push({
//         recipient,
//         status: 0,
//         msg: `Error: ${err.message}`,
//       });
//     }
//   }

//   res.json({ success: true, results });
// });

smsRoute.post("/send-sms", async (req, res) => {
  const { rows, template } = req.body;

  if (!rows || rows.length === 0) {
    return res.status(400).json({ message: "No rows provided" });
  }

  let results = [];

  for (const row of rows) {
    const message = formatMessage(row, template);
    const recipient = row["PHONE_NUMBER"];

    try {
      const response = await axios.post(`${MULTITEXT_API_BASE}/sms`, {
        email: MULTITEXT_EMAIL,
        password: MULTITEXT_PASSWORD,
        message,
        recipients: recipient,
        sender_name: "ReMiNDERz",
      });

      console.log("SMS API Response:", recipient, response.data);

      results.push({
        recipient,
        status: response.data.status,
        msg: response.data.msg || "Sent",
      });
    } catch (err) {
      results.push({
        recipient,
        status: 0,
        msg: `Error: ${err.message}`,
      });
    }
  }

  res.json({ success: true, results });
});
