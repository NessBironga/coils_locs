import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

// Prisma ORM 7 config used by the CLI (generate, migrate, studio).
// The application's runtime connection (src/lib/db.ts) is configured
// separately via a driver adapter, per the Rust-free architecture.
//
// NOTE: During a frontend-only build (staging deploy without a real
// DATABASE_URL), the Prisma CLI's config loader should not throw just
// because DATABASE_URL is absent. Calling `env("DATABASE_URL")` will
// raise a PrismaConfigEnvError when the variable is not present which
// prevents `npm install`/`prisma generate` during CI/Netlify installs.
//
// To allow frontend builds to run without a production database, we only
// call `env()` when DATABASE_URL is actually present in the environment.
// This preserves the strict behavior when a developer has configured
// DATABASE_URL locally while avoiding an install-time failure on staging
// where no DB is set up yet.

const schemaPath = path.join("prisma", "schema.prisma");

let datasourceUrl: string | undefined;
if (process.env.DATABASE_URL) {
  // Use Prisma's env() helper which supports env var interpolation when
  // a DATABASE_URL is provided. Avoid calling it when the variable is
  // missing to prevent PrismaConfigEnvError during installs/builds.
  datasourceUrl = env("DATABASE_URL");
} else {
  datasourceUrl = undefined;
}

export default defineConfig({
  schema: schemaPath,
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  datasource: {
    // When undefined, the CLI will still function for operations that do
    // not require a live database at install time (for example generating
    // the client code that doesn't need to connect). When DATABASE_URL is
    // present, we use the resolved env helper so runtime interpolation
    // works as expected.
    url: datasourceUrl,
  },
});
