export const stats = [
  { value: "R$ 154 mil", label: "Receita gerada em uma única operação local" },
  { value: "1,86", label: "ROAS com 46% de margem líquida" },
  { value: "1.016", label: "Vendas rastreadas em um ciclo" },
  { value: "7+", label: "Negócios locais em operação com a Arcano" },
] as const;

export const aggregateStats = [
  { value: "+R$ 250M", label: "em faturamento gerado para clientes" },
  { value: "+R$ 50M", label: "gerenciados em tráfego pago" },
  { value: "+10M", label: "leads qualificados gerados" },
  { value: "+20", label: "projetos estratégicos entregues" },
] as const;

export const clients = [
  { name: "Briston Wear", segment: "Moda", slug: "briston-wear" },
  { name: "Rainha Marketing", segment: "Serviços", slug: "rainha-marketing" },
  { name: "Vidas em Movimento", segment: "Saúde", slug: "vidas-em-movimento" },
  { name: "Focopill", segment: "Saúde", slug: "focopill" },
  { name: "Solaria Doceria", segment: "Alimentação", slug: "solaria-doceria" },
  { name: "Rota Delas", segment: "Serviços", slug: "rota-delas" },
  { name: "Marcelo Antonio Imóveis", segment: "Imobiliário", slug: "marcelo-antonio-imoveis" },
] as const;

export const marketingPillars = [
  {
    slug: "neuromarketing",
    title: "Neuromarketing",
    kicker: "Diferencial técnico",
    summary:
      "Gatilhos mentais e jornada de decisão traduzidos em copy — o que faz a cliente fechar, não o que soa bonito.",
    bullets: ["Jornada de decisão", "Copy de resposta direta"],
  },
  {
    slug: "trafego-pago",
    title: "Tráfego pago",
    kicker: "Aquisição",
    summary:
      "Meta Ads e Google Ads com funil e tracking, otimizados pelo caixa — não pela vaidade do relatório.",
    bullets: ["ROAS e custo por lead", "Escala só quando o número fecha"],
  },
  {
    slug: "conteudo",
    title: "Conteúdo",
    kicker: "Percepção",
    summary:
      "Identidade de conteúdo e calendário editorial que fazem o negócio ser lembrado antes de ser procurado.",
    bullets: ["Tom de voz", "Integração com anúncio e WhatsApp"],
  },
  {
    slug: "branding",
    title: "Branding",
    kicker: "Marca",
    summary:
      "Identidade visual e posicionamento para a cliente escolher você — e não o concorrente da esquina.",
    bullets: ["Estratégias de posicionamento"],
  },
] as const;

export const developmentPillars = [
  {
    slug: "sistemas-personalizados",
    title: "Sistemas sob medida",
    kicker: "Operação",
    summary:
      "Painéis e ferramentas internas construídos para o processo real do seu negócio — não para um fluxo genérico de curso online.",
    bullets: ["Painéis operacionais", "Gestão interna"],
  },
  {
    slug: "desenvolvimento-software",
    title: "Desenvolvimento de software",
    kicker: "Engenharia",
    summary:
      "Aplicações web, integrações e automações que tiram trabalho manual repetitivo do seu time.",
    bullets: ["Web apps", "APIs e integrações"],
  },
  {
    slug: "vendas-online",
    title: "E-commerce & checkout",
    kicker: "Conversão",
    summary:
      "Loja e funil de venda online desenhados para converter — do clique ao pagamento aprovado.",
    bullets: ["Vendas online", "Recuperação de checkout"],
  },
  {
    slug: "automacao",
    title: "Automação & IA",
    kicker: "Escala",
    summary:
      "Atendimento e CRM automatizados para o comercial não travar quando o volume sobe — no feriado, na campanha ou na alta temporada.",
    bullets: ["Soluções de IA", "Follow-up e CRM"],
  },
] as const;

export const pillars = marketingPillars;

