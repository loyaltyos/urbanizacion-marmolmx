import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de Pagos",
  description:
    "Politica de pagos en linea, compras directas, anticipos y cotizaciones autorizadas de Urbanizadora Marmol MX.",
  alternates: {
    canonical: "/politica-de-pagos"
  }
};

export default function PaymentsPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de Pagos"
      description="Informacion sobre pagos en linea, anticipos, compras directas y confirmacion operativa posterior."
      sections={[
        {
          title: "Responsable de la operacion",
          body: "Urbanizadora Marmol MX, division comercial de Marmol MX, atiende las operaciones relacionadas con infraestructura, urbanizacion, obra pesada, maquinaria y servicios asociados que se gestionen desde este sitio."
        },
        {
          title: "Pagos en linea",
          body: "El sitio esta preparado para pagos en linea mediante Stripe Checkout. Las credenciales deben configurarse exclusivamente mediante variables de entorno autorizadas."
        },
        {
          title: "Compras, anticipos y cotizaciones",
          body: "Urbanizadora Marmol MX podra aceptar compras directas, pagos de anticipo y pagos derivados de cotizaciones autorizadas, segun el tipo de producto, servicio, renta, maquinaria o proyecto."
        },
        {
          title: "Disponibilidad final",
          body: "Los pagos no garantizan disponibilidad final hasta confirmacion del asesor. La disponibilidad puede depender de inventario, ubicacion de obra, flete, maniobras, condiciones tecnicas, tiempos de servicio y validacion operativa."
        },
        {
          title: "Confirmacion operativa",
          body: "Después del pago, un asesor de Urbanizadora Marmol MX se comunicará contigo para confirmar disponibilidad, logística, entrega, condiciones técnicas y detalles finales."
        },
        {
          title: "Pasarela de pago",
          body: "Stripe Checkout procesa los pagos en linea usando la configuracion activa del entorno de despliegue, el dominio autorizado y el webhook de la integracion."
        }
      ]}
    />
  );
}
