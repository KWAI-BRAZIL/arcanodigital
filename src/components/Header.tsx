"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-hidden transition-[background,border-color,backdrop-filter] duration-300 ease-out ${
        scrolled
          ? "border-b border-rule bg-void/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 md:px-5 md:py-5">
        <Logo size="sm" onClick={() => setOpen(false)} />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ease-out ${
                  active ? "text-gold-soft" : "text-mist hover:text-ivory"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ease-out ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn hidden rounded-sm px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] lg:inline-flex"
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
          <span className="mt-1.5 block h-px w-6 bg-tech" />
          <span className="mt-1.5 block h-px w-4 bg-gold" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-rule bg-void/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ivory"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn mt-1 inline-flex justify-center rounded-sm px-3 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
