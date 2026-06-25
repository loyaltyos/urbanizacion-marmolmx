"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { formatCurrency, formatProductPrice, getProductById } from "@/lib/products";

type CheckoutForm = {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  company: string;
  project_location: string;
};

export function CheckoutClient() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const [form, setForm] = useState<CheckoutForm>({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    company: "",
    project_location: ""
  });
  const cartProducts = useMemo(
    () =>
      items
        .map((item) => ({ ...item, product: getProductById(item.productId) }))
        .filter((item) => item.product),
    [items]
  );

  function updateForm(field: keyof CheckoutForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitCheckout() {
    if (!acceptedPolicies) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, ...form })
      });
      const payload = await response.json();

      if (!response.ok || !payload.url) {
        setError(payload.message || "No pudimos iniciar el pago con Stripe.");
        return;
      }

      window.location.assign(payload.url);
    } catch {
      setError("No pudimos conectar con Stripe. Intenta de nuevo o contacta a un asesor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        <h1 className="text-3xl font-black text-carbon">Checkout industrial</h1>
        <p className="mt-3 text-sm leading-6 text-steel">
          Flujo preparado para compra directa, anticipo y pago de cotizacion autorizada mediante Stripe Checkout en modo prueba.
        </p>
        <div className="mt-5 rounded-md border border-construction/40 bg-construction/10 p-4 text-sm font-semibold leading-6 text-carbon">
          Los precios pueden estar sujetos a disponibilidad, ubicacion de obra, flete, maniobras y validacion tecnica. Despues del pago, un asesor confirmara disponibilidad, logistica, alcance y detalles finales.
        </div>
        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-steel">
          Pago procesado para Urbanizadora Marmol MX, division de Marmol MX.
        </p>
        <div className="mt-6 grid gap-4 rounded-md border border-black/10 bg-zincpanel p-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-carbon">
            Nombre completo
            <input
              className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-construction"
              onChange={(event) => updateForm("customer_name", event.target.value)}
              required
              value={form.customer_name}
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-carbon">
            Correo
            <input
              className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-construction"
              onChange={(event) => updateForm("customer_email", event.target.value)}
              required
              type="email"
              value={form.customer_email}
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-carbon">
            Telefono
            <input
              className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-construction"
              onChange={(event) => updateForm("customer_phone", event.target.value)}
              required
              type="tel"
              value={form.customer_phone}
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-carbon">
            Empresa
            <input
              className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-construction"
              onChange={(event) => updateForm("company", event.target.value)}
              value={form.company}
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-carbon sm:col-span-2">
            Ubicacion del proyecto
            <input
              className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-construction"
              onChange={(event) => updateForm("project_location", event.target.value)}
              placeholder="Ciudad, estado o zona de obra"
              value={form.project_location}
            />
          </label>
        </div>
        <div className="mt-6 grid gap-4">
          {cartProducts.length === 0 ? (
            <div className="rounded-md bg-zincpanel p-5 text-sm font-semibold text-steel">
              El carrito esta vacio. Agrega productos, anticipos o servicios desde el catalogo.
            </div>
          ) : (
            cartProducts.map(({ product, quantity }) =>
              product ? (
                <div className="grid gap-4 rounded-md border border-black/10 p-4 sm:grid-cols-[1fr_auto] sm:items-center" key={product.id}>
                  <div>
                    <p className="font-black text-carbon">{product.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-steel">
                      {product.purchaseType.replace("-", " ")} / {product.category}
                    </p>
                    <p className="mt-2 text-sm font-bold text-carbon">
                      {formatProductPrice(product)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      aria-label={`Cantidad ${product.name}`}
                      className="h-10 w-20 rounded-md border border-black/15 px-3"
                      min={1}
                      onChange={(event) => updateQuantity(product.id, Number(event.target.value))}
                      type="number"
                      value={quantity}
                    />
                    <button
                      aria-label={`Eliminar ${product.name}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 text-steel hover:border-red-500 hover:text-red-600"
                      onClick={() => removeItem(product.id)}
                      type="button"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
      <aside className="h-fit rounded-lg bg-carbon p-5 text-white shadow-industrial">
        <p className="text-sm font-black uppercase text-construction">Resumen</p>
        <div className="mt-5 grid gap-3 border-b border-white/10 pb-5 text-sm text-white/70">
          <div className="flex justify-between">
            <span>Productos con precio</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Validacion posterior</span>
            <span>Asesor asignado</span>
          </div>
        </div>
        <div className="mt-5 flex justify-between text-xl font-black">
          <span>Total inicial</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="mt-5 rounded-md border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/70">
          <p className="font-semibold">
            Los precios pueden estar sujetos a disponibilidad, ubicacion de obra, flete, maniobras y validacion tecnica. Despues del pago, un asesor confirmara disponibilidad, logistica, alcance y detalles finales.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-construction">
            <Link className="hover:text-signal" href="/terminos-y-condiciones">Terminos y condiciones</Link>
            <Link className="hover:text-signal" href="/aviso-de-privacidad">Aviso de privacidad</Link>
            <Link className="hover:text-signal" href="/politica-de-devoluciones">Devoluciones</Link>
            <Link className="hover:text-signal" href="/politica-de-envios">Envios</Link>
            <Link className="hover:text-signal" href="/politica-de-pagos">Pagos</Link>
          </div>
        </div>
        <label className="mt-4 flex gap-3 rounded-md border border-white/10 bg-white/5 p-4 text-xs font-semibold leading-5 text-white/75">
          <input
            checked={acceptedPolicies}
            className="mt-1 h-4 w-4 accent-construction"
            onChange={(event) => setAcceptedPolicies(event.target.checked)}
            required
            type="checkbox"
          />
          <span>Acepto terminos y condiciones, aviso de privacidad y politicas de compra.</span>
        </label>
        {error ? (
          <div className="mt-4 rounded-md border border-red-400/40 bg-red-500/10 p-4 text-xs font-semibold leading-5 text-red-100">
            {error}
          </div>
        ) : null}
        <button
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-construction px-5 text-sm font-black uppercase tracking-wide text-carbon hover:bg-signal disabled:cursor-not-allowed disabled:opacity-50"
          disabled={loading || cartProducts.length === 0 || !acceptedPolicies}
          onClick={submitCheckout}
          type="button"
        >
          {loading ? "Creando sesion..." : "Pagar con Stripe"}
        </button>
        <p className="mt-4 text-xs leading-5 text-white/55">
          Los precios iniciales permiten compra, apartado o anticipo en linea. Un asesor confirmara disponibilidad, logistica, alcance y detalles finales antes del cierre operativo.
        </p>
        <p className="mt-3 text-xs font-semibold leading-5 text-white/55">
          Pago procesado para Urbanizadora Marmol MX, division de Marmol MX.
        </p>
      </aside>
    </div>
  );
}
