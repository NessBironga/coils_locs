import Link from "next/link";

// Primary navigation per the site's information architecture. Kept short
// and un-nested on purpose (section 6: "do not overload the navigation").
const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "4C Hair", href: "/4c-hair" },
  { label: "Locs", href: "/locs" },
  { label: "Guides", href: "/guides" },
  { label: "Roots", href: "/roots" },
];

export function SiteHeader() {
  return (
    <header className="bg-ink text-ink-inverted border-b border-line-dark">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-5">
        {/* Working wordmark placeholder — final naming/logo not decided yet. */}
        <Link
          href="/"
          className="font-serif text-xl tracking-tight whitespace-nowrap"
        >
          Coil &amp; Root
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm tracking-wide uppercase md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft transition-colors hover:text-ink-inverted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line-dark text-ink-soft transition-colors hover:border-brass hover:text-ink-inverted"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="7"
                cy="7"
                r="5.25"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M11 11L14.5 14.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link
            href="/cart"
            className="text-sm tracking-wide uppercase text-ink-soft transition-colors hover:text-ink-inverted"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
