import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Building2,
  Factory,
  HardHat,
  MapPinned,
  MessageCircle,
  Network,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/products";

const services = [
  ["Terracerias", "Cortes, rellenos, subrasantes y bases para desarrollo urbano."],
  ["Urbanizacion", "Vialidades, plataformas, lotificacion e infraestructura primaria."],
  ["Nivelacion", "Control de niveles para terrenos comerciales, industriales y residenciales."],
  ["Compactacion", "Compactacion por capas con equipo pesado y supervision operativa."],
  ["Concreto", "Suministro, bombeo y apoyo logistico para colados de obra civil."],
  ["Obra civil", "Ejecucion y coordinacion de frentes para infraestructura urbana."]
];

const indicators = [
  ["15+", "Anos de experiencia operativa"],
  ["9", "Lineas de servicio y producto"],
  ["24h", "Atencion empresarial"],
  ["MX", "Cobertura por proyecto"]
];

const corporateIndicators = [
  ["+120", "Proyectos Ejecutados"],
  ["+500", "Equipos Entregados"],
  ["+15", "Anos de Experiencia"],
  ["Cobertura", "Nacional"]
];

const trustItems: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Pagos seguros" },
  { icon: BadgeCheck, label: "Cotizaciones formales" },
  { icon: Award, label: "Atencion empresarial" },
  { icon: Wrench, label: "Soporte tecnico" }
];

const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Truck,
    title: "Maquinaria Especializada",
    description: "Equipos para proyectos de cualquier escala."
  },
  {
    icon: ShieldCheck,
    title: "Atencion Empresarial",
    description: "Seguimiento profesional y asesoria."
  },
  {
    icon: Network,
    title: "Soluciones Integrales",
    description: "Urbanizacion, terracerias e infraestructura."
  },
  {
    icon: MapPinned,
    title: "Cobertura Nacional",
    description: "Atencion a proyectos en todo Mexico."
  }
];

const groupCompanies: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Building2,
    name: "Marmol MX",
    description: "Construccion, remodelacion y acabados."
  },
  {
    icon: Wrench,
    name: "Maquinarias Marmol MX",
    description: "Maquinaria, herramientas y equipos industriales."
  },
  {
    icon: Factory,
    name: "Urbanizadora Marmol MX",
    description: "Infraestructura, urbanizacion y obra pesada."
  }
];

