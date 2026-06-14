"use client";
import { Sms, Call, Location } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Reach us</div>
        <h1 className="mt-2 font-display text-5xl font-bold">Say hello</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Questions, bulk orders, collaborations — we'd love to hear from you.
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {[
            { i: Sms, t: "Email", v: "hello@sparshorganics.in" },
            { i: Call, t: "Phone", v: "+91 98xxx xxxxx" },
            { i: Location, t: "Visit", v: "Surat, Gujarat — by appointment" },
          ].map((b) => (
            <div
              key={b.t}
              className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-card p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <b.i className="h-5 w-5" color="currentColor" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {b.t}
                </div>
                <div className="font-medium">{b.v}</div>
              </div>
            </div>
          ))}
        </div>
        <form
          className="rounded-3xl border border-primary/10 bg-card p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label className="mb-1.5 block text-xs font-medium">Name</Label>
              <Input className="h-11 rounded-xl" />
            </div>
            <div>
              <Label className="mb-1.5 block text-xs font-medium">Email</Label>
              <Input type="email" className="h-11 rounded-xl" />
            </div>
            <div className="sm:col-span-2">
              <Label className="mb-1.5 block text-xs font-medium">Message</Label>
              <Textarea rows={5} className="rounded-xl" />
            </div>
          </div>
          <Button className="mt-5 h-11 rounded-full px-7 font-button">Send message</Button>
        </form>
      </div>
    </div>
  );
}
