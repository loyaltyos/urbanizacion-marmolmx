import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product-page-view";
import { getProductBySlug, products } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/productos/${product.slug}`
    },
    openGraph: {
      title: `${product.name} | Urbanizadora Marmol MX`,
      description: product.shortDescription,
      url: absoluteUrl(`/productos/${product.slug}`),
      images: [{ url: product.image, alt: product.name }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Urbanizadora Marmol MX`,
      description: product.shortDescription,
      images: [product.image]
    }
  };
}

export default async function ProductSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductPageView product={product} />;
}
