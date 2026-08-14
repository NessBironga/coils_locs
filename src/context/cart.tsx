"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  updateItem: (slug: string, qty: number) => void;
  removeItem: (slug: string) => void;
  clear: () => void;
  subtotalKES: () => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("struks_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("struks_cart", JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  function addItem(product: Product, qty = 1) {
    setItems((prev) => {
      const found = prev.find((i) => i.product.slug === product.slug);
      if (found) {
        return prev.map((i) =>
          i.product.slug === product.slug ? { ...i, quantity: i.quantity + qty } : i,
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  }

  function updateItem(slug: string, qty: number) {
    setItems((prev) => prev.map((i) => (i.product.slug === slug ? { ...i, quantity: qty } : i)).filter(i=>i.quantity>0));
  }

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }

  function clear() {
    setItems([]);
  }

  function subtotalKES() {
    return items.reduce((s, it) => s + it.product.priceKES * it.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ items, addItem, updateItem, removeItem, clear, subtotalKES }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
