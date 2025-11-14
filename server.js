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
import { fileURLToPath } from "url";

import { config } from "./config.js";
import { connectDB } from "./utils/db.js";
import { authRouter } from "./routes/auth.js";
import { contactRoute } from "./routes/contact.js";
import { smsRoute } from "./routes/sms.js";
import { agentsRouter } from "./routes/agents.js";
import { leadsRouter } from "./routes/leads.js";
import { campaignsRouter } from "./routes/campaigns.js";
import { callsRouter } from "./routes/calls.js";
import { dialerService } from "./dialer/dialer.service.js";
import { ApifyClient } from 'apify-client';

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({limit: "1000mb", extended: false }));
app.use(express.json({ limit: "1000mb" }));
// app.use(bodyParser.json());
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:3000",
      "http://localhost:4000/",
      "http://localhost:4000",
      "https://giclimited1.onrender.com",
      "https://www.giclimited.net",
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
app.use("/api/sms", smsRoute);
// app.use("/api/agents", agentsRouter);
// app.use("/api/leads", leadsRouter);
// app.use("/api/campaigns", campaignsRouter);
// app.use("/api/calls", callsRouter);

// --------------------------deployment on heroku------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("/{*splat}", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

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




// const client = new ApifyClient({
//     token: 'apify_api_E7VH1V7kDtLjzjDv54TJURxRxpHuzk21L4sZ',
// });

// // // Prepare Actor input
// const input = {
//     "urls": [
//         {
//             "url": "https://www.trendyol.com/en/madamra/siyah-kadin-tokali-capraz-askili-canta-p-444770884",
//             "country_code": "sa"
//         },
//         {
//             "url": "https://www.trendyol.com/madamra/siyah-kadin-tokali-capraz-askili-canta-p-444770884"
//         }
//     ],
//     "auto_select_country_code_if_missing": true,
//     "max_retries_per_url": 2,
//     "proxy": {
//         "useApifyProxy": false
//     }
// };

// // Run the Actor and wait for it to finish
// const run = await client.actor("ecomscrape/trendyol-product-page-details-scraper").call(input);

// // Fetch and print Actor results from the run's dataset (if any)
// console.log('Results from dataset');
// console.log("RUN", run);

// const { items } = await client.dataset(run.defaultDatasetId).listItems();

// console.log("ITEMS", items)

// items.forEach((item) => {
//     console.dir(item);
// });