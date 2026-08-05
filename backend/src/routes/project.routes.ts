import { Router } from "express";
import {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} from "@/controllers/project.controller";
import { requireAuth, requireRole } from "@/middleware/auth.middleware";

const router = Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlug);

router.post("/", requireAuth, requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"), createProject);
router.put("/:id", requireAuth, requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"), updateProject);
router.delete("/:id", requireAuth, requireRole("SUPER_ADMIN", "ADMIN"), deleteProject);

export default router;
