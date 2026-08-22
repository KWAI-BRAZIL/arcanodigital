import Link from "next/link";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-cream md:text-5xl">
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
      className={`inline-flex items-center justify-center rounded-sm border border-line px-4 py-2 font-sans text-[10px] font-medium tracking-wide text-cream transition-colors hover:bg-paper-2 sm:px-6 sm:py-3 sm:text-[12px] ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section id="shot-cta" className="border-t border-line bg-white px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line">
          <Image src="/photos/photo-workshop.png" alt="" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div>
          <Kicker>Próximo passo</Kicker>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-cream md:text-4xl">
            Vamos olhar o seu comercial — e o sistema que está travando o mês.
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-[1.75] text-muted">
            Diagnóstico inicial sem custo, para negócios em Goiânia, Brasília, Caldas Novas e região.
          </p>
          <div className="mt-8">
            <WhatsAppCta>Falar no WhatsApp</WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}
