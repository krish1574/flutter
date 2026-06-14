"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Tree, Heart, ShieldTick, Star1, MessageText1 } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { products, categories } from "@/lib/shop/products";
import { Logo } from "@/components/shared/logo";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="grain-bg absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/60 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur"
            >
              <Tree className="h-3.5 w-3.5" color="currentColor" /> Slow-baked in Surat, since 2022
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
            >
              Homemade goodness,
              <br />
              <span className="italic text-primary">honestly</span> organic.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Ancient millets. Cold-pressed ghee. Unrefined jaggery. Nothing
              else. The kind of snacks your grandmother would approve of — only
              crispier.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/shop">
                <Button
                  size="lg"
                  className="h-12 gap-2 rounded-full bg-primary px-7 font-button text-base shadow-[var(--shadow-glow)] hover:bg-primary/90"
                >
                  Shop Now <ArrowRight className="h-4 w-4" color="currentColor" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-primary/25 bg-background/60 px-7 font-button text-base backdrop-blur hover:bg-primary/10"
                >
                  Our Story
                </Button>
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              {["No Maida", "No Preservatives", "No Refined Sugar", "Cold-pressed Ghee"].map(
                (t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {t}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Hero collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-primary/10 blur-2xl" />
            <div className="relative grid h-full grid-cols-6 grid-rows-6 gap-3">
              <img
                src={products[0].image}
                alt=""
                className="col-span-4 row-span-4 rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
              <img
                src={products[3].image}
                alt=""
                className="col-span-2 row-span-3 rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
              <img
                src={products[2].image}
                alt=""
                className="col-span-2 row-span-3 rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
              <div className="glass-card col-span-4 row-span-2 flex items-center gap-3 rounded-3xl p-4">
                <Logo className="h-12 w-12" />
                <div>
                  <div className="font-display text-base font-bold text-primary">4.9 / 5</div>
                  <div className="text-[11px] text-muted-foreground">
                    from 1,200+ happy families
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <Section eyebrow="Browse by" title="Shop categories">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/shop?cat=${c.slug}`}
                className="group block rounded-2xl border border-primary/10 bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Tree className="h-5 w-5" color="currentColor" />
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{c.label}</div>
                <div className="text-[11px] text-muted-foreground">{c.count} items</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BEST SELLERS */}
      <Section
        eyebrow="Customer favourites"
        title="Best sellers"
        action={
          <Link
            href="/shop"
            className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View all{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" color="currentColor" />
          </Link>
        }
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {bestSellers.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <section className="relative mt-24 overflow-hidden bg-primary text-primary-foreground">
        <div className="grain-bg absolute inset-0 opacity-15" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
              Why Sparsh
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Real food, made the real way.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Heart, t: "Homemade", d: "Hand-rolled in small batches." },
              { icon: Tree, t: "Organic", d: "Sourced from local farms." },
              { icon: ShieldTick, t: "No Preservatives", d: "Just fresh, just clean." },
              { icon: Tree, t: "Gluten-Conscious", d: "Millet-first recipes." },
              { icon: Star1, t: "Honest Ingredients", d: "If we can't pronounce it, we don't use it." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur"
              >
                <f.icon className="h-7 w-7" color="currentColor" />
                <div className="mt-4 font-display text-lg font-semibold">{f.t}</div>
                <div className="mt-1 text-sm text-primary-foreground/75">{f.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Loved by" title="What our families say">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              n: "Priya M.",
              c: "Surat",
              t: "The ragi cookies disappeared in two days. My kids actually ask for them now!",
              r: 5,
            },
            {
              n: "Rohan S.",
              c: "Mumbai",
              t: "Finally a brand that tastes homemade because it actually is. The thepla is incredible.",
              r: 5,
            },
            {
              n: "Aarti J.",
              c: "Ahmedabad",
              t: "Clean ingredients, beautiful packaging, and the oats cookies are my new tea-time ritual.",
              r: 5,
            },
          ].map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-3xl border border-primary/10 bg-card p-7 shadow-sm"
            >
              <MessageText1 className="h-7 w-7 text-primary/30" color="currentColor" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{r.t}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.c}</div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: r.r }).map((_, j) => (
                    <Star1 key={j} className="h-3.5 w-3.5" color="currentColor" variant="Bold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INSTAGRAM GRID */}
      <Section eyebrow="@sparshorganics" title="From our kitchen">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {products.slice(0, 8).map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={p.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-primary/0 opacity-0 transition-all group-hover:bg-primary/40 group-hover:opacity-100">
                <Heart className="h-6 w-6" color="white" variant="Bold" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  action,
  children,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary/70">{eyebrow}</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
