"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TickCircle, ImportCurve, ShoppingBag } from "iconsax-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center px-6 py-16 text-center">
      <div>
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
        >
          <TickCircle className="h-12 w-12" color="currentColor" variant="Bold" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 font-display text-4xl font-bold sm:text-5xl"
        >
          Thank you, truly.
        </motion.h1>
        <p className="mt-3 text-base text-muted-foreground">
          Your order{" "}
          <span className="font-semibold text-foreground">#SPR-2026-00482</span> has been placed.
          We'll get baking right away.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-3xl border border-primary/10 bg-card p-5 text-left text-sm">
          <Row k="Estimated delivery" v="Wed, 17 Jun" />
          <Row k="Items" v="4 items" />
          <Row k="Total" v="₹1,026" />
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/invoice">
            <Button
              variant="outline"
              className="h-11 gap-2 rounded-full border-primary/25 px-6"
            >
              <ImportCurve className="h-4 w-4" color="currentColor" /> Invoice
            </Button>
          </Link>
          <Link href="/shop">
            <Button className="h-11 gap-2 rounded-full px-6 font-button">
              <ShoppingBag className="h-4 w-4" color="currentColor" /> Continue shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-border/50 py-2 last:border-0">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-semibold">{v}</span>
    </div>
  );
}
