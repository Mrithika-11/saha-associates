import { Router } from "express";
import authRoutes from "./auth.routes.js";
import projectRoutes from "./project.routes.js";
import serviceRoutes from "./service.routes.js";
import blogRoutes from "./blog.routes.js";
import testimonialRoutes from "./testimonial.routes.js";
import careerRoutes from "./career.routes.js";
import contactRoutes from "./contact.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/services", serviceRoutes);
router.use("/blogs", blogRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/careers", careerRoutes);
router.use("/contact", contactRoutes);

export default router;
