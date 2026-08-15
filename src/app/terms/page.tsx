import Link from "next/link";

export const metadata = {
  title: "Terms | STRUKS",
  description: "How to use STRUKS.",
};

export default function Terms() {
  return (
    <main className="mx-auto max-w-content-narrow px-6 py-12">
      <h1 className="font-serif text-3xl">Terms of Use</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-8 space-y-6 text-ink-muted">
        <section>
          <h2 className="font-serif text-xl text-ink">What is STRUKS?</h2>
          <p>
            STRUKS is an editorial platform about natural 4C hair and locs. We write guides, curate loctician recommendations, and sell starter kits and care products. Content is for educational purposes—not medical or professional advice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Recommendations & third-party links</h2>
          <p>
            We curate locticians, salons, and vendors we think are worth knowing. When we recommend someone, we explain why. But:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">STRUKS doesn't own, manage, or endorse their Google Business Profiles</li>
            <li className="list-disc">They own their own profiles—we link to them</li>
            <li className="list-disc">You're responsible for verifying their services, rates, and reviews</li>
            <li className="list-disc">We may update or remove recommendations if practices change</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Shop purchases</h2>
          <p>
            When you buy from our shop:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">Prices and availability are subject to change</li>
            <li className="list-disc">We ship to the addresses you provide</li>
            <li className="list-disc">Refunds available within 14 days if items are unopened/undamaged</li>
            <li className="list-disc">You agree to provide accurate shipping info</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Your account</h2>
          <p>
            If you create an account, you're responsible for keeping your password safe. You agree not to:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">Share your login with others</li>
            <li className="list-disc">Use the site for illegal purposes</li>
            <li className="list-disc">Spam, harass, or impersonate others</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Content you post</h2>
          <p>
            If you comment, review, or share content on STRUKS, you own it. By posting, you give us permission to display it. Don't post anything private, illegal, or that infringes someone's rights.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Liability</h2>
          <p>
            STRUKS is provided "as is." We're not liable for:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">Hair/scalp issues from following our guides</li>
            <li className="list-disc">Problems with third-party services or shops</li>
            <li className="list-disc">Site downtime or lost data</li>
            <li className="list-disc">Product defects (that's on the seller/manufacturer)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Changes to these terms</h2>
          <p>
            We may update these terms anytime. If you keep using STRUKS, you agree to the changes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Questions?</h2>
          <p>
            Email us at{" "}
            <a href="mailto:legal@struks.co" className="text-brass hover:text-brass-hover">
              legal@struks.co
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