export const services = [
  {
    slug: "neuromarketing",
    title: "Neuromarketing aplicado",
    audience: "Negócios locais que vendem no presencial, no WhatsApp ou no e-commerce.",
    description:
      "Aplicamos ciência da decisão no comercial: o que o cliente sente, o que ele compara e o que o faz fechar. Sem jargão vazio — gatilhos, prova e oferta no lugar certo da jornada.",
    includes: [
      "Mapeamento da jornada de decisão do cliente local",
      "Gatilhos mentais por etapa do funil",
      "Copy persuasiva para anúncio, bio, landing e WhatsApp",
      "Estrutura de oferta, prova social e objeção",
      "Testes de mensagem com leitura de conversão",
    ],
  },
  {
    slug: "trafego-pago",
    title: "Tráfego pago",
    audience: "Quem já investe em anúncio e não vê o caixa crescer — ou quem vai começar com método.",
    description:
      "Campanhas de Meta Ads e Google Ads montadas como sistema de aquisição: público certo, criativo de resposta direta, tracking e escala só quando o número fecha.",
    includes: [
      "Estratégia e estrutura de campanhas",
      "Criativo e copy de resposta direta",
      "Funil e pixel / conversões da API",
      "Otimização contínua por ROAS e lucro",
      "Relatório com leitura de caixa, não só de clique",
    ],
  },
  {
    slug: "conteudo",
    title: "Produção de conteúdo",
    audience: "Marcas locais que postam sem consistência ou sem uma voz que venda.",
    description:
      "Conteúdo deixa de ser 'postar todo dia' e vira ativo de posicionamento: o cliente te reconhece, confia e chega no comercial já aquecido.",
    includes: [
      "Identidade de conteúdo e tom de voz",
      "Calendário editorial por objetivo comercial",
      "Roteiros para Reels, stories e carrossel",
      "Integração com anúncio e WhatsApp",
      "Direção criativa alinhada ao branding",
    ],
  },
  {
    slug: "branding",
    title: "Branding empresarial",
    audience: "Negócios que competem por preço porque a marca ainda não ocupa um lugar na cabeça do cliente.",
    description:
      "Posicionamento, identidade visual e naming para o negócio local parecer — e ser — a escolha óbvia da região.",
    includes: [
      "Diagnóstico de percepção e concorrência local",
      "Posicionamento e território de marca",
      "Identidade visual e aplicações",
      "Naming e sistema verbal",
      "Guia de uso para equipe e fornecedores",
    ],
  },
  {
    slug: "automacao",
    title: "Automação e atendimento",
    audience: "Operações que perdem venda no follow-up, no atraso do WhatsApp ou na falta de CRM.",
    description:
      "WhatsApp, CRM e follow-up automatizado — a mesma lógica de despacho e operação que usamos em sistemas como o Vyria, aplicada ao comercial do negócio local.",
    includes: [
      "Fluxos de WhatsApp com qualificação",
      "CRM e pipeline comercial",
      "Follow-up automático de orçamento e carrinho",
      "Integração com anúncios e cardápio / catálogo",
      "Painel de pedidos e indicadores do mês",
    ],
  },
  {
    slug: "inteligencia-artificial",
    title: "Soluções de IA",
    audience: "Empresas que precisam atender mais sem inflar o time.",
    description:
      "Agentes de IA para atendimento, qualificação e venda assistida. A máquina faz a triagem; o time fecha o que importa.",
    includes: [
      "Agentes de atendimento no WhatsApp e no site",
      "Qualificação e priorização de leads",
      "Scripts treinados na oferta e no tom da marca",
      "Handoff humano com contexto",
      "Métricas de resposta, conversão e SLA",
    ],
  },
  {
    slug: "posicionamento",
    title: "Estratégias de posicionamento",
    audience: "Quem depende de indicação e ainda não ocupa um lugar claro no mercado local.",
    description:
      "Definimos categoria, promessa, prova e linguagem para o negócio ser lembrado — e escolhido — na hora da compra.",
    includes: [
      "Pesquisa de categoria e concorrentes locais",
      "Promessa única e território de comunicação",
      "Arquitetura de prova (números, cases, autoridade)",
      "Plano de ocupação de canais",
      "Alinhamento de oferta e preço percebido",
    ],
  },
  {
    slug: "vendas-online",
    title: "Vendas online",
    audience: "Lojas, delivery, infoproduto e marcas que precisam vender fora do balcão.",
    description:
      "Do catálogo ao checkout: funil, página, copy, pixel e operação para o pedido entrar todos os dias — não só quando 'o Instagram pega'.",
    includes: [
      "Estrutura de loja, landing ou cardápio digital",
      "Oferta, kit e ticket médio",
      "Checkout e recuperação de venda",
      "Tráfego e remarketing de compra",
      "Leitura de conversão, ticket e margem",
    ],
  },
  {
    slug: "sistemas-personalizados",
    title: "Sistemas personalizados",
    audience: "Operações que já cresceram no improviso e agora precisam de ferramenta própria.",
    description:
      "Apps, painéis e automações sob medida — da gestão de pedidos ao despacho. Tecnologia a serviço do faturamento, não o contrário.",
    includes: [
      "Diagnóstico do gargalo operacional",
      "Painéis de gestão e indicadores",
      "Apps web e fluxos internos",
      "Integração com WhatsApp, ads e pagamentos",
      "Operação replicável para o time",
    ],
  },
  {
    slug: "desenvolvimento-software",
    title: "Desenvolvimento de software",
    audience: "Empresas que precisam de web app, integração via API ou automação que o software de prateleira não cobre.",
    description:
      "Construímos o software em torno do comercial: painel, integração e fluxo interno que o time usa de verdade — sem stack de vaidade.",
    includes: [
      "Web apps e painéis sob medida",
      "Integrações via API (ads, WhatsApp, pagamento, ERP)",
      "Automações de operação e atendimento",
      "Arquitetura enxuta, documentação e handoff",
      "Evolução contínua com leitura de uso",
    ],
  },
] as const;

