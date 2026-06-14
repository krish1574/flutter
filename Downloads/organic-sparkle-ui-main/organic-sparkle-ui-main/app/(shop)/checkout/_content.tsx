"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TickCircle, Location, Card, ClipboardText, Lock } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart, priceINR } from "@/lib/shop/cart-store";

const steps = [
  { id: 1, label: "Shipping", icon: Location },
  { id: 2, label: "Review", icon: ClipboardText },
  { id: 3, label: "Payment", icon: Card },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const { items, subtotal } = useCart();
  const shipping = subtotal > 499 ? 0 : 49;
  const total = subtotal + shipping;
  const router = useRouter();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-center font-display text-4xl font-bold">Checkout</h1>

      <ol className="mx-auto mt-8 flex max-w-xl items-center justify-between gap-2">
        {steps.map((s, i) => {
          const active = step === s.id;
          const done = step > s.id;
          return (
            <li key={s.id} className="flex flex-1 items-center gap-2">
              <div
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                  done
                    ? "border-primary bg-primary text-primary-foreground"
                    : active
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                {done
                  ? <TickCircle className="h-4 w-4" color="currentColor" variant="Bold" />
                  : <s.icon className="h-4 w-4" color="currentColor" />
                }
              </div>
              <span
                className={`text-xs font-semibold ${
                  active || done ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <span className={`mx-2 h-px flex-1 ${done ? "bg-primary" : "bg-border"}`} />
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl border border-primary/10 bg-card p-6 sm:p-8">
          {step === 1 && (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
              <h2 className="font-display text-xl font-bold">Shipping address</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <Input required placeholder="Priya Mehta" />
                </Field>
                <Field label="Phone" required>
                  <Input required type="tel" placeholder="+91 98xxx xxxxx" />
                </Field>
                <Field label="Email" required className="sm:col-span-2">
                  <Input required type="email" placeholder="you@email.com" />
                </Field>
                <Field label="Address" required className="sm:col-span-2">
                  <Input required placeholder="Flat, building, street" />
                </Field>
                <Field label="City" required>
                  <Input required placeholder="Surat" />
                </Field>
                <Field label="State" required>
                  <Input required placeholder="Gujarat" />
                </Field>
                <Field label="PIN code" required>
                  <Input required placeholder="395007" />
                </Field>
                <Field label="Landmark">
                  <Input placeholder="Optional" />
                </Field>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Link href="/cart">
                  <Button type="button" variant="outline" className="rounded-full">
                    Back to cart
                  </Button>
                </Link>
                <Button className="rounded-full px-7 font-button">Continue</Button>
              </div>
            </form>
          )}
          {step === 2 && (
            <div>
              <h2 className="font-display text-xl font-bold">Review your order</h2>
              <div className="mt-5 space-y-3">
                {items.map((i) => (
                  <div
                    key={i.slug}
                    className="flex items-center gap-4 rounded-2xl border border-primary/10 p-3"
                  >
                    <img
                      src={i.product.image}
                      alt=""
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold">{i.product.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Qty {i.qty} · {i.product.weight}
                      </div>
                    </div>
                    <div className="font-semibold text-primary">
                      {priceINR(i.product.price * i.qty)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  className="rounded-full px-7 font-button"
                  onClick={() => setStep(3)}
                >
                  Proceed to payment
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="font-display text-xl font-bold">Payment</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Powered by Razorpay · 100% secure
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { t: "UPI", d: "Pay with GPay, PhonePe, Paytm" },
                  { t: "Card", d: "Credit / Debit / Prepaid" },
                  { t: "Net banking", d: "All major banks" },
                  { t: "Cash on delivery", d: "Pay when it arrives" },
                ].map((m, i) => (
                  <label
                    key={m.t}
                    className="flex cursor-pointer items-center gap-4 rounded-2xl border border-primary/15 p-4 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <input
                      type="radio"
                      name="pay"
                      defaultChecked={i === 0}
                      className="h-4 w-4 accent-[var(--primary)]"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{m.t}</div>
                      <div className="text-xs text-muted-foreground">{m.d}</div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Link href="/payment">
                  <Button className="h-12 rounded-full px-7 font-button">
                    <Lock className="mr-2 h-4 w-4" color="currentColor" /> Pay {priceINR(total)}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <aside className="rounded-3xl border border-primary/10 bg-card p-6 lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-lg font-bold">Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{priceINR(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping ? priceINR(shipping) : "Free"}</span>
            </div>
            <div className="my-3 leaf-divider" />
            <div className="flex justify-between font-display text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">{priceINR(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
        {required && " *"}
      </Label>
      {children}
    </div>
  );
}
