"use client";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-primary/10 bg-card p-8 shadow-[var(--shadow-soft)]">
        <div className="text-center">
          <Logo className="mx-auto h-14 w-14" />
          <h1 className="mt-4 font-display text-3xl font-bold">Forgot password</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            We'll send a 6-digit OTP to your email.
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label className="mb-1.5 block text-xs font-medium">Email</Label>
            <Input type="email" className="h-11 rounded-xl" placeholder="you@email.com" />
          </div>
          <Link href="/otp">
            <Button className="h-11 w-full rounded-full font-button">Send OTP</Button>
          </Link>
        </form>
        <Link
          href="/login"
          className="mt-6 block text-center text-xs text-muted-foreground hover:text-primary"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