export const cases = [
  {
    slug: "focopill",
    client: "Focopill",
    segment: "Saúde",
    featured: true,
    challenge:
      "Marca de nootrópico com venda 100% online precisava de funil, copy e mídia que sustentassem compra — sem depender só de disparo de anúncio.",
    action:
      "Posicionamento da oferta, copy de neuromarketing, estrutura de kits, tráfego e leitura de conversão e ticket.",
    result:
      "E-commerce de suplemento com jornada de compra desenhada para decisão, não só para clique.",
  },
  {
    slug: "solaria-doceria",
    client: "Solaria Doceria",
    segment: "Alimentação",
    featured: true,
    challenge:
      "Doceria local competindo por impulso e encomenda. Precisava de percepção de marca e de um canal que transformasse interesse em pedido.",
    action:
      "Branding, conteúdo e jornada de pedido no digital — da vitrine à conversa comercial.",
    result:
      "Presença comercial contínua para um negócio de alimentação que vive de recorrência e data comemorativa.",
  },
  {
    slug: "briston-wear",
    client: "Briston Wear",
    segment: "Varejo",
    featured: true,
    challenge:
      "Marca goiana de moda casual unissex precisava ocupar o digital com identidade própria — não só produzir e vender no improviso.",
    action:
      "Posicionamento de marca, conteúdo e estrutura de vendas online para a linha casual.",
    result:
      "Território visual e comercial definido para crescer além da indicação.",
  },
  {
    slug: "vyria",
    client: "Vyria",
    segment: "Sistemas · Desenvolvimento",
    featured: true,
    challenge:
      "Operação que dependia de processo manual para lógica de despacho e acompanhamento.",
    action:
      "A Arcano construiu o painel e o sistema que hoje sustentam essa operação em produção.",
    result:
      "A Arcano construiu o painel e o sistema que hoje sustentam essa operação em produção.",
  },
  {
    slug: "vidas-em-movimento",
    client: "Vidas em Movimento",
    segment: "Saúde",
    featured: false,
    challenge:
      "Serviço de saúde e movimento precisava de comunicação que gerasse confiança e agenda — não só alcance.",
    action:
      "Neuromarketing na jornada de escolha (risco, prova, autoridade) e conteúdo contínuo.",
    result:
      "Posicionamento para um público local que decide por confiança, não por promoção.",
  },
  {
    slug: "rota-delas",
    client: "Rota Delas",
    segment: "Serviços",
    featured: false,
    challenge:
      "Marca de serviço com público específico precisava de território de comunicação e captação previsível.",
    action:
      "Estratégia de posicionamento, conteúdo e canais de aquisição alinhados ao público.",
    result:
      "Narrativa de marca e caminho comercial para um serviço que não pode parecer genérico.",
  },
  {
    slug: "rainha-marketing",
    client: "Rainha Marketing",
    segment: "Serviços",
    featured: false,
    challenge:
      "Operação de marketing que precisava de estrutura, marca e sistema — não só execução solta.",
    action:
      "Branding, posicionamento e apoio em sistemas e operação digital.",
    result:
      "Identidade e processo para uma empresa de serviço que vende confiança.",
  },
  {
    slug: "marcelo-antonio-imoveis",
    client: "Marcelo Antonio Imóveis",
    segment: "Imobiliário",
    featured: false,
    challenge:
      "Imobiliária local com ciclo longo de decisão. O lead esfria se a percepção e o follow-up falham.",
    action:
      "Posicionamento, captação com tráfego e nutrição no WhatsApp e no CRM.",
    result:
      "Caminho comercial para um mercado em que prova e consistência vencem o anúncio isolado.",
  },
] as const;

