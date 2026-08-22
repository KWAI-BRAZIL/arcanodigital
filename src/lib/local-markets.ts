import { cases, proofs } from "@/lib/content";

export type LocalMarket = {
  slug: "goiania" | "caldas-novas" | "brasilia";
  city: string;
  kicker: string;
  title: string;
  lead: string;
  cta: string;
  whatsapp: string;
  statsNote: string;
  pillarsLead: string;
  proofLead: string;
  proofSrcs: string[];
  caseSlugs: string[];
  reasons: { title: string; text: string }[];
};

export const localMarkets: LocalMarket[] = [
  {
    slug: "goiania",
    city: "Goiânia",
    kicker: "Goiânia · número frio",
    title: "ROAS 1,86. Margem 46,1%. 1.016 vendas rastreadas.",
    lead: "Se a última agência vendeu pacote e entregou clique, o critério aqui é outro: custo, margem e diagnóstico antes de comprometer orçamento enxuto. Sem “aumente suas vendas”.",
    cta: "Quero um diagnóstico gratuito",
    whatsapp:
      "Olá, Arcano Digital. Sou de Goiânia e quero um diagnóstico gratuito do comercial — ROAS, custo e o que está travando o mês.",
    statsNote: "Os números abaixo são de operação rastreada, não de meta arredondada.",
    pillarsLead:
      "Tráfego e neuromarketing no mesmo peso de sistema: o anúncio só escala se o caixa confirma.",
    proofLead:
      "Focopill, Briston Wear e checkout com 20,21% de conversão — prova específica, não recorte genérico.",
    proofSrcs: [
      "/proofs/proof-roas.png",
      "/proofs/proof-vendas.png",
      "/proofs/proof-conversao.png",
      "/proofs/proof-ads.png",
    ],
    caseSlugs: ["focopill", "briston-wear", "marcelo-antonio-imoveis"],
    reasons: [
      {
        title: "Especificidade",
        text: "R$ 99.377,92 de faturamento líquido, R$ 53.536,53 de mídia, lucro de R$ 45.841,39. Número na mesa na primeira conversa.",
      },
      {
        title: "Risco baixo no começo",
        text: "Diagnóstico gratuito. Você vê o gargalo antes de assinar verba.",
      },
      {
        title: "Sem pacote inflado",
        text: "O plano nasce do comercial real. O que não paga, corta.",
      },
    ],
  },
  {
    slug: "caldas-novas",
    city: "Caldas Novas",
    kicker: "Caldas Novas · temporada",
    title: "Vender na alta sem perder pedido. Não morrer na baixa.",
    lead: "Turista decide na hora. Concorrência de comércio local é alta. O WhatsApp que trava no feriado é venda perdida — automação e sistema são o argumento, não um extra.",
    cta: "Quero um diagnóstico gratuito",
    whatsapp:
      "Olá, Arcano Digital. Sou de Caldas Novas e quero um diagnóstico para aguentar o pico de temporada sem perder pedido no WhatsApp.",
    statsNote: "Volume e painel de pedido — o que a alta temporada exige ver.",
    pillarsLead:
      "Automação, IA e e-commerce no mesmo peso do marketing: atendimento que não trava quando a cidade enche.",
    proofLead:
      "Solaria Doceria (R$ 33.030,50 no mês, 1.002 unidades do item líder) e recortes de WhatsApp com 256 conversas / 183 conversões.",
    proofSrcs: [
      "/proofs/proof-vyria.png",
      "/proofs/proof-whatsapp-feedback.png",
      "/proofs/proof-whatsapp-recorde.png",
      "/proofs/proof-conversao.png",
    ],
    caseSlugs: ["solaria-doceria", "focopill", "rota-delas"],
    reasons: [
      {
        title: "Pico sem fila morta",
        text: "Fluxo de WhatsApp, CRM e painel para o pedido não morrer quando o movimento explode.",
      },
      {
        title: "Alta e baixa",
        text: "A operação precisa vender na temporada e não desidratar no intervalo. Conteúdo e mídia entram com esse calendário.",
      },
      {
        title: "Nota que o cliente final já usa",
        text: "O turista decide por prova visível. O comércio local também: recorte de pedido, recorde, volume — não slogan.",
      },
    ],
  },
  {
    slug: "brasilia",
    city: "Brasília",
    kicker: "Brasília · autoridade",
    title: "Método, portfólio e relação longa. Sem linguagem de promoção.",
    lead: "Público que pesquisa antes e prioriza qualidade. A Arcano apresenta método visível, números de operação e cases — tom direto, sem urgência de desconto.",
    cta: "Agendar uma conversa de diagnóstico",
    whatsapp:
      "Olá, Arcano Digital. Sou de Brasília e gostaria de uma conversa de diagnóstico sobre marketing e sistemas para o meu negócio.",
    statsNote: "Portfólio de operação e escala — o que sustenta uma decisão mais longa.",
    pillarsLead:
      "Branding, neuromarketing e sistemas no mesmo desenho. A relação é de construção, não de campanha isolada.",
    proofLead:
      "Briston Wear, Rainha Marketing e Focopill — marca, comercial e mídia com leitura de caixa.",
    proofSrcs: [
      "/proofs/proof-whatsapp-recorde.png",
      "/proofs/proof-roas.png",
      "/proofs/proof-vendas.png",
      "/proofs/proof-ads.png",
    ],
    caseSlugs: ["briston-wear", "rainha-marketing", "focopill"],
    reasons: [
      {
        title: "Autoridade técnica",
        text: "Neuromarketing como critério de mensagem — não como jargão. Relatório a serviço da decisão.",
      },
      {
        title: "Portfólio robusto",
        text: "+R$ 250M em faturamento gerado para clientes, +R$ 50M gerenciados em tráfego, +20 projetos estratégicos.",
      },
      {
        title: "Prazo de relação",
        text: "Diagnóstico, estratégia e operação contínua. Sem pressão de pacote promocional.",
      },
    ],
  },
];

export function getLocalMarket(slug: LocalMarket["slug"]) {
  return localMarkets.find((item) => item.slug === slug)!;
}

export function proofsFor(srcs: string[]) {
  return srcs
    .map((src) => proofs.find((item) => item.src === src))
    .filter((item): item is (typeof proofs)[number] => Boolean(item));
}

export function casesFor(slugs: string[]) {
  return slugs
    .map((slug) => cases.find((item) => item.slug === slug))
    .filter((item): item is (typeof cases)[number] => Boolean(item));
}
