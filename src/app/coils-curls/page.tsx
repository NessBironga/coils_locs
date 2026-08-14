import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function CoilsCurlsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Coils &amp; Curls</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-prose">
          Practical, editorial guidance for tightly coiled ha ir — care routines,styling approaches, and guides rooted in liv ed experience. STRUKS is focused on clear how-tos and product r ecommendations that actually help your routine.
        </p>

        <section className="mt-10">
          <h2 className="font-sans text-sm tracking-[0.16em] uppercase text-ink-muted">
            Start here
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/guides" className="text-ink hover:text-brass">
                Guides &amp; How-tos
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="text-ink hover:text-brass">
                Accessories &amp; tools
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
