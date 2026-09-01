export const site = {
  name: "Arcano Solutions",
  legalName: "Arcano Solutions Ltda",
  tagline: "Da mente ao código",
  positioning:
    "Neuromarketing que decide a venda — e sistemas que aguentam o volume quando a venda entra.",
  city: "Goiânia",
  region: "Centro-Oeste",
  area: "Brasília, Caldas Novas, Goiânia e região metropolitana",
  address: {
    country: "BR",
  },
  phoneDisplay: "(62) 98120-1160",
  phoneE164: "5562981201160",
  email: "arcanodigital.com.br@gmail.com",
  cnpj: "63.745.900/0001-88",
  founder: "Nara Rubia",
  url: "https://www.arcanosolutions.com.br",
} as const;

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Olá gostaria de realizar uma consultoria para o meu negocio";
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;
}
