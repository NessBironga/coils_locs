"use client";

import { CartProvider, useCart } from "@/context/cart";
import { useState } from "react";

function CheckoutForm() {
  const { items, subtotalKES, clear } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Do not attempt to send anything — prototype only
    clear();
  }

  const deliveryFee = 200; // placeholder

  return (
    <main className="mx-auto max-w-content px-6 py-12">
      <h1 className="font-serif text-3xl">Checkout (Prototype)</h1>
      {submitted ? (
        <div className="mt-6 rounded border border-line p-6 bg-paper-raised">
          <p className="font-medium">STRUKS is not accepting live orders yet. This checkout is currently a prototype.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm">Name</label>
            <input required value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />

            <label className="mt-4 block text-sm">Email</label>
            <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />

            <label className="mt-4 block text-sm">Phone</label>
            <input required value={phone} onChange={(e)=>setPhone(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />

            <label className="mt-4 block text-sm">Delivery location</label>
            <input required value={location} onChange={(e)=>setLocation(e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
          </div>

          <aside className="rounded border border-line p-4">
            <h2 className="font-medium">Order summary</h2>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-ink-soft">Subtotal <span>KES {subtotalKES().toLocaleString()}</span></div>
              <div className="flex justify-between text-sm text-ink-soft mt-2">Delivery <span>KES {deliveryFee.toLocaleString()}</span></div>
              <hr className="my-3" />
              <div className="flex justify-between font-medium">Total <span>KES {(subtotalKES()+deliveryFee).toLocaleString()}</span></div>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full rounded-sm bg-brass px-4 py-2 text-sm font-medium text-brass-ink">Place order (prototype)</button>
            </div>
          </aside>
        </form>
      )}
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <CartProvider>
      <CheckoutForm />
    </CartProvider>
  );
}
