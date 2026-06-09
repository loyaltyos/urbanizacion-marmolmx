import type { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout-client";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout base preparado para compra directa, anticipos y cotizaciones autorizadas.",
  alternates: {
    canonical: "/checkout"
  }
};

export default function CheckoutPage() {
  return (
    <section className="bg-zincpanel py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckoutClient />
      </div>
    </section>
  );
}
