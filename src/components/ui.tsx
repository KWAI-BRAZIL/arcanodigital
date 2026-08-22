import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-gold">{children}</p>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-semibold leading-tight text-cream md:text-5xl">
      {children}
    </h2>
  );
}

export function WhatsAppCta({
  children,
  className = "",
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`gold-btn inline-flex items-center justify-center rounded-sm px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm border border-gold/40 px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-gold hover:border-gold hover:text-gold-bright ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Kicker>Próximo passo</Kicker>
        <h2 className="mt-5 font-display text-3xl leading-tight text-cream md:text-5xl">
          Vamos olhar o seu comercial — e o sistema que está travando o mês.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-[1.75] text-muted">
          Diagnóstico inicial sem custo, para negócios em Goiânia, Brasília, Caldas Novas e região.
        </p>
        <div className="mt-10">
          <WhatsAppCta>Falar no WhatsApp</WhatsAppCta>
        </div>
      </div>
    </section>
  );
}
