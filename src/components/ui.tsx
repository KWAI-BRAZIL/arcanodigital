import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
      {children}
    </p>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-ivory md:text-5xl">
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
      className={`gold-btn inline-flex items-center justify-center rounded-sm px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] sm:px-8 sm:py-3.5 sm:text-[12px] sm:tracking-[0.2em] ${className}`}
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
      className={`inline-flex items-center justify-center rounded-sm border border-gold/35 px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-gold transition-colors duration-300 ease-out hover:border-lilac hover:text-lilac sm:px-6 sm:py-3.5 sm:text-[12px] sm:tracking-[0.2em] ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section id="shot-cta" className="relative overflow-hidden px-5 py-24 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Kicker>Próximo passo</Kicker>
        <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-ivory md:text-5xl">
          Vamos olhar o seu comercial — e o sistema que está travando o mês.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-[1.8] text-mist">
          Diagnóstico inicial sem custo, para negócios em Goiânia, Brasília, Caldas Novas e região.
        </p>
        <div className="mt-10">
          <WhatsAppCta>Falar no WhatsApp</WhatsAppCta>
        </div>
      </div>
    </section>
  );
}
