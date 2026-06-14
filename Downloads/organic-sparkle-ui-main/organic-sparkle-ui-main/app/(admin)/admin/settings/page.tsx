"use client";
import { ExportCurve } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/logo";

export default function AdminSettingsPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 font-display text-3xl font-bold">Settings</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Brand">
          <div className="flex items-center gap-4">
            <Logo className="h-16 w-16" />
            <Button variant="outline" className="gap-2 rounded-full border-primary/20">
              <ExportCurve className="h-4 w-4" color="currentColor" /> Upload new logo
            </Button>
          </div>
          <div className="mt-5 grid gap-4">
            <Field label="Brand name">
              <Input defaultValue="Sparsh Organics" className="h-11 rounded-xl" />
            </Field>
            <Field label="Tagline">
              <Input defaultValue="Homemade with love, baked with care." className="h-11 rounded-xl" />
            </Field>
          </div>
        </Card>
        <Card title="Contact">
          <div className="grid gap-4">
            <Field label="Email">
              <Input defaultValue="hello@sparshorganics.in" className="h-11 rounded-xl" />
            </Field>
            <Field label="Phone">
              <Input defaultValue="+91 98xxx xxxxx" className="h-11 rounded-xl" />
            </Field>
            <Field label="Address">
              <Input defaultValue="Surat, Gujarat 395007" className="h-11 rounded-xl" />
            </Field>
          </div>
        </Card>
        <Card title="Razorpay">
          <div className="grid gap-4">
            <Field label="Key ID">
              <Input placeholder="rzp_live_xxxxxxxxxxxx" className="h-11 rounded-xl" />
            </Field>
            <Field label="Key secret">
              <Input type="password" placeholder="••••••••••••" className="h-11 rounded-xl" />
            </Field>
            <div className="flex items-center justify-between rounded-xl border border-primary/15 bg-secondary/40 p-3">
              <div className="text-sm">
                <div className="font-semibold">Live mode</div>
                <div className="text-xs text-muted-foreground">Toggle for production payments</div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-9 cursor-pointer appearance-none rounded-full bg-border transition-colors checked:bg-primary"
              />
            </div>
          </div>
        </Card>
        <Card title="Shipping">
          <div className="grid gap-4">
            <Field label="Free shipping above">
              <Input defaultValue="499" className="h-11 rounded-xl" />
            </Field>
            <Field label="Default shipping fee">
              <Input defaultValue="49" className="h-11 rounded-xl" />
            </Field>
          </div>
        </Card>
      </div>
      <div className="mt-6 flex justify-end">
        <Button className="rounded-full px-7 font-button">Save changes</Button>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-card p-6">
      <h2 className="mb-4 font-display text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1.5 block text-xs font-medium">{label}</Label>
      {children}
    </div>
  );
}
