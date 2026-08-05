import { Request, Response, NextFunction, Router } from "express";
import { z } from "zod";
import { prisma } from "@/config/db.js";
import { transporter } from "@/config/mailer.js";
import { requireAuth, requireRole } from "@/middleware/auth.middleware.js";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

/** POST /api/contact — public inquiry form */
async function submitContact(req: Request, res: Response, next: NextFunction) {
  console.log("CONTACT FORM DATA:", req.body);
  try {
    const data = contactSchema.parse(req.body);
    const contactMessage = await prisma.contactMessage.create({ data });

    // Best-effort notification email; failure here shouldn't fail the request
    transporter
      .sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: `New inquiry: ${data.subject}`,
        text: `From: ${data.name} (${data.email})\nPhone: ${data.phone ?? "N/A"}\n\n${data.message}`,
      })
      .catch((e) => console.error("Email notification failed:", e));

    res.status(201).json(contactMessage);
  } catch (err) {
    next(err);
  }
}

/** GET /api/contact — admin only, view inbox */
async function getMessages(_req: Request, res: Response, next: NextFunction) {
  try {
    res.json(
      await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } }),
    );
  } catch (err) {
    next(err);
  }
}

const router = Router();
router.post("/", submitContact);
router.get("/", requireAuth, requireRole("SUPER_ADMIN", "ADMIN"), getMessages);

export default router;
