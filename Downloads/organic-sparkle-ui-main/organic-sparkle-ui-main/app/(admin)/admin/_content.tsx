"use client";
import { motion } from "framer-motion";
import { TrendUp, ShoppingBag, Profile2User, Box1, ArrowUp, ArrowDown } from "iconsax-react";
import { products } from "@/lib/shop/products";

const stats = [
  { t: "Total revenue", v: "₹4,82,300", d: "+18.2%", up: true, icon: TrendUp },
  { t: "Orders", v: "1,284", d: "+9.4%", up: true, icon: ShoppingBag },
  { t: "Customers", v: "942", d: "+12.1%", up: true, icon: Profile2User },
  { t: "Products", v: "32", d: "-1", up: false, icon: Box1 },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold">Good morning, Priya</h1>
        <p className="text-sm text-muted-foreground">Here's how Sparsh is doing today.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-primary/10 bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-4 w-4" color="currentColor" />
              </div>
              <span
                className={`flex items-center gap-0.5 text-xs font-semibold ${
                  s.up ? "text-primary" : "text-destructive"
                }`}
              >
                {s.up
                  ? <ArrowUp className="h-3 w-3" color="currentColor" />
                  : <ArrowDown className="h-3 w-3" color="currentColor" />
                }{" "}
                {s.d}
              </span>
            </div>
            <div className="mt-4 font-display text-2xl font-bold">{s.v}</div>
            <div className="text-xs text-muted-foreground">{s.t}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-primary/10 bg-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Monthly sales</h2>
            <select className="rounded-full border border-primary/15 bg-background px-3 py-1 text-xs">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <BarChart />
        </div>
        <div className="rounded-2xl border border-primary/10 bg-card p-6">
          <h2 className="font-display text-lg font-bold">Top products</h2>
          <ul className="mt-4 space-y-3">
            {products.slice(0, 5).map((p, i) => (
              <li key={p.slug} className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-muted-foreground">
                  0{i + 1}
                </span>
                <img src={p.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.reviews * 2} sold</div>
                </div>
                <div className="text-sm font-semibold text-primary">
                  ₹{p.price * p.reviews * 2}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-primary/10 bg-card p-6">
        <h2 className="font-display text-lg font-bold">Recent orders</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="py-2">Order</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["#SPR-0482", "Priya M.", "Processing", "₹1,026", "Today"],
                ["#SPR-0481", "Rohan S.", "Delivered", "₹648", "Yesterday"],
                ["#SPR-0480", "Aarti J.", "Delivered", "₹1,498", "2 days ago"],
                ["#SPR-0479", "Karan T.", "Pending", "₹249", "3 days ago"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-border/50">
                  <td className="py-3 font-medium">{r[0]}</td>
                  <td>{r[1]}</td>
                  <td><StatusPill s={r[2]} /></td>
                  <td className="font-semibold">{r[3]}</td>
                  <td className="text-muted-foreground">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusPill({ s }: { s: string }) {
  const m: Record<string, string> = {
    Pending: "bg-accent/20 text-accent-foreground",
    Processing: "bg-primary/15 text-primary",
    Delivered: "bg-primary text-primary-foreground",
    Cancelled: "bg-destructive/15 text-destructive",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${m[s] ?? ""}`}>
      {s}
    </span>
  );
}

function BarChart() {
  const data = [38, 52, 41, 67, 73, 88];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const max = Math.max(...data);
  return (
    <div className="mt-6 flex h-48 items-end gap-3">
      {data.map((d, i) => (
        <div key={i} className="group flex flex-1 flex-col items-center gap-2">
          <div className="relative flex w-full flex-1 items-end">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(d / max) * 100}%` }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: "easeOut" }}
              className="w-full rounded-t-xl bg-gradient-to-t from-primary to-leaf transition-opacity group-hover:opacity-90"
            />
          </div>
          <span className="text-[11px] text-muted-foreground">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}
