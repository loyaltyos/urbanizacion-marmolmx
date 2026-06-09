import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de Devoluciones",
  description:
    "Politica de devoluciones y reembolsos para productos fisicos, servicios, rentas, anticipos y trabajos personalizados.",
  alternates: {
    canonical: "/politica-de-devoluciones"
  }
};

export default function ReturnsPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de Devoluciones"
      description="Criterios generales para evaluar devoluciones, cancelaciones y reembolsos en operaciones industriales y de obra pesada."
      sections={[
        {
          title: "Responsable de revision",
          body: "Urbanizadora Marmol MX, division comercial de Marmol MX, revisara las solicitudes relacionadas con productos, servicios, rentas, anticipos y proyectos gestionados por su unidad de infraestructura y urbanizacion."
        },
        {
          title: "Productos fisicos",
          body: "La devolucion de productos fisicos estara sujeta al estado del producto, empaque, documentacion, disponibilidad de revision tecnica y condiciones comerciales aplicables. No se aceptaran productos alterados, usados indebidamente o danados por manejo externo."
        },
        {
          title: "Servicios, rentas y anticipos",
          body: "Servicios, rentas de maquinaria, anticipos o trabajos personalizados estaran sujetos a evaluacion, avance operativo, costos ya generados, movilizacion, reservacion de equipos, personal asignado y gastos administrativos o logisticos."
        },
        {
          title: "Sin devoluciones automaticas",
          body: "Urbanizadora Marmol MX no promete devoluciones automaticas. Cada solicitud sera revisada segun el tipo de operacion, evidencia disponible, condiciones pactadas, disponibilidad y avance del servicio o entrega."
        },
        {
          title: "Reembolsos",
          body: "Cuando aplique, los reembolsos se realizaran por el mismo metodo de pago utilizado o por el mecanismo administrativo que se acuerde con el cliente, dentro de los tiempos de revision y conciliacion correspondientes."
        }
      ]}
    />
  );
}
