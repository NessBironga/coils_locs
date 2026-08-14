# Coil & Root — Kenya-rooted 4C Hair & Locs platform (MVP scaffold)

A Kenya-rooted, globally-relevant platform combining practical 4C hair &
locs education, editorial content, and a small curated shop. "Coil &
Root" is a working placeholder name, not a final brand decision.

This is the **initial scaffold** — Next.js + Tailwind + Prisma wired up,
a design-token system, and a minimal homepage shell. It is not yet the
full site described in the project brief.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-first `@theme` config — see `src/styles/tokens.css`)
- **Prisma ORM 7** (Rust-free / driver-adapter architecture) + **PostgreSQL**

## Getting started

```bash
npm install
cp .env.example .env   # then fill in DATABASE_URL
npm run db:generate    # generates the Prisma Client into src/generated/prisma
npm run dev
```

Open http://localhost:3000.

### Database

Point `DATABASE_URL` in `.env` at a local or hosted Postgres instance
(the project was scoped for Supabase, but any Postgres connection string
works). Once it's set:

```bash
npm run db:generate   # generate the Prisma Client
npm run db:migrate     # create/apply migrations from prisma/schema.prisma
```

**Known limitation:** the sandbox this scaffold was built in has a
network allowlist that does not include `binaries.prisma.sh`, which the
Prisma CLI needs (for every command, including `--version`) to fetch its
schema-engine binary. So `db:generate` / `db:migrate` could not be run or
verified during scaffolding. `prisma/schema.prisma` was written and
reviewed by hand instead. Run `npm run db:generate` yourself in an
environment with normal network access before querying the database —
until then, `src/generated/prisma/client.ts` is a placeholder stub (see
the comment at the top of that file) that exists only so the rest of the
app type-checks and builds.

### Fonts

`next/font/google` (the default Geist fonts from `create-next-app`)
requires fetching font files from `fonts.googleapis.com` at build time,
which was also outside this sandbox's network allowlist. The design
tokens currently use system font stacks as a placeholder — see the note
at the top of `src/styles/tokens.css` for how to swap in a real
self-hosted/licensed typeface later.

## Project structure

```
prisma/schema.prisma       Data model (Product, BlogPost, Order, etc.)
prisma.config.ts           Prisma CLI config (v7 requires this)
src/lib/db.ts              Prisma Client singleton (driver-adapter setup)
src/styles/tokens.css      Centralized design tokens (Tailwind v4 @theme)
src/app/                   Routes (App Router)
src/components/            Shared UI (site header/footer, etc.)
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma ORM 7 docs](https://www.prisma.io/docs/orm)
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs)
