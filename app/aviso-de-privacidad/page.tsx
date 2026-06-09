import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de Urbanizadora Marmol MX para contacto, cotizaciones, compras, facturacion, soporte y logistica.",
  alternates: {
    canonical: "/aviso-de-privacidad"
  }
};

export default function PrivacyNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Aviso de Privacidad"
      description="Urbanizadora Marmol MX protege los datos personales recabados durante procesos de contacto, cotizacion, compra, facturacion, soporte y seguimiento comercial."
      sections={[
        {
          title: "Responsable",
          body: "El responsable del tratamiento de datos personales es Urbanizadora Marmol MX, division comercial de Marmol MX, respaldo empresarial enfocado en construccion, maquinaria, infraestructura, obra pesada y servicios relacionados."
        },
        {
          title: "Uso de datos",
          body: "Los datos personales podran utilizarse para contacto, elaboracion de cotizaciones, gestion de compras, facturacion, soporte, coordinacion logistica, seguimiento comercial, entrega de productos, validacion de proyectos y atencion posterior."
        },
        {
          title: "Datos recabados",
          body: "Podremos recabar nombre, telefono, correo electronico, empresa, direccion de entrega u obra, datos fiscales cuando aplique, producto o servicio de interes, mensaje enviado y datos necesarios para coordinar compras, servicios o cotizaciones."
        },
        {
          title: "Derechos ARCO",
          body: "El titular podra solicitar acceso, rectificacion, cancelacion u oposicion respecto de sus datos personales, conforme a la legislacion aplicable. La solicitud debera incluir informacion suficiente para identificar al titular y el derecho que desea ejercer."
        },
        {
          title: "Contacto de privacidad",
          body: "Para temas de privacidad, derechos ARCO o dudas sobre el tratamiento de datos, escribir al correo placeholder: privacidad@urbanizadoramarmol.mx."
        }
      ]}
    />
  );
}
