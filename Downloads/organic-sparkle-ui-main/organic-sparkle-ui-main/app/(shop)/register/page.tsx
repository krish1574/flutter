"use client";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-primary/10 bg-card p-8 shadow-[var(--shadow-soft)]">
        <div className="text-center">
          <Logo className="mx-auto h-14 w-14" />
          <h1 className="mt-4 font-display text-3xl font-bold">Join the family</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Get ₹100 off your first order.
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label="Full name">
            <Input className="h-11 rounded-xl" placeholder="Priya Mehta" />
          </Field>
          <Field label="Email">
            <Input type="email" className="h-11 rounded-xl" placeholder="you@email.com" />
          </Field>
          <Field label="Phone">
            <Input type="tel" className="h-11 rounded-xl" placeholder="+91 98xxx xxxxx" />
          </Field>
          <Field label="Password">
            <Input
              type="password"
              className="h-11 rounded-xl"
              placeholder="At least 8 characters"
            />
          </Field>
          <Button className="h-11 w-full rounded-full font-button">Create account</Button>
        </form>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Already a member?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block text-xs font-medium">{label}</Label>
      {children}
    </div>
  );
}
