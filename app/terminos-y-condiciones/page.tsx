import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  description:
    "Terminos y condiciones de uso, compras, servicios, rentas, anticipos y cotizaciones de Urbanizadora Marmol MX.",
  alternates: {
    canonical: "/terminos-y-condiciones"
  }
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terminos y Condiciones"
      description="Condiciones generales para el uso del sitio, compra de productos, solicitud de servicios, rentas, anticipos y cotizaciones autorizadas."
      sections={[
        {
          title: "Identidad corporativa",
          body: "Urbanizadora Marmol MX, division comercial de Marmol MX, opera como unidad especializada en infraestructura, urbanizacion y obra pesada. Las operaciones del sitio corresponden a esta division, salvo que una cotizacion, contrato o comunicacion formal indique lo contrario."
        },
        {
          title: "Uso del sitio",
          body: "El sitio de Urbanizadora Marmol MX ofrece informacion corporativa, catalogo industrial, formularios de contacto, solicitudes de cotizacion y preparacion para operaciones e-commerce. El usuario debe proporcionar informacion veraz y suficiente para validar cada operacion."
        },
        {
          title: "Productos, servicios, maquinaria, rentas y anticipos",
          body: "Las operaciones pueden incluir productos fisicos, maquinaria pesada, servicios de urbanizacion, rentas de equipo, anticipos de proyecto y cotizaciones autorizadas. Cada operacion puede requerir validacion tecnica, logistica y administrativa."
        },
        {
          title: "Precios y disponibilidad",
          body: "Los precios estan sujetos a disponibilidad, ubicacion de obra, flete, maniobras, condiciones de acceso, volumen, estado del equipo, tiempos de servicio y validacion tecnica. Despues de una compra o anticipo, un asesor contactara al cliente para confirmar detalles finales."
        },
        {
          title: "Confirmacion posterior",
          body: "La compra, solicitud o anticipo no sustituye la confirmacion operativa. Urbanizadora Marmol MX podra cancelar, ajustar o reprogramar operaciones si no hay disponibilidad, si la informacion tecnica cambia o si las condiciones de obra requieren una cotizacion diferente."
        },
        {
          title: "Responsabilidad operativa",
          body: "El cliente acepta que maquinaria pesada, servicios en obra y logistica industrial pueden depender de condiciones externas como accesos, clima, permisos, disponibilidad de operadores, tipo de suelo, maniobras y seguridad del sitio."
        }
      ]}
    />
  );
}
