import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPinned, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-carbon text-white">
      <div className="steel-rule h-3" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.75fr_0.75fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <p className="text-2xl font-black uppercase">Urbanizadora Marmol MX</p>
          <p className="mt-2 text-sm font-black uppercase tracking-wide text-construction">
            Soluciones para infraestructura, urbanizacion y construccion pesada.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
            Urbanizadora Marmol MX ofrece soluciones para infraestructura, urbanizacion, movimiento de tierras, maquinaria pesada y construccion en Mexico.
          </p>
          <p className="mt-3 max-w-xl text-sm font-bold leading-6 text-construction">
            Urbanizadora Marmol MX, division de Marmol MX.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              [Facebook, "Facebook"],
              [Instagram, "Instagram"],
              [Linkedin, "LinkedIn"]
            ].map(([Icon, label]) => (
              <a
                aria-label={String(label)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/70 transition hover:border-construction hover:text-construction"
                href="#"
                key={String(label)}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase text-construction">Servicios</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link className="transition hover:text-construction" href="/servicios">Urbanizacion</Link>
            <Link className="transition hover:text-construction" href="/servicios">Terracerias</Link>
            <Link className="transition hover:text-construction" href="/servicios">Nivelacion</Link>
            <Link className="transition hover:text-construction" href="/servicios">Obra civil</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase text-construction">Productos</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link className="transition hover:text-construction" href="/catalogo">Maquinaria pesada</Link>
            <Link className="transition hover:text-construction" href="/maquinaria">Renta de equipos</Link>
            <Link className="transition hover:text-construction" href="/catalogo">Concreto</Link>
            <Link className="transition hover:text-construction" href="/catalogo">Camiones y transporte</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase text-construction">Ecosistema</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link className="transition hover:text-construction" href="/#ecosistema-marmol">Marmol MX</Link>
            <Link className="transition hover:text-construction" href="/#ecosistema-marmol">Maquinarias Marmol MX</Link>
            <Link className="transition hover:text-construction" href="/#ecosistema-marmol">Urbanizadora Marmol MX</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase text-construction">Contacto</p>
          <div className="mt-3 grid gap-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><Phone size={15} /> +52 999 999 9999</span>
            <span className="flex items-center gap-2"><Mail size={15} /> contacto@urbanizadoramarmol.mx</span>
            <span className="flex items-center gap-2"><MapPinned size={15} /> Cobertura nacional</span>
            <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-construction px-4 text-xs font-black uppercase tracking-wide text-carbon transition hover:bg-signal" href="/contacto">
              Cotizaciones
            </Link>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-construction hover:text-construction"
              href="https://wa.me/529999999999"
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs uppercase tracking-wide text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>(c) 2026 Urbanizadora Marmol MX. Parte de Grupo Marmol MX.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-construction" href="/nosotros">Nosotros</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link className="transition hover:text-construction" href="/aviso-de-privacidad">Privacidad</Link>
            <Link className="transition hover:text-construction" href="/terminos-y-condiciones">Terminos</Link>
            <Link className="transition hover:text-construction" href="/politica-de-devoluciones">Devoluciones</Link>
            <Link className="transition hover:text-construction" href="/politica-de-envios">Envios</Link>
            <Link className="transition hover:text-construction" href="/politica-de-pagos">Pagos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
