import { GhostLink, WhatsAppCta } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl text-cream">Esta página não existe.</h1>
      <p className="mt-3 max-w-md text-muted">Volte ao início ou fale com a Arcano no WhatsApp.</p>
      <div className="mt-8 flex gap-3">
        <GhostLink href="/">Início</GhostLink>
        <WhatsAppCta>WhatsApp</WhatsAppCta>
      </div>
    </main>
  );
}
