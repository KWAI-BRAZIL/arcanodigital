"use client";

import { HeroEntrance, CountUp } from "@/components/CountUp";
import { Logo } from "@/components/Logo";
import { GhostLink, Kicker, WhatsAppCta } from "@/components/ui";
import { stats } from "@/lib/content";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section id="shot-hero" className="relative overflow-x-clip pt-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-5 pb-20 text-center md:pb-28">
        <HeroEntrance>
          <Kicker>Goiânia · Brasília · Caldas Novas</Kicker>
        </HeroEntrance>
        <HeroEntrance delay={0.08}>
          <h1 className="mt-7 font-display text-[2rem] font-bold leading-[1.12] tracking-[-0.04em] text-ivory sm:text-5xl md:text-[3.65rem]">
            Marketing e engenharia de software, na mesma equipe, para negócios que não
            têm tempo pra terceirizar tentativa e erro.
          </h1>
        </HeroEntrance>
        <HeroEntrance delay={0.16}>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-[1.8] text-mist">
            Neuromarketing, tráfego pago e branding para decidir a compra. Sistemas sob
            medida e automações para sustentar essa decisão na operação. Uma agência, os
            dois lados resolvidos — em Goiânia, Brasília e Caldas Novas.
          </p>
        </HeroEntrance>
        <HeroEntrance delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
            <WhatsAppCta>Quero um diagnóstico gratuito</WhatsAppCta>
            <GhostLink href="/cases">Ver cases e provas</GhostLink>
          </div>
        </HeroEntrance>
        <HeroEntrance delay={0.34}>
          <div className="glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-sm md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-panel/40 px-4 py-6 text-left md:px-5 md:py-7">
                <p className="font-display text-2xl font-medium tracking-[-0.03em] text-ivory md:text-3xl">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-2 font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.14em] text-mist">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </HeroEntrance>
        <HeroEntrance delay={0.42}>
          <div className="mt-16 md:mt-20">
            <Logo size="lg" href={null} />
            <p className="mt-4 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-gold/80">
              {site.tagline}
            </p>
          </div>
        </HeroEntrance>
      </div>
    </section>
  );
}
