import type { Metadata } from "next";
import { Building2, Network, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Urbanizadora Marmol MX, division comercial de Marmol MX y Grupo Marmol MX para obra pesada e infraestructura urbana.",
  alternates: {
    canonical: "/nosotros"
  }
};

const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Building2,
    title: "Operacion robusta",
    text: "Procesos pensados para obra civil, urbanizacion y movimiento de tierras."
  },
  {
    icon: Network,
    title: "Ecosistema empresarial",
    text: "Conectado con Marmol MX y Maquinarias Marmol MX por marca, respaldo comercial y confianza."
  },
  {
    icon: ShieldCheck,
    title: "Formalidad comercial",
    text: "Cotizaciones, anticipos y futuras pasarelas bajo un flujo administrativo claro."
  }
];

export default function AboutPage() {
  return (
    <section className="bg-carbon py-14 text-white sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nosotros"
          inverted
          title="Una unidad industrial del ecosistema Marmol MX."
          description="Urbanizadora Marmol MX es la division especializada en urbanizacion, movimiento de tierras, infraestructura y obra pesada de Marmol MX."
        />
        <div className="mt-8 rounded-lg border border-construction/35 bg-construction/10 p-6">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-construction">
            Marmol MX
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70">
            Urbanizadora Marmol MX es la division especializada en urbanizacion, movimiento de tierras, infraestructura y obra pesada de Marmol MX. Nuestro objetivo es ofrecer soluciones integrales para proyectos industriales, residenciales, comerciales y de desarrollo urbano en Mexico.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div className="rounded-lg border border-white/10 bg-white/5 p-6" key={title}>
              <Icon className="text-construction" size={30} />
              <h2 className="mt-5 text-xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
