import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  themeColor: "#5B5D00",
};

export const metadata: Metadata = {
  title: {
    template: "%s — Sparsh Organics",
    default: "Sparsh Organics — Homemade Organic Cookies & Snacks",
  },
  description:
    "Slow-baked organic cookies and homemade Gujarati snacks from Surat. Ragi, Bajari, Jowar, Oats — no maida, no preservatives.",
  openGraph: {
    title: "Sparsh Organics",
    description: "Homemade with love. Baked with care.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,500&family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
