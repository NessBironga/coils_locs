import Link from "next/link";

export const metadata = {
  title: "Privacy | STRUKS",
  description: "How STRUKS handles your data.",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-content-narrow px-6 py-12">
      <h1 className="font-serif text-3xl">Privacy</h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated: August 2026</p>

      <div className="mt-8 space-y-6 text-ink-muted">
        <section>
          <h2 className="font-serif text-xl text-ink">What data do we collect?</h2>
          <p>
            When you visit STRUKS, we collect minimal personal data:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc"><strong>Email</strong> — if you sign up for our newsletter</li>
            <li className="list-disc"><strong>Contact info</strong> — if you reach out to us</li>
            <li className="list-disc"><strong>Order info</strong> — name, address, payment method (if you buy from the shop)</li>
            <li className="list-disc"><strong>Site usage</strong> — anonymized analytics via Google Analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Why do we collect it?</h2>
          <ul className="space-y-1 pl-6">
            <li className="list-disc">To send you newsletter updates (if you opt in)</li>
            <li className="list-disc">To process your shop orders and ship products</li>
            <li className="list-disc">To respond to your messages</li>
            <li className="list-disc">To understand how people use our site and improve it</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Who has access?</h2>
          <p>
            Your data is stored securely and seen only by:
          </p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">STRUKS team (for order fulfillment and support)</li>
            <li className="list-disc">Payment processors (Stripe, PayPal) — they don't share your data with us</li>
            <li className="list-disc">Google Analytics (anonymized site usage data)</li>
          </ul>
          <p className="mt-3 text-sm">
            We <strong>do not</strong> sell or share your personal data with anyone.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">How long do we keep it?</h2>
          <p>
            We keep order data for as long as needed for tax/shipping purposes (usually 1 year). Newsletter subscribers stay on our list until you unsubscribe. You can request deletion of your account anytime.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Your rights</h2>
          <p>You can:</p>
          <ul className="mt-2 space-y-1 pl-6">
            <li className="list-disc">Request a copy of your data</li>
            <li className="list-disc">Unsubscribe from newsletters</li>
            <li className="list-disc">Ask us to delete your account</li>
            <li className="list-disc">Opt out of analytics tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Loctician & vendor data</h2>
          <p>
            We may collect data about locticians, salons, and vendors we recommend—location, services, reviews, contact info. This helps us create better guides and curated recommendations. We may analyze trends over time. If you're a salon/vendor and want your data removed or updated, contact us.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-ink">Questions?</h2>
          <p>
            Email us at{" "}
            <a href="mailto:privacy@struks.co" className="text-brass hover:text-brass-hover">
              privacy@struks.co
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
