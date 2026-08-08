import { Request, Response, NextFunction, Router } from "express";
import { z } from "zod";
import { prisma } from "@/config/db.js";
import brevo from "@/config/mailer.js";
import { requireAuth, requireRole } from "@/middleware/auth.middleware.js";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

/**
 * POST /api/contact — public inquiry form
 */
async function submitContact(req: Request, res: Response, next: NextFunction) {
  console.log("CONTACT FORM DATA:", req.body);

  try {
    const data = contactSchema.parse(req.body);

    // Save contact message to database
    const contactMessage = await prisma.contactMessage.create({
      data,
    });

    // Best-effort notification email
    try {
      const result = await brevo.transactionalEmails.sendTransacEmail({
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
          name: data.name,
        },

        subject: `New inquiry: ${data.subject}`,

        htmlContent: `
          <h2>New Contact Form Inquiry</h2>

          <p>
              <strong>Name:</strong> ${data.name}
          </p>

          <p>
            <strong>Email:</strong> ${data.email}
          </p>

          <p>
            <strong>Phone:</strong> ${data.phone ?? "N/A"}
          </p>

          <p>
            <strong>Subject:</strong> ${data.subject}
          </p>

          <h3>Message</h3>

          <p>${data.message}</p>
        `,
      });

      console.log("Email notification sent:", result.messageId);
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    // Return success even if email fails
    res.status(201).json(contactMessage);
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/contact — admin only, view inbox
 */
async function getMessages(_req: Request, res: Response, next: NextFunction) {
  try {
    res.json(
      await prisma.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
      }),
    );
  } catch (err) {
    next(err);
  }
}

const router = Router();

router.post("/", submitContact);

router.get("/", requireAuth, requireRole("SUPER_ADMIN", "ADMIN"), getMessages);

export default router;
