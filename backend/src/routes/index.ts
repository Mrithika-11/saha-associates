import { Router } from "express";
import authRoutes from "./auth.routes";
import projectRoutes from "./project.routes";
import serviceRoutes from "./service.routes";
import blogRoutes from "./blog.routes";
import testimonialRoutes from "./testimonial.routes";
import careerRoutes from "./career.routes";
import contactRoutes from "./contact.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/services", serviceRoutes);
router.use("/blogs", blogRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/careers", careerRoutes);
router.use("/contact", contactRoutes);

export default router;
