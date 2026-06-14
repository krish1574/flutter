import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/shop/products";
import ProductContent from "./_content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product not found" };
  return {
    title: `${p.name} — Sparsh Organics`,
    description: p.short,
    openGraph: {
      title: p.name,
      description: p.short,
      images: [p.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return <ProductContent product={p} />;
}
