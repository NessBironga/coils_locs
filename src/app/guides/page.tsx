import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Guides</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-prose">
          Editorial guides and how-tos: step-by-step routines, tool explainers,
          maker spotlights, and practical troubleshooting for coils and locs.
        </p>

        <section className="mt-10">
          <h2 className="font-sans text-sm tracking-[0.16em] uppercase text-ink-muted">
            Featured
          </h2>
          <p className="mt-4 text-ink-soft">No guides yet — check back soon.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