export const proofs = [
  {
    src: "/proofs/proof-whatsapp-saba.png",
    title: "WhatsApp — Saba",
    metric: "Megapiso + 20% · recorde de maio",
    detail:
      "Charbel Bibi: bateu o Megapiso na primeira quinzena, subiu a meta 20% e fechou o melhor mês do Saba — recorde em vendas, pedidos e ticket médio.",
  },
  {
    src: "/proofs/proof-painel-748k.png",
    title: "Painel de operação",
    metric: "R$ 748.372,61 · ROI 2,25",
    detail:
      "Faturamento líquido de R$ 748.372,61, lucro de R$ 416.160,58, margem 55,6% e ROI 2,25 — Meta Ads, bio e YouTube na mesma leitura.",
  },
  {
    src: "/proofs/proof-painel-232k.png",
    title: "Painel de operação",
    metric: "ROAS 2,81 · lucro R$ 149.656,48",
    detail:
      "Faturamento líquido de R$ 232.302,52, gasto de R$ 82.646,04 e lucro de R$ 149.656,48.",
  },
  {
    src: "/proofs/proof-meta-116k.png",
    title: "Meta Ads",
    metric: "R$ 116.726,99 em conversão",
    detail:
      "Gestor de anúncios com valor de conversão consolidado de R$ 116.726,99 no recorte da campanha.",
  },
  {
    src: "/proofs/proof-meta-44k.png",
    title: "Meta Ads",
    metric: "R$ 13.444,34 → R$ 44.547,42",
    detail:
      "R$ 13.444,34 usados e R$ 44.547,42 em valor de conversão — compras no site no mesmo recorte.",
  },
  {
    src: "/proofs/proof-painel-64k.png",
    title: "Operação de afiliados",
    metric: "ROAS 2,44 · lucro R$ 37.824,50",
    detail:
      "Faturamento líquido de R$ 64.008,43, gasto de R$ 26.183,93 e ROAS 2,44.",
  },
  {
    src: "/proofs/proof-tabela-roas.png",
    title: "Conjuntos de anúncio",
    metric: "ROAS até 308,96",
    detail:
      "Tabela do dia: CPA baixo, faturamento por conjunto na casa de R$ 850 e lucro em verde em cada linha.",
  },
  {
    src: "/proofs/proof-ecommerce-19k.png",
    title: "E-commerce",
    metric: "R$ 19.896,69 · 141 pedidos",
    detail:
      "R$ 19.896,69 em vendas e 141 pedidos no recorte de 12 a 17 de julho, com a curva subindo no gráfico.",
  },
  {
    src: "/proofs/proof-painel-nara.png",
    title: "Painel de pagamentos",
    metric: "R$ 33.208,40 no total",
    detail: "Total de R$ 33.208,40 e R$ 1.757,80 no dia, com pagamento automático marcado como pago.",
  },
  {
    src: "/proofs/proof-checkout-vendas.png",
    title: "Checkout — vendas",
    metric: "R$ 9.472,63 · 38 pedidos",
    detail:
      "Vendas de R$ 9.472,63 no dia, +14,63% na comparação, 38 pedidos realizados e ticket médio de R$ 249,28.",
  },
  {
    src: "/proofs/proof-checkout-receita.png",
    title: "Checkout — receita",
    metric: "R$ 7.008,33 · 28 pedidos pagos",
    detail:
      "Receita de R$ 7.008,33 com 28 pedidos pagos e taxa de pedidos cancelados de 26% no mesmo recorte.",
  },
  {
    src: "/proofs/proof-checkout-visao.png",
    title: "Checkout — visão geral",
    metric: "20,21% de conversão",
    detail:
      "38 pedidos criados em 188 acessos ao checkout, ticket de R$ 249,28 e R$ 9.472,63 em vendas no recorte de ontem.",
  },
] as const;

