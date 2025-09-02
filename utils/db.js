import mongoose from "mongoose";
import { config } from "../config.js";

export async function connectDB() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(config.mongoUri);
  console.log("[db] connected");
}
