import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita cotizacion para maquinaria pesada, urbanizacion, terracerias, concreto y obra civil.",
  alternates: {
    canonical: "/contacto"
  }
};

type ContactPageProps = {
  searchParams?: Promise<{
    interes?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const interest = resolvedSearchParams?.interes;

  return (
    <section className="bg-zincpanel py-14 sm:py-18">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contacto / Cotizacion"
            title="Cuentanos que necesita tu obra."
            description="Comparte ubicacion, tipo de proyecto y producto o servicio de interes. El flujo queda listo para conectar CRM, Supabase o una mesa comercial."
          />
          <div className="mt-8 rounded-lg bg-carbon p-6 text-white">
            <p className="font-black uppercase text-construction">Atencion empresarial</p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Solicitudes de renta de maquinaria pesada, servicios de obra civil, anticipos y cotizaciones autorizadas.
            </p>
          </div>
        </div>
        <ContactForm interest={interest} />
      </div>
    </section>
  );
}
