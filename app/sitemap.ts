import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { servicePages } from "@/lib/services-seo";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/catalogo",
    "/servicios",
    "/maquinaria",
    "/proyectos",
    "/nosotros",
    "/contacto",
    "/checkout",
    "/aviso-de-privacidad",
    "/terminos-y-condiciones",
    "/politica-de-devoluciones",
    "/politica-de-envios",
    "/politica-de-pagos"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/productos/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}
