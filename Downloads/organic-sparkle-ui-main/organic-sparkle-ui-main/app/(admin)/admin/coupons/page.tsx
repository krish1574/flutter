"use client";
import { Add, TicketDiscount } from "iconsax-react";
import { Button } from "@/components/ui/button";

const coupons = [
  { code: "WELCOME100", off: "₹100 off first order", used: 482, exp: "31 Dec 2026" },
  { code: "MILLET20", off: "20% off cookies", used: 213, exp: "30 Jun 2026" },
  { code: "FREESHIP", off: "Free shipping above ₹299", used: 891, exp: "Always" },
];

export default function AdminCouponsPage() {
  return (
    <div className="p-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold">Coupons</h1>
        <Button className="gap-2 rounded-full">
          <Add className="h-4 w-4" color="currentColor" /> New coupon
        </Button>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {coupons.map((c) => (
          <div key={c.code} className="rounded-2xl border border-primary/10 bg-card p-5">
            <div className="flex items-center gap-2 text-primary">
              <TicketDiscount className="h-4 w-4" color="currentColor" />
              <span className="font-display text-lg font-bold tracking-wider">{c.code}</span>
            </div>
            <p className="mt-2 text-sm text-foreground/85">{c.off}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{c.used} used</span>
              <span>Expires {c.exp}</span>
            </div>
            <div className="mt-4 flex gap-1">
              <Button variant="ghost" size="sm">Edit</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
