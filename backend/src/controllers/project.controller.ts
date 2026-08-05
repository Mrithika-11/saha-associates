import { Request, Response, NextFunction } from "express";
import { prisma } from "@/config/db.js";
import {
  projectSchema,
  projectUpdateSchema,
} from "@/validators/project.validator.js";
import { ApiError } from "@/middleware/errorHandler.js";

/** GET /api/projects — public, supports ?category= filter */
export async function getProjects(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { category } = req.query;
    const projects = await prisma.project.findMany({
      where: category ? { category: category as any } : undefined,
      orderBy: { createdAt: "desc" },
      include: { gallery: true },
    });
    res.json(projects);
  } catch (err) {
    next(err);
  }
}

/** GET /api/projects/:slug — public */
export async function getProjectBySlug(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        slug: req.params.slug as string,
      },
      include: { gallery: true },
    });
    if (!project) throw new ApiError(404, "Project not found");
    res.json(project);
  } catch (err) {
    next(err);
  }
}

/** POST /api/projects — admin only */
export async function createProject(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = projectSchema.parse(req.body);
    const project = await prisma.project.create({ data });
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
}

/** PUT /api/projects/:id — admin only */
export async function updateProject(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = projectUpdateSchema.parse(req.body);
    const project = await prisma.project.update({
      where: { id: req.params.id as string },
      data,
    });
    res.json(project);
  } catch (err) {
    next(err);
  }
}

/** DELETE /api/projects/:id — admin only */
export async function deleteProject(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await prisma.project.delete({ where: { id: req.params.id as string } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
