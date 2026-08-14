"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Primary navigation per the site's information architecture. Kept short
// and un-nested on purpose.
const NAV_LINKS = [
  { label: "Coils & Curls", href: "/coils-curls" },
  { label: "Locs", href: "/locs" },
  { label: "Care", href: "/care" },
  { label: "Guides", href: "/guides" },
  { label: "Shop", href: "/shop" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      // focus the first link for keyboard users
      firstLinkRef.current?.focus();
      // prevent body scroll behind menu on small screens
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // return focus to menu button for better a11y
      menuButtonRef.current?.focus();
    }
  }, [open]);

  return (
    <header className="bg-ink text-ink-inverted border-b border-line-dark">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight whitespace-nowrap">STRUKS: Coils &amp; Locs</Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm tracking-wide uppercase md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink-soft transition-colors hover:text-ink-inverted focus:outline-none focus:ring-2 focus:ring-brass/60">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <Link href="/shop" className="text-sm tracking-wide uppercase text-ink-soft">Shop</Link>
          <button
            ref={menuButtonRef}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-haspopup="true"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="h-9 w-9 rounded-sm border border-line-dark text-ink-soft flex items-center justify-center"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button type="button" aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-sm border border-line-dark text-ink-soft transition-colors hover:border-brass focus:outline-none focus:ring-2 focus:ring-brass/60">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
              <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="/cart" className="text-sm tracking-wide uppercase text-ink-soft transition-colors hover:text-ink-inverted focus:outline-none focus:ring-2 focus:ring-brass/60">Cart</Link>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden">
          <div className="absolute inset-0 z-10 bg-ink/80" onClick={() => setOpen(false)} aria-hidden="true" />
          <nav className="absolute left-0 right-0 top-0 z-20 bg-paper px-6 py-6" aria-label="Mobile primary">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link, idx) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-ink focus:outline-none focus:ring-2 focus:ring-brass/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" onClick={() => setOpen(false)} className="block text-sm text-ink-soft">About</Link>
              </li>
              <li>
                <Link href="/stories" onClick={() => setOpen(false)} className="block text-sm text-ink-soft">Stories</Link>
              </li>
            </ul>
            <div className="mt-6">
              <button onClick={() => setOpen(false)} className="text-sm text-ink-soft">Close menu</button>
            </div>
          </nav>
        </div>
      )}

      {/* Live region for accessibility messages (cart updates etc.) */}
      <div id="struks-live" aria-live="polite" aria-atomic="true" className="sr-only" />
    </header>
  );
}
