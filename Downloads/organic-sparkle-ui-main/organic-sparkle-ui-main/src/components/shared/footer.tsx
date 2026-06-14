import Link from "next/link";
import { Instagram, Facebook, Sms, Tree } from "iconsax-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-primary/10 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <div>
                <div className="font-display text-xl font-bold leading-none text-primary">SPARSH</div>
                <div className="mt-0.5 text-[10px] tracking-[0.25em] text-muted-foreground">ORGANICS</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Homemade organic snacks, slow-baked in Surat with ancient grains,
              cold-pressed ghee and unrefined jaggery.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary">
              <Tree className="h-3.5 w-3.5" color="currentColor" />
              100% Preservative-Free
            </div>
          </div>

          {/* Shop */}
          <FooterCol
            title="Shop"
            links={[
              ["/shop", "All Products"],
              ["/shop?cat=cookies", "Cookies"],
              ["/shop?cat=thepla", "Thepla & Patra"],
              ["/shop?cat=dosa", "Dosa Batter"],
            ]}
          />

          {/* Company */}
          <FooterCol
            title="Company"
            links={[
              ["/about", "Our Story"],
              ["/contact", "Contact"],
              ["/policies", "Policies"],
              ["/admin", "Admin"],
            ]}
          />

          {/* Newsletter + Social */}
          <div>
            <div className="mb-4 text-sm font-semibold text-foreground">Stay in touch</div>
            <form className="flex overflow-hidden rounded-full border border-primary/20 bg-background shadow-sm">
              <input
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground/60"
                placeholder="Your email"
                type="email"
                suppressHydrationWarning
              />
              <button
                type="button"
                className="flex items-center justify-center bg-primary px-4 text-primary-foreground transition-opacity hover:opacity-90"
                suppressHydrationWarning
              >
                <Sms className="h-4 w-4" color="currentColor" />
              </button>
            </form>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" color="currentColor" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" color="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Sparsh Organics. Surat, Gujarat.</span>
          <span>Made with love, baked with care.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="mb-4 text-sm font-semibold text-foreground">{title}</div>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link href={to} className="transition-colors hover:text-primary">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
