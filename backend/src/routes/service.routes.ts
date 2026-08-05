import { Router } from "express";
import {
  getServices,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
} from "@/controllers/service.controller";
import { requireAuth, requireRole } from "@/middleware/auth.middleware";

const router = Router();

router.get("/", getServices);
router.get("/:slug", getServiceBySlug);
router.post("/", requireAuth, requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"), createService);
router.put("/:id", requireAuth, requireRole("SUPER_ADMIN", "ADMIN", "EDITOR"), updateService);
router.delete("/:id", requireAuth, requireRole("SUPER_ADMIN", "ADMIN"), deleteService);

export default router;
