import Link from "next/link";

export const metadata = {
  title: "Policies | STRUKS",
  description: "Privacy, terms, and affiliate disclosure for STRUKS.",
};

export default function Policies() {
  const policies = [
    {
      title: "Privacy",
      description: "How we handle your data and why.",
      href: "/privacy",
    },
    {
      title: "Terms of Use",
      description: "How to use STRUKS and what to expect.",
      href: "/terms",
    },
    {
      title: "Affiliate Disclosure",
      description: "How we make money and what that means for you.",
      href: "/affiliate-disclosure",
    },
  ];

  return (
    <main className="mx-auto max-w-content-narrow px-6 py-12">
      <h1 className="font-serif text-4xl">Policies</h1>
      <p className="mt-4 text-ink-muted">
        We believe in being transparent about how STRUKS works and how we handle your data.
      </p>

      <nav className="mt-12 space-y-4">
        {policies.map((policy) => (
          <Link
            key={policy.href}
            href={policy.href}
            className="block rounded-lg border border-line bg-paper-raised p-6 transition-colors hover:border-brass"
          >
            <h2 className="font-serif text-xl text-brass">{policy.title}</h2>
            <p className="mt-2 text-sm text-ink-muted">{policy.description}</p>
          </Link>
        ))}
      </nav>

      <div className="mt-12 rounded border border-line-dark bg-ink p-6 text-ink-inverted">
        <h3 className="font-serif text-lg">Get in touch</h3>
        <p className="mt-2 text-sm">
          Questions about our policies or practices?{" "}
          <a href="mailto:info@struks.co" className="underline hover:opacity-80">
            Email us
          </a>
          .
        </p>
      </div>
    </main>
  );
}
