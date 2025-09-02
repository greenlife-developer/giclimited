import express from "express";
import Contact from "../models/Contact.js";

export const contactRoute = express.Router();

contactRoute.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ STATUS: -1 }); // Called first
    res.json(contacts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: err.message });
  }
});

// @route   POST /api/contacts/upload
contactRoute.post("/upload", async (req, res) => {
  try {
    const contacts = req.body; // JSON from frontend Excel parse
    console.log("CONTACTS: ", contacts);
    if (!Array.isArray(contacts)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const bulkOps = contacts.map((c) => ({
      updateOne: {
        filter: { CUST_ID: c.CUST_ID },
        update: { $set: c },
        upsert: true,
      },
    }));

    await Contact.bulkWrite(bulkOps);
    res.json({ message: "Contacts uploaded successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error uploading contacts", error: err.message });
  }
});

// @route   PATCH /api/contacts/:id/call
contactRoute.post("/:id/call", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(
      id,
      { STATUS: "Called", LAST_CALLED: new Date() },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating contact", error: err.message });
  }
});

// @route   POST /api/contacts/:id/note
contactRoute.post("/:id/note", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { $push: { NOTES: { body } } },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Error adding note", error: err.message });
  }
});

// export contactRoute;
