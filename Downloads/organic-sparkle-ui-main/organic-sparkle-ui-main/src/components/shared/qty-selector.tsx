import { Minus, Add } from "iconsax-react";

export function QtySelector({ value, onChange, size = "md" }: { value: number; onChange: (v: number) => void; size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-8" : "h-10";
  const w = size === "sm" ? "w-8" : "w-10";
  return (
    <div className={`inline-flex items-center rounded-full border border-primary/20 bg-background ${h}`}>
      <button aria-label="Decrease" onClick={() => onChange(Math.max(0, value - 1))} className={`grid place-items-center ${w} ${h} rounded-l-full text-primary transition-colors hover:bg-primary/10`}>
        <Minus className="h-4 w-4" color="currentColor" />
      </button>
      <span className="w-8 text-center text-sm font-semibold tabular-nums">{value}</span>
      <button aria-label="Increase" onClick={() => onChange(value + 1)} className={`grid place-items-center ${w} ${h} rounded-r-full text-primary transition-colors hover:bg-primary/10`}>
        <Add className="h-4 w-4" color="currentColor" />
      </button>
    </div>
  );
}
