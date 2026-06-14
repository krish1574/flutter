"use client";
import { useState, useRef } from "react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default function OtpPage() {
  const [v, setV] = useState(["", "", "", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  return (
    <div className="grid min-h-[80vh] place-items-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-primary/10 bg-card p-8 shadow-[var(--shadow-soft)]">
        <div className="text-center">
          <Logo className="mx-auto h-14 w-14" />
          <h1 className="mt-4 font-display text-3xl font-bold">Enter the code</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            We sent a 6-digit code to your email.
          </p>
        </div>
        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-center gap-2">
            {v.map((d, i) => (
              <input
                key={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => {
                  const nv = [...v];
                  nv[i] = e.target.value.slice(-1);
                  setV(nv);
                  if (e.target.value && i < 5) refs.current[i + 1]?.focus();
                }}
                className="h-14 w-12 rounded-xl border border-primary/20 bg-background text-center font-display text-2xl font-bold focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            ))}
          </div>
          <Button className="mt-7 h-11 w-full rounded-full font-button">Verify</Button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Didn't get it?{" "}
            <button className="font-semibold text-primary">Resend in 0:42</button>
          </p>
        </form>
      </div>
    </div>
  );
}
