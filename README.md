# Urbanizadora Marmol MX

## Stripe Checkout

El checkout usa Stripe Hosted Checkout. No se deben hardcodear credenciales en el codigo ni exponer `STRIPE_SECRET_KEY` al frontend.

1. Copia `.env.example` a `.env.local`.
2. En el dashboard de Stripe, copia las llaves del entorno que corresponda:

```bash
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=https://www.urbanizacionmarmol.com
```

3. Instala dependencias si hace falta:

```bash
npm install
```

4. Levanta el sitio:

```bash
npm run dev
```

5. Prueba un pago desde `/checkout` con la tarjeta de prueba:

```text
4242 4242 4242 4242
Fecha futura
CVC de 3 digitos
CP valido
```

## Webhooks con Stripe CLI

Para probar webhooks localmente:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Stripe CLI mostrara un secreto `whsec_...`; copialo en `STRIPE_WEBHOOK_SECRET` dentro de `.env.local` y reinicia el servidor.

Eventos manejados por ahora:

- `checkout.session.completed`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

Los eventos se validan con firma usando raw body. Los logs basicos se imprimen en consola con session id, estado de pago, monto, correo y metadata.
