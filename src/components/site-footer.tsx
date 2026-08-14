import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Coils & Curls", href: "/coils-curls" },
  { label: "Locs", href: "/locs" },
  { label: "Care", href: "/care" },
  { label: "Accessories", href: "/accessories" },
  { label: "Guides", href: "/guides" },
];

// Social accounts are acquisition channels, not a feature to rebuild in
// the site itself (section 16) — plain outbound links are enough here.
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-ink-inverted">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-lg">STRUKS: Coils &amp; Locs</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Practical hair-care knowledge and carefully chosen tools for coils,
            curls, and locs. Kenyan roots, global community.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-ink-inverted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-ink-soft uppercase tracking-wide text-xs">
            Follow along
          </p>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft transition-colors hover:text-ink-inverted"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-line-dark px-6 py-5">
        <p className="mx-auto max-w-content text-xs text-ink-soft">
          © {new Date().getFullYear()} STRUKS: Coils &amp; Locs.Kenyan roots,
          global community.
        </p>
      </div>
    </footer>
  );
}
