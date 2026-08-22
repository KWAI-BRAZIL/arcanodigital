import Image from "next/image";
import { DualPillars } from "@/components/DualPillars";
import { ProofGallery } from "@/components/ProofGallery";
import { CtaBand, GhostLink, Kicker, Title, WhatsAppCta } from "@/components/ui";
import { aggregateStats, stats } from "@/lib/content";
import { casesFor, proofsFor, type LocalMarket } from "@/lib/local-markets";
import { site } from "@/lib/site";

export function LocalMarketPage({ market }: { market: LocalMarket }) {
  const localProofs = proofsFor(market.proofSrcs);
  const localCases = casesFor(market.caseSlugs);
  const showAggregate = market.slug === "brasilia";

  return (
    <main>
      <section className="relative overflow-x-hidden pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.15fr_0.85fr] md:pb-24">
          <div>
            <Kicker>{market.kicker}</Kicker>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.2] text-cream md:text-5xl">
              {market.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{market.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCta message={market.whatsapp}>{market.cta}</WhatsAppCta>
              <GhostLink href="/cases">Ver portfólio</GhostLink>
            </div>
          </div>
          <div className="panel relative overflow-hidden p-4">
            <Image
              src="/brand/logo.png"
              alt="Arcano Digital"
              width={720}
              height={480}
              className="h-auto w-full"
              priority
            />
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
              {site.area}
            </p>
          </div>
        </div>
        <div className="border-y border-line bg-ink-2/80">
          <p className="mx-auto max-w-6xl px-5 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {market.statsNote}
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
            {(showAggregate ? aggregateStats : stats).map((item) => (
              <div key={item.label} className="px-5 py-7">
                <p className="font-mono text-2xl text-gold-bright md:text-3xl">{item.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Kicker>{market.city}</Kicker>
        <Title>Como operamos nesta praça</Title>
        <p className="mt-4 max-w-2xl text-muted">{market.pillarsLead}</p>
        <DualPillars />
      </section>

      <section className="border-y border-line bg-ink-2 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Kicker>Prova</Kicker>
          <Title>O que esta praça precisa ver.</Title>
          <p className="mt-4 max-w-2xl text-muted">{market.proofLead}</p>
          <div className="mt-10">
            <ProofGallery items={localProofs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Kicker>Cases</Kicker>
        <Title>Recortes de operação</Title>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {localCases.map((item) => (
            <article key={item.slug} className="panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">{item.segment}</p>
              <h3 className="mt-2 font-display text-2xl text-cream">{item.client}</h3>
              <p className="mt-4 text-sm text-muted">{item.challenge}</p>
              <p className="mt-3 text-sm text-gold-bright">{item.result}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {market.reasons.map((item) => (
            <article key={item.title} className="panel p-6">
              <h3 className="font-display text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
