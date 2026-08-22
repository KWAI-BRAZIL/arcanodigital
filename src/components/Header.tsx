"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/cases", label: "Cases" },
  { href: "/metodologia", label: "Método" },
  { href: "/depoimentos", label: "Provas" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-5">
        <Logo size="sm" onLight onClick={() => setOpen(false)} />
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[12px] font-medium tracking-wide transition-colors ${
                  active ? "text-cream" : "text-muted hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn hidden rounded-sm px-4 py-2 font-sans text-[11px] font-medium tracking-wide lg:inline-flex"
        >
          WhatsApp
        </a>
        <button
          type="button"
          className="text-cream lg:hidden"
          aria-label="Abrir ou fechar menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-5 bg-cream" />
          <span className="mt-1.5 block h-px w-5 bg-cream" />
          <span className="mt-1.5 block h-px w-3.5 bg-cream" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 font-sans text-sm text-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn mt-2 inline-flex justify-center rounded-sm px-3 py-2 font-sans text-[11px]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
