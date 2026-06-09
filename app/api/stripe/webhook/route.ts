import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const supportedEvents = new Set([
  "checkout.session.completed",
  "payment_intent.succeeded",
  "payment_intent.payment_failed"
]);

function logCheckoutSession(session: Stripe.Checkout.Session) {
  console.log("stripe.checkout.session", {
    sessionId: session.id,
    paymentStatus: session.payment_status,
    amountTotal: session.amount_total,
    customerEmail: session.customer_details?.email || session.customer_email,
    metadata: session.metadata
  });
}

function logPaymentIntent(paymentIntent: Stripe.PaymentIntent) {
  console.log("stripe.payment_intent", {
    sessionId: paymentIntent.metadata?.checkout_session_id || null,
    paymentIntentId: paymentIntent.id,
    paymentStatus: paymentIntent.status,
    amountTotal: paymentIntent.amount,
    customerEmail: paymentIntent.receipt_email,
    metadata: paymentIntent.metadata
  });
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { message: "Webhook de Stripe sin firma o secreto configurado." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const rawBody = await request.text();
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature validation failed", error);
    return NextResponse.json({ message: "Firma de webhook invalida." }, { status: 400 });
  }

  if (!supportedEvents.has(event.type)) {
    return NextResponse.json({ received: true });
  }

  switch (event.type) {
    case "checkout.session.completed":
      logCheckoutSession(event.data.object as Stripe.Checkout.Session);
      break;
    case "payment_intent.succeeded":
    case "payment_intent.payment_failed":
      logPaymentIntent(event.data.object as Stripe.PaymentIntent);
      break;
  }

  return NextResponse.json({ received: true });
}
