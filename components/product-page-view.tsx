import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ProductDetailActions } from "@/components/product-detail-actions";
import { formatProductPrice } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductPageView({ product }: { product: Product }) {
  return (
    <section className="bg-zincpanel py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-carbon shadow-industrial">
            <Image alt={product.name} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 50vw" src={product.image} />
          </div>
          <div className="mt-6 rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black text-carbon">Ficha tecnica</h2>
            <ul className="mt-4 grid gap-3 text-sm text-steel sm:grid-cols-2">
              {product.technicalSheet.map((item) => (
                <li className="border-l-4 border-construction bg-zincpanel px-4 py-3" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-steel">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-carbon">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-steel">{product.longDescription}</p>
          <div className="mt-6 rounded-lg bg-carbon p-6 text-white">
            <p className="text-xs font-black uppercase tracking-wide text-construction">Precio inicial</p>
            <p className="mt-2 text-3xl font-black">{formatProductPrice(product)}</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-white/55">
              {product.purchaseType.replace("-", " ")} / Stock {product.stock} / {product.condition}
            </p>
            <ProductDetailActions product={product} />
          </div>
          <div className="mt-6 rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-xl font-black text-carbon">Especificaciones</h2>
            <dl className="mt-4 grid gap-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div className="flex justify-between gap-4 border-b border-black/10 pb-3 text-sm" key={key}>
                  <dt className="font-bold text-steel">{key}</dt>
                  <dd className="text-right font-black text-carbon">{value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-b border-black/10 pb-3 text-sm">
                <dt className="font-bold text-steel">Marca</dt>
                <dd className="text-right font-black text-carbon">{product.brand}</dd>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <dt className="font-bold text-steel">Modelo</dt>
                <dd className="text-right font-black text-carbon">{product.model}</dd>
              </div>
            </dl>
          </div>
          <div className="mt-6">
            <ContactForm interest={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
