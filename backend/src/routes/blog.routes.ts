import { Router } from "express";
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} from "@/controllers/blog.controller.js";
import { requireAuth, requireRole } from "@/middleware/auth.middleware.js";

const router = Router();

router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.post(
  "/",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"),
  createBlog,
);
router.put(
  "/:id",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"),
  updateBlog,
);
router.delete(
  "/:id",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN"),
  deleteBlog,
);

export default router;
