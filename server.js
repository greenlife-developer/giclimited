import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
// import "express-async-errors";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
// import { fileURLToPath } from "url";

import { config } from "./config.js";
import { connectDB } from "./utils/db.js";
import { authRouter } from "./routes/auth.js";
import { contactRoute } from "./routes/contact.js";
import { agentsRouter } from "./routes/agents.js";
import { leadsRouter } from "./routes/leads.js";
import { campaignsRouter } from "./routes/campaigns.js";
import { callsRouter } from "./routes/calls.js";
import { dialerService } from "./dialer/dialer.service.js";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({limit: "1000mb", extended: false }));
app.use(express.json({ limit: "1000mb" }));
// app.use(bodyParser.json());
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:3000", 
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.use(morgan("dev"));

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactRoute);
// app.use("/api/agents", agentsRouter);
// app.use("/api/leads", leadsRouter);
// app.use("/api/campaigns", campaignsRouter);
// app.use("/api/calls", callsRouter);

// --------------------------deployment on heroku------------------------------
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "staging"
// ) {
//   app.use(express.static(path.join(__dirname, "/client/build")));

//   app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "/client/build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

// --------------------------deployment------------------------------

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "server_error", detail: err.message });
});

const server = http.createServer(app);
export const io = new Server(server, { cors: { origin: config.corsOrigin } });

// io.on("connection", (socket) => {
//   console.log("[ws] client connected");
//   socket.on("disconnect", () => console.log("[ws] client disconnected"));
// });

// Bootstrap
(async () => {
  await connectDB();
  // await dialerService.start();
  server.listen(config.port, () =>
    console.log(`[http] listening on ${config.port}`)
  );
})();
