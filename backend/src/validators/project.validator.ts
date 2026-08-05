import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/, "Slug must be lowercase, hyphenated"),
  category: z.enum(["RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL", "INSTITUTIONAL", "INFRASTRUCTURE"]),
  location: z.string().min(2),
  area: z.string().min(1),
  completionDate: z.coerce.date(),
  client: z.string().min(2),
  challenge: z.string().min(10),
  solution: z.string().min(10),
  outcome: z.string().min(10),
  coverImage: z.string().url(),
  featured: z.boolean().optional(),
});

export const projectUpdateSchema = projectSchema.partial();
