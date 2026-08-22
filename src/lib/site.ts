export const site = {
  name: "Arcano Digital",
  legalName: "Arcano Digital Ltda",
  tagline: "Estratégia · Percepção · Resultados",
  positioning:
    "Neuromarketing que decide a venda — e sistemas que aguentam o volume quando a venda entra.",
  city: "Goiânia",
  region: "Centro-Oeste",
  area: "Brasília, Caldas Novas, Goiânia e região metropolitana",
  address: {
    country: "BR",
  },
  phoneDisplay: "(62) 99559-7811",
  phoneE164: "5562995597811",
  email: "arcanodigital.com.br@gmail.com",
  cnpj: "63.745.900/0001-88",
  founder: "Nara Rubia",
  url: "https://arcano-agency.vercel.app",
} as const;

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Olá, Arcano Digital. Quero um diagnóstico gratuito do comercial e da operação do meu negócio.";
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;
}
