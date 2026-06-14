"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, SearchNormal1, User, HambergerMenu, CloseSquare } from "iconsax-react";
import { useState } from "react";
import { Logo } from "./logo";
import { useCart } from "@/lib/shop/cart-store";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { count } = useCart();
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">SPARSH</div>
            <div className="-mt-1 text-[10px] tracking-[0.25em] text-muted-foreground">ORGANICS</div>
          </div>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                path === n.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search" className="hidden sm:inline-flex">
            <SearchNormal1 className="h-5 w-5" color="currentColor" />
          </Button>
          <Link href="/login" aria-label="Account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" color="currentColor" />
            </Button>
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" color="currentColor" />
            </Button>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open
              ? <CloseSquare className="h-5 w-5" color="currentColor" />
              : <HambergerMenu className="h-5 w-5" color="currentColor" />
            }
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-primary/10 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  path === n.to ? "bg-primary/10 text-primary" : "text-foreground/80"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
