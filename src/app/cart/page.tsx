"use client";

import { CartProvider, useCart } from "@/context/cart";
import Link from "next/link";

function CartView() {
  const { items, updateItem, removeItem, subtotalKES } = useCart();

  return (
    <main className="mx-auto max-w-content px-6 py-12">
      <h1 className="font-serif text-3xl">Your Cart</h1>
      {items.length === 0 ? (
        <p className="mt-4 text-ink-soft">Your cart is empty. <Link href="/shop" className="text-brass">Browse products</Link></p>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((it) => (
            <div key={it.product.slug} className="flex items-center justify-between rounded border border-line p-3">
              <div>
                <div className="font-medium">{it.product.name}</div>
                <div className="text-sm text-ink-soft">{it.product.vendor.name}</div>
              </div>
              <div className="flex items-center gap-3">
                <input type="number" className="w-20 rounded border px-2 py-1" value={it.quantity} min={1}
                  onChange={(e)=>updateItem(it.product.slug, Math.max(1, Number(e.target.value)||1))} />
                <div className="font-medium">KES {(it.product.priceKES*it.quantity).toLocaleString()}</div>
                <button className="text-sm text-ink-soft" onClick={()=>removeItem(it.product.slug)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-4 flex items-center justify-between">
            <div className="font-medium">Subtotal</div>
            <div className="font-medium">KES {subtotalKES().toLocaleString()}</div>
          </div>

          <div className="mt-6">
            <Link href="/checkout" className="rounded-sm bg-brass px-4 py-2 text-sm font-medium text-brass-ink">Continue to checkout</Link>
          </div>

        </div>
      )}
    </main>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <CartView />
    </CartProvider>
  );
}
