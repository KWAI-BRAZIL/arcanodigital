import type { Metadata } from "next";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Kicker, PageLead, PageTitle, WhatsAppCta } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Arcano Solutions no WhatsApp. Atendimento em Brasília, Caldas Novas, Goiânia e região metropolitana.",
};

export default function ContatoPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <Kicker>Contato</Kicker>
        <PageTitle>
          O caminho é o WhatsApp. <span className="gold-text">Não um formulário genérico.</span>
        </PageTitle>
        <PageLead className="max-w-xl">
          Diagnóstico direto, sem fila de CRM de agência grande. Região de atuação:
          {` ${site.area}`}.
        </PageLead>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="panel p-8">
            <ServiceIcon slug="automacao" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-gold">WhatsApp</p>
            <p className="mt-3 font-display text-3xl text-cream">{site.phoneDisplay}</p>
            <p className="mt-3 text-sm text-muted">Resposta comercial. Diga o segmento e o que trava o mês.</p>
            <div className="mt-8">
              <WhatsAppCta>Abrir conversa agora</WhatsAppCta>
            </div>
          </article>
          <article className="panel p-8">
            <ServiceIcon slug="posicionamento" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-gold">Onde atuamos</p>
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
