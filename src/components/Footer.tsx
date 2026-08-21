import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/brand/logo.png" alt="Arcano Digital" width={180} height={72} className="h-14 w-auto" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {site.positioning}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-gold">{site.tagline}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Mapa</p>
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
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Goiás</p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>{site.area}</p>
            <p>{site.address.street}</p>
            <p>
              {site.address.city} — {site.address.state}
            </p>
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
      <div className="border-t border-line py-5 text-center text-[11px] uppercase tracking-[0.18em] text-muted">
        © {new Date().getFullYear()} {site.name} · {site.legalName}
      </div>
    </footer>
  );
}
