import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Maquinaria",
  description: "Maquinaria pesada para renta, compra, anticipo o cotizacion.",
  alternates: {
    canonical: "/maquinaria"
  }
};

export default function MachineryPage() {
  const machinery = products.filter((product) =>
    ["Maquinaria pesada", "Movimiento de tierra", "Compactacion y nivelacion", "Camiones y transporte", "Concreto"].includes(product.category)
  );

  return (
    <section className="bg-zincpanel py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Maquinaria"
          title="Equipo pesado para frentes de urbanizacion y obra civil."
          description="Unidades para renta, venta, anticipo o cotizacion, con fichas tecnicas listas para integrarse a inventario real."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {machinery.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
