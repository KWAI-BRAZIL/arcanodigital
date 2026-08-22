import type { Metadata } from "next";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { methodSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Metodologia",
  description:
    "Método Arcano: diagnóstico, estratégia com neuromarketing, execução, otimização e relatório — para quem nunca contratou agência enxergar o caminho.",
};

export default function MetodologiaPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Kicker>Metodologia</Kicker>
        <Title>
          Cinco etapas. <span className="gold-text">Nenhuma no escuro.</span>
        </Title>
        <p className="mt-4 max-w-2xl text-muted">
          Feito para o dono que nunca contratou agência e precisa ver o processo antes
          de colocar verba. Neuromarketing entra na estratégia; o resto executa.
        </p>
        <ol className="mt-14 space-y-6">
          {methodSteps.map((step) => (
            <li key={step.n} className="panel grid gap-4 p-6 md:grid-cols-[120px_1fr] md:items-center">
              <p className="font-display text-4xl text-gold">{step.n}</p>
              <div>
                <h2 className="font-display text-2xl text-cream">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </main>
  );
}
