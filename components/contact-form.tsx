"use client";

import { MessageCircle, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const projectTypes = [
  "Urbanizacion",
  "Movimiento de tierras",
  "Terracerias",
  "Nivelacion de terrenos",
  "Concreto",
  "Renta de maquinaria",
  "Cotizacion de equipo"
];

export function ContactForm({ interest }: { interest?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "529999999999";
  const text = encodeURIComponent(
    `Hola, quiero solicitar informacion de Urbanizadora Marmol MX${interest ? ` sobre ${interest}` : ""}.`
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="grid gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-carbon">
          Nombre
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-carbon">
          Telefono
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="phone" required type="tel" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-carbon">
          Email
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-carbon">
          Empresa
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="company" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-carbon">
          Tipo de proyecto
          <select className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="projectType">
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-carbon">
          Ubicacion de obra
          <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="location" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-carbon">
        Producto o servicio de interes
        <input
          className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction"
          defaultValue={interest}
          name="interest"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-carbon">
        Mensaje
        <textarea className="min-h-32 rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-construction" name="message" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-carbon px-5 text-sm font-black uppercase tracking-wide text-white hover:bg-graphite" type="submit">
          <Send size={17} />
          Enviar solicitud
        </button>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-construction px-5 text-sm font-black uppercase tracking-wide text-carbon hover:bg-signal"
          href={`https://wa.me/${whatsapp}?text=${text}`}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
      {submitted ? (
        <p className="rounded-md border border-construction/40 bg-construction/10 p-4 text-sm font-semibold leading-6 text-carbon">
          Solicitud registrada en el formulario. Para atencion inmediata, continua por WhatsApp con el resumen de tu proyecto.
        </p>
      ) : null}
    </form>
  );
}
