import type { Metadata } from "next";
import { Logo } from "@/components/shared/logo";
import { Tree } from "iconsax-react";

export const metadata: Metadata = {
  title: "Our Story — Sparsh Organics",
  description: "How a small kitchen in Surat became a homemade organic food brand.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <Logo className="mx-auto h-16 w-16" />
        <div className="mt-6 text-xs uppercase tracking-[0.3em] text-primary/70">
          Our story
        </div>
        <h1 className="mt-3 font-display text-5xl font-bold">
          Slow food, in a fast world.
        </h1>
      </div>
      <div className="prose prose-neutral mt-12 space-y-6 text-base leading-relaxed text-foreground/85">
        <p>
          Sparsh began at a kitchen counter in Surat, with a mother who refused
          to feed her children anything she wouldn't eat herself. The first
          batch of ragi cookies was for her son's school tiffin. The second was
          for his friends. By the hundredth, it was a brand.
        </p>
        <p>
          We work with small farmers across Gujarat to source our millets,
          jaggery and ghee. Every cookie is hand-shaped, every thepla
          hand-rolled. We don't move fast, and we don't want to.
        </p>
        <p className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
          <Tree className="h-5 w-5" color="currentColor" /> Honest food, slowly made.
        </p>
      </div>
    </div>
  );
}
