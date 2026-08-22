import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
      {children}
    </p>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-cream md:text-5xl">
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
      className={`gold-btn inline-flex items-center justify-center rounded-lg px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] ${className}`}
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
      className={`inline-flex items-center justify-center rounded-lg border border-gold/40 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-gold hover:border-gold hover:text-gold-bright ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section id="shot-cta" className="relative overflow-hidden bg-arcano-surface px-5 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(212,165,55,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Kicker>Próximo passo</Kicker>
        <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-[-0.035em] text-cream md:text-5xl">
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
