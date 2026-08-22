import type { Metadata } from "next";
import Link from "next/link";
import { DualPillars } from "@/components/DualPillars";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Neuromarketing, tráfego pago, conteúdo, branding, sistemas, software, e-commerce e automação com IA para negócios locais em Brasília, Caldas Novas e Goiânia.",
};

export default function SolucoesPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Kicker>Soluções</Kicker>
        <Title>
          Marketing e sistemas. <span className="gold-text">Mesmo peso no comercial.</span>
        </Title>
        <p className="mt-4 max-w-2xl text-muted">
          Quatro frentes de percepção e aquisição. Quatro de operação. Posicionamento e
          vendas online entram dentro dos cards — não como lista solta.
        </p>
        <DualPillars />
        <div className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Todas as páginas de serviço
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <Link key={item.slug} href={`/solucoes/${item.slug}`} className="panel p-6 hover:border-gold/50">
                <h2 className="font-display text-2xl text-cream">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                  Ver o que está incluso
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
