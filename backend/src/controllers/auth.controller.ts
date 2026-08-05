import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../config/db.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import { generateToken } from "../utils/generateToken.js";
import { ApiError } from "../middleware/errorHandler.js";

/**
 * POST /api/auth/register
 * Intended for bootstrapping the first SUPER_ADMIN only — protect or remove
 * this route in production once your initial admin account exists.
 */
export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = registerSchema.parse(req.body);

    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing)
      throw new ApiError(409, "An account with this email already exists");

    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = await prisma.user.create({
      data: { ...data, password: hashedPassword, role: data.role ?? "EDITOR" },
    });

    const token = generateToken({ id: user.id, role: user.role });
    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
}

/** POST /api/auth/login */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const data = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new ApiError(401, "Invalid email or password");

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) throw new ApiError(401, "Invalid email or password");

    const token = generateToken({ id: user.id, role: user.role });
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
}

/** GET /api/auth/me — requires auth */
export async function getMe(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    if (!user) throw new ApiError(404, "User not found");
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    next(err);
  }
}
