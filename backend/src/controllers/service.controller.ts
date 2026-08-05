import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "@/config/db.js";
import { ApiError } from "@/middleware/errorHandler.js";

export const serviceSchema = z.object({
  title: z.string().min(3),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/),
  bannerImage: z.string().url(),
  description: z.string().min(10),
  benefits: z.array(z.string()).default([]),
  process: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
});

export async function getServices(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.json(await prisma.service.findMany({ orderBy: { createdAt: "desc" } }));
  } catch (err) {
    next(err);
  }
}

export async function getServiceBySlug(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: req.params.slug as string },
    });
    if (!service) throw new ApiError(404, "Service not found");
    res.json(service);
  } catch (err) {
    next(err);
  }
}

export async function createService(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = serviceSchema.parse(req.body);
    res.status(201).json(await prisma.service.create({ data }));
  } catch (err) {
    next(err);
  }
}

export async function updateService(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = serviceSchema.partial().parse(req.body);
    res.json(
      await prisma.service.update({
        where: { id: req.params.id as string },
        data,
      }),
    );
  } catch (err) {
    next(err);
  }
}

export async function deleteService(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await prisma.service.delete({ where: { id: req.params.id as string } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
