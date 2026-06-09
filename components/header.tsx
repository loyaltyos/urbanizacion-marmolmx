"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";

const navItems = [
  ["Home", "/"],
  ["Catalogo", "/catalogo"],
  ["Servicios", "/servicios"],
  ["Maquinaria", "/maquinaria"],
  ["Proyectos", "/proyectos"],
  ["Nosotros", "/nosotros"],
  ["Contacto", "/contacto"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-carbon text-white shadow-lg shadow-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded bg-construction text-lg font-black text-carbon">
            UM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-wide">Urbanizadora</span>
            <span className="block text-xs font-semibold uppercase text-construction">Marmol MX</span>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-white/55">
              Parte de Grupo Marmol MX
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <Link className="text-xs font-bold uppercase tracking-wide text-white/78 hover:text-construction" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            aria-label="Carrito"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 hover:border-construction"
            href="/checkout"
          >
            <ShoppingCart size={19} />
            {totalItems > 0 ? (
              <span className="absolute -right-2 -top-2 min-w-5 rounded-full bg-construction px-1 text-center text-xs font-black text-carbon">
                {totalItems}
              </span>
            ) : null}
          </Link>
          <button
            aria-label="Menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-graphite px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, href]) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-bold uppercase tracking-wide text-white/85 hover:bg-white/5 hover:text-construction"
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
