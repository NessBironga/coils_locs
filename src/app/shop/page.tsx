import Link from "next/link";
import { products } from "@/data/products";
import { CartProvider } from "@/context/cart";

export default function ShopPage() {
  return (
    <CartProvider>
      <main className="mx-auto max-w-content px-6 py-12">
        <h1 className="font-serif text-3xl md:text-4xl">Shop — Demo products</h1>
        <p className="mt-2 text-ink-soft">Curated demo products for the STRUKS prototype. Not available for live purchase.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="rounded border border-line bg-paper-raised p-5">
              <div className="h-40 w-full bg-slate-200 flex items-center justify-center text-ink-muted">Image</div>
              <h2 className="mt-4 font-serif text-xl text-ink">{p.name}</h2>
              <p className="mt-2 text-ink-soft text-sm">{p.vendor.name} — {p.vendor.location}</p>
              <p className="mt-2 text-ink-muted text-sm">{p.category}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium">KES {p.priceKES.toLocaleString()}</span>
                <Link href={`/shop/${p.slug}`} className="text-sm text-brass">View</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </CartProvider>
  );
}
