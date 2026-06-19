export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  readingTime: number;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "como-economizar-na-passagem-de-onibus",
    title: "Como economizar na passagem de ônibus: 10 dicas práticas",
    description:
      "Descubra estratégias para pagar menos em passagens de ônibus no Brasil, desde antecedência na compra até escolha de horários.",
    excerpt:
      "Comprar passagem de ônibus com antecedência, viajar em dias de semana e comparar preços entre plataformas pode reduzir o custo em até 40%.",
    datePublished: "2025-03-15",
    dateModified: "2025-06-01",
    category: "Economia",
    readingTime: 6,
    content: [
      "A passagem de ônibus é uma das formas mais econômicas de viajar pelo Brasil, mas os preços variam bastante dependendo de quando e como você compra. Com algumas estratégias simples, é possível economizar significativamente.",
      "A primeira dica é comprar com antecedência. Em geral, comprar entre 7 e 21 dias antes da viagem oferece os melhores preços. Passagens compradas no dia da viagem podem custar até 50% mais.",
      "Viajar em dias de semana (terça, quarta e quinta) costuma ser mais barato que em fins de semana e feriados. Empresas ajustam preços conforme a demanda, e dias de menor movimento têm tarifas reduzidas.",
      "Compare preços em diferentes plataformas. ClickBus, Buscapé e sites das empresas podem ter preços diferentes para a mesma viagem. Vale dedicar alguns minutos para comparar.",
      "Considere viagens noturnas. Além de economizar uma diária de hotel, passagens noturnas frequentemente têm preços menores. O ônibus leito oferece conforto para dormir durante a viagem.",
      "Fique atento a promoções sazonais. Black Friday, aniversário de empresas e campanhas de fim de ano podem oferecer descontos de 20% a 40%.",
      "Programas de fidelidade de algumas empresas e plataformas acumulam pontos que podem ser convertidos em descontos em viagens futuras.",
      "Evite temporadas de alta demanda quando possível: feriados prolongados, férias escolares de julho e dezembro, e eventos como Carnaval e Réveillon.",
      "Opte por poltronas convencionais em vez de executivo ou leito quando o conforto extra não é essencial. A diferença de preço pode ser de 30% a 60%.",
      "Use o comparador de preços do Valor da Passagem para verificar o preço médio da rota antes de comprar, e identificar se o preço oferecido está acima ou abaixo do normal.",
    ],
  },
  {
    slug: "diferenca-entre-convencional-executivo-e-leito",
    title: "Convencional, executivo ou leito: qual a diferença?",
    description:
      "Entenda as diferenças entre os tipos de serviço em passagens de ônibus: convencional, executivo, semi-leito e leito.",
    excerpt:
      "Cada classe de serviço oferece diferentes níveis de conforto e preço. Saiba qual escolher para sua viagem.",
    datePublished: "2025-04-02",
    category: "Guia",
    readingTime: 5,
    content: [
      "Ao comprar uma passagem de ônibus, você encontrará diferentes classes de serviço. Entender as diferenças ajuda a escolher a opção ideal para sua viagem e orçamento.",
      "O serviço convencional é o mais básico e econômico. As poltronas têm reclinação limitada (cerca de 120°), espaço padrão entre assentos e ar-condicionado. Ideal para viagens curtas (até 4 horas).",
      "O executivo oferece poltronas com maior reclinação (cerca de 140°), mais espaço entre assentos, apoio para pernas e, em muitos casos, tomadas USB e Wi-Fi. Bom para viagens de 4 a 8 horas.",
      "O semi-leito tem poltronas que reclinam bastante (cerca de 160°), com apoio para pernas e mais espaço. É uma opção intermediária entre executivo e leito, ideal para viagens de 6 a 10 horas.",
      "O leito oferece a máxima reclinação (cerca de 180°), permitindo deitar quase completamente. Inclui apoio para pernas, travesseiro e, em alguns casos, lanche. Recomendado para viagens longas (mais de 8 horas).",
      "A diferença de preço entre convencional e leito pode ser de 50% a 100%. Para viagens curtas, o convencional geralmente é suficiente. Para viagens noturnas longas, o leito vale o investimento.",
      "Não todas as empresas oferecem todas as classes em todas as rotas. Verifique as opções disponíveis na plataforma de compra antes de decidir.",
    ],
  },
  {
    slug: "documentos-necessarios-viagem-onibus",
    title: "Documentos necessários para viajar de ônibus no Brasil",
    description:
      "Lista completa de documentos aceitos para embarque em viagens de ônibus interestaduais no Brasil, incluindo menores de idade.",
    excerpt:
      "Saiba quais documentos são aceitos para embarcar em ônibus interestaduais e o que é necessário para menores de idade.",
    datePublished: "2025-04-20",
    category: "Guia",
    readingTime: 4,
    content: [
      "Para viajar de ônibus em rotas interestaduais no Brasil, é obrigatório apresentar documento de identificação com foto no embarque. Sem documento, o passageiro não pode embarcar.",
      "Documentos aceitos para adultos: RG (cédula de identidade), CNH (Carteira Nacional de Habilitação), passaporte, carteira de trabalho (versão física com foto) e certificado de reservista.",
      "Para menores de idade viajando com os pais: apresentar RG ou certidão de nascimento do menor, junto com documento dos pais.",
      "Menores viajando sem os pais precisam de autorização judicial ou documento de autorização assinado pelos pais com firma reconhecida, além do documento do menor.",
      "A compra online geralmente exige o número do documento do passageiro. O documento apresentado no embarque deve ser o mesmo cadastrado na compra.",
      "Imprimir ou salvar o bilhete eletrônico (e-ticket) no celular é recomendado, embora muitas empresas aceitem apenas o número do bilhete e o documento.",
      "Para viagens internacionais (ex: Brasil-Argentina), o passaporte é obrigatório, junto com documentos exigidos pelo país de destino.",
    ],
  },
  {
    slug: "melhores-terminais-rodoviarios-brasil",
    title: "Os melhores terminais rodoviários do Brasil",
    description:
      "Conheça os principais terminais rodoviários do Brasil: localização, infraestrutura e como chegar em cada um.",
    excerpt:
      "Terminais como Tietê (SP), Novo Rio (RJ) e Rodoviária de BH são hubs essenciais para viagens de ônibus no Brasil.",
    datePublished: "2025-05-10",
    category: "Destinos",
    readingTime: 7,
    content: [
      "Os terminais rodoviários são o ponto de partida e chegada de milhões de viagens de ônibus no Brasil. Conhecer a infraestrutura e localização dos principais terminais facilita sua viagem.",
      "Terminal Rodoviário Tietê (São Paulo): o maior e mais movimentado do Brasil, com mais de 60 mil passageiros diários. Localizado na zona norte, acesso fácil pelo metrô (Estação Portuguesa-Tietê, linha azul).",
      "Terminal Rodoviário Novo Rio (Rio de Janeiro): principal terminal do RJ, na zona norte, com acesso pelo metrô (Estação São Cristóvão). Oferece serviços de lanchonetes, farmácia e Wi-Fi.",
      "Terminal Rodoviário de Belo Horizonte: localizado no centro da cidade, com fácil acesso ao metrô e transporte público. Terminal moderno com boa infraestrutura.",
      "Terminal Rodoviário de Curitiba: na região central, próximo ao Shopping Estação. Bem organizado e com boa variedade de serviços.",
      "Terminal Rodoviário de Brasília: no Setor de Diversões, com acesso por transporte público. Terminal amplo com muitas opções de empresas.",
      "Dicas gerais: chegue com pelo menos 30 minutos de antecedência para embarque. Verifique o guichê e plataforma no bilhete. Terminais grandes têm mapas e totens de informação.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export const postCategories = [
  "Economia",
  "Guia",
  "Destinos",
] as const;
