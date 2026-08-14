import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function AccessoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-serif text-3xl md:text-4xl">Accessories</h1>
        <p className="mt-4 text-lg text-ink-soft max-w-prose">
          Bonnets, scarves, combs, clips and other accessories — a future
          commerce category for thoughtfully selected items. For now, this
          section explains scope and what STRUKS will curate.
        </p>

        <div className="mt-8">
          <Link href="/shop?category=Protective+Accessories" className="inline-block rounded-sm bg-brass px-4 py-2 text-sm font-medium text-brass-ink">Shop Accessories →</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
