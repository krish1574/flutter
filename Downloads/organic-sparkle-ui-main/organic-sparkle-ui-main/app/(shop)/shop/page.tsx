import type { Metadata } from "next";
import { Suspense } from "react";
import ShopContent from "./_content";

export const metadata: Metadata = {
  title: "Shop — Sparsh Organics",
  description: "Browse organic cookies, snacks, thepla, patra and dosa batter.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
