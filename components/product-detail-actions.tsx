"use client";

import Link from "next/link";
import { ClipboardCheck, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/types";

export function ProductDetailActions({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-construction px-5 text-sm font-black uppercase tracking-wide text-carbon hover:bg-signal"
        onClick={() => addItem(product.id)}
        type="button"
      >
        <ShoppingCart size={17} />
        Agregar al carrito
      </button>
      <Link
        className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-black uppercase tracking-wide text-white hover:border-construction hover:text-construction"
        href={`/contacto?interes=${encodeURIComponent(product.name)}`}
      >
        <ClipboardCheck className="mr-2" size={17} />
        Solicitar cotizacion
      </Link>
    </div>
  );
}