export const methodSteps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Olhamos o comercial de verdade: oferta, canal, atendimento, número e concorrência local. Sem slide genérico.",
  },
  {
    n: "02",
    title: "Estratégia",
    text: "Neuromarketing entra aqui: jornada de decisão, gatilhos, prova e mensagem. O plano nasce do cérebro do cliente, não do gosto do time.",
  },
  {
    n: "03",
    title: "Execução",
    text: "Tráfego, conteúdo, branding, IA e sistemas no mesmo rumo. Cada peça empurra a mesma venda.",
  },
  {
    n: "04",
    title: "Otimização",
    text: "Cortamos o que não paga. Escalamos o que o caixa confirma. Semanal, com critério.",
  },
  {
    n: "05",
    title: "Relatório",
    text: "Você vê venda, custo, margem e o que muda na semana seguinte. Relatório a serviço da decisão — não da vaidade.",
  },
] as const;

export const testimonials = [
  {
    author: "Charbel Bibi · Saba",
    source: "WhatsApp",
    quote:
      "Batemos o Megapiso na primeira quinzena, ajustei 20% para cima e finalizamos o mês com recorde em vendas, pedidos e ticket médio.",
    image: "/proofs/proof-whatsapp-saba.png",
  },
] as const;

export const posts = [
  {
    slug: "neuromarketing-negocio-local",
    title: "Neuromarketing para negócio local: o que muda na venda do mês",
    excerpt:
      "Gatilho mental não é frase de efeito. É desenhar a decisão do cliente da rua — do primeiro look no Instagram ao 'manda o pix'.",
    date: "2026-08-12",
    body: [
      "Negócio local perde venda em três lugares: na percepção ('não me lembro de vocês'), na prova ('será que é bom mesmo?') e no fechamento ('depois eu vejo'). Neuromarketing trata esses três pontos com método.",
      "O cérebro do cliente da região não compara você com uma multinacional. Compara com o concorrente do bairro, com o preço que viu no grupo da família e com o risco de se arrepender. Por isso a mensagem precisa reduzir incerteza: prova, autoridade local, oferta clara e um próximo passo óbvio.",
      "Na Arcano, isso vira copy, criativo, roteiro de WhatsApp e estrutura de página. O diferencial técnico não é 'usar gatilho'. É saber em que etapa da jornada aquele gatilho paga.",
    ],
  },
  {
    slug: "trafego-sem-posicionamento",
    title: "Tráfego pago sem posicionamento queima verba",
    excerpt:
      "Anúncio bom em marca fraca vira clique barato e conversa fria. Posicionamento é o que deixa o lead chegar quente.",
    date: "2026-07-28",
    body: [
      "Muita empresa local aumenta o orçamento de anúncio quando o mês aperta. O que costuma faltar não é verba — é um lugar claro na cabeça do cliente.",
      "Se a marca não diz para quem é, por que agora e por que você, o anúncio vira um convite genérico. O custo sobe, o WhatsApp enche de curiosos e o time culpa o tráfego.",
      "A ordem que usamos: posicionamento e oferta primeiro, mídia depois. Tráfego acelera o que já está decidido na percepção. Sem isso, você só compra ruído mais rápido.",
    ],
  },
  {
    slug: "whatsapp-canal-de-venda",
    title: "WhatsApp é canal de venda — não recado da secretária",
    excerpt:
      "O pedido morre no silêncio. Automação, IA e roteiro comercial transformam conversa em caixa.",
    date: "2026-07-09",
    body: [
      "No negócio local, a venda acontece no WhatsApp. Se a resposta demora, se o cardápio está desatualizado ou se ninguém faz follow-up, o anúncio mais caro do mundo não salva o mês.",
      "Tratamos atendimento como etapa do funil: qualificação, prova, oferta e fechamento. IA e automação entram para não deixar lead esfriar — e o humano entra quando a venda pede critério.",
      "Sistemas personalizados (do tipo que já operamos em painéis de pedido e despacho) existem para o time ver o que entrou, o que travou e o que precisa de ação hoje. Marketing sem operação é relatório.",
    ],
  },
] as const;

