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
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-arcano-line bg-arcano-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo size="sm" onClick={() => setOpen(false)} />
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] transition ${
                  active ? "text-gold-bright" : "text-muted hover:text-cream"
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
          className="gold-btn hidden rounded-lg px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] lg:inline-flex"
        >
          WhatsApp
        </a>
        <button
          type="button"
          className="text-gold lg:hidden"
          aria-label="Abrir ou fechar menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-gold" />
          <span className="mt-1.5 block h-px w-6 bg-arcano-tech" />
          <span className="mt-1.5 block h-px w-4 bg-gold" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-ink px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn mt-2 inline-flex justify-center rounded-lg px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
