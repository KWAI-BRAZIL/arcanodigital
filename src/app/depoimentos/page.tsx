import type { Metadata } from "next";
import { DeviceFrame } from "@/components/DeviceFrame";
import { ProofGallery } from "@/components/ProofGallery";
import { CtaBand, Kicker, PageLead, PageTitle } from "@/components/ui";
import { testimonials } from "@/lib/content";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Depoimentos e provas",
  description:
    "Painéis de resultado, recortes de comercial e depoimentos da Arcano Solutions para negócios locais em Goiás.",
};

export default function DepoimentosPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <Kicker>Depoimentos</Kicker>
        <PageTitle>
          O empresário local confia no número. <span className="gold-text">Não no slogan.</span>
        </PageTitle>
        <PageLead>
          WhatsApp, painel e checkout — recortes de operação com os mesmos indicadores
          que o cliente vê no mês.
        </PageLead>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.quote} className="panel overflow-hidden p-3">
              <DeviceFrame>
              <div className="relative h-96 overflow-hidden rounded-[1rem] bg-white">
                <Image src={item.image} alt={item.author} fill unoptimized className="object-contain object-top" />
              </div>
              </DeviceFrame>
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
      <section className="island-dark border-t border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Kicker>Galeria de resultados</Kicker>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.035em] text-cream md:text-4xl">
            Todas as provas visuais
          </h2>
          <div className="mt-10">
            <ProofGallery />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
