import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "@/config/db.js";
import { ApiError } from "@/middleware/errorHandler.js";

export const blogSchema = z.object({
  title: z.string().min(3),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  coverImage: z.string().url(),
  categoryId: z.string(),
  featured: z.boolean().optional(),
});

export async function getBlogs(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.json(
      await prisma.blog.findMany({
        orderBy: { publishedAt: "desc" },
        include: { category: true },
      }),
    );
  } catch (err) {
    next(err);
  }
}

export async function getBlogBySlug(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const slug = Array.isArray(req.params.slug)
      ? req.params.slug[0]
      : req.params.slug;

    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: { category: true },
    });
    if (!blog) throw new ApiError(404, "Article not found");
    res.json(blog);
  } catch (err) {
    next(err);
  }
}

export async function createBlog(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = blogSchema.parse(req.body);
    res.status(201).json(await prisma.blog.create({ data }));
  } catch (err) {
    next(err);
  }
}

export async function updateBlog(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = blogSchema.partial().parse(req.body);
    res.json(
      await prisma.blog.update({
        where: { id: req.params.id as string },
        data,
      }),
    );
  } catch (err) {
    next(err);
  }
}

export async function deleteBlog(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await prisma.blog.delete({ where: { id: req.params.id as string } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
