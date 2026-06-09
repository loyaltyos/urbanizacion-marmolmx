import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout no completado",
  description: "Checkout no completado en Urbanizadora Marmol MX.",
  alternates: {
    canonical: "/checkout/cancel"
  }
};

export default function CheckoutCancelPage() {
  return (
    <section className="bg-white px-4 py-20 text-center">
      <h1 className="text-4xl font-black text-carbon">Pago cancelado</h1>
      <p className="mx-auto mt-4 max-w-2xl text-steel">
        El pago fue cancelado. Puedes volver al carrito o comunicarte con un asesor.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link className="inline-flex min-h-12 items-center rounded-md bg-carbon px-5 text-sm font-black uppercase text-white" href="/checkout">
          Reintentar
        </Link>
        <Link className="inline-flex min-h-12 items-center rounded-md bg-construction px-5 text-sm font-black uppercase text-carbon" href="/contacto">
          Contacto
        </Link>
      </div>
    </section>
  );
}
