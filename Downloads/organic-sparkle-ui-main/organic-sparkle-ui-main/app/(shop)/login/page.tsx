"use client";
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-primary/10 bg-card p-8 shadow-[var(--shadow-soft)]">
        <div className="text-center">
          <Logo className="mx-auto h-14 w-14" />
          <h1 className="mt-4 font-display text-3xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to track orders and reorder favourites.
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label className="mb-1.5 block text-xs font-medium">Email or phone</Label>
            <Input type="text" placeholder="you@email.com" className="h-11 rounded-xl" />
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <Label className="text-xs font-medium">Password</Label>
              <Link
                href="/forgot-password"
                className="text-xs text-primary hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <Input type="password" placeholder="••••••••" className="h-11 rounded-xl" />
          </div>
          <Button className="h-11 w-full rounded-full font-button">Sign in</Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full rounded-full border-primary/20"
          >
            Continue with Google
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          New here?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
