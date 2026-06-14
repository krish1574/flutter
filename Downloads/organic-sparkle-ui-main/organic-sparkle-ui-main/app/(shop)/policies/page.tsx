import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies — Sparsh Organics",
};

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl font-bold">Policies</h1>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="mb-2 font-display text-xl font-bold text-primary">Shipping</h2>
          <p>
            We ship pan-India within 2–5 business days. Free shipping on orders
            above ₹499.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold text-primary">Returns</h2>
          <p>
            Because we make food, returns are accepted only for damaged or
            incorrect items, reported within 24 hours of delivery.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold text-primary">Privacy</h2>
          <p>
            We never sell your data. Read the full privacy policy for details.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold text-primary">Terms</h2>
          <p>
            By using this website you agree to the Sparsh Organics terms of
            service.
          </p>
        </section>
      </div>
    </div>
  );
}
