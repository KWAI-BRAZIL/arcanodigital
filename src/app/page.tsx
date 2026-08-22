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

  return (
    <main>
      <section className="relative overflow-x-hidden pt-24 md:pt-28">
        <div className="hero-orb pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,144,42,0.06),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-12 pt-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:pb-24 md:pt-10">
          <Reveal>
            <Kicker>Goiânia · Brasília · Caldas Novas</Kicker>
            <h1 className="mt-4 font-display text-[1.85rem] font-semibold leading-[1.2] text-cream sm:text-4xl md:mt-5 md:text-6xl">
              O que faz sua cliente comprar. O que faz o sistema aguentar a demanda.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted md:mt-6 md:text-lg">
              Marketing com neuromarketing, tráfego pago e branding — e desenvolvimento de
              software sob medida, sistemas e automações. Uma operação só, para negócios que
              não podem parar de vender.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <WhatsAppCta className="w-full sm:w-auto">Quero um diagnóstico gratuito</WhatsAppCta>
              <GhostLink href="/cases" className="w-full sm:w-auto">
                Ver cases e provas
              </GhostLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel relative overflow-hidden p-4">
              <Image
                src="/brand/logo.png"
                alt="Arcano Digital — Estratégia, Percepção, Resultados"
                width={720}
                height={480}
                className="h-auto w-full"
                priority
              />
              <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
                {site.tagline}
              </p>
            </div>
          </Reveal>
        </div>
        <div className="sticky top-[52px] z-20 border-y border-line bg-ink-2/90 backdrop-blur-md md:top-14">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="border-line px-4 py-5 even:border-l md:border-l md:px-5 md:py-7 md:first:border-l-0">
                <p className="font-mono text-xl text-gold-bright md:text-3xl">{item.value}</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-muted md:mt-2 md:text-[11px] md:tracking-[0.16em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <Kicker>O que fazemos</Kicker>
          <Title>Duas frentes. Uma operação.</Title>
          <p className="mt-4 max-w-2xl text-[15px] text-muted md:text-base">
            Marketing que constrói a decisão de compra. Desenvolvimento que sustenta essa
            decisão no dia a dia do negócio.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <DualPillars />
        </Reveal>
      </section>

      <section className="border-y border-line bg-ink-2 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>Três praças. Três critérios.</Kicker>
            <h2 className="mt-3 font-display text-[1.75rem] text-cream md:text-4xl">
              A mesma operação. O gatilho muda.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
            {cityTriggers.map((item, i) => (
              <Reveal key={item.city} delay={i * 80}>
                <Link href={item.href} className="panel block p-5 hover:border-gold/50 md:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                    {item.city} · {item.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                    Ver a praça
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <Reveal>
          <Kicker>Quem já caminha com a Arcano</Kicker>
          <h2 className="mt-3 font-display text-[1.75rem] text-cream md:text-4xl">
            Negócios locais. Segmentos reais.
          </h2>
        </Reveal>
        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-10 md:flex-wrap md:overflow-visible md:px-0">
          {clients.map((client) => (
            <Link
              key={client.slug}
              href="/cases"
              className="panel min-w-[220px] shrink-0 snap-start px-5 py-4 text-sm tracking-[0.04em] text-cream md:min-w-0"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {client.segment}
              </span>
              <span className="mt-1 block font-display text-lg">{client.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Kicker>Prova social</Kicker>
                <Title>Números de operação. Prints reais.</Title>
              </div>
              <GhostLink href="/depoimentos" className="w-full sm:w-auto">
                Ver todas as provas
              </GhostLink>
            </div>
            <p className="mt-4 max-w-2xl text-[15px] text-muted md:text-base">
              Painel, WhatsApp e checkout — a mesma evidência que qualquer empresário
              reconhece, em qualquer praça: venda, margem, conversão e recorde de mês.
            </p>
          </Reveal>
          <div className="mt-8 md:mt-10">
            <ProofGallery compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker>Cases em destaque</Kicker>
              <Title>Marcas que a Arcano posiciona.</Title>
            </div>
            <GhostLink href="/cases" className="w-full sm:w-auto">
              Ver todos os cases
            </GhostLink>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <article className="panel p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                  {item.segment}
                </p>
                <h3 className="mt-2 font-display text-2xl text-cream">{item.client}</h3>
                <p className="mt-4 text-sm text-muted">{item.challenge}</p>
                <p className="mt-3 text-sm text-gold-bright">{item.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Kicker>Por que Arcano</Kicker>
            <Title>Decisão por gatilho e por dado — em qualquer praça onde você vende.</Title>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {aggregateStats.map((item) => (
              <div key={item.label} className="panel p-3 md:p-4">
                <p className="font-mono text-xl text-gold-bright md:text-2xl">{item.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-muted md:text-[11px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
            <article className="panel p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                Diferencial técnico
              </p>
              <h3 className="mt-2 font-display text-xl text-cream">Neuromarketing aplicado</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                O que a cliente sente, o que ela compara e o que a faz fechar — no WhatsApp,
                no checkout ou na loja física.
              </p>
            </article>
            <article className="panel p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                Metodologia visível
              </p>
              <h3 className="mt-2 font-display text-xl text-cream">Um caminho, não uma caixa-preta</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Diagnóstico, estratégia, execução, otimização e relatório. Você enxerga cada
                etapa antes de assinar qualquer coisa.
              </p>
            </article>
            <article className="panel panel-teal p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
                Operação completa
              </p>
              <h3 className="mt-2 font-display text-xl text-cream">Marketing e engenharia na mesma equipe</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                IA, automações, e-commerce e sistemas sob medida sem precisar contratar outra
                empresa pra parte técnica.
              </p>
            </article>
          </div>
          <div className="mt-8">
            <GhostLink href="/metodologia" className="w-full sm:w-auto">
              Ver a metodologia
            </GhostLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
