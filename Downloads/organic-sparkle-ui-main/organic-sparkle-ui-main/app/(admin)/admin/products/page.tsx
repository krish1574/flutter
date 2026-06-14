"use client";
import { Add, SearchNormal1, Edit2, Trash, ExportCurve } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/shop/products";
import { priceINR } from "@/lib/shop/cart-store";

export default function AdminProductsPage() {
  return (
    <div className="p-8">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">
            {products.length} items in catalogue
          </p>
        </div>
        <Button className="gap-2 rounded-full">
          <Add className="h-4 w-4" color="currentColor" /> Add product
        </Button>
      </header>
      <div className="mb-4 flex items-center gap-2">
        <div className="relative max-w-sm flex-1">
          <SearchNormal1 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" color="currentColor" />
          <Input
            placeholder="Search products..."
            className="h-10 rounded-full border-primary/20 pl-9"
          />
        </div>
        <Button variant="outline" className="gap-2 rounded-full border-primary/20">
          <ExportCurve className="h-4 w-4" color="currentColor" /> Import
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-primary/10 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Product</th>
              <th className="px-3 py-3">Category</th>
              <th className="px-3 py-3">Price</th>
              <th className="px-3 py-3">Stock</th>
              <th className="px-3 py-3">Rating</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-t border-border/50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt="" className="h-11 w-11 rounded-lg object-cover" />
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.weight}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs">
                    {p.category}
                  </span>
                </td>
                <td className="px-3 py-3 font-semibold">{priceINR(p.price)}</td>
                <td className="px-3 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      p.inStock
                        ? "bg-primary/15 text-primary"
                        : "bg-destructive/15 text-destructive"
                    }`}
                  >
                    {p.inStock ? "In stock" : "Out"}
                  </span>
                </td>
                <td className="px-3 py-3">★ {p.rating}</td>
                <td className="px-5 py-3 text-right">
                  <Button variant="ghost" size="icon" aria-label="Edit">
                    <Edit2 className="h-4 w-4" color="currentColor" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Delete" className="text-destructive">
                    <Trash className="h-4 w-4" color="currentColor" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
