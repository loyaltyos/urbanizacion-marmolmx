import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Header } from "@/components/header";
import { absoluteUrl, siteMetadata, siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#f4b400",
  colorScheme: "light"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMetadata.title,
    template: "%s | Urbanizadora Marmol MX"
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  alternates: {
    canonical: "/"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteUrl,
    siteName: siteMetadata.name,
    images: [
      {
        url: absoluteUrl(siteMetadata.ogImage),
        width: 1200,
        height: 630,
        alt: "Urbanizadora Marmol MX maquinaria pesada e infraestructura"
      }
    ],
    type: "website",
    locale: "es_MX"
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [absoluteUrl(siteMetadata.ogImage)]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.svg"
  },
  manifest: "/manifest.json",
  category: "construction",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
