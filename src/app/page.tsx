import Image from "next/image";
import Link from "next/link";
import { DualPillars } from "@/components/DualPillars";
import { ProofGallery } from "@/components/ProofGallery";
import { CtaBand, GhostLink, Kicker, Title, WhatsAppCta } from "@/components/ui";
import { aggregateStats, cases, cityTriggers, clients, stats } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = cases.filter((item) => item.featured);

  return (
    <main>
      <section className="grain relative overflow-x-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.12),transparent_42%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.15fr_0.85fr] md:pb-24">
          <div>
            <Kicker>Brasília · Caldas Novas · Goiânia e região</Kicker>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.2] text-cream md:text-6xl">
              Neuromarketing que decide a venda — e sistemas que{" "}
              <em>aguentam o volume</em>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Em Goiânia o critério é número (ROAS, custo, margem). Em Caldas Novas, o
              pico de temporada sem perder pedido. Em Brasília, autoridade e método —
              sem pacote genérico.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCta>Quero um diagnóstico gratuito</WhatsAppCta>
              <GhostLink href="/cases">Ver cases e provas</GhostLink>
            </div>
          </div>
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
        </div>
        <div className="border-y border-line bg-ink-2/80">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
            {stats.map((item) => (
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
        <Kicker>Dois eixos. Um comercial.</Kicker>
        <Title>
          Marketing e sistemas. <span className="gold-text">Mesmo peso.</span>
        </Title>
        <p className="mt-4 max-w-2xl text-muted">
          Quatro frentes de percepção e aquisição. Quatro frentes de operação. Nenhum
          serviço tratado como item de rodapé.
        </p>
        <DualPillars />
      </section>

      <section className="border-y border-line bg-ink-2 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Kicker>Três praças. Três critérios.</Kicker>
          <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
            A mesma operação. O gatilho muda.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cityTriggers.map((item) => (
              <Link key={item.city} href={item.href} className="panel p-6 hover:border-gold/50">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                  {item.city} · {item.kicker}
                </p>
                <h3 className="mt-3 font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                  Ver a praça
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>Quem já caminha com a Arcano</Kicker>
        <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
          Negócios locais. Segmentos reais.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {clients.map((client) => (
            <Link
              key={client.slug}
              href="/cases"
              className="panel px-5 py-4 text-sm tracking-[0.04em] text-cream"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {client.segment}
              </span>
              <span className="mt-1 block font-display text-lg">{client.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker>Prova social</Kicker>
              <Title>Números de operação. Prova visível.</Title>
            </div>
            <GhostLink href="/depoimentos">Ver todas as provas</GhostLink>
          </div>
          <p className="mt-4 max-w-2xl text-muted">
            Painéis, WhatsApp e checkout — ROAS 1,86, 1.016 vendas, margem 46,1%. O
            número frio que Goiânia exige; o volume que a temporada precisa aguentar.
          </p>
          <div className="mt-10">
            <ProofGallery compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker>Cases em destaque</Kicker>
            <Title>Marcas que a Arcano posiciona.</Title>
          </div>
          <GhostLink href="/cases">Ver todos os cases</GhostLink>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((item) => (
            <article key={item.slug} className="panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                {item.segment}
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">{item.client}</h3>
              <p className="mt-4 text-sm text-muted">{item.challenge}</p>
              <p className="mt-3 text-sm text-gold-bright">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Kicker>Por que Arcano</Kicker>
          <Title>
            Decisão por gatilho e dado. <span className="gold-text">Não por achismo.</span>
          </Title>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {aggregateStats.map((item) => (
              <div key={item.label} className="panel p-4">
                <p className="font-mono text-2xl text-gold-bright">{item.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="panel p-6">
              <h3 className="font-display text-xl text-cream">Diferencial técnico</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Neuromarketing aplicado à jornada: o que o cliente sente, compara e fecha
                no WhatsApp ou no checkout. Número na mesa, não slogan.
              </p>
            </article>
            <article className="panel p-6">
              <h3 className="font-display text-xl text-cream">Metodologia visível</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Diagnóstico, estratégia, execução, otimização e relatório. Quem nunca
                contratou agência enxerga o caminho antes de assinar.
              </p>
            </article>
            <article className="panel panel-teal p-6">
              <h3 className="font-display text-xl text-cream">Operação que aguenta pico</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                IA, checkout e sistemas (a lógica de despacho e painel que já operamos em
                produtos como o Vyria) para o comercial não morrer no feriado lotado.
              </p>
            </article>
          </div>
          <div className="mt-8">
            <GhostLink href="/metodologia">Ver a metodologia</GhostLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
