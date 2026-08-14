import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Real product taxonomy from the project brief (section 8, "Shop by
// Need") — not fabricated sample data, just not yet linked to live
// category pages.
const SHOP_BY_NEED = [
  "Detangling",
  "Wash Day",
  "Scalp Care",
  "Loc Maintenance",
  "Protective Styling",
];

const EXPLORE_CARDS = [
  {
    title: "4C Hair",
    description: "Practical care for tightly coiled hair.",
    href: "/4c-hair",
  },
  {
    title: "Locs",
    description: "From starter locs to maintenance.",
    href: "/locs",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO — continues the dark chrome from the header, per the
          "trade catalog cover" direction in the design tokens. */}
      <section className="bg-ink text-ink-inverted">
        <div className="mx-auto max-w-content px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.2em] text-brass uppercase">
            4C hair &amp; locs, from Kenya to wherever you are
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            Better care for coils, curls &amp; locs.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Guides that actually answer your hair questions, and a small,
            deliberately chosen set of tools to go with them — rooted in
            Kenya, built for a global community.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/guides"
              className="rounded-sm bg-brass px-6 py-3 text-sm font-medium tracking-wide text-brass-ink uppercase transition-colors hover:bg-brass-hover"
            >
              Explore Guides
            </Link>
            <Link
              href="/shop"
              className="rounded-sm border border-line-dark px-6 py-3 text-sm font-medium tracking-wide uppercase text-ink-inverted transition-colors hover:border-brass"
            >
              Shop Tools
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-paper">
        {/* SHOP BY NEED */}
        <section className="border-b border-line py-section-y-sm">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-sans text-xs tracking-[0.2em] text-ink-muted uppercase">
              Shop by need
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {SHOP_BY_NEED.map((need) => (
                <li key={need}>
                  <Link
                    href={`/shop?need=${encodeURIComponent(
                      need.toLowerCase().replace(/\s+/g, "-"),
                    )}`}
                    className="inline-block rounded-full border border-line bg-paper-raised px-4 py-2 text-sm text-ink transition-colors hover:border-brass hover:text-brass"
                  >
                    {need}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPLORE YOUR HAIR */}
        <section className="py-section-y-sm">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-sans text-xs tracking-[0.2em] text-ink-muted uppercase">
              Explore your hair
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {EXPLORE_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-lg border border-line bg-paper-raised p-8 transition-colors hover:border-brass"
                >
                  <h3 className="font-serif text-2xl text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-ink-muted">{card.description}</p>
                  <span className="mt-6 inline-block text-sm text-brass transition-transform group-hover:translate-x-1">
                    Read more →
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
