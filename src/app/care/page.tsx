import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function CarePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Care</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-prose">
          Foundational care practices for coils, curls, and locs — wash day,
          detangling, scalp health, and routine planning.
        </p>

        <section className="mt-10">
          <h2 className="font-sans text-sm tracking-[0.16em] uppercase text-ink-muted">
            Practical categories
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/guides" className="text-ink hover:text-brass">
                Related guides
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
