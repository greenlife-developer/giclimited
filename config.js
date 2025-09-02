export const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 4000),
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpires: process.env.JWT_EXPIRES || "1d",
  corsOrigin: process.env.CORS_ORIGIN || "*",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:8080",
  ami: {
    host: process.env.AMI_HOST,
    port: Number(process.env.AMI_PORT || 5038),
    username: process.env.AMI_USERNAME,
    password: process.env.AMI_PASSWORD,
  },
  dial: {
    context: process.env.DIAL_CONTEXT || "from-internal",
    extension: process.env.DIAL_EXTENSION || "s",
    timeoutSec: Number(process.env.DIAL_TIMEOUT_SEC || 45),
    callerId: process.env.OUTBOUND_CALLERID || "Unknown",
    maxCallsPerReadyAgent: Number(process.env.MAX_CALLS_PER_READY_AGENT || 1),
    wrapupSeconds: Number(process.env.WRAPUP_SECONDS || 20),
  },
};
