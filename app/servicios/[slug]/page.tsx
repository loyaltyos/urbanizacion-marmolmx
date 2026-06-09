import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HardHat } from "lucide-react";
import { getServicePage, servicePages } from "@/lib/services-seo";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/servicios/${service.slug}`
    },
    openGraph: {
      title: `${service.title} | Urbanizadora Marmol MX`,
      description: service.description,
      url: absoluteUrl(`/servicios/${service.slug}`)
    }
  };
}

export default async function ServiceSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  return (
    <section className="bg-zincpanel py-14 sm:py-18">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-carbon text-construction">
            <HardHat size={28} />
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-steel">
            Servicios de infraestructura
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-carbon sm:text-5xl">
            {service.heading}
          </h1>
          <p className="mt-5 text-base leading-8 text-steel">{service.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-md bg-construction px-5 text-sm font-black uppercase tracking-wide text-carbon hover:bg-signal" href="/contacto">
              Solicitar cotizacion
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-md bg-carbon px-5 text-sm font-black uppercase tracking-wide text-white hover:bg-graphite" href="/servicios">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
