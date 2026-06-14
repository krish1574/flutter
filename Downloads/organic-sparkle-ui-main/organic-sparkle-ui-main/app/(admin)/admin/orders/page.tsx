"use client";

const orders = [
  { id: "#SPR-0482", c: "Priya M.", s: "Processing", t: 1026, d: "Today" },
  { id: "#SPR-0481", c: "Rohan S.", s: "Delivered", t: 648, d: "Yesterday" },
  { id: "#SPR-0480", c: "Aarti J.", s: "Delivered", t: 1498, d: "2 days ago" },
  { id: "#SPR-0479", c: "Karan T.", s: "Pending", t: 249, d: "3 days ago" },
  { id: "#SPR-0478", c: "Meera V.", s: "Cancelled", t: 519, d: "4 days ago" },
];

export default function AdminOrdersPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 font-display text-3xl font-bold">Orders</h1>
      <div className="mb-5 flex flex-wrap gap-2">
        {["All", "Pending", "Processing", "Delivered", "Cancelled"].map((t, i) => (
          <button
            key={t}
            className={`rounded-full border px-4 py-2 text-xs font-semibold ${
              i === 0
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/15 bg-card"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl border border-primary/10 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Order</th>
              <th className="px-3 py-3">Customer</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Total</th>
              <th className="px-3 py-3">Date</th>
              <th className="px-5 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => {
              const cls: Record<string, string> = {
                Pending: "bg-accent/20 text-accent-foreground",
                Processing: "bg-primary/15 text-primary",
                Delivered: "bg-primary text-primary-foreground",
                Cancelled: "bg-destructive/15 text-destructive",
              };
              return (
                <tr key={o.id} className="border-t border-border/50">
                  <td className="px-5 py-3 font-medium">{o.id}</td>
                  <td className="px-3 py-3">{o.c}</td>
                  <td className="px-3 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${cls[o.s]}`}
                    >
                      {o.s}
                    </span>
                  </td>
                  <td className="px-3 py-3 font-semibold">₹{o.t}</td>
                  <td className="px-3 py-3 text-muted-foreground">{o.d}</td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-xs font-semibold text-primary">View →</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
