import type { Metadata } from "next";
import { CtaBand, Kicker, Title } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Arcano Solutions",
  description:
    "Origem e propósito da Arcano Solutions em Brasília, Caldas Novas e Goiânia: neuromarketing, dado e operação para negócios locais venderem mais todo mês.",
};

export default function SobrePage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Kicker>Sobre</Kicker>
        <Title>
          Nascemos para o negócio local <span className="gold-text">parar de improvisar o mês.</span>
        </Title>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              A Arcano Solutions existe porque a maior parte das empresas em Brasília,
              Caldas Novas, Goiânia e região ainda trata marketing como post, anúncio
              solto ou “alguém que mexe no Instagram”. O caixa não espera o algoritmo.
            </p>
            <p>
              Nosso propósito é direto: estruturar percepção e aquisição para o comércio, o
              serviço e a marca local venderem com método. Neuromarketing não é acessório —
              é o critério técnico de como a mensagem, a oferta e o canal entram na decisão
              do cliente.
            </p>
            <p>
              A operação é liderada por {site.founder}, com trajetória em estratégia digital
              no mercado do Centro-Oeste. Atendemos {site.area}. CNPJ {site.cnpj}.
            </p>
          </div>
          <aside className="panel p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Onde atuamos</p>
            <p className="mt-3 font-display text-2xl text-cream">{site.area}</p>
            <p className="mt-6 text-sm text-cream">“{site.tagline}”</p>
          </aside>
        </div>
      </section>

      <section className="relative py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5">
          <Kicker>Como pensamos diferente</Kicker>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-cream md:text-4xl">
            Gatilho mental e dado. O palpite fica de fora da reunião.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="panel p-6">
              <h3 className="font-display text-xl text-cream">Decisão, não estética</h3>
              <p className="mt-3 text-sm text-muted">
                Criativo bonito que não fecha é custo. Cada peça precisa ter um papel na
                jornada: atenção, prova, objeção ou pedido.
              </p>
            </article>
            <article className="panel p-6">
              <h3 className="font-display text-xl text-cream">Local de verdade</h3>
              <p className="mt-3 text-sm text-muted">
                O cliente da esquina decide diferente do e-commerce nacional. Conhecemos o
                ciclo de padaria, clínica, imobiliária, moda e serviço em Goiás.
              </p>
            </article>
            <article className="panel p-6">
              <h3 className="font-display text-xl text-cream">Operação humana</h3>
              <p className="mt-3 text-sm text-muted">
                Time pequeno, próximo e responsável pelo número. Sem jargão de “paixão”.
                Com rotina, relatório e WhatsApp que responde.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Kicker>Como operamos</Kicker>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-cream">Mesa, tela e rua.</h2>
            <p className="mt-4 text-muted">
              A Arcano não se vende como “fábrica de conteúdo remota”. O trabalho acontece
              no diagnóstico do comercial, na conversa com o dono e na leitura do que o
              cliente da região realmente compra. IA e sistema entram para acelerar
              atendimento — não para substituir critério.
            </p>
            <p className="mt-4 text-muted">
              Se você busca uma agência que só entrega relatório de impressão, não somos
              o endereço. Se você precisa vender mais todo mês, sim.
            </p>
          </div>
          <div className="panel p-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Fundadora</p>
            <p className="mt-3 font-display text-3xl text-cream">{site.founder}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Estratégia digital aplicada a crescimento de empresas locais. A frase que
              rege a casa: paramos de vender “serviço de agência” e passamos a construir
              o motor de receita do cliente.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
