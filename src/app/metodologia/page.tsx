import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { methodSteps } from "@/lib/content";

function StepMark({ n }: { n: string }) {
  return (
    <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
      <span className="font-display text-2xl text-gold">{n}</span>
    </span>
  );
}

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
        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-md border border-line">
          <Image src="/photos/photo-workshop.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
      </section>
      <section className="island-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
        <ol className="space-y-6">
          {methodSteps.map((step) => (
            <li key={step.n} className="panel grid gap-4 p-6 md:grid-cols-[88px_1fr] md:items-center">
              <StepMark n={step.n} />
              <div>
                <h2 className="font-display text-2xl text-cream">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
