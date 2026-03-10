import p1 from "../assets/pics/card-pic1.png";
import p2 from "../assets/pics/card-pic2.png";
import p3 from "../assets/pics/card-pic3.png";
import p4 from "../assets/pics/card-pic4.png";
import p5 from "../assets/pics/card-pic5.png";
import p6 from "../assets/pics/card-pic6.png";
import catalogDb from "./catalogDb.json";

type CatalogRow = {
  id: string;
  name: string;
  category: string;
  price: string;
  unit: string;
  stock: string;
  location: string;
  harvest: string;
  farmer: string;
  rating: string;
  imageKey: "card-pic1" | "card-pic2" | "card-pic3" | "card-pic4" | "card-pic5" | "card-pic6";
};

export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  unit: string;
  stock: string;
  location: string;
  harvest: string;
  farmer: string;
  rating: string;
  image: ImageMetadata;
};

const imageMap = {
  "card-pic1": p1,
  "card-pic2": p2,
  "card-pic3": p3,
  "card-pic4": p4,
  "card-pic5": p5,
  "card-pic6": p6,
} as const;

const catalogProducts: CatalogProduct[] = (catalogDb as CatalogRow[]).map((row) => ({
  ...row,
  image: imageMap[row.imageKey],
}));

export function getCatalogProducts(): CatalogProduct[] {
  return catalogProducts;
}

export function getCatalogFilters(): string[] {
  return ["Semua", ...new Set(catalogProducts.map((product) => product.category))];
}
