import jwt from "jsonwebtoken";
import { AuthPayload } from "@/middleware/auth.middleware.js";

export function generateToken(payload: AuthPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
}
