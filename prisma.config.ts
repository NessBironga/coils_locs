import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

// Prisma ORM 7 config used by the CLI (generate, migrate, studio).
// The application's runtime connection (src/lib/db.ts) is configured
// separately via a driver adapter, per the Rust-free architecture.
export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
