import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos destacados de infraestructura, urbanizacion, terracerias y obra civil.",
  alternates: {
    canonical: "/proyectos"
  }
};

const projects = [
  {
    title: "Plataforma industrial",
    location: "Centro de Mexico",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    scope: "Nivelacion, compactacion y conformacion de plataforma."
  },
  {
    title: "Vialidad urbana",
    location: "Zona metropolitana",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    scope: "Terracerias, bases y apoyo con maquinaria pesada."
  },
  {
    title: "Frente de concreto",
    location: "Proyecto privado",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1200&q=80",
    scope: "Logistica de concreto, bombeo y suministro programado."
  }
];

export default function ProjectsPage() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proyectos"
          title="Frentes destacados y capacidades por tipo de obra."
          description="Estos casos funcionan como placeholders editoriales para integrar portafolio real con imagenes, ubicacion, alcance y metricas."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article className="overflow-hidden rounded-lg border border-black/10 bg-zincpanel" key={project.title}>
              <div className="relative aspect-[4/3]">
                <Image alt={project.title} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 33vw" src={project.image} />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-wide text-steel">{project.location}</p>
                <h2 className="mt-2 text-2xl font-black text-carbon">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-steel">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
