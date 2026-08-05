import jwt from "jsonwebtoken";
import { AuthPayload } from "@/middleware/auth.middleware";

export function generateToken(payload: AuthPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}
