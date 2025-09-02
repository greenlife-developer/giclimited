import jwt from "jsonwebtoken";
import { config } from "../config.js";

export function signToken(payload) {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpires });
}

export function authMiddleware(role = "any") {
  return (req, res, next) => {
    const hdr = req.headers.authorization || "";
    const token = hdr.startsWith("Bearer ") ? hdr.slice(7) : null;
    if (!token) return res.status(401).json({ error: "missing token" });
    try {
      const decoded = jwt.verify(token, config.jwtSecret);
      if (role !== "any" && decoded.role !== role && decoded.role !== "admin") {
        return res.status(403).json({ error: "forbidden" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      return res.status(401).json({ error: "invalid token" });
    }
  };
}
