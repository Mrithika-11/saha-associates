import { Request, Response, NextFunction } from "express";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "@/config/db.js";
import { requireAuth, requireRole } from "@/middleware/auth.middleware.js";

const testimonialSchema = z.object({
  clientName: z.string().min(2),
  company: z.string().optional(),
  message: z.string().min(10),
  rating: z.number().min(1).max(5).default(5),
  avatarUrl: z.string().url().optional(),
});

async function getTestimonials(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.json(
      await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } }),
    );
  } catch (err) {
    next(err);
  }
}

async function createTestimonial(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = testimonialSchema.parse(req.body);
    res.status(201).json(await prisma.testimonial.create({ data }));
  } catch (err) {
    next(err);
  }
}

async function deleteTestimonial(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await prisma.testimonial.delete({ where: { id: req.params.id as string } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

const router = Router();
router.get("/", getTestimonials);
router.post(
  "/",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"),
  createTestimonial,
);
router.delete(
  "/:id",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN"),
  deleteTestimonial,
);

export default router;
