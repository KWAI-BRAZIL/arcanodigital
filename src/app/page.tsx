import { CountUp } from "@/components/CountUp";
import { HomeHero } from "@/components/HomeHero";
import Image from "next/image";
import Link from "next/link";
import { DualPillars } from "@/components/DualPillars";
import { ProofGallery } from "@/components/ProofGallery";
import { Reveal } from "@/components/Reveal";
import { iconSlugForSegment, ServiceIcon } from "@/components/ServiceIcon";
import { StatCard } from "@/components/StatCard";
import { CtaBand, GhostLink, Kicker, Title } from "@/components/ui";
import { aggregateStats, cases, cityTriggers, clients } from "@/lib/content";

export default function HomePage() {
  const featured = cases.filter((item) => item.featured);

  return (
    <main>
      <HomeHero />

      <section id="shot-provas" className="island-dark relative overflow-x-hidden py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <Kicker>Prova</Kicker>
              <Title>Números de operação. Prints reais.</Title>
              <p className="mt-5 text-[15px] leading-[1.75] text-muted md:text-base">
                Painel, WhatsApp e checkout — a mesma evidência que qualquer empresário
                reconhece: venda, margem, conversão e recorde de mês.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <ProofGallery compact />
          </div>
          <p className="mt-8">
            <GhostLink href="/depoimentos">Ver todas as provas</GhostLink>
          </p>
        </div>
      </section>

      <section id="shot-pilares" className="relative bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>O que fazemos</Kicker>
            <Title>Três pilares. Uma operação.</Title>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted md:text-base">
              Marketing que constrói a decisão de compra. Desenvolvimento que sustenta essa
              decisão no dia a dia do negócio.
            </p>
          </Reveal>
          <DualPillars />
        </div>
      </section>

      <section id="shot-porque" className="island-dark relative py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>Por que Arcano</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-cream md:text-5xl">
              Decisão por gatilho e por dado — em qualquer praça onde você vende.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-4 md:gap-4">
            {aggregateStats.map((item, i) => (
              <StatCard key={item.label} accent={i % 2 ? "tech" : "gold"}>
                <p className="font-display text-3xl font-medium tracking-[-0.03em] text-cream md:text-4xl">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-3 max-w-[12rem] font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.14em] text-muted">
                  {item.label}
                </p>
              </StatCard>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard>
              <ServiceIcon slug="neuromarketing" />
              <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                Diferencial técnico
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                Neuromarketing aplicado
              </h3>
              <p className="mt-4 text-sm leading-[1.75] text-muted">
                O que a cliente sente, o que ela compara e o que a faz fechar — no WhatsApp,
                no checkout ou na loja física.
              </p>
            </StatCard>
            <StatCard>
              <ServiceIcon slug="metodo" />
              <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                Metodologia visível
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                Um caminho, não uma caixa-preta
              </h3>
              <p className="mt-4 text-sm leading-[1.75] text-muted">
                Diagnóstico, estratégia, execução, otimização e relatório. Você enxerga cada
                etapa antes de assinar qualquer coisa.
              </p>
            </StatCard>
            <StatCard accent="tech">
              <ServiceIcon slug="desenvolvimento-software" tech />
              <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-lilac">
                Operação completa
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                Marketing e engenharia na mesma equipe
              </h3>
              <p className="mt-4 text-sm leading-[1.75] text-muted">
                IA, automações, e-commerce e sistemas sob medida sem precisar contratar outra
                empresa pra parte técnica.
              </p>
            </StatCard>
          </div>
          <div className="relative mt-8 hidden overflow-hidden rounded-md border border-line md:block md:h-40">
            <Image src="/photos/photo-analytics.png" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="mt-10">
            <GhostLink href="/metodologia">Ver a metodologia</GhostLink>
          </div>
        </div>
      </section>

      <section id="shot-cidades" className="relative bg-paper py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>Três praças</Kicker>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.035em] text-cream md:text-4xl">
              A mesma operação. O gatilho muda.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {cityTriggers.map((item, i) => (
              <Link key={item.city} href={item.href} className="block">
                <StatCard className="relative h-full overflow-hidden" alt accent={i === 1 ? "tech" : "gold"}>
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] font-medium leading-none text-cream/10"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <p
                    className={`relative font-sans text-[11px] font-medium ${
                      i === 1 ? "text-lilac" : "text-gold"
                    }`}
                  >
                    0{i + 1}
                  </p>
                  <h3 className="relative mt-3 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                    {item.city}
                  </h3>
                  <p className="relative mt-1 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {item.kicker}
                  </p>
                  <p className="relative mt-4 text-sm leading-[1.75] text-muted">{item.text}</p>
                  <p
                    className={`relative mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] ${
                      i === 1 ? "text-lilac" : "text-gold"
                    }`}
                  >
                    Ver a praça
                  </p>
                </StatCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="shot-cases" className="island-dark relative py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Kicker>Cases</Kicker>
                <Title>Marcas que a Arcano posiciona.</Title>
              </div>
              <GhostLink href="/cases">Ver todos os cases</GhostLink>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <article key={item.slug} className="group glass relative overflow-hidden p-6">
                <div className="mb-4 flex h-24 items-center justify-center rounded-sm bg-paper-2">
                  <ServiceIcon slug={iconSlugForSegment(item.segment)} size="lg" />
                </div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                  {item.segment}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                  {item.client}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.challenge}</p>
                <p className="mt-4 max-h-0 overflow-hidden text-sm text-gold-soft opacity-0 transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100">
                  {item.result}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-16 max-w-3xl font-display text-2xl font-medium leading-snug tracking-[-0.03em] text-cream/70 md:text-3xl">
            {clients.map((c) => c.name).join("  ·  ")}
          </p>
          <p className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
            Quem já caminha com a Arcano
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
