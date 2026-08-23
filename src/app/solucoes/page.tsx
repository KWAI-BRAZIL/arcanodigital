import type { Metadata } from "next";
import Link from "next/link";
import { DualPillars } from "@/components/DualPillars";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand, Kicker, PageLead, PageTitle } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Neuromarketing, tráfego pago, conteúdo, branding, sistemas, software, e-commerce e automação com IA para negócios locais em Brasília, Caldas Novas e Goiânia.",
};

export default function SolucoesPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <Kicker>Soluções</Kicker>
        <PageTitle>
          Marketing e sistemas. <span className="gold-text">Mesmo peso no comercial.</span>
        </PageTitle>
        <PageLead>
          Quatro frentes de percepção e aquisição. Quatro de operação. Posicionamento e
          vendas online entram dentro dos cards — não como lista solta.
        </PageLead>
        <DualPillars />
      </section>
      <section className="island-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
            Todas as páginas de serviço
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <Link key={item.slug} href={`/solucoes/${item.slug}`} className="panel p-6 hover:border-gold/50">
                <ServiceIcon slug={item.slug} tech={item.slug.includes("sistema") || item.slug.includes("software") || item.slug.includes("automacao") || item.slug.includes("inteligencia") || item.slug.includes("vendas")} />
                <h2 className="mt-4 font-display text-2xl text-cream">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                <p className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                  Ver o que está incluso
                </p>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
