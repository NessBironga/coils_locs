import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function LocsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Locs</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-prose">
          Starter locs, maintenance routines, and mindful care for locs of all
          stages. STRUKS collects practical advice and profiles on makers and
          techniques.
        </p>

        <section className="mt-10">
          <h2 className="font-sans text-sm tracking-[0.16em] uppercase text-ink-muted">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/guides" className="text-ink hover:text-brass">
                Loc guides &amp; routines
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
