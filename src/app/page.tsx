import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const CATEGORIES = [
  { label: "Coils & Curls", href: "/coils-curls" },
  { label: "Locs", href: "/locs" },
  { label: "Care", href: "/care" },
  { label: "Accessories", href: "/accessories" },
  { label: "Guides", href: "/guides" },
];

const EXPLORE_CARDS = [
  {
    title: "Coils & Curls",
    description: "Practical care for tightly coiled and textured hair.",
    href: "/coils-curls",
  },
  {
    title: "Locs",
    description: "From starter locs to maintenance and beyond.",
    href: "/locs",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <section className="bg-ink text-ink-inverted">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.2em] text-brass uppercase">
            4C hair &amp; locs, from Kenya to wherever you are
          </p>

          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            STRUKS: Coils &amp; Locs
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Practical guides, thoughtful care information, and product discovery
            for coils, curls, and locs — rooted in Kenya, built for a global
            community.
          </p>

          <div className="mt-10">
            <Link
              href="/guides"
              className="rounded-sm bg-brass px-6 py-3 text-sm font-medium tracking-wide text-brass-ink uppercase transition-colors hover:bg-brass-hover"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-paper">
        <section className="border-b border-line py-section-y-sm">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-sans text-xs tracking-[0.2em] text-ink-muted uppercase">
              Explore STRUKS
            </h2>

            <ul className="mt-5 flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="inline-block rounded-full border border-line bg-paper-raised px-4 py-2 text-sm text-ink transition-colors hover:border-brass hover:text-brass"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-section-y-sm">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-sans text-xs tracking-[0.2em] text-ink-muted uppercase">
              Start here
            </h2>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {EXPLORE_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-lg border border-line bg-paper-raised p-8 transition-colors hover:border-brass"
                >
                  <h3 className="font-serif text-2xl text-ink">{card.title}</h3>

                  <p className="mt-2 text-ink-muted">{card.description}</p>

                  <span className="mt-6 inline-block text-sm text-brass transition-transform group-hover:translate-x-1">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
