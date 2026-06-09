import { NextResponse } from "next/server";
import { getProductById } from "@/lib/products";
import type { CartItem } from "@/lib/types";

type CheckoutRequest = {
  items?: CartItem[];
  quoteId?: string;
  customerId?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as CheckoutRequest;
  const items = payload.items || [];

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { status: "error", message: "No hay partidas para checkout." },
      { status: 400 }
    );
  }

  const normalizedItems = items.map((item) => {
    const product = getProductById(item.productId);
    return {
      productId: item.productId,
      quantity: Math.max(1, Number(item.quantity || 1)),
      purchaseType: product?.purchaseType,
      unitAmount: product?.price || 0,
      requiresQuote: product?.purchaseType === "cotizacion"
    };
  });

  const hasUnknownProduct = normalizedItems.some((item) => !item.purchaseType);
  if (hasUnknownProduct) {
    return NextResponse.json(
      { status: "error", message: "Una o mas partidas no existen o estan inactivas." },
      { status: 400 }
    );
  }

  const totalAmount = normalizedItems.reduce(
    (sum, item) => sum + item.unitAmount * item.quantity,
    0
  );

  return NextResponse.json({
    status: "ready",
    provider: process.env.PAYMENT_PROVIDER || "pending",
    mode: "simulation",
    redirectUrl: "/checkout/success",
    confirmationMessage:
      "Tu compra o solicitud fue recibida correctamente. Un asesor de Urbanizadora Marmol MX se comunicara contigo para confirmar disponibilidad, logistica, entrega, condiciones tecnicas y detalles finales.",
    checkout: {
      items: normalizedItems,
      totalAmount,
      supports: ["compra-directa", "anticipo", "cotizacion-autorizada"],
      quoteId: payload.quoteId || null,
      customerId: payload.customerId || null
    }
  });
}
