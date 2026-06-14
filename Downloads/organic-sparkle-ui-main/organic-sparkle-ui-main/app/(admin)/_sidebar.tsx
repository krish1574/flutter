"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Category,
  Box1,
  Tag,
  ShoppingCart,
  Profile2User,
  TicketDiscount,
  Star1,
  DocumentText,
  Setting2,
  LogoutCurve,
} from "iconsax-react";
import { Logo } from "@/components/shared/logo";

type NavItem = {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string; color?: string; size?: string | number }>;
  exact?: boolean;
};

const nav: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: Category, exact: true },
  { to: "/admin/products", label: "Products", icon: Box1 },
  { to: "/admin/categories", label: "Categories", icon: Tag },
  { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { to: "/admin/customers", label: "Customers", icon: Profile2User },
  { to: "/admin/coupons", label: "Coupons", icon: TicketDiscount },
  { to: "/admin/reviews", label: "Reviews", icon: Star1 },
  { to: "/admin/invoices", label: "Invoices", icon: DocumentText },
  { to: "/admin/settings", label: "Settings", icon: Setting2 },
];

export function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 border-r border-primary/10 bg-card md:flex md:flex-col">
      <div className="flex items-center gap-2.5 border-b border-primary/10 px-5 py-4">
        <Logo className="h-9 w-9" />
        <div className="leading-tight">
          <div className="font-display text-sm font-bold text-primary">SPARSH</div>
          <div className="-mt-0.5 text-[10px] tracking-[0.25em] text-muted-foreground">ADMIN</div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {nav.map((n) => {
          const active = n.exact ? path === n.to : path.startsWith(n.to);
          return (
            <Link
              key={n.to}
              href={n.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/70 hover:bg-primary/8 hover:text-primary"
              }`}
            >
              <n.icon className="h-4 w-4" color="currentColor" /> {n.label}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/"
        className="m-3 flex items-center gap-2 rounded-xl border border-primary/15 px-3 py-2.5 text-sm text-foreground/70 hover:bg-primary/8 hover:text-primary"
      >
        <LogoutCurve className="h-4 w-4" color="currentColor" /> Back to store
      </Link>
    </aside>
  );
}