const featuredProjects = [
  {
    name: "Urbanizacion Residencial",
    description: "Infraestructura y vialidades para desarrollo habitacional con coordinacion de frentes urbanos.",
    metric: "25,000+ m2 intervenidos",
    image: "https://images.unsplash.com/photo-1652303713917-2666b8bee507?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    name: "Plataforma Industrial",
    description: "Movimiento de tierras y compactacion para preparacion de plataforma de nave industrial.",
    metric: "Movimiento y compactacion",
    image: "https://images.unsplash.com/photo-1597974385058-66a931a50a7a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    name: "Infraestructura Vial",
    description: "Nivelacion y conformacion de caminos con equipos especializados para obra pesada.",
    metric: "Caminos conformados",
    image: "https://images.unsplash.com/photo-1761135192805-c0f3fc4afdf4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  },
  {
    name: "Desarrollo Urbano",
    description: "Terracerias y urbanizacion integral con ejecucion de obra civil y control operativo.",
    metric: "Urbanizacion integral",
    image: "https://images.unsplash.com/photo-1652303518314-e1196ef221f6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }
];

const brandReferences = ["Caterpillar", "Komatsu", "Volvo", "JCB", "John Deere"];

const testimonials = [
  {
    quote:
      "La coordinacion tecnica y la respuesta de maquinaria nos permitieron iniciar plataforma sin retrasos operativos.",
    author: "Direccion de Proyecto",
    company: "Desarrollo Industrial Privado"
  },
  {
    quote:
      "Recibimos seguimiento formal desde la cotizacion hasta la programacion de equipos en campo.",
    author: "Gerencia de Obra",
    company: "Infraestructura Vial Regional"
  },
  {
    quote:
      "El equipo entendio el alcance urbano y resolvio necesidades de terraceria, compactacion y suministro.",
    author: "Coordinacion Operativa",
    company: "Proyecto Residencial"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-carbon text-white">
        <Image
          alt="Obra pesada con maquinaria industrial"
          className="object-cover opacity-55"
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1800&q=85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/20" />
        <div className="industrial-grid absolute inset-0" />
        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded bg-construction px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-carbon">
              Urbanizadora Marmol MX
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Infraestructura, urbanizacion y maquinaria pesada para grandes proyectos.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              Soluciones integrales para movimiento de tierras, nivelacion de terrenos, concreto, obra civil y desarrollo urbano.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/catalogo">Ver catalogo</ButtonLink>
              <ButtonLink href="/contacto" variant="outline">Solicitar cotizacion</ButtonLink>
              <ButtonLink href="https://wa.me/529999999999" variant="light">Contactar por WhatsApp</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-carbon px-4 pb-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto -mt-10 grid max-w-7xl gap-3 rounded-lg border border-white/10 bg-graphite p-4 shadow-industrial sm:grid-cols-2 lg:grid-cols-4">
          {corporateIndicators.map(([value, label]) => (
            <div className="group rounded-md border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-construction/70 hover:bg-white/[0.06]" key={label}>
              <p className="text-3xl font-black text-construction transition duration-300 group-hover:text-signal">{value}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-wide text-white/65">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios principales"
            title="Ejecucion pesada con enfoque empresarial."
            description="Planeamos, coordinamos y ejecutamos frentes de obra donde la maquinaria, el suministro y la administracion deben avanzar con precision."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description]) => (
              <div className="group rounded-lg border border-black/10 bg-zincpanel p-6 transition duration-300 hover:-translate-y-1 hover:border-construction/60 hover:bg-white hover:shadow-industrial" key={title}>
                <HardHat className="text-construction" size={28} />
                <h3 className="mt-5 text-xl font-black text-carbon">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon py-16 text-white sm:py-20" id="ecosistema-marmol">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Proyectos Destacados"
              inverted
              title="Portafolio operativo para infraestructura y desarrollo urbano."
              description="Casos de ejemplo que reflejan la capacidad de ejecucion en urbanizacion, plataformas industriales, vialidades y obra civil."
            />
            <ButtonLink href="/proyectos" variant="outline">Ver portafolio</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-construction/70 hover:bg-white/[0.07]" key={project.name}>
                <div className="relative aspect-[16/9] overflow-hidden bg-graphite">
                  <Image
                    alt={project.name}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded bg-construction px-3 py-1 text-xs font-black uppercase tracking-wide text-carbon">
                    {project.metric}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
                  <a className="mt-5 inline-flex min-h-11 items-center rounded-md border border-white/15 px-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-construction hover:text-construction" href="/proyectos">
                    Ver Proyecto
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zincpanel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Por que elegirnos"
            title="Estructura empresarial para obras que exigen control."
            description="Combinamos maquinaria, asesoria y ejecucion para que el proyecto avance con trazabilidad tecnica y atencion formal."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <div className="group rounded-lg border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-construction/70 hover:shadow-industrial" key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-carbon text-construction transition duration-300 group-hover:bg-construction group-hover:text-carbon">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-black text-carbon">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              eyebrow="Marmol MX"
              inverted
              title="Parte del ecosistema Marmol MX"
              description="Urbanizadora Marmol MX forma parte de Marmol MX, grupo empresarial enfocado en construccion, maquinaria, infraestructura y desarrollo de proyectos en Mexico."
            />
            <div className="rounded-lg border border-construction/35 bg-construction/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-construction">
                Grupo Marmol MX
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Cada division atiende una especialidad clara y comparte una misma base de marca, formalidad comercial y enfoque operativo.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {groupCompanies.map(({ icon: Icon, name, description }) => (
              <article className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-construction/70 hover:bg-white/[0.07]" key={name}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-construction transition duration-300 group-hover:bg-construction group-hover:text-carbon">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zincpanel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Catalogo industrial"
              title="Productos, renta, anticipos y cotizaciones en un solo flujo."
              description="El catalogo esta preparado para base de datos y pasarela futura, sin perder el caracter de empresa constructora."
            />
            <ButtonLink href="/catalogo" variant="dark">Ver todo</ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-xl font-black leading-tight text-carbon">
            Trabajamos con equipos y soluciones de las principales marcas de la industria
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-steel">
            Referencias visuales de marcas reconocidas en maquinaria pesada y construccion. No implica distribucion oficial.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {brandReferences.map((brand) => (
              <div className="flex min-h-24 items-center justify-center rounded-lg border border-black/10 bg-zincpanel px-4 text-center text-lg font-black uppercase tracking-wide text-carbon grayscale transition duration-300 hover:-translate-y-1 hover:border-construction hover:bg-white hover:text-black" key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeading
            eyebrow="Indicadores"
            inverted
            title="Capacidad instalada para proyectos de alto impacto."
            description="Atencion personalizada, maquinaria disponible y procesos listos para cotizaciones formales, anticipos y seguimiento tecnico."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {indicators.map(([value, label]) => (
              <div className="rounded-lg border border-white/10 bg-white/5 p-6" key={label}>
                <p className="text-4xl font-black text-construction">{value}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonios"
            title="Relaciones profesionales construidas en obra."
            description="Comentarios de ejemplo para reforzar la experiencia corporativa de atencion, coordinacion y cumplimiento operativo."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure className="rounded-lg border border-black/10 bg-zincpanel p-6 transition duration-300 hover:-translate-y-1 hover:border-construction/70 hover:bg-white hover:shadow-industrial" key={testimonial.company}>
                <blockquote className="text-base font-semibold leading-7 text-carbon">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 border-t border-black/10 pt-4">
                  <p className="font-black text-carbon">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-steel">{testimonial.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zincpanel py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Confianza"
            title="Compra o cotiza con estructura formal."
            description="La experiencia de e-commerce existe para facilitar operaciones, anticipos y solicitudes, no para convertir maquinaria pesada en una tienda generica."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <div className="group rounded-lg border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-construction/70 hover:shadow-industrial" key={label}>
                <Icon className="text-construction transition duration-300 group-hover:scale-110" size={28} />
                <p className="mt-4 font-black text-carbon">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-white/10 bg-carbon p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Truck className="text-construction" size={32} />
            <h2 className="mt-4 text-3xl font-black">Listos para evaluar tu frente de obra.</h2>
            <p className="mt-3 text-white/65">Solicita una cotizacion para urbanizacion, terracerias, concreto o renta de maquinaria pesada.</p>
          </div>
          <ButtonLink href="/contacto">Solicitar cotizacion</ButtonLink>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Factory className="text-construction" size={38} />
            <h2 className="mt-5 text-3xl font-black leading-tight text-carbon sm:text-4xl">
              &iquest;Tienes un proyecto en desarrollo?
            </h2>
            <p className="mt-4 text-base leading-7 text-steel">
              Comparte el alcance general y nuestro equipo preparara una propuesta empresarial para infraestructura, urbanizacion o construccion pesada.
            </p>
            <a
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-construction px-5 text-sm font-black uppercase tracking-wide text-carbon transition hover:bg-signal"
              href="https://wa.me/529999999999"
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
          <form className="grid gap-4 rounded-lg border border-black/10 bg-zincpanel p-5 shadow-sm sm:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-carbon">
                Nombre
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-carbon">
                Empresa
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="company" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-carbon">
                Telefono
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="phone" type="tel" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-carbon">
                Correo
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="email" type="email" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-carbon">
                Estado / Ciudad
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="location" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-carbon">
                Tipo de proyecto
                <select className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="projectType">
                  <option>Urbanizacion</option>
                  <option>Terracerias</option>
                  <option>Infraestructura vial</option>
                  <option>Plataforma industrial</option>
                  <option>Obra civil</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-carbon">
              Presupuesto estimado
              <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="budget" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-carbon">
              Mensaje
              <textarea className="min-h-32 rounded-md border border-black/15 px-4 py-3 font-normal outline-none transition focus:border-construction" name="message" />
            </label>
            <button className="inline-flex min-h-12 items-center justify-center rounded-md bg-carbon px-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-construction hover:text-carbon" type="submit">
              Solicitar Propuesta
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
