export const servicePages = [
  {
    slug: "terracerias",
    title: "Terracerias",
    description:
      "Servicios de terracerias para urbanizacion, plataformas industriales, vialidades y obra civil en Mexico.",
    heading: "Terracerias para proyectos de infraestructura y urbanizacion",
    body:
      "Urbanizadora Marmol MX coordina cortes, rellenos, acarreos, conformacion de plataformas y preparacion de terrenos para proyectos residenciales, industriales y viales."
  },
  {
    slug: "compactacion",
    title: "Compactacion",
    description:
      "Compactacion de terracerias, subrasantes, plataformas y bases para obra civil y desarrollo urbano.",
    heading: "Compactacion profesional para bases, subrasantes y plataformas",
    body:
      "Ejecutamos compactacion por capas con maquinaria especializada, seguimiento operativo y validacion tecnica segun tipo de suelo, alcance y condiciones de obra."
  },
  {
    slug: "urbanizacion",
    title: "Urbanizacion",
    description:
      "Servicios de urbanizacion integral para vialidades, lotificacion, infraestructura urbana y desarrollos inmobiliarios.",
    heading: "Urbanizacion integral para desarrollos urbanos e industriales",
    body:
      "Atendemos proyectos de urbanizacion con enfoque empresarial: vialidades, plataformas, lotificacion, movimiento de tierras, concreto y coordinacion de maquinaria pesada."
  },
  {
    slug: "movimiento-de-tierras",
    title: "Movimiento de tierras",
    description:
      "Movimiento de tierras con maquinaria pesada, excavadoras, retroexcavadoras y camiones de volteo.",
    heading: "Movimiento de tierras con maquinaria pesada",
    body:
      "Realizamos excavacion, carga, acarreo, relleno, cortes y conformacion de terrenos con equipos especializados para obras de diferentes escalas."
  },
  {
    slug: "obra-civil",
    title: "Obra civil",
    description:
      "Servicios de obra civil, infraestructura urbana, concreto y coordinacion tecnica para construccion pesada.",
    heading: "Obra civil e infraestructura urbana",
    body:
      "Integramos soluciones de obra civil para infraestructura, concreto, vialidades, desarrollos urbanos y proyectos industriales con seguimiento profesional."
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
