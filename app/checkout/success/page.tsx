import Link from "next/link";
import type { Metadata } from "next";
import { formatCurrency } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Checkout completado",
  description: "Confirmacion de compra o solicitud recibida por Urbanizadora Marmol MX.",
  alternates: {
    canonical: "/checkout/success"
  }
};

type CheckoutSuccessPageProps = {
  searchParams?: Promise<{
    session_id?: string;
  }>;
};

async function getSessionSummary(sessionId?: string) {
  if (!sessionId) return null;

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    return {
      id: session.id,
      amountTotal: typeof session.amount_total === "number" ? session.amount_total / 100 : 0,
      customerEmail: session.customer_details?.email || session.customer_email || "No disponible",
      paymentStatus: session.payment_status
    };
  } catch (error) {
    console.error("Stripe session retrieve error", error);
    return null;
  }
}

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const params = await searchParams;
  const session = await getSessionSummary(params?.session_id);

  return (
    <section className="bg-zincpanel px-4 py-20">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-black/10 bg-white text-center shadow-sm">
        <div className="bg-carbon px-6 py-10 text-white">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-construction">
            Stripe Checkout
          </p>
          <h1 className="mt-3 text-4xl font-black">Solicitud recibida</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Después del pago, un asesor de Urbanizadora Marmol MX se comunicará contigo para confirmar disponibilidad, logística, entrega, condiciones técnicas y detalles finales.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs font-bold uppercase tracking-wide text-construction">
            Pago procesado para Urbanizadora Marmol MX, division de Marmol MX.
          </p>
        </div>
        <div className="p-6 sm:p-8">
          {session ? (
            <div className="grid gap-3 rounded-md border border-black/10 bg-zincpanel p-5 text-left text-sm">
              <div className="flex flex-col gap-1 border-b border-black/10 pb-3 sm:flex-row sm:justify-between">
                <span className="font-bold text-steel">Numero de operacion</span>
                <span className="font-black text-carbon">{session.id}</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-black/10 pb-3">
                <span className="font-bold text-steel">Monto pagado</span>
                <span className="font-black text-carbon">{formatCurrency(session.amountTotal)}</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-black/10 pb-3">
                <span className="font-bold text-steel">Correo del cliente</span>
                <span className="font-black text-carbon">{session.customerEmail}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="font-bold text-steel">Estado del pago</span>
                <span className="font-black uppercase text-carbon">{session.paymentStatus}</span>
              </div>
            </div>
          ) : (
            <p className="rounded-md border border-construction/40 bg-construction/10 p-4 text-sm font-semibold leading-6 text-carbon">
              No se encontro una sesion de Stripe para mostrar detalles adicionales.
            </p>
          )}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-steel">
            Los precios pueden estar sujetos a disponibilidad, ubicacion de obra, condiciones de acceso, flete, maniobras y validacion tecnica.
          </p>
          <Link className="mt-8 inline-flex min-h-12 items-center rounded-md bg-construction px-5 text-sm font-black uppercase text-carbon" href="/catalogo">
            Volver al catalogo
          </Link>
        </div>
      </div>
    </section>
  );
}
