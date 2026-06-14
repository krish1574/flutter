"use client";
import Link from "next/link";
import { Add, Star1 } from "iconsax-react";
import { motion } from "framer-motion";
import { cart, priceINR } from "@/lib/shop/cart-store";
import type { Product } from "@/lib/shop/products";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-card transition-shadow hover:shadow-[var(--shadow-soft)]"
    >
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-gradient-to-br from-secondary to-cream"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.bestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-accent/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
            Bestseller
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/product/${product.slug}`} className="min-w-0">
            <h3 className="truncate font-display text-base font-semibold text-foreground">
              {product.name}
            </h3>
            <p className="truncate text-xs text-muted-foreground">{product.short}</p>
          </Link>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-primary/8 px-2 py-1 text-[11px] font-medium text-primary">
            <Star1 className="h-3 w-3" color="currentColor" variant="Bold" /> {product.rating}
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <div className="font-display text-lg font-bold text-primary">
              {priceINR(product.price)}
            </div>
            <div className="text-xs text-muted-foreground line-through">
              {priceINR(product.mrp)}
            </div>
          </div>
          <button
            aria-label={`Add ${product.name} to cart`}
            onClick={() => cart.add(product.slug)}
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:scale-110 hover:shadow-[var(--shadow-glow)]"
            suppressHydrationWarning
          >
            <Add className="h-5 w-5" color="currentColor" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
