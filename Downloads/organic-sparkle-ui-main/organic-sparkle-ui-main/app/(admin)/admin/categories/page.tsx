"use client";
import { Add } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/shop/products";

export default function AdminCategoriesPage() {
  return (
    <div className="p-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold">Categories</h1>
        <Button className="gap-2 rounded-full">
          <Add className="h-4 w-4" color="currentColor" /> New category
        </Button>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div
            key={c.slug}
            className="flex items-center justify-between rounded-2xl border border-primary/10 bg-card p-5"
          >
            <div>
              <div className="font-display text-lg font-bold">{c.label}</div>
              <div className="text-xs text-muted-foreground">
                {c.count} products · /{c.slug}
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">Edit</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
