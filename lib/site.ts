export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const siteMetadata = {
  name: "Urbanizadora Marmol MX",
  title: "Urbanizadora Marmol MX | Division de Marmol MX para Infraestructura y Maquinaria Pesada",
  description:
    "Urbanizadora Marmol MX, division de Marmol MX y parte del ecosistema Grupo Marmol MX, ofrece soluciones para urbanizacion, movimiento de tierras, infraestructura, maquinaria pesada, terracerias, compactacion y construccion en Mexico.",
  keywords: [
    "Urbanizadora Marmol MX",
    "Marmol MX",
    "Grupo Marmol MX",
    "urbanizacion",
    "infraestructura",
    "maquinaria pesada",
    "terracerias",
    "movimiento de tierras",
    "compactacion",
    "obra civil",
    "construccion",
    "camiones de concreto",
    "retroexcavadoras",
    "excavadoras",
    "Mexico"
  ],
  ogImage: "/og-image.svg"
};

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}
