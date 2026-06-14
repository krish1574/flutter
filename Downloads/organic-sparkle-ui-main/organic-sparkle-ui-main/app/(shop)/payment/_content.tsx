"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldTick, Refresh2 } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { useCart, priceINR, cart } from "@/lib/shop/cart-store";

export default function PaymentPage() {
  const { items, subtotal } = useCart();
  const shipping = subtotal > 499 ? 0 : 49;
  const total = subtotal + shipping;
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "fail">("idle");
  const router = useRouter();

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => {
        cart.clear();
        router.push("/order-success");
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [status, router]);

  return (
    <div className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full rounded-3xl border border-primary/10 bg-card p-7 shadow-[var(--shadow-soft)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
            <ShieldTick className="h-4 w-4" color="currentColor" /> Razorpay secure checkout
          </div>
          <Lock className="h-4 w-4 text-muted-foreground" color="currentColor" />
        </div>

        <div className="mt-6 rounded-2xl bg-secondary/60 p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            Amount payable
          </div>
          <div className="mt-1 font-display text-4xl font-bold text-primary">
            {priceINR(total)}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {items.length} items · Shipping {shipping ? priceINR(shipping) : "free"}
          </div>
        </div>

        <div className="mt-6 space-y-2 text-xs">
          <Row k="Delivery to" v="Priya Mehta, Surat 395007" />
          <Row k="Order ID" v="#SPR-2026-00482" />
          <Row k="Payment method" v="UPI · GPay" />
        </div>

        {status === "idle" && (
          <Button
            onClick={() => {
              setStatus("processing");
              setTimeout(() => setStatus("success"), 1800);
            }}
            className="mt-7 h-12 w-full rounded-full font-button text-base"
          >
            Pay {priceINR(total)}
          </Button>
        )}
        {status === "processing" && (
          <div className="mt-7 flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
            <Refresh2 className="h-4 w-4 animate-spin" color="currentColor" /> Processing payment...
          </div>
        )}
        {status === "success" && (
          <div className="mt-7 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
            ✓ Payment successful — redirecting
          </div>
        )}
        {status === "fail" && (
          <div className="mt-7 rounded-full bg-destructive/10 px-4 py-3 text-center text-sm font-semibold text-destructive">
            Payment failed.{" "}
            <button className="underline" onClick={() => setStatus("idle")}>
              Try again
            </button>
          </div>
        )}

        <Link
          href="/checkout"
          className="mt-4 block text-center text-xs text-muted-foreground hover:text-primary"
        >
          Back to checkout
        </Link>
      </motion.div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
