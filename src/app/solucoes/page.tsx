import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Neuromarketing, tráfego pago, conteúdo, branding, automação, IA, posicionamento, vendas online e sistemas personalizados para negócios locais em Goiás.",
};

export default function SolucoesPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>Soluções</Kicker>
        <Title>
          Cada frente com um papel <span className="gold-text">no caixa do mês.</span>
        </Title>
        <p className="mt-4 max-w-2xl text-muted">
          Quatro pilares de percepção e aquisição — mais IA, posicionamento, vendas
          online e sistemas para a operação acompanhar o crescimento.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <Link key={item.slug} href={`/solucoes/${item.slug}`} className="panel p-6 hover:border-gold/50">
              <h2 className="font-display text-2xl text-cream">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-gold">Ver o que está incluso</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
