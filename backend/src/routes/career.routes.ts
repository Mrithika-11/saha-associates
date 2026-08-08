import { Request, Response, NextFunction, Router } from "express";
import { z } from "zod";
import { upload } from "@/middleware/upload.middleware.js";
import { ApiError } from "@/middleware/errorHandler.js";
import brevo from "@/config/mailer.js";

const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  position: z.string().min(1),
});

/**
 * POST /api/careers/apply
 * Public Route
 */
async function applyForJob(req: Request, res: Response, next: NextFunction) {
  try {
    const data = applicationSchema.parse(req.body);

    if (!req.file) {
      throw new ApiError(400, "Resume file is required");
    }

    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Saha Associates Website",
        email: process.env.BREVO_SENDER_EMAIL!,
      },

      to: [
        {
          email: process.env.CONTACT_RECEIVER_EMAIL!,
          name: "Saha Associates",
        },
      ],

      replyTo: {
        email: data.email,
        name: data.fullName,
      },

      subject: `New Career Application - ${data.position}`,

      htmlContent: `
        <h2>New Career Application</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Position:</strong> ${data.position}</p>

        <p>Please find the candidate's resume attached.</p>
      `,

      attachment: [
        {
          name: req.file.originalname,
          url: req.file.path,
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err) {
    next(err);
  }
}

const router = Router();

router.post("/apply", upload.single("resume"), applyForJob);

export default router;
