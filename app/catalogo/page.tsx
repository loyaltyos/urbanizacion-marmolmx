import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catalogo",
  description: "Catalogo industrial de maquinaria pesada, servicios de urbanizacion, refacciones, anticipos y cotizaciones.",
  alternates: {
    canonical: "/catalogo"
  }
};

export default function CatalogPage() {
  return (
    <section className="bg-zincpanel py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Catalogo / Productos"
          title="Maquinaria, servicios y conceptos de pago para obra pesada."
          description="Productos de ejemplo listos para migrar a base de datos. Cada partida soporta precio visible, cotizacion, anticipo, ficha tecnica, especificaciones y estado operativo."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span className="rounded bg-white px-3 py-2 text-xs font-black uppercase tracking-wide text-steel" key={category}>
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
