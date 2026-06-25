import type { Product, ProductCategory } from "@/lib/types";

export const categories: ProductCategory[] = [
  "Maquinaria pesada",
  "Movimiento de tierra",
  "Compactacion y nivelacion",
  "Concreto",
  "Camiones y transporte",
  "Refacciones",
  "Accesorios industriales",
  "Servicios de urbanizacion",
  "Anticipos y cotizaciones"
];

export const products: Product[] = [
  {
    id: "excavadora-renta",
    name: "Renta de excavadora hidraulica",
    slug: "renta-excavadora-hidraulica",
    category: "Maquinaria pesada",
    shortDescription: "Excavadora para cortes, zanjas, plataformas y movimiento intensivo de material.",
    longDescription:
      "Servicio de renta de excavadora hidraulica con disponibilidad para proyectos de urbanizacion, obra civil, cimentaciones, cortes de terreno y carga de material. La operacion puede cotizarse por jornada, semana o proyecto.",
    price: 12500,
    pricePrefix: "Desde",
    priceSuffix: "por dia",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1652303518314-e1196ef221f6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 3,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Peso operativo 20-22 t", "Brazo estandar", "Cucharon para excavacion", "Operador opcional"],
    specifications: { Potencia: "150 HP aprox.", Alcance: "Hasta 9.5 m", Modalidad: "Renta / apartado en linea" },
    brand: "Caterpillar / Komatsu",
    model: "Clase 320",
    condition: "renta"
  },
  {
    id: "retroexcavadora-renta",
    name: "Renta de retroexcavadora",
    slug: "renta-retroexcavadora",
    category: "Movimiento de tierra",
    shortDescription: "Equipo versatil para excavacion, carga, relleno y apoyo en obra urbana.",
    longDescription:
      "Retroexcavadora para trabajos de zanjeo, rellenos, limpieza de obra, carga ligera y movimiento de tierras en fraccionamientos, vialidades y lotes industriales.",
    price: 7500,
    pricePrefix: "Desde",
    priceSuffix: "por dia",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1759579479871-19dfbc9c39ba?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 4,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Traccion 4x4", "Cucharon frontal", "Brazo excavador", "Renta por jornada"],
    specifications: { Potencia: "90-110 HP", Uso: "Obra urbana", Modalidad: "Renta" },
    brand: "John Deere / Case",
    model: "Clase 310",
    condition: "renta"
  },
  {
    id: "nivelacion-terreno",
    name: "Servicio de nivelacion de terreno",
    slug: "servicio-nivelacion-terreno",
    category: "Servicios de urbanizacion",
    shortDescription: "Nivelacion, trazo y preparacion de plataformas para desarrollo urbano.",
    longDescription:
      "Servicio integral de nivelacion de terreno para obra civil, parques industriales, vialidades, fraccionamientos y plataformas comerciales. Incluye levantamiento inicial, programa de maquinaria y cotizacion formal.",
    price: 22000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1597974385058-66a931a50a7a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 99,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Levantamiento previo", "Control de niveles", "Maquinaria segun alcance", "Reporte de avance"],
    specifications: { Alcance: "Por proyecto", Cobertura: "Mexico", Entrega: "Validacion tecnica posterior" },
    brand: "Urbanizadora Marmol MX",
    model: "Servicio especializado",
    condition: "servicio"
  },
  {
    id: "anticipo-servicio-nivelacion",
    name: "Anticipo de servicio de nivelacion",
    slug: "anticipo-servicio-nivelacion",
    category: "Servicios de urbanizacion",
    shortDescription: "Anticipo para coordinacion inicial, revision tecnica y programacion de obra.",
    longDescription:
      "Anticipo para coordinacion inicial de servicio de nivelacion, revision tecnica y programacion de obra.",
    price: 12000,
    showPrice: true,
    image: "https://images.unsplash.com/photo-1597974385058-66a931a50a7a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 99,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Coordinacion inicial", "Revision tecnica", "Programacion de obra", "Validacion posterior al pago"],
    specifications: {
      Categoria: "Servicios de urbanizacion",
      Tipo: "Compra directa / anticipo",
      Confirmacion: "Disponibilidad, logistica, alcance y detalles finales"
    },
    brand: "Urbanizadora Marmol MX",
    model: "Anticipo de servicio",
    condition: "servicio"
  },
  {
    id: "compactacion",
    name: "Servicio de compactacion",
    slug: "servicio-compactacion",
    category: "Compactacion y nivelacion",
    shortDescription: "Compactacion de terracerias, subrasantes y plataformas de trabajo.",
    longDescription:
      "Compactacion profesional para capas de terraceria, bases hidraulicas, rellenos controlados y plataformas industriales con equipo acorde al tipo de suelo.",
    price: 18500,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1776381733574-372689e246b4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 99,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Control por capas", "Rodillo vibratorio", "Apoyo con pipa si aplica", "Bitacora de obra"],
    specifications: { Metodo: "Segun material", Uso: "Terracerias", Modalidad: "Apartado / validacion tecnica" },
    brand: "Urbanizadora Marmol MX",
    model: "Servicio especializado",
    condition: "servicio"
  },
  {
    id: "anticipo-compactacion-terreno",
    name: "Anticipo de compactacion de terreno",
    slug: "anticipo-compactacion-terreno",
    category: "Compactacion y nivelacion",
    shortDescription: "Anticipo sujeto a validacion de ubicacion, accesos y alcance operativo.",
    longDescription:
      "Anticipo para servicio de compactacion de terreno, sujeto a validacion de ubicacion, condiciones de acceso y alcance operativo.",
    price: 15000,
    showPrice: true,
    image: "https://images.unsplash.com/photo-1776381733574-372689e246b4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 99,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Compactacion de terreno", "Revision de accesos", "Validacion de ubicacion", "Alcance operativo por confirmar"],
    specifications: {
      Categoria: "Compactacion y nivelacion",
      Tipo: "Compra directa / anticipo",
      Confirmacion: "Disponibilidad, logistica, alcance y detalles finales"
    },
    brand: "Urbanizadora Marmol MX",
    model: "Anticipo de servicio",
    condition: "servicio"
  },
  {
    id: "camion-revolvedor",
    name: "Camion revolvedor de concreto",
    slug: "camion-revolvedor-concreto",
    category: "Concreto",
    shortDescription: "Unidad revolvedora para suministro y traslado de concreto en obra.",
    longDescription:
      "Camion revolvedor para proyectos que requieren suministro coordinado de concreto, apoyo logistico y entrega programada en frentes de obra.",
    price: 1150000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1751221701301-b02ca1b4b49e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 1,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Tambor revolvedor", "Chasis pesado", "Inspeccion previa", "Opcion nuevo/usado"],
    specifications: { Capacidad: "7-9 m3", Uso: "Concreto", Entrega: "Segun disponibilidad" },
    brand: "International / Freightliner",
    model: "Revolvedor",
    condition: "usado"
  },
  {
    id: "camion-volteo",
    name: "Camion de volteo",
    slug: "camion-de-volteo",
    category: "Camiones y transporte",
    shortDescription: "Transporte de material, retiro de escombro y apoyo a terracerias.",
    longDescription:
      "Camion de volteo para acarreo de material, escombro, agregados y apoyo logistico en obra pesada. Disponible para renta, compra o cotizacion por proyecto.",
    price: 780000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1751054631354-a42bd7609d75?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 2,
    active: true,
    purchaseType: "compra-directa",
    technicalSheet: ["Caja de volteo", "Chasis reforzado", "Motor diesel", "Revision mecanica"],
    specifications: { Capacidad: "14 m3 aprox.", Condicion: "Usado", Pago: "Compra directa" },
    brand: "Kenworth / International",
    model: "Volteo 14 m3",
    condition: "usado"
  },
  {
    id: "motoconformadora",
    name: "Motoconformadora",
    slug: "motoconformadora",
    category: "Compactacion y nivelacion",
    shortDescription: "Perfilado, afinado y conformacion de vialidades y plataformas.",
    longDescription:
      "Motoconformadora para trabajos de nivelacion fina, conformacion de caminos, pendientes, subrasantes y mantenimiento de vialidades.",
    price: 1250000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1761135192805-c0f3fc4afdf4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 1,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Hoja central", "Cabina cerrada", "Control hidraulico", "Renta o venta"],
    specifications: { Potencia: "140-180 HP", Uso: "Nivelacion", Modalidad: "Apartado / cotizacion final" },
    brand: "Caterpillar",
    model: "Clase 12M",
    condition: "renta"
  },
  {
    id: "rodillo-compactador",
    name: "Rodillo compactador",
    slug: "rodillo-compactador",
    category: "Compactacion y nivelacion",
    shortDescription: "Compactacion vibratoria para terracerias, bases y plataformas.",
    longDescription:
      "Rodillo compactador vibratorio para compactacion de suelos, bases y rellenos controlados en desarrollos urbanos e industriales.",
    price: 620000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1776381733574-372689e246b4?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 2,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Tambor vibratorio", "Cabina ROPS", "Diesel", "Inspeccion operativa"],
    specifications: { Peso: "10-12 t", Uso: "Compactacion", Pago: "Anticipo disponible" },
    brand: "Volvo / Dynapac",
    model: "Vibratorio 12 t",
    condition: "usado"
  },
  {
    id: "bomba-concreto",
    name: "Bomba de concreto",
    slug: "bomba-de-concreto",
    category: "Concreto",
    shortDescription: "Equipo para colocacion eficiente de concreto en obra civil.",
    longDescription:
      "Bomba de concreto para colados de infraestructura, cimentaciones, losas, muros y obra urbana con maniobra planificada.",
    price: 980000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1759686411148-d74caf422386?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 1,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Bombeo programado", "Mangueras incluidas", "Operador especializado", "Visita tecnica"],
    specifications: { Alcance: "Segun obra", Uso: "Concreto", Modalidad: "Apartado / validacion tecnica" },
    brand: "Putzmeister / Schwing",
    model: "Linea / pluma",
    condition: "servicio"
  },
  {
    id: "terraceria-movimiento-tierra",
    name: "Terraceria y movimiento de tierra",
    slug: "terraceria-movimiento-tierra",
    category: "Movimiento de tierra",
    shortDescription: "Cortes, rellenos, acarreos y conformacion inicial para proyectos urbanos.",
    longDescription:
      "Servicio de terraceria y movimiento de tierra para desarrollo urbano, vialidades, plataformas industriales y obra civil. El precio base permite iniciar solicitud y validacion de alcance.",
    price: 35000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1652303713917-2666b8bee507?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 99,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Cortes y rellenos", "Acarreo de material", "Control por frentes", "Seguimiento ejecutivo"],
    specifications: { Alcance: "Por proyecto", Uso: "Urbanizacion", Pago: "Apartado / anticipo" },
    brand: "Urbanizadora Marmol MX",
    model: "Servicio especializado",
    condition: "servicio"
  },
  {
    id: "anticipo-movimiento-tierra",
    name: "Anticipo para movimiento de tierra",
    slug: "anticipo-movimiento-tierra",
    category: "Movimiento de tierra",
    shortDescription: "Anticipo para movimiento de tierra, terracerias o preparacion de plataforma.",
    longDescription:
      "Anticipo para proyecto de movimiento de tierra, terracerias o preparacion de plataforma.",
    price: 20000,
    showPrice: true,
    image: "https://images.unsplash.com/photo-1652303713917-2666b8bee507?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 99,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Movimiento de tierra", "Terracerias", "Preparacion de plataforma", "Alcance por validar"],
    specifications: {
      Categoria: "Movimiento de tierra",
      Tipo: "Compra directa / anticipo",
      Confirmacion: "Disponibilidad, logistica, alcance y detalles finales"
    },
    brand: "Urbanizadora Marmol MX",
    model: "Anticipo de servicio",
    condition: "servicio"
  },
  {
    id: "planta-concreto-movil",
    name: "Planta de concreto movil",
    slug: "planta-concreto-movil",
    category: "Concreto",
    shortDescription: "Planta movil para produccion de concreto en frentes de obra.",
    longDescription:
      "Planta de concreto movil para proyectos que requieren produccion cercana al frente de obra, control de volumen y logistica de suministro.",
    price: 1850000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1751221703362-4cc62ecb2f8f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 1,
    active: true,
    purchaseType: "anticipo",
    technicalSheet: ["Dosificacion controlada", "Instalacion movil", "Produccion por proyecto", "Validacion de sitio"],
    specifications: { Capacidad: "Variable", Uso: "Concreto", Modalidad: "Apartado / cotizacion final" },
    brand: "Multimarca industrial",
    model: "Movil",
    condition: "nuevo"
  },
  {
    id: "generador-industrial",
    name: "Generador industrial",
    slug: "generador-industrial",
    category: "Accesorios industriales",
    shortDescription: "Generador para respaldo electrico en obra, campamentos y equipos auxiliares.",
    longDescription:
      "Generador industrial para alimentacion electrica temporal en frentes de obra, infraestructura, campamentos, bombas y equipos auxiliares.",
    price: 145000,
    pricePrefix: "Desde",
    showPrice: true,
    image: "https://images.unsplash.com/photo-1759692071712-adc78a8516c8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    stock: 4,
    active: true,
    purchaseType: "compra-directa",
    technicalSheet: ["Motor diesel", "Tablero de control", "Uso industrial", "Entrega sujeta a disponibilidad"],
    specifications: { Potencia: "Variable", Uso: "Obra civil", Entrega: "Stock variable" },
    brand: "Multimarca",
    model: "Industrial",
    condition: "nuevo"
  }
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatProductPrice(product: Product) {
  const prefix = product.pricePrefix ? `${product.pricePrefix} ` : "";
  const suffix = product.priceSuffix ? ` ${product.priceSuffix}` : "";
  return `${prefix}${formatCurrency(product.price)} MXN${suffix}`;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.active);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id && product.active);
}
