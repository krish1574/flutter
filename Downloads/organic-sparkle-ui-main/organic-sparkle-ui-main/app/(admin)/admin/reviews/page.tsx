"use client";
import { Star1, TickCircle, CloseCircle, Trash } from "iconsax-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { n: "Priya M.", p: "Ragi Cookies", r: 5, t: "Best cookies, hands down.", s: "Pending" },
  { n: "Rohan S.", p: "Methi Thepla", r: 5, t: "Tastes like my mom's.", s: "Approved" },
  { n: "Aarti J.", p: "Oats Cookies", r: 4, t: "A little sweeter than I'd like, but lovely.", s: "Approved" },
];

export default function AdminReviewsPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 font-display text-3xl font-bold">Reviews</h1>
      <div className="space-y-3">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-primary/10 bg-card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{r.n}</span>
                  <span className="text-xs text-muted-foreground">on {r.p}</span>
                  <div className="flex text-primary">
                    {Array.from({ length: r.r }).map((_, j) => (
                      <Star1 key={j} className="h-3.5 w-3.5" color="currentColor" variant="Bold" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm">{r.t}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  r.s === "Approved"
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent/20 text-accent-foreground"
                }`}
              >
                {r.s}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="gap-1.5 rounded-full">
                <TickCircle className="h-3.5 w-3.5" color="currentColor" /> Approve
              </Button>
              <Button size="sm" variant="outline" className="gap-1.5 rounded-full border-primary/20">
                <CloseCircle className="h-3.5 w-3.5" color="currentColor" /> Reject
              </Button>
              <Button size="sm" variant="ghost" className="gap-1.5 text-destructive">
                <Trash className="h-3.5 w-3.5" color="currentColor" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
