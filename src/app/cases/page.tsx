import type { Metadata } from "next";
import { CasesBoard } from "@/components/CasesBoard";
import { CtaBand, Kicker, PageLead, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cases e resultados",
  description:
    "Cases da Arcano Solutions por segmento — alimentação, saúde, varejo, serviços e imobiliário em Goiás. Desafio, ação, número e prova visual.",
};

export default function CasesPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <Kicker>Cases / Resultados</Kicker>
        <PageTitle>
          Negócio local não é genérico. <span className="gold-text">O segmento importa.</span>
        </PageTitle>
        <PageLead>
          Filtre por mercado. Cada recorte mostra desafio, ação, resultado numérico e
          o print da operação — mais as marcas que a Arcano atende em Goiás.
        </PageLead>
        <div className="mt-10">
          <CasesBoard />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
