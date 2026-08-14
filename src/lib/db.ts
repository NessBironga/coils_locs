import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Prisma ORM 7 is "Rust-free" and requires an explicit driver adapter —
// see prisma/schema.prisma and https://www.prisma.io/docs/orm/overview/databases/database-drivers
//
// NOTE: `npx prisma generate` must be run (with network access to
// Prisma's engine CDN) before `@/generated/prisma/client` exists. See
// README.md for details — this could not be run inside the sandbox that
// scaffolded this project.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
