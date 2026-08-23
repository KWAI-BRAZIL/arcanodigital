import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand, GhostLink, Kicker, PageTitle, WhatsAppCta } from "@/components/ui";
import { services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.title} para negócios locais em Brasília, Caldas Novas, Goiânia e região. ${service.description}`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="mx-auto max-w-3xl px-5 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="mb-5">
          <ServiceIcon
            slug={service.slug}
            tech={["sistemas-personalizados", "desenvolvimento-software", "automacao", "inteligencia-artificial", "vendas-online"].includes(service.slug)}
            size="lg"
          />
        </div>
        <Kicker>Solução</Kicker>
        <PageTitle>{service.title}</PageTitle>
        <p className="mt-5 text-lg leading-relaxed text-muted">{service.description}</p>
        <div className="panel mt-10 p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Para quem serve</p>
          <p className="mt-3 text-cream">{service.audience}</p>
        </div>
        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">O que está incluso</p>
          <ul className="mt-4 space-y-3">
            {service.includes.map((line) => (
              <li key={line} className="border-l border-gold/50 pl-4 text-sm text-muted">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <WhatsAppCta>Quero essa frente no meu negócio</WhatsAppCta>
          <GhostLink href="/solucoes">Todas as soluções</GhostLink>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
