import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("ChangeMe123!", 12);

  await prisma.user.upsert({
    where: { email: "admin@sahaassociates.com" },
    update: {},
    create: {
      name: "Super Admin",
      email: "admin@sahaassociates.com",
      password: hashedPassword,
      role: "SUPER_ADMIN",
    },
  });

  console.log("Seeded super admin — email: admin@sahaassociates.com / password: ChangeMe123!");
  console.log("Change this password immediately after first login.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
