export function iconSlugForSegment(segment: string) {
  const s = segment.toLowerCase();
  if (s.includes("sistema") || s.includes("desenvolvimento")) return "sistemas-personalizados";
  if (s.includes("saúde") || s.includes("saude")) return "neuromarketing";
  if (s.includes("aliment")) return "vendas-online";
  if (s.includes("varejo") || s.includes("moda")) return "branding";
  if (s.includes("imob")) return "posicionamento";
  if (s.includes("tráfego") || s.includes("trafego") || s.includes("ads")) return "trafego-pago";
  return "conteudo";
}

export function ServiceIcon({
  slug,
  tech = false,
  size = "md",
}: {
  slug: string;
  tech?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const box = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const svg = size === "lg" ? 24 : 18;
  const tone = tech ? "border-lilac/45 text-lilac bg-lilac/10" : "border-gold/45 text-gold bg-gold/10";

  return (
    <span className={`inline-flex ${box} items-center justify-center rounded-full border ${tone}`} aria-hidden>
      <svg width={svg} height={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        {iconPath(slug)}
      </svg>
    </span>
  );
}

function iconPath(slug: string) {
  switch (slug) {
    case "neuromarketing":
      return (
        <>
          <path d="M12 3.5a6.5 6.5 0 0 0-3.8 11.8V20h7.6v-4.7A6.5 6.5 0 0 0 12 3.5Z" />
          <path d="M10 10h.01M14 10h.01M10.5 13.2c.8.7 2.2.7 3 0" />
        </>
      );
    case "trafego-pago":
      return (
        <>
          <path d="M4 19V6" />
          <path d="M4 19h16" />
          <path d="M7 14l4-6 3 4 4-5" />
        </>
      );
    case "conteudo":
      return (
        <>
          <rect x="5" y="4" width="14" height="16" rx="1.5" />
          <path d="M8 9h8M8 13h6M8 17h4" />
        </>
      );
    case "branding":
      return (
        <>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 8v8M8 12h8" />
        </>
      );
    case "posicionamento":
      return (
        <>
          <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </>
      );
    case "sistemas-personalizados":
      return (
        <>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
        </>
      );
    case "desenvolvimento-software":
      return <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13.2 6l-2.4 12" />;
    case "vendas-online":
      return (
        <>
          <path d="M5 7h15l-1.4 8.2H7.2L5 7Z" />
          <circle cx="9" cy="19" r="1.3" />
          <circle cx="17" cy="19" r="1.3" />
        </>
      );
    case "automacao":
    case "inteligencia-artificial":
      return (
        <>
          <rect x="8" y="8" width="8" height="8" rx="1.5" />
          <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l2.2 2.2M15.3 15.3l2.2 2.2M17.5 6.5l-2.2 2.2M8.7 15.3 6.5 17.5" />
        </>
      );
    case "metodo":
      return (
        <>
          <path d="M5 6h14M5 12h14M5 18h9" />
          <circle cx="18" cy="18" r="2" />
        </>
      );
    default:
      return <circle cx="12" cy="12" r="6" />;
  }
}
