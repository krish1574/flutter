"use client";
import Link from "next/link";
import { Trash, Tag, ShoppingBag, ArrowRight } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QtySelector } from "@/components/shared/qty-selector";
import { cart, useCart, priceINR } from "@/lib/shop/cart-store";

export default function CartPage() {
  const { items, subtotal, count } = useCart();
  const shipping = subtotal === 0 ? 0 : subtotal > 499 ? 0 : 49;
  const total = subtotal + shipping;

  if (count === 0) {
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-md place-items-center px-6 text-center">
        <div>
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary">
            <ShoppingBag className="h-9 w-9" color="currentColor" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold">
            Your basket is empty
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Let's fill it with something wholesome.
          </p>
          <Link href="/shop">
            <Button className="mt-6 h-11 rounded-full px-7 font-button">
              Explore products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Your basket</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {count} {count === 1 ? "item" : "items"}
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-3">
          {items.map((i) => (
            <div
              key={i.slug}
              className="grid grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-primary/10 bg-card p-3 sm:grid-cols-[120px_minmax(0,1fr)_auto_auto] sm:p-4"
            >
              <img
                src={i.product.image}
                alt={i.product.name}
                className="h-22 w-22 rounded-xl object-cover sm:h-28 sm:w-28"
              />
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-primary/70">
                  {i.product.category}
                </div>
                <div className="truncate font-display text-base font-semibold sm:text-lg">
                  {i.product.name}
                </div>
                <div className="text-xs text-muted-foreground">{i.product.weight}</div>
                <div className="mt-2 font-semibold text-primary sm:hidden">
                  {priceINR(i.product.price * i.qty)}
                </div>
              </div>
              <QtySelector
                size="sm"
                value={i.qty}
                onChange={(v) => cart.setQty(i.slug, v)}
              />
              <div className="col-span-3 flex items-center justify-between sm:col-span-1 sm:flex-col sm:items-end sm:gap-2">
                <div className="hidden font-display text-lg font-bold text-primary sm:block">
                  {priceINR(i.product.price * i.qty)}
                </div>
                <button
                  onClick={() => cart.remove(i.slug)}
                  aria-label="Remove"
                  className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash className="h-4 w-4" color="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-primary/10 bg-card p-6 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-xl font-bold">Order summary</h2>
            <div className="my-5 flex gap-2">
              <Input
                placeholder="Coupon code"
                className="h-11 rounded-full border-primary/20"
              />
              <Button
                variant="outline"
                className="h-11 gap-1.5 rounded-full border-primary/25"
              >
                <Tag className="h-4 w-4" color="currentColor" /> Apply
              </Button>
            </div>
            <dl className="space-y-2.5 text-sm">
              <Row k="Subtotal" v={priceINR(subtotal)} />
              <Row
                k="Shipping"
                v={shipping === 0 ? "Free" : priceINR(shipping)}
                hint={shipping > 0 ? "Free above ₹499" : undefined}
              />
              <Row k="Estimated tax" v="Included" />
            </dl>
            <div className="my-5 leaf-divider" />
            <div className="flex items-baseline justify-between">
              <span className="font-display text-lg font-bold">Total</span>
              <span className="font-display text-2xl font-bold text-primary">
                {priceINR(total)}
              </span>
            </div>
            <Link href="/checkout">
              <Button className="mt-5 h-12 w-full gap-2 rounded-full font-button text-base">
                Checkout <ArrowRight className="h-4 w-4" color="currentColor" />
              </Button>
            </Link>
            <Link
              href="/shop"
              className="mt-3 block text-center text-xs text-muted-foreground hover:text-primary"
            >
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v, hint }: { k: string; v: string; hint?: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">
        {k}{" "}
        {hint && <span className="ml-1 text-[11px] text-primary">({hint})</span>}
      </dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
