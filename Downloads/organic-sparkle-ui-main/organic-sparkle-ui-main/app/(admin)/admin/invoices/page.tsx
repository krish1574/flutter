"use client";
import Link from "next/link";
import { ImportCurve, Eye } from "iconsax-react";
import { Button } from "@/components/ui/button";

export default function AdminInvoicesPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 font-display text-3xl font-bold">Invoices</h1>
      <div className="overflow-hidden rounded-2xl border border-primary/10 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Invoice</th>
              <th className="px-3 py-3">Order</th>
              <th className="px-3 py-3">Amount</th>
              <th className="px-3 py-3">Issued</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-t border-border/50">
                <td className="px-5 py-3 font-medium">
                  INV-2026-{String(480 + i).padStart(5, "0")}
                </td>
                <td className="px-3 py-3 text-muted-foreground">#SPR-04{80 + i}</td>
                <td className="px-3 py-3 font-semibold">
                  ₹{(800 + i * 137).toLocaleString("en-IN")}
                </td>
                <td className="px-3 py-3 text-muted-foreground">
                  {i} day{i !== 1 ? "s" : ""} ago
                </td>
                <td className="px-5 py-3 text-right">
                  <Link href="/invoice">
                    <Button variant="ghost" size="icon" aria-label="View">
                      <Eye className="h-4 w-4" color="currentColor" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" aria-label="Download">
                    <ImportCurve className="h-4 w-4" color="currentColor" />
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
