"use client";

import { HeroEntrance, CountUp } from "@/components/CountUp";
import { GhostLink, Kicker, WhatsAppCta } from "@/components/ui";
import { stats } from "@/lib/content";
import Image from "next/image";

export function HomeHero() {
  return (
    <section id="shot-hero" className="relative overflow-hidden bg-paper pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 pattern-neural opacity-70" aria-hidden />
      <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:pb-24">
        <div>
          <HeroEntrance>
            <Kicker>Neuromarketing · Marketing · Software</Kicker>
            <p className="mt-3 font-sans text-[12px] font-semibold uppercase tracking-[0.28em] text-gold">
              Da mente ao código
            </p>
          </HeroEntrance>
          <HeroEntrance delay={0.08}>
            <h1 className="mt-5 font-display text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.03em] text-cream sm:text-4xl md:text-[2.75rem]">
              Neuromarketing e engenharia de software, na mesma equipe, para negócios que não
              podem perder mais tempo e dinheiro testando agência atrás de agência.
            </h1>
          </HeroEntrance>
          <HeroEntrance delay={0.16}>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-muted">
              Aplicamos princípios de comportamento do consumidor ao seu marketing e engenharia
              de verdade à sua operação. Decisão de compra e capacidade de sustentar ela,
              resolvidas juntas. Em Goiânia, Brasília e Caldas Novas.
            </p>
          </HeroEntrance>
          <HeroEntrance delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <WhatsAppCta>Quero um diagnóstico gratuito</WhatsAppCta>
              <GhostLink href="/cases">Ver cases e provas</GhostLink>
            </div>
          </HeroEntrance>
        </div>
        <HeroEntrance delay={0.12}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
            <Image
              src="/photos/photo-office.png"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </HeroEntrance>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-line px-5 py-6 md:border-r md:last:border-r-0">
              <p className="font-display text-2xl font-medium text-cream md:text-3xl">
                <CountUp value={item.value} />
              </p>
              <p className="mt-2 font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
