import Link from "next/link";
import { DualPillars } from "@/components/DualPillars";
import { Logo } from "@/components/Logo";
import { ProofGallery } from "@/components/ProofGallery";
import { Reveal } from "@/components/Reveal";
import { StatCard } from "@/components/StatCard";
import { CtaBand, GhostLink, Kicker, Title, WhatsAppCta } from "@/components/ui";
import { aggregateStats, cases, cityTriggers, clients, stats } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = cases.filter((item) => item.featured);
  const lead = featured[0];
  const rest = featured.slice(1);

  return (
    <main>
      <section id="shot-hero" className="relative overflow-x-hidden bg-arcano-bg pt-28 md:pt-36">
        <div className="hero-orb pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(212,165,55,0.08),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-5 pb-16 text-center md:pb-20">
          <Reveal>
            <Kicker>Goiânia · Brasília · Caldas Novas</Kicker>
            <h1 className="mt-6 font-display text-[1.85rem] font-medium leading-[1.18] tracking-[-0.035em] text-cream sm:text-[2.6rem] md:text-[3.15rem]">
              Marketing e engenharia de software, na mesma equipe, para negócios que não
              têm tempo pra terceirizar tentativa e erro.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.75] text-muted md:text-lg">
              Neuromarketing, tráfego pago e branding para decidir a compra. Sistemas sob
              medida e automações para sustentar essa decisão na operação. Uma agência, os
              dois lados resolvidos — em Goiânia, Brasília e Caldas Novas.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <WhatsAppCta className="w-full sm:w-auto">Quero um diagnóstico gratuito</WhatsAppCta>
              <GhostLink href="/cases" className="w-full sm:w-auto">
                Ver cases e provas
              </GhostLink>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-14 md:mt-20">
              <Logo size="lg" href={null} />
            </div>
            <p className="mt-4 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-gold/80">
              {site.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="shot-stats" className="bg-arcano-surface py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 md:grid-cols-4 md:gap-4">
          {stats.map((item) => (
            <StatCard key={item.label} alt>
              <p className="font-display text-2xl font-medium tracking-[-0.03em] text-cream md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.14em] text-muted">
                {item.label}
              </p>
            </StatCard>
          ))}
        </div>
      </section>

      <section id="shot-provas" className="overflow-x-hidden bg-arcano-bg py-20 md:py-28">
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

      <section id="shot-pilares" className="bg-arcano-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>O que fazemos</Kicker>
            <Title>Duas frentes. Uma operação.</Title>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted md:text-base">
              Marketing que constrói a decisão de compra. Desenvolvimento que sustenta essa
              decisão no dia a dia do negócio.
            </p>
          </Reveal>
          <DualPillars />
        </div>
      </section>

      <section id="shot-porque" className="bg-arcano-bg py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>Por que Arcano</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-cream md:text-5xl">
              Decisão por gatilho e por dado — em qualquer praça onde você vende.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-4 md:gap-4">
            {aggregateStats.map((item) => (
              <StatCard key={item.label}>
                <p className="font-display text-3xl font-medium tracking-[-0.03em] text-cream md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 max-w-[12rem] font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.14em] text-muted">
                  {item.label}
                </p>
              </StatCard>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
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
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
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
            <StatCard>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-arcano-gold-muted">
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
          <div className="mt-12">
            <GhostLink href="/metodologia">Ver a metodologia</GhostLink>
          </div>
        </div>
      </section>

      <section id="shot-cidades" className="bg-arcano-surface py-20 md:py-28">
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
                <StatCard className="relative h-full overflow-hidden" alt>
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-[7rem] font-medium leading-none text-arcano-text/[0.06]"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <p className="relative font-sans text-[11px] font-medium text-gold">0{i + 1}</p>
                  <h3 className="relative mt-3 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                    {item.city}
                  </h3>
                  <p className="relative mt-1 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    {item.kicker}
                  </p>
                  <p className="relative mt-4 text-sm leading-[1.75] text-muted">{item.text}</p>
                  <p className="relative mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                    Ver a praça
                  </p>
                </StatCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="shot-cases" className="bg-arcano-bg py-20 md:py-28">
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
          {lead ? (
            <article className="mt-14 grid gap-8 border-t border-arcano-line pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                  {lead.segment}
                </p>
                <h3 className="mt-3 font-display text-4xl font-medium tracking-[-0.035em] text-cream">
                  {lead.client}
                </h3>
                <p className="mt-6 text-base leading-[1.75] text-muted">{lead.challenge}</p>
                <p className="mt-4 text-base text-cream/90">{lead.result}</p>
              </div>
              <ul className="space-y-8 md:border-l md:border-arcano-line md:pl-12">
                {rest.map((item) => (
                  <li key={item.slug}>
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                      {item.segment}
                    </p>
                    <p className="mt-1 font-display text-2xl font-medium tracking-[-0.03em] text-cream">
                      {item.client}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.result}</p>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
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
