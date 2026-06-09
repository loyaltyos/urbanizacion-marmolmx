import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios de terracerias, urbanizacion, nivelacion, compactacion, concreto y obra civil.",
  alternates: {
    canonical: "/servicios"
  }
};

const services = [
  "Terracerias y movimiento de tierras",
  "Urbanizacion de fraccionamientos y parques industriales",
  "Nivelacion de terrenos y plataformas",
  "Compactacion de bases y subrasantes",
  "Concreto, bombeo y apoyo logistico",
  "Obra civil e infraestructura urbana"
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Servicios"
            title="Obra pesada coordinada desde planeacion hasta ejecucion."
            description="Trabajamos frentes donde el control de maquinaria, suministro, niveles y tiempos define el resultado economico del proyecto."
          />
          <div className="mt-8 grid gap-3">
            {services.map((service) => (
              <div className="rounded-md border border-black/10 bg-zincpanel p-4 font-black text-carbon" key={service}>
                {service}
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
