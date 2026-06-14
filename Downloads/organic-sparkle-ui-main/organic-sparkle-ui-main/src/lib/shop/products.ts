import bajari from "@/assets/bajari.jpeg.asset.json";
import ragi from "@/assets/ragi.jpeg.asset.json";
import juwar from "@/assets/juwar.jpeg.asset.json";
import oats from "@/assets/oats.jpeg.asset.json";

export type Product = {
  slug: string;
  name: string;
  category: "Cookies" | "Snacks" | "Thepla" | "Patra" | "Dosa" | "Bites";
  price: number;
  mrp: number;
  weight: string;
  image: string;
  short: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    slug: "ragi-cookies",
    name: "Ragi Cookies",
    category: "Cookies",
    price: 249,
    mrp: 299,
    weight: "200 g",
    image: ragi.url,
    short: "Stone-ground finger millet, jaggery & ghee.",
    description:
      "Wholesome ragi cookies baked the slow, homemade way — naturally rich in calcium and iron, with no maida and no preservatives.",
    ingredients: ["Ragi flour", "Jaggery", "Cow ghee", "Cardamom", "Pink salt"],
    benefits: ["High in calcium", "Iron rich", "Gluten-conscious", "No refined sugar"],
    rating: 4.9,
    reviews: 214,
    inStock: true,
    bestSeller: true,
  },
  {
    slug: "bajari-cookies",
    name: "Bajari Cookies",
    category: "Cookies",
    price: 239,
    mrp: 289,
    weight: "200 g",
    image: bajari.url,
    short: "Pearl millet with crunchy almond bits.",
    description:
      "Earthy bajari (pearl millet) cookies with toasted almonds — a warming winter favourite, baked fresh in small batches in Surat.",
    ingredients: ["Bajra flour", "Jaggery", "Almonds", "Cow ghee", "Cardamom"],
    benefits: ["Warming", "Fiber rich", "Naturally sweetened", "No maida"],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    bestSeller: true,
  },
  {
    slug: "juwar-cookies",
    name: "Juwar Cookies",
    category: "Cookies",
    price: 229,
    mrp: 279,
    weight: "200 g",
    image: juwar.url,
    short: "Sorghum & almond — light and crisp.",
    description:
      "Light, crisp juwar (sorghum) cookies — gentle on the gut, perfect with chai. Made with cold-pressed ghee and unrefined jaggery.",
    ingredients: ["Jowar flour", "Jaggery", "Almonds", "Cow ghee"],
    benefits: ["Gluten free", "Light & crisp", "Gut friendly", "Energy boosting"],
    rating: 4.9,
    reviews: 192,
    inStock: true,
    bestSeller: true,
  },
  {
    slug: "oats-cookies",
    name: "Oats Cookies",
    category: "Cookies",
    price: 259,
    mrp: 309,
    weight: "200 g",
    image: oats.url,
    short: "Rolled oats, raisins, real honey.",
    description:
      "Chunky, chewy oats cookies with rolled oats and golden raisins — a heart-friendly snack that tastes like a hug.",
    ingredients: ["Rolled oats", "Whole wheat", "Honey", "Raisins", "Ghee"],
    benefits: ["Heart healthy", "High fiber", "Sustained energy", "No preservatives"],
    rating: 4.9,
    reviews: 263,
    inStock: true,
    bestSeller: true,
  },
  {
    slug: "multigrain-cookies",
    name: "Multigrain Cookies",
    category: "Cookies",
    price: 269,
    mrp: 319,
    weight: "200 g",
    image: bajari.url,
    short: "Ragi, jowar, bajra, oats — all in one.",
    description: "A nourishing blend of four ancient grains, baked with jaggery and ghee.",
    ingredients: ["Ragi", "Jowar", "Bajra", "Oats", "Jaggery", "Ghee"],
    benefits: ["Complete nutrition", "Fiber rich", "Naturally sweetened"],
    rating: 4.8,
    reviews: 121,
    inStock: true,
  },
  {
    slug: "methi-thepla",
    name: "Methi Thepla",
    category: "Thepla",
    price: 180,
    mrp: 210,
    weight: "250 g",
    image: juwar.url,
    short: "Soft fenugreek flatbreads, travel-ready.",
    description: "Traditional Gujarati methi thepla, hand-rolled and slow-roasted.",
    ingredients: ["Whole wheat", "Fresh methi", "Curd", "Spices"],
    benefits: ["Travel snack", "Homemade", "No preservatives"],
    rating: 4.9,
    reviews: 88,
    inStock: true,
  },
  {
    slug: "patra-rolls",
    name: "Patra Rolls",
    category: "Patra",
    price: 160,
    mrp: 190,
    weight: "250 g",
    image: ragi.url,
    short: "Steamed colocasia leaf rolls.",
    description: "Classic Gujarati patra — steamed, lightly tempered, vacuum-packed for freshness.",
    ingredients: ["Colocasia leaves", "Gram flour", "Tamarind", "Jaggery", "Spices"],
    benefits: ["Iron rich", "Steamed not fried"],
    rating: 4.7,
    reviews: 54,
    inStock: true,
  },
  {
    slug: "dosa-batter",
    name: "Dosa Batter",
    category: "Dosa",
    price: 120,
    mrp: 140,
    weight: "500 ml",
    image: oats.url,
    short: "Fermented overnight, ready to pour.",
    description: "Stone-ground urad and rice, naturally fermented for 12 hours.",
    ingredients: ["Urad dal", "Idli rice", "Fenugreek", "Pink salt"],
    benefits: ["Probiotic", "Naturally fermented", "No additives"],
    rating: 4.8,
    reviews: 142,
    inStock: true,
  },
  {
    slug: "puri-bites",
    name: "Puri Bites",
    category: "Bites",
    price: 140,
    mrp: 170,
    weight: "150 g",
    image: bajari.url,
    short: "Crunchy spiced mini puris.",
    description: "Crackly little puris with ajwain and pink salt — your new tea-time obsession.",
    ingredients: ["Whole wheat", "Ajwain", "Pink salt", "Cold-pressed oil"],
    benefits: ["Light snack", "No palm oil"],
    rating: 4.7,
    reviews: 97,
    inStock: true,
  },
];

export const categories = [
  { slug: "cookies", label: "Cookies", count: 5 },
  { slug: "snacks", label: "Snacks", count: 4 },
  { slug: "thepla", label: "Thepla", count: 1 },
  { slug: "patra", label: "Patra", count: 1 },
  { slug: "dosa", label: "Dosa", count: 1 },
  { slug: "bites", label: "Bites", count: 1 },
] as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
