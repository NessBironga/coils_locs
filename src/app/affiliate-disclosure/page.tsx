import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure | STRUKS",
  description: "How STRUKS makes money.",
};

export default function AffiliateDisclosure() {
  return (
    <main className="mx-auto max-w-content-narrow px-6 py-12">
      <h1 className="font-serif text-3xl">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-8 space-y-6 text-ink-muted">
        <section>
          <h2 className="font-serif text-xl text-ink">How we make money</h2>
          <p>
            STRUKS is independent and sustainability-focused. We make money through:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc"><strong>Our shop</strong> — Selling starter loc kits, care products, and bundles</li>
            <li className="list-disc"><strong>Affiliate commissions</strong> — When you book or buy through links we share</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">What this means for you</h2>
          <p>
            When we recommend a loctician, salon, or product, we may earn a small commission if you book or buy through our link. <strong>This doesn't change your cost or the service you get</strong>—salons and shops set their own rates. We recommend places we'd actually send friends, regardless of commission potential.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Transparency</h2>
          <p>
            We disclose affiliate relationships clearly. Look for "affiliate link" labels or "STRUKS may earn a commission" notices. If you're ever unsure, ask us.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">For locticians, salons & vendors</h2>
          <p>
            Are you a loctician, salon owner, or product maker? If you'd like to work with STRUKS, we can:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">Feature you in curated guides</li>
            <li className="list-disc">Set up a referral commission (optional)</li>
            <li className="list-disc">Link to your booking site or social profiles</li>
          </ul>
          <p className="mt-3">
            Email us at{" "}
            <a href="mailto:partnerships@struks.co" className="text-brass hover:text-brass-hover">
              partnerships@struks.co
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">No guarantees</h2>
          <p>
            Affiliate commissions don't influence whether we recommend someone. If a partner's quality drops, we update or remove the recommendation. Your trust is more valuable than any commission.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Questions?</h2>
          <p>
            Email us at{" "}
            <a href="mailto:info@struks.co" className="text-brass hover:text-brass-hover">
              info@struks.co
            </a>
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <Link href="/policies" className="text-sm text-brass hover:text-brass-hover">
          ← All policies
        </Link>
      </div>
    </main>
  );
}
