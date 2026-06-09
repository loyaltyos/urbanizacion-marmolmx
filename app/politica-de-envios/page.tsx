import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politica de Envios",
  description:
    "Politica de envios, fletes, maniobras y coordinacion logistica para productos y maquinaria pesada.",
  alternates: {
    canonical: "/politica-de-envios"
  }
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Politica de Envios"
      description="Condiciones generales para entregas, fletes, maniobras, seguros y coordinacion logistica de productos, equipos y maquinaria pesada."
      sections={[
        {
          title: "Responsable de coordinacion",
          body: "Urbanizadora Marmol MX, division comercial de Marmol MX especializada en infraestructura y urbanizacion, coordinara las entregas, fletes y maniobras vinculadas con las operaciones generadas desde este sitio."
        },
        {
          title: "Cobertura y condiciones",
          body: "Los envios estan sujetos a ubicacion, volumen, peso, tipo de producto, disponibilidad logistica, condiciones de acceso, horarios de entrega y validacion del sitio de recepcion u obra."
        },
        {
          title: "Maquinaria pesada",
          body: "La maquinaria pesada requiere coordinacion especial, validacion de rutas, equipo de traslado, permisos cuando apliquen, maniobras de carga y descarga, y confirmacion previa por parte de un asesor."
        },
        {
          title: "Fletes, maniobras y seguros",
          body: "Fletes, maniobras, seguros, escoltas, gruas, plataformas, operadores o servicios adicionales podran cotizarse por separado segun el alcance y condiciones de la entrega."
        },
        {
          title: "Confirmacion de tiempos y costos",
          body: "Un asesor confirmara tiempos, costos finales y condiciones logisticas antes de cerrar la operacion. Los tiempos estimados pueden cambiar por disponibilidad, clima, ruta, permisos o condiciones del sitio."
        }
      ]}
    />
  );
}