export const resultOps = [
  {
    slug: "ecommerce-volume",
    title: "Briston Wear",
    segment: "Varejo",
    challenge:
      "Venda online sem leitura clara de ticket, volume e criativo que realmente fecha.",
    action:
      "Funil de compra, copy de neuromarketing e mídia com tracking de conversão.",
    result: "703 vendas · R$ 154.580,99 de receita · ticket R$ 219,89",
    proof: "/proofs/proof-vendas.png",
  },
  {
    slug: "roas-lucro",
    title: "Focopill — mídia com lucro",
    segment: "Saúde",
    challenge:
      "Investimento em anúncio que gerava clique, mas a conta de margem não aparecia no relatório.",
    action:
      "Estrutura de campanha, oferta e otimização pelo lucro — não pela vaidade de impressão.",
    result: "ROAS 1,86 · lucro R$ 45.841,39 · margem 46,1% · 1.016 vendas",
    proof: "/proofs/proof-roas.png",
  },
  {
    slug: "alimentacao-mes",
    title: "Solaria Doceria",
    segment: "Alimentação",
    challenge:
      "Cardápio forte, operação no improviso: o item que mais saía não virava estratégia de mídia e de pedido.",
    action:
      "Sistema de pedidos, destaque dos mais vendidos e captação contínua no digital.",
    result: "R$ 33.030,50 no mês · 1.002 unidades do item líder",
    proof: "/proofs/proof-vyria.png",
  },
  {
    slug: "checkout-conversao",
    title: "Focopill — checkout",
    segment: "Saúde",
    challenge:
      "Tráfego chegava e o pedido morria no funil de dados, entrega e pagamento.",
    action:
      "Leitura de funil, copy e UX de checkout com neuromarketing na objeção de cada etapa.",
    result: "20,21% de conversão · R$ 9.472,63 no dia · ticket R$ 249,28",
    proof: "/proofs/proof-conversao.png",
  },
  {
    slug: "whatsapp-recorde",
    title: "Rainha Marketing",
    segment: "Serviços",
    challenge:
      "Meta do mês travada. Time comercial sem previsibilidade e sem leitura de piso.",
    action:
      "Oferta, follow-up e pressão positiva de meta com operação acompanhada de perto.",
    result: "Megapiso na 1ª quinzena · meta +20% · recorde de vendas, pedidos e TM",
    proof: "/proofs/proof-whatsapp-recorde.png",
  },
  {
    slug: "whatsapp-site",
    title: "Marcelo Antonio Imóveis",
    segment: "Imobiliário",
    challenge:
      "Conversas demais, fechamento de menos. Site e WhatsApp desconectados.",
    action:
      "Roteiro, tráfego e leitura unificada de conversão entre conversa e site.",
    result: "256 conversas · 183 conversões · R$ 53 mil no consolidado do mês",
    proof: "/proofs/proof-whatsapp-feedback.png",
  },
] as const;

export const cityTriggers = [
  {
    city: "Goiânia",
    href: "/goiania",
    kicker: "Número frio",
    title: "ROAS, custo por lead, margem — sem pacote inflado.",
    text: "Quem já contratou agência e viu só relatório de clique decide por especificidade. Diagnóstico primeiro. Orçamento depois.",
  },
  {
    city: "Caldas Novas",
    href: "/caldas-novas",
    kicker: "Temporada",
    title: "Vender na alta sem perder pedido. Não morrer na baixa.",
    text: "Pico de turista trava WhatsApp. Automação e sistema são o argumento — atendimento que aguenta feriado lotado.",
  },
  {
    city: "Brasília",
    href: "/brasilia",
    kicker: "Autoridade",
    title: "Portfólio, método e relação longa. Sem linguagem de promoção.",
    text: "Público que pesquisa antes e escolhe qualidade. Tom direto, formal o suficiente — urgência de desconto fica de fora.",
  },
] as const;

export const segments = [
  "Todos",
  "Alimentação",
  "Saúde",
  "Varejo",
  "Serviços",
  "Imobiliário",
  "Sistemas",
] as const;
