import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="gold-btn fixed bottom-5 right-5 z-50 rounded-md px-3 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.14em] max-md:bottom-4 sm:px-4 sm:py-3 sm:text-[11px] sm:tracking-[0.16em]"
      aria-label="Abrir WhatsApp"
    >
      WhatsApp
    </a>
  );
}
