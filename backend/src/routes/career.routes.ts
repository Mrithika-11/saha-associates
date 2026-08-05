import { Request, Response, NextFunction, Router } from "express";
import { z } from "zod";
import { prisma } from "@/config/db";
import { requireAuth, requireRole } from "@/middleware/auth.middleware";
import { upload, uploadToCloudinary } from "@/middleware/upload.middleware";
import { ApiError } from "@/middleware/errorHandler";
import { transporter } from "@/config/mailer";

const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  position: z.string().min(1),
});

/** POST /api/careers/apply — public, multipart/form-data with a "resume" file field */
async function applyForJob(req: Request, res: Response, next: NextFunction) {
  try {
    const data = applicationSchema.parse(req.body);
    if (!req.file) throw new ApiError(400, "Resume file is required");

    const resumeUrl = "Resume uploaded locally";

    const application = await prisma.careerApplication.create({
      data: {
        ...data,
        resumeUrl,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Career Application - ${data.position}`,
      html: `
    <h2>New Career Application</h2>

    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Position:</strong> ${data.position}</p>
  `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    });

    res.status(201).json(application);
  } catch (err) {
    next(err);
  }
}

/** GET /api/careers/applications — admin only */
async function getApplications(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    res.json(
      await prisma.careerApplication.findMany({
        orderBy: { createdAt: "desc" },
      }),
    );
  } catch (err) {
    next(err);
  }
}

/** PATCH /api/careers/applications/:id/status — admin only */
async function updateApplicationStatus(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { status } = z
      .object({
        status: z.enum(["PENDING", "SHORTLISTED", "REJECTED", "HIRED"]),
      })
      .parse(req.body);
    res.json(
      await prisma.careerApplication.update({
        where: { id: req.params.id },
        data: { status },
      }),
    );
  } catch (err) {
    next(err);
  }
}

const router = Router();
router.post("/apply", upload.single("resume"), applyForJob);
router.get(
  "/applications",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN"),
  getApplications,
);
router.patch(
  "/applications/:id/status",
  requireAuth,
  requireRole("SUPER_ADMIN", "ADMIN"),
  updateApplicationStatus,
);

export default router;
