export type Vendor = {
  name: string;
  location?: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  priceKES: number;
  category: string;
  vendor: Vendor;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "detangling-brush",
    name: "Detangling Brush",
    description: "A gentle detangling brush designed for tightly coiled hair.",
    priceKES: 1500,
    category: "Detangling & Tools",
    vendor: { name: "Demo Kenyan Brand", location: "Nairobi, Kenya" },
  },
  {
    slug: "satin-bonnet",
    name: "Satin Bonnet",
    description: "Smooth satin bonnet to protect hair and reduce friction while sleeping.",
    priceKES: 800,
    category: "Protective Accessories",
    vendor: { name: "Demo Kenyan Brand", location: "Nairobi, Kenya" },
  },
  {
    slug: "satin-scarf",
    name: "Satin Scarf",
    description: "Versatile satin scarf for wrapping and styling protective looks.",
    priceKES: 600,
    category: "Protective Accessories",
    vendor: { name: "Demo Kenyan Brand", location: "Nairobi, Kenya" },
  },
  {
    slug: "wide-tooth-comb",
    name: "Wide-Tooth Comb",
    description: "A wide-tooth comb ideal for detangling wet coils without breakage.",
    priceKES: 450,
    category: "Detangling & Tools",
    vendor: { name: "Demo Kenyan Brand", location: "Nakuru, Kenya" },
  },
  {
    slug: "sectioning-clips",
    name: "Sectioning Clips",
    description: "Lightweight clips for sectioning and styling hair during routines.",
    priceKES: 300,
    category: "Accessories",
    vendor: { name: "Demo Kenyan Brand", location: "Mombasa, Kenya" },
  },
  {
    slug: "continuous-spray-bottle",
    name: "Continuous Spray Bottle",
    description: "Fine-mist continuous spray bottle for even product application.",
    priceKES: 700,
    category: "Accessories",
    vendor: { name: "Demo Kenyan Brand", location: "Kisumu, Kenya" },
  },
  {
    slug: "loc-styling-tool",
    name: "Loc Styling Tool",
    description: "A simple tool to help maintain and style locs with control.",
    priceKES: 1200,
    category: "Loc Tools",
    vendor: { name: "Demo Kenyan Brand", location: "Nairobi, Kenya" },
  },
  {
    slug: "loc-accessories-set",
    name: "Loc Accessories Set",
    description: "A small set of accessories for adorning locs and protective styles.",
    priceKES: 950,
    category: "Loc Tools",
    vendor: { name: "Demo Kenyan Brand", location: "Nairobi, Kenya" },
  },
];
