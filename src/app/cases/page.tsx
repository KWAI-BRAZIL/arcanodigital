import type { Metadata } from "next";
import { CasesBoard } from "@/components/CasesBoard";
import { CtaBand, Kicker, Title } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cases e resultados",
  description:
    "Cases da Arcano Solutions por segmento — alimentação, saúde, varejo, serviços e imobiliário em Goiás. Desafio, ação, número e prova visual.",
};

export default function CasesPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Kicker>Cases / Resultados</Kicker>
        <Title>
          Negócio local não é genérico. <span className="gold-text">O segmento importa.</span>
        </Title>
        <p className="mt-4 max-w-2xl text-muted">
          Filtre por mercado. Cada recorte mostra desafio, ação, resultado numérico e
          o print da operação — mais as marcas que a Arcano atende em Goiás.
        </p>
        <div className="mt-12">
          <CasesBoard />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
