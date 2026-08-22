import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("Olá, Arcano Digital. Quero um diagnóstico gratuito do comercial e da operação.")}
      target="_blank"
      rel="noopener noreferrer"
      className="gold-btn fixed bottom-5 right-5 z-50 rounded-lg px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] max-md:bottom-4"
      aria-label="Abrir WhatsApp"
    >
      WhatsApp
    </a>
  );
}
