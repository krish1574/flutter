"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchNormal1, Setting4 } from "iconsax-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { products, categories } from "@/lib/shop/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cat = searchParams.get("cat") || undefined;
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"pop" | "new" | "lh" | "hl">("pop");

  const filtered = useMemo(() => {
    let list = products.slice();
    if (cat) list = list.filter((p) => p.category.toLowerCase() === cat);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "lh") list.sort((a, b) => a.price - b.price);
    if (sort === "hl") list.sort((a, b) => b.price - a.price);
    if (sort === "pop") list.sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [cat, q, sort]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-10 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Our Pantry</div>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">All products</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Crafted slow. Shipped fresh. Loved daily.
        </p>
      </header>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <Chip active={!cat} onClick={() => router.push("/shop")}>
            All
          </Chip>
          {categories.map((c) => (
            <Chip
              key={c.slug}
              active={cat === c.slug}
              onClick={() => router.push(`/shop?cat=${c.slug}`)}
            >
              {c.label}
            </Chip>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchNormal1 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" color="currentColor" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              className="h-10 w-48 rounded-full border-primary/20 bg-background pl-9"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as never)}
            className="h-10 rounded-full border border-primary/20 bg-background px-4 text-sm"
          >
            <option value="pop">Popular</option>
            <option value="new">Newest</option>
            <option value="lh">Price: Low to High</option>
            <option value="hl">Price: High to Low</option>
          </select>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/20 lg:hidden"
            aria-label="Filters"
          >
            <Setting4 className="h-4 w-4" color="currentColor" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="py-20 text-center text-muted-foreground">
          No products match your filters.
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-primary/15 bg-background text-foreground/70 hover:border-primary/40 hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
