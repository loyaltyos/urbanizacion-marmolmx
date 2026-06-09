import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getProductById } from "@/lib/products";
import { getStripe } from "@/lib/stripe";
import type { CartItem } from "@/lib/types";

type CheckoutCustomer = {
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  company?: string;
  project_location?: string;
};

type CheckoutRequest = CheckoutCustomer & {
  items?: CartItem[];
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 500) : "";
}

function normalizeEmail(value: unknown) {
  const email = normalizeText(value).toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
}

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
}

export async function POST(request: Request) {
  let payload: CheckoutRequest;

  try {
    payload = (await request.json()) as CheckoutRequest;
  } catch {
    return NextResponse.json(
      { message: "No pudimos leer la informacion del checkout." },
      { status: 400 }
    );
  }

  const items = payload.items || [];

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { message: "Agrega al menos una partida al carrito para continuar." },
      { status: 400 }
    );
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  const metadataItems: string[] = [];

  for (const item of items) {
    const productId = normalizeText(item.productId);
    const product = getProductById(productId);
    const quantity = Number(item.quantity);

    if (!product || !product.active) {
      return NextResponse.json(
        { message: "Una o mas partidas no existen o ya no estan disponibles." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > product.stock) {
      return NextResponse.json(
        { message: `La cantidad solicitada para ${product.name} no esta disponible.` },
        { status: 400 }
      );
    }

    if (!product.showPrice || !Number.isFinite(product.price) || product.price <= 0) {
      return NextResponse.json(
        { message: `${product.name} requiere cotizacion antes de pagar en linea.` },
        { status: 400 }
      );
    }

    const unitAmount = Math.round(product.price * 100);

    lineItems.push({
      price_data: {
        currency: "mxn",
        product_data: {
          name: product.name,
          description: `${product.category} / ${product.purchaseType.replace("-", " ")}`
        },
        unit_amount: unitAmount
      },
      quantity
    });

    metadataItems.push(`${product.id}:${quantity}:${product.price}`);
  }

  const customerEmail = normalizeEmail(payload.customer_email);
  const customerName = normalizeText(payload.customer_name);
  const customerPhone = normalizeText(payload.customer_phone);
  const company = normalizeText(payload.company);
  const projectLocation = normalizeText(payload.project_location);

  if (!customerName || !customerEmail || !customerPhone) {
    return NextResponse.json(
      { message: "Completa nombre, correo y telefono para crear el checkout." },
      { status: 400 }
    );
  }

  try {
    const siteUrl = getSiteUrl();
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      currency: "mxn",
      line_items: lineItems,
      customer_email: customerEmail,
      phone_number_collection: {
        enabled: true
      },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      metadata: {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        company,
        project_location: projectLocation,
        order_type: "urbanizadora_marmol_mx",
        items: metadataItems.join("|").slice(0, 500)
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error", error);
    return NextResponse.json(
      { message: "No pudimos iniciar Stripe Checkout. Intenta de nuevo o contacta a un asesor." },
      { status: 500 }
    );
  }
}
