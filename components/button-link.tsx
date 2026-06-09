import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "outline";
};

const variants = {
  primary: "bg-construction text-carbon hover:bg-signal",
  dark: "bg-carbon text-white hover:bg-graphite",
  light: "bg-white text-carbon hover:bg-zincpanel",
  outline: "border border-white/25 text-white hover:border-construction hover:text-construction"
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-bold uppercase tracking-wide transition ${variants[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}
