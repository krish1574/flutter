import { useSyncExternalStore } from "react";
import { products, type Product } from "./products";

export type CartLine = { slug: string; qty: number };
const KEY = "sparsh.cart.v1";

let state: CartLine[] = typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem(KEY) ?? "[]")
  : [];
const subs = new Set<() => void>();

function emit() {
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(state));
  subs.forEach((f) => f());
}

export const cart = {
  get: () => state,
  add(slug: string, qty = 1) {
    const line = state.find((l) => l.slug === slug);
    state = line
      ? state.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l))
      : [...state, { slug, qty }];
    emit();
  },
  setQty(slug: string, qty: number) {
    state = qty <= 0 ? state.filter((l) => l.slug !== slug) : state.map((l) => l.slug === slug ? { ...l, qty } : l);
    emit();
  },
  remove(slug: string) { state = state.filter((l) => l.slug !== slug); emit(); },
  clear() { state = []; emit(); },
  subscribe(f: () => void) { subs.add(f); return () => subs.delete(f); },
};

const EMPTY_CART: CartLine[] = [];

export function useCart() {
  const lines = useSyncExternalStore(cart.subscribe, cart.get, () => EMPTY_CART);
  const items = lines.map((l) => ({ ...l, product: products.find((p) => p.slug === l.slug)! })).filter((i) => i.product);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return { lines, items, subtotal, count };
}

export function priceINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

export type CartItem = { product: Product; qty: number; slug: string };
