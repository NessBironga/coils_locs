import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function AccessoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Accessories</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-prose">
          Bonnets, scarves, combs, clips and other accessories — a future
          commerce category for thoughtfully selected items. For now, this
          section explains scope and what STRUKS will curate.
        </p>

        <section className="mt-10">
          <h2 className="font-sans text-sm tracking-[0.16em] uppercase text-ink-muted">
            What we’ll cover
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="text-ink">Protective accessories</li>
            <li className="text-ink">Tools &amp; hardware</li>
            <li className="text-ink">Decorative accents</li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
