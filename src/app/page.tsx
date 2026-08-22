import Image from "next/image";
import Link from "next/link";
import { DualPillars } from "@/components/DualPillars";
import { ProofGallery } from "@/components/ProofGallery";
import { Reveal } from "@/components/Reveal";
import { CtaBand, GhostLink, Kicker, Title, WhatsAppCta } from "@/components/ui";
import { aggregateStats, cases, cityTriggers, clients, stats } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = cases.filter((item) => item.featured);
  const lead = featured[0];
  const rest = featured.slice(1);

  return (
    <main>
      <section className="relative overflow-x-hidden pt-28 md:pt-36">
        <div className="hero-orb pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(184,144,42,0.07),transparent_55%)]" />
        <div className="mx-auto max-w-3xl px-5 pb-16 text-center md:pb-24">
          <Reveal>
            <Kicker>Goiânia · Brasília · Caldas Novas</Kicker>
            <h1 className="mt-6 font-display text-[2rem] font-semibold leading-[1.18] text-cream sm:text-5xl md:text-[3.5rem]">
              O que faz sua cliente comprar. O que faz o sistema aguentar a demanda.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-muted md:text-lg">
              Marketing com neuromarketing, tráfego pago e branding — e desenvolvimento de
              software sob medida, sistemas e automações. Uma operação só, para negócios que
              não podem parar de vender.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <WhatsAppCta className="w-full sm:w-auto">Quero um diagnóstico gratuito</WhatsAppCta>
              <GhostLink href="/cases" className="w-full sm:w-auto">
                Ver cases e provas
              </GhostLink>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Image
              src="/brand/logo.png"
              alt="Arcano Digital — Estratégia, Percepção, Resultados"
              width={280}
              height={120}
              className="mx-auto mt-14 h-auto w-40 opacity-90 md:mt-20 md:w-48"
              priority
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.32em] text-gold/80">
              {site.tagline}
            </p>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-5 pb-4 md:grid-cols-4 md:gap-8 md:pb-8">
          {stats.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-display text-2xl text-cream md:text-3xl">{item.value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
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
      </section>

      <section className="mx-auto max-w-6xl px-5 py-4 md:py-8">
        <Reveal>
          <Kicker>O que fazemos</Kicker>
          <Title>Duas frentes. Uma operação.</Title>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted md:text-base">
            Marketing que constrói a decisão de compra. Desenvolvimento que sustenta essa
            decisão no dia a dia do negócio.
          </p>
        </Reveal>
        <DualPillars />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <Kicker>Por que Arcano</Kicker>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream md:text-5xl">
            Decisão por gatilho e por dado — em qualquer praça onde você vende.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 border-y border-white/[0.06] py-12 md:grid-cols-4 md:gap-8">
          {aggregateStats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl text-cream md:text-4xl">{item.value}</p>
              <p className="mt-3 max-w-[12rem] font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              Diferencial técnico
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream">Neuromarketing aplicado</h3>
            <p className="mt-4 text-sm leading-[1.75] text-muted">
              O que a cliente sente, o que ela compara e o que a faz fechar — no WhatsApp,
              no checkout ou na loja física.
            </p>
          </article>
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              Metodologia visível
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream">Um caminho, não uma caixa-preta</h3>
            <p className="mt-4 text-sm leading-[1.75] text-muted">
              Diagnóstico, estratégia, execução, otimização e relatório. Você enxerga cada
              etapa antes de assinar qualquer coisa.
            </p>
          </article>
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
              Operação completa
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream">Marketing e engenharia na mesma equipe</h3>
            <p className="mt-4 text-sm leading-[1.75] text-muted">
              IA, automações, e-commerce e sistemas sob medida sem precisar contratar outra
              empresa pra parte técnica.
            </p>
          </article>
        </div>
        <div className="mt-12">
          <GhostLink href="/metodologia">Ver a metodologia</GhostLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <Reveal>
          <Kicker>Três praças</Kicker>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            A mesma operação. O gatilho muda.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-14">
          {cityTriggers.map((item, i) => (
            <Link key={item.city} href={item.href} className="group block">
              <p className="font-mono text-[11px] text-gold">0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl text-cream group-hover:text-gold-bright">
                {item.city}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {item.kicker}
              </p>
              <p className="mt-4 text-sm leading-[1.75] text-muted">{item.text}</p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                Ver a praça
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
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
          <article className="mt-14 grid gap-8 border-t border-white/[0.06] pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                {lead.segment}
              </p>
              <h3 className="mt-3 font-display text-4xl text-cream">{lead.client}</h3>
              <p className="mt-6 text-base leading-[1.75] text-muted">{lead.challenge}</p>
              <p className="mt-4 text-base text-cream/90">{lead.result}</p>
            </div>
            <ul className="space-y-8 md:border-l md:border-white/[0.06] md:pl-12">
              {rest.map((item) => (
                <li key={item.slug}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {item.segment}
                  </p>
                  <p className="mt-1 font-display text-2xl text-cream">{item.client}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.result}</p>
                </li>
              ))}
            </ul>
          </article>
        ) : null}
        <p className="mt-16 max-w-3xl font-display text-2xl leading-snug text-cream/70 md:text-3xl">
          {clients.map((c) => c.name).join("  ·  ")}
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Quem já caminha com a Arcano
        </p>
      </section>

      <CtaBand />
    </main>
  );
}
