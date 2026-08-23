import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="island-dark relative z-[1] pattern-circuit">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <Logo size="md" />
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ivory">
          Neuromarketing · Marketing · Software
        </p>
        <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.28em] text-gold">
          {site.tagline}.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-line px-5 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="max-w-md text-sm leading-relaxed text-muted">{site.positioning}</p>
        </div>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-cream">Mapa</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
            <Link href="/sobre" className="hover:text-ivory">Sobre</Link>
            <Link href="/solucoes" className="hover:text-ivory">Soluções</Link>
            <Link href="/cases" className="hover:text-ivory">Cases</Link>
            <Link href="/metodologia" className="hover:text-ivory">Metodologia</Link>
            <Link href="/blog" className="hover:text-ivory">Blog</Link>
            <Link href="/contato" className="hover:text-ivory">Contato</Link>
          </div>
        </div>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-cream">Atuação</p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <Link href="/goiania" className="block hover:text-ivory">Goiânia</Link>
            <Link href="/brasilia" className="block hover:text-ivory">Brasília</Link>
            <Link href="/caldas-novas" className="block hover:text-ivory">Caldas Novas</Link>
            <a href={whatsappUrl()} className="block text-ivory hover:text-gold">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-ivory">
              {site.email}
            </a>
            <p className="pt-2 text-xs">CNPJ {site.cnpj}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center font-sans text-[11px] text-muted">
        © {new Date().getFullYear()} {site.name} · {site.legalName}
      </div>
    </footer>
  );
}
