"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart";
import type { Product } from "@/data/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="mt-6">
      <label className="inline-flex items-center gap-2">
        <span className="text-sm text-ink-muted">Qty</span>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
          className="w-20 rounded-sm border px-2 py-1"
        />
      </label>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => addItem(product, qty)}
          className="rounded-sm bg-brass px-4 py-2 text-sm font-medium text-brass-ink"
        >
          Add to Cart
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-sm border border-line px-4 py-2 text-sm"
        >
          Prototype notice
        </button>
      </div>

      <p className="mt-3 text-xs text-ink-soft">
        STRUKS is currently building its marketplace. Products shown here are part of the prototype and are not available for live purchase.
      </p>
    </div>
  );
}
