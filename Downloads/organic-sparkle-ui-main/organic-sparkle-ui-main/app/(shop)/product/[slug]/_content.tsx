"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ShoppingBag, Truck, Tree, Star1, ArrowRight2 } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { QtySelector } from "@/components/shared/qty-selector";
import { ProductCard } from "@/components/product/product-card";
import { cart, priceINR } from "@/lib/shop/cart-store";
import { products, type Product } from "@/lib/shop/products";

export default function ProductContent({ product: p }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const related = products
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ArrowRight2 className="h-3 w-3" color="currentColor" />
        <Link href="/shop" className="hover:text-primary">Shop</Link>
        <ArrowRight2 className="h-3 w-3" color="currentColor" />
        <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-secondary to-cream"
        >
          <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
          {p.bestSeller && (
            <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Bestseller
            </span>
          )}
        </motion.div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary/70">{p.category}</div>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{p.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star1
                  key={i}
                  className="h-4 w-4"
                  color="currentColor"
                  variant={i < Math.round(p.rating) ? "Bold" : "Linear"}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {p.rating} · {p.reviews} reviews
            </span>
          </div>
          <p className="mt-5 text-base leading-relaxed text-foreground/85">{p.description}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold text-primary">
              {priceINR(p.price)}
            </span>
            <span className="text-base text-muted-foreground line-through">
              {priceINR(p.mrp)}
            </span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent-foreground">
              Save {Math.round(((p.mrp - p.price) / p.mrp) * 100)}%
            </span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            Inclusive of all taxes · {p.weight}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <QtySelector value={qty} onChange={setQty} />
            <Button
              onClick={() => cart.add(p.slug, qty)}
              className="h-12 gap-2 rounded-full bg-primary px-7 font-button hover:bg-primary/90"
            >
              <ShoppingBag className="h-4 w-4" color="currentColor" /> Add to Cart
            </Button>
            <Link href="/cart">
              <Button
                variant="outline"
                className="h-12 rounded-full border-primary/25 px-7 font-button hover:bg-primary/10"
              >
                Buy Now
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" color="currentColor" />
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { i: Truck, t: "Free shipping over ₹499" },
              { i: Tree, t: "100% organic" },
              { i: Star1, t: "Loved by 1.2k+" },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-2xl border border-primary/10 bg-card p-3 text-center"
              >
                <b.i className="mx-auto h-5 w-5 text-primary" color="currentColor" />
                <div className="mt-1.5 text-[11px] font-medium text-foreground/80">{b.t}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5">
            <InfoBlock title="Ingredients">
              <div className="flex flex-wrap gap-2">
                {p.ingredients.map((i: string) => (
                  <span key={i} className="rounded-full bg-secondary px-3 py-1 text-xs">
                    {i}
                  </span>
                ))}
              </div>
            </InfoBlock>
            <InfoBlock title="Benefits">
              <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/85">
                {p.benefits.map((b: string) => (
                  <li key={b} className="flex items-center gap-2">
                    <Tree className="h-3.5 w-3.5 text-primary" color="currentColor" /> {b}
                  </li>
                ))}
              </ul>
            </InfoBlock>
            <InfoBlock title="Nutrition (per 100g)">
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  ["Energy", "468 kcal"],
                  ["Protein", "8.2 g"],
                  ["Carbs", "62 g"],
                  ["Fat", "19 g"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-secondary/60 p-3">
                    <div className="font-display text-base font-bold text-primary">{v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {k}
                    </div>
                  </div>
                ))}
              </div>
            </InfoBlock>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-6 font-display text-2xl font-bold sm:text-3xl">
            You might also love
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((r, i) => (
              <ProductCard key={r.slug} product={r} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-card p-5">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
        {title}
      </div>
      {children}
    </div>
  );
}
