"use client";

const list = [
  { n: "Priya Mehta", e: "priya@email.com", o: 12, s: 8420 },
  { n: "Rohan Shah", e: "rohan@email.com", o: 7, s: 4360 },
  { n: "Aarti Joshi", e: "aarti@email.com", o: 22, s: 18920 },
  { n: "Karan Trivedi", e: "karan@email.com", o: 3, s: 980 },
];

export default function AdminCustomersPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 font-display text-3xl font-bold">Customers</h1>
      <div className="overflow-hidden rounded-2xl border border-primary/10 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Customer</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Orders</th>
              <th className="px-3 py-3">Lifetime spend</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.e} className="border-t border-border/50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 font-semibold text-primary">
                      {c.n[0]}
                    </div>
                    <span className="font-medium">{c.n}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-muted-foreground">{c.e}</td>
                <td className="px-3 py-3">{c.o}</td>
                <td className="px-3 py-3 font-semibold text-primary">
                  ₹{c.s.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
