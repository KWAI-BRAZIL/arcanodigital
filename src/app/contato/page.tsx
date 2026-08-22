import type { Metadata } from "next";
import { Kicker, Title, WhatsAppCta } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Arcano Solutions no WhatsApp. Atendimento em Brasília, Caldas Novas, Goiânia e região metropolitana.",
};

export default function ContatoPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Kicker>Contato</Kicker>
        <Title>
          O caminho é o WhatsApp. <span className="gold-text">Não um formulário genérico.</span>
        </Title>
        <p className="mt-4 max-w-xl text-muted">
          Diagnóstico direto, sem fila de CRM de agência grande. Região de atuação:
          {` ${site.area}`}.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="panel p-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">WhatsApp</p>
            <p className="mt-3 font-display text-3xl text-cream">{site.phoneDisplay}</p>
            <p className="mt-3 text-sm text-muted">Resposta comercial. Diga o segmento e o que trava o mês.</p>
            <div className="mt-8">
              <WhatsAppCta>Abrir conversa agora</WhatsAppCta>
            </div>
          </article>
          <article className="panel p-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Onde atuamos</p>
            <p className="mt-3 font-display text-2xl text-cream">{site.area}</p>
            <p className="mt-4 text-sm text-muted">{site.email}</p>
            <p className="mt-2 text-sm text-muted">CNPJ {site.cnpj}</p>
          </article>
        </div>
        <p className="mt-10 text-sm text-muted">
          Prefere e-mail?{" "}
          <a className="text-gold" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . O atalho continua sendo{" "}
          <a className="text-gold" href={whatsappUrl()}>
            o WhatsApp
          </a>
          .
        </p>
      </section>
    </main>
  );
}
