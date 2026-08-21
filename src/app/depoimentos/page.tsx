import type { Metadata } from "next";
import { ProofGallery } from "@/components/ProofGallery";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { testimonials } from "@/lib/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Depoimentos e provas",
  description:
    "Prints de WhatsApp, painéis de venda e depoimentos reais da Arcano Digital para negócios locais em Goiás.",
};

export default function DepoimentosPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>Depoimentos</Kicker>
        <Title>
          O empresário local confia no print. <span className="gold-text">Não no slogan.</span>
        </Title>
        <p className="mt-4 max-w-2xl text-muted">
          WhatsApp, painel e checkout — a prova que circula no grupo da família e na
          reunião de segunda.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.quote} className="panel overflow-hidden">
              <div className="relative h-80">
                <Image src={item.image} alt={item.author} fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-cream">“{item.quote}”</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-gold">
                  {item.author} · {item.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Kicker>Galeria de resultados</Kicker>
          <h2 className="mt-3 font-display text-3xl text-cream">Todas as provas visuais</h2>
          <div className="mt-10">
            <ProofGallery />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
