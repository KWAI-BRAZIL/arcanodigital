import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-arcano-line bg-arcano-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo size="md" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {site.positioning}
          </p>
          <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
            {site.tagline}
          </p>
        </div>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">Mapa</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
            <Link href="/sobre" className="hover:text-cream">Sobre</Link>
            <Link href="/solucoes" className="hover:text-cream">Soluções</Link>
            <Link href="/cases" className="hover:text-cream">Cases</Link>
            <Link href="/metodologia" className="hover:text-cream">Metodologia</Link>
            <Link href="/blog" className="hover:text-cream">Blog</Link>
            <Link href="/contato" className="hover:text-cream">Contato</Link>
          </div>
        </div>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">Atuação</p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <Link href="/goiania" className="block hover:text-cream">Goiânia</Link>
            <Link href="/brasilia" className="block hover:text-cream">Brasília</Link>
            <Link href="/caldas-novas" className="block hover:text-cream">Caldas Novas</Link>
            <a href={whatsappUrl()} className="block text-cream hover:text-gold">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-cream">
              {site.email}
            </a>
            <p className="pt-2 text-xs">CNPJ {site.cnpj}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-arcano-line py-5 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
        © {new Date().getFullYear()} {site.name} · {site.legalName}
      </div>
    </footer>
  );
}
