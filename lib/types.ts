export type ProductCategory =
  | "Maquinaria pesada"
  | "Movimiento de tierra"
  | "Compactacion y nivelacion"
  | "Concreto"
  | "Camiones y transporte"
  | "Refacciones"
  | "Accesorios industriales"
  | "Servicios de urbanizacion"
  | "Anticipos y cotizaciones";

export type PurchaseType = "compra-directa" | "anticipo" | "cotizacion";
export type ProductCondition = "nuevo" | "usado" | "renta" | "servicio";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  price: number;
  pricePrefix?: string;
  priceSuffix?: string;
  showPrice: boolean;
  image: string;
  stock: number;
  active: boolean;
  purchaseType: PurchaseType;
  technicalSheet: string[];
  specifications: Record<string, string>;
  brand: string;
  model: string;
  condition: ProductCondition;
};

export type CartItem = {
  productId: string;
  quantity: number;
};
