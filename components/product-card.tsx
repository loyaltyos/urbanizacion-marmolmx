"use client";

import Image from "next/image";
import Link from "next/link";
import { ClipboardCheck, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { formatProductPrice } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <Link className="relative block aspect-[4/3] overflow-hidden bg-graphite" href={`/catalogo/${product.slug}`}>
        <Image
          alt={product.name}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={product.image}
        />
        <span className="absolute left-3 top-3 rounded bg-carbon/90 px-3 py-1 text-xs font-black uppercase text-construction">
          {product.condition}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-wide text-steel">{product.category}</p>
        <Link href={`/catalogo/${product.slug}`}>
          <h3 className="mt-2 text-xl font-black text-carbon group-hover:text-black">{product.name}</h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-6 text-steel">{product.shortDescription}</p>
        <div className="mt-5">
          <div>
            <p className="text-xs uppercase text-steel">Precio inicial</p>
            <p className="text-lg font-black text-carbon">{formatProductPrice(product)}</p>
          </div>
        </div>
        <p className="mt-3 rounded-md border border-construction/30 bg-construction/10 p-3 text-xs font-semibold leading-5 text-carbon">
          Después del pago, un asesor de Urbanizadora Marmol MX se comunicará contigo para confirmar disponibilidad, logística, entrega, condiciones técnicas y detalles finales.
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-carbon px-4 text-xs font-black uppercase tracking-wide text-white transition hover:bg-construction hover:text-carbon"
            onClick={() => addItem(product.id)}
            type="button"
          >
            <ShoppingCart size={16} />
            Agregar al carrito
          </button>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-black/15 px-4 text-xs font-black uppercase tracking-wide text-carbon transition hover:border-construction hover:bg-construction/10"
            href={`/contacto?interes=${encodeURIComponent(product.name)}`}
          >
            <ClipboardCheck size={16} />
            Solicitar cotizacion
          </Link>
        </div>
      </div>
    </article>
  );
}
