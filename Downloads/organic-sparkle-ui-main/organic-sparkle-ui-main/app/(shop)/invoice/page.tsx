"use client";
import { ImportCurve, Printer } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

const rows = [
  { name: "Ragi Cookies", qty: 2, price: 249 },
  { name: "Oats Cookies", qty: 1, price: 259 },
  { name: "Methi Thepla", qty: 1, price: 180 },
];

export default function InvoicePage() {
  const subtotal = rows.reduce((s, r) => s + r.price * r.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const shipping = 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-5 flex items-center justify-between print:hidden">
        <h1 className="font-display text-2xl font-bold">Invoice</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2 rounded-full"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" color="currentColor" /> Print
          </Button>
          <Button className="gap-2 rounded-full">
            <ImportCurve className="h-4 w-4" color="currentColor" /> Download PDF
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-[var(--shadow-soft)]">
        <div className="flex flex-col gap-6 border-b border-primary/10 bg-secondary/40 p-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <Logo className="h-14 w-14" />
            <div>
              <div className="font-display text-xl font-bold text-primary">SPARSH ORGANICS</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Surat, Gujarat 395007
                <br />
                hello@sparshorganics.in · +91 98xxx xxxxx
                <br />
                GSTIN: 24ABCDE1234F1Z5
              </div>
            </div>
          </div>
          <div className="text-right text-xs">
            <div className="font-display text-2xl font-bold">Invoice</div>
            <div className="mt-1 text-muted-foreground">#SPR-2026-00482</div>
            <div className="text-muted-foreground">Date: 14 Jun 2026</div>
          </div>
        </div>

        <div className="grid gap-4 border-b border-primary/10 p-8 sm:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Billed to
            </div>
            <div className="mt-2 text-sm">
              Priya Mehta<br />
              12 Riverside Lane, Athwa<br />
              Surat, Gujarat 395007<br />
              +91 98xxx xxxxx
            </div>
          </div>
          <div className="sm:text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Payment
            </div>
            <div className="mt-2 text-sm">
              Razorpay · UPI<br />
              Txn: rzp_xy12abcd9z
            </div>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-primary/10 bg-secondary/30 text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-8 py-3 text-left font-semibold">Item</th>
              <th className="px-3 py-3 text-center font-semibold">Qty</th>
              <th className="px-3 py-3 text-right font-semibold">Price</th>
              <th className="px-8 py-3 text-right font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-border/40">
                <td className="px-8 py-4 font-medium">{r.name}</td>
                <td className="px-3 py-4 text-center">{r.qty}</td>
                <td className="px-3 py-4 text-right">₹{r.price}</td>
                <td className="px-8 py-4 text-right font-semibold">₹{r.price * r.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="grid gap-8 p-8 sm:grid-cols-[1fr_240px]">
          <div className="rounded-2xl border border-dashed border-primary/30 p-4 text-xs text-muted-foreground">
            <div className="mb-2 font-semibold text-foreground">Scan to pay / verify</div>
            <div className="flex items-center gap-4">
              <div className="grid h-24 w-24 place-items-center rounded-lg bg-[conic-gradient(from_0deg,_#1F1F1F_25%,_white_0_50%,_#1F1F1F_0_75%,_white_0)] [mask-image:radial-gradient(circle_at_center,_black_60%,_transparent_62%)]" />
              <div>
                upi://pay?pa=sparsh@upi<br />
                Amount ₹{total}
              </div>
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <Row k="Subtotal" v={`₹${subtotal}`} />
            <Row k="Tax (5% GST)" v={`₹${tax}`} />
            <Row k="Shipping" v={shipping ? `₹${shipping}` : "Free"} />
            <div className="my-2 leaf-divider" />
            <Row k="Total" v={`₹${total}`} big />
          </dl>
        </div>

        <div className="border-t border-primary/10 bg-secondary/40 p-6 text-center text-xs text-muted-foreground">
          Thank you for choosing Sparsh Organics — homemade with love in Surat.
        </div>
      </div>
    </div>
  );
}

function Row({ k, v, big }: { k: string; v: string; big?: boolean }) {
  return (
    <div className={`flex justify-between ${big ? "font-display text-lg font-bold text-primary" : ""}`}>
      <span className={big ? "" : "text-muted-foreground"}>{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
