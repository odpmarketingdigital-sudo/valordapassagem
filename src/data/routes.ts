export type RouteFaq = {
  q: string;
  a: string;
};

export type Route = {
  slug: string;
  origem: string;
  destino: string;
  precoMin: number;
  precoMax: number;
  duracao: string;
  distancia: number;
  empresas: string[];
  faq: RouteFaq[];
};

export const routes: Route[] = [
  {
    slug: "sao-paulo-para-rio-de-janeiro",
    origem: "São Paulo",
    destino: "Rio de Janeiro",
    precoMin: 76,
    precoMax: 330,
    duracao: "6h a 7h30",
    distancia: 429,
    empresas: ["Cometa", "Gontijo", "Kaissara", "Penha"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de São Paulo para o Rio de Janeiro?",
        a: "O preço da passagem de ônibus de São Paulo para o Rio de Janeiro varia de R$ 89 a R$ 180, dependendo da empresa, horário e antecedência da compra.",
      },
      {
        q: "Quanto tempo dura a viagem de ônibus de São Paulo para o Rio de Janeiro?",
        a: "A viagem de ônibus de São Paulo para o Rio de Janeiro dura aproximadamente 6h a 7h30, cobrindo cerca de 429 km pela Rodovia Presidente Dutra.",
      },
      {
        q: "Quais empresas operam de São Paulo para o Rio de Janeiro?",
        a: "As principais empresas que operam nesta rota são Cometa, Gontijo, Kaissara e Penha, com mais de 50 viagens diárias.",
      },
      {
        q: "Onde embarcar em São Paulo para ir ao Rio de Janeiro?",
        a: "O principal ponto de embarque é o Terminal Rodoviário Tietê, com acesso pelo metrô (Estação Portuguesa-Tietê, linha azul).",
      },
    ],
  },
  {
    slug: "sao-paulo-para-curitiba",
    origem: "São Paulo",
    destino: "Curitiba",
    precoMin: 63,
    precoMax: 194,
    duracao: "6h a 7h",
    distancia: 408,
    empresas: ["Cometa", "Catarinense", "Penha"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de São Paulo para Curitiba?",
        a: "O preço da passagem de ônibus de São Paulo para Curitiba varia de R$ 79 a R$ 170, com opções convencionais e executivas.",
      },
      {
        q: "Quanto tempo dura a viagem de ônibus de São Paulo para Curitiba?",
        a: "A viagem dura aproximadamente 6h a 7h, percorrendo cerca de 408 km pela Rodovia Régis Bittencourt.",
      },
      {
        q: "Quais empresas operam de São Paulo para Curitiba?",
        a: "Cometa, Catarinense e Penha são as principais empresas nesta rota, com mais de 25 viagens diárias.",
      },
    ],
  },
  {
    slug: "sao-paulo-para-belo-horizonte",
    origem: "São Paulo",
    destino: "Belo Horizonte",
    precoMin: 130,
    precoMax: 330,
    duracao: "8h a 9h",
    distancia: 586,
    empresas: ["Cometa", "Gontijo", "Kaissara"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de São Paulo para Belo Horizonte?",
        a: "O preço da passagem de ônibus de São Paulo para Belo Horizonte varia de R$ 69 a R$ 150.",
      },
      {
        q: "Quanto tempo dura a viagem de ônibus de São Paulo para Belo Horizonte?",
        a: "A viagem dura aproximadamente 8h a 9h, cobrindo 586 km pela Rodovia Fernão Dias.",
      },
      {
        q: "Quais empresas operam de São Paulo para Belo Horizonte?",
        a: "Cometa, Gontijo e Kaissara operam nesta rota com mais de 30 viagens diárias.",
      },
    ],
  },
  {
    slug: "rio-de-janeiro-para-belo-horizonte",
    origem: "Rio de Janeiro",
    destino: "Belo Horizonte",
    precoMin: 130,
    precoMax: 325,
    duracao: "7h a 8h30",
    distancia: 442,
    empresas: ["Águia Branca", "Gontijo"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus do Rio de Janeiro para Belo Horizonte?",
        a: "O preço varia de R$ 99 a R$ 200, com opções convencionais, executivas e leito.",
      },
      {
        q: "Quanto tempo dura a viagem de ônibus do Rio de Janeiro para Belo Horizonte?",
        a: "A viagem dura aproximadamente 7h a 8h30, passando por Juiz de Fora e cobrindo 442 km.",
      },
      {
        q: "Quais empresas operam do Rio de Janeiro para Belo Horizonte?",
        a: "Águia Branca e Gontijo são as principais empresas, com serviço leito disponível na Águia Branca.",
      },
    ],
  },
  {
    slug: "brasilia-para-goiania",
    origem: "Brasília",
    destino: "Goiânia",
    precoMin: 43,
    precoMax: 180,
    duracao: "3h a 4h",
    distancia: 209,
    empresas: ["Gontijo", "Cometa"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Brasília para Goiânia?",
        a: "O preço da passagem de ônibus de Brasília para Goiânia varia de R$ 45 a R$ 110.",
      },
      {
        q: "Quanto tempo dura a viagem de ônibus de Brasília para Goiânia?",
        a: "A viagem é curta, com duração de 3h a 4h e distância de 209 km.",
      },
      {
        q: "Quais empresas operam de Brasília para Goiânia?",
        a: "Gontijo e Cometa operam nesta rota com mais de 20 viagens diárias.",
      },
    ],
  },
  {
    slug: "sao-jose-do-rio-preto-para-sao-paulo",
    origem: "São José do Rio Preto",
    destino: "São Paulo",
    precoMin: 135,
    precoMax: 370,
    duracao: "5h a 6h",
    distancia: 448,
    empresas: ["Cometa", "Kaissara", "Expresso Adamantina"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de São José do Rio Preto para São Paulo?",
        a: "O preço varia de R$ 80 a R$ 140, dependendo da empresa e do tipo de serviço.",
      },
      {
        q: "Quanto tempo dura a viagem de São José do Rio Preto para São Paulo?",
        a: "A viagem dura aproximadamente 5h a 6h, percorrendo 448 km pela Rodovia Washington Luís.",
      },
      {
        q: "Quais empresas operam de São José do Rio Preto para São Paulo?",
        a: "Cometa, Kaissara e Expresso Adamantina são as principais empresas nesta rota do interior paulista.",
      },
    ],
  },
  {
    slug: "araraquara-para-sao-paulo",
    origem: "Araraquara",
    destino: "São Paulo",
    precoMin: 90,
    precoMax: 110,
    duracao: "4h a 5h",
    distancia: 312,
    empresas: ["Cometa", "Kaissara", "Garcia"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Araraquara para São Paulo?",
        a: "O preço da passagem de ônibus de Araraquara para São Paulo varia de R$ 60 a R$ 110.",
      },
      {
        q: "Quanto tempo dura a viagem de Araraquara para São Paulo?",
        a: "A viagem dura aproximadamente 4h a 5h, cobrindo 312 km.",
      },
      {
        q: "Quais empresas operam de Araraquara para São Paulo?",
        a: "Cometa, Kaissara e Garcia operam nesta rota com várias viagens diárias.",
      },
    ],
  },
  {
    slug: "aracatuba-para-sao-paulo",
    origem: "Araçatuba",
    destino: "São Paulo",
    precoMin: 190,
    precoMax: 440,
    duracao: "7h a 9h",
    distancia: 523,
    empresas: ["Cometa", "Kaissara", "Expresso Adamantina"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Araçatuba para São Paulo?",
        a: "O preço varia de R$ 90 a R$ 150 para a passagem de ônibus de Araçatuba para São Paulo.",
      },
      {
        q: "Quanto tempo dura a viagem de Araçatuba para São Paulo?",
        a: "A viagem dura aproximadamente 6h a 7h, percorrendo 523 km pelo interior paulista.",
      },
      {
        q: "Quais empresas operam de Araçatuba para São Paulo?",
        a: "Cometa, Kaissara e Expresso Adamantina são as principais empresas nesta rota.",
      },
    ],
  },
  {
    slug: "ribeirao-preto-para-sao-paulo",
    origem: "Ribeirão Preto",
    destino: "São Paulo",
    precoMin: 133,
    precoMax: 195,
    duracao: "4h a 5h",
    distancia: 314,
    empresas: ["Cometa", "Kaissara", "Garcia"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Ribeirão Preto para São Paulo?",
        a: "O preço da passagem de ônibus de Ribeirão Preto para São Paulo varia de R$ 55 a R$ 100.",
      },
      {
        q: "Quanto tempo dura a viagem de Ribeirão Preto para São Paulo?",
        a: "A viagem dura aproximadamente 4h a 5h, cobrindo 314 km pela Anhanguera ou Washington Luís.",
      },
      {
        q: "Quais empresas operam de Ribeirão Preto para São Paulo?",
        a: "Cometa, Kaissara e Garcia operam com alta frequência nesta rota popular do interior.",
      },
    ],
  },
  {
    slug: "sorocaba-para-sao-paulo",
    origem: "Sorocaba",
    destino: "São Paulo",
    precoMin: 45,
    precoMax: 65,
    duracao: "1h30 a 2h",
    distancia: 87,
    empresas: ["Cometa", "Kaissara"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Sorocaba para São Paulo?",
        a: "O preço varia de R$ 35 a R$ 65 — uma das rotas mais baratas do interior para São Paulo.",
      },
      {
        q: "Quanto tempo dura a viagem de Sorocaba para São Paulo?",
        a: "A viagem é rápida, com duração de 1h30 a 2h e distância de apenas 87 km.",
      },
      {
        q: "Quais empresas operam de Sorocaba para São Paulo?",
        a: "Cometa e Kaissara operam com mais de 40 viagens diárias nesta rota.",
      },
    ],
  },
  {
    slug: "marilia-para-sao-paulo",
    origem: "Marília",
    destino: "São Paulo",
    precoMin: 205,
    precoMax: 385,
    duracao: "5h a 6h",
    distancia: 428,
    empresas: ["Cometa", "Kaissara", "Garcia"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Marília para São Paulo?",
        a: "O preço da passagem de ônibus de Marília para São Paulo varia de R$ 75 a R$ 130.",
      },
      {
        q: "Quanto tempo dura a viagem de Marília para São Paulo?",
        a: "A viagem dura aproximadamente 5h a 6h, percorrendo 428 km.",
      },
      {
        q: "Quais empresas operam de Marília para São Paulo?",
        a: "Cometa, Kaissara e Garcia são as principais empresas nesta rota.",
      },
    ],
  },
  {
    slug: "piracicaba-para-sao-paulo",
    origem: "Piracicaba",
    destino: "São Paulo",
    precoMin: 90,
    precoMax: 105,
    duracao: "2h a 3h",
    distancia: 164,
    empresas: ["Cometa", "Kaissara"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Piracicaba para São Paulo?",
        a: "O preço varia de R$ 40 a R$ 75 para a passagem de ônibus de Piracicaba para São Paulo.",
      },
      {
        q: "Quanto tempo dura a viagem de Piracicaba para São Paulo?",
        a: "A viagem dura aproximadamente 2h a 3h, cobrindo 164 km.",
      },
      {
        q: "Quais empresas operam de Piracicaba para São Paulo?",
        a: "Cometa e Kaissara operam com alta frequência nesta rota.",
      },
    ],
  },
  {
    slug: "presidente-prudente-para-sao-paulo",
    origem: "Presidente Prudente",
    destino: "São Paulo",
    precoMin: 205,
    precoMax: 520,
    duracao: "6h a 7h",
    distancia: 558,
    empresas: ["Cometa", "Expresso Adamantina", "Kaissara"],
    faq: [
      {
        q: "Qual o preço da passagem de ônibus de Presidente Prudente para São Paulo?",
        a: "O preço varia de R$ 95 a R$ 160 para a passagem de ônibus de Presidente Prudente para São Paulo.",
      },
      {
        q: "Quanto tempo dura a viagem de Presidente Prudente para São Paulo?",
        a: "A viagem dura aproximadamente 6h a 7h, percorrendo 558 km pelo oeste paulista.",
      },
      {
        q: "Quais empresas operam de Presidente Prudente para São Paulo?",
        a: "Cometa, Expresso Adamantina e Kaissara são as principais empresas nesta rota.",
      },
    ],
  },
];

const POPULAR_SLUGS = new Set([
  "sao-paulo-para-rio-de-janeiro",
  "sao-paulo-para-curitiba",
  "sao-paulo-para-belo-horizonte",
  "rio-de-janeiro-para-belo-horizonte",
  "brasilia-para-goiania",
]);

export function getAveragePrice(route: Route): number {
  return Math.round((route.precoMin + route.precoMax) / 2);
}

export function isPopularRoute(route: Route): boolean {
  return POPULAR_SLUGS.has(route.slug);
}

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}

export function getPopularRoutes(): Route[] {
  return routes.filter((r) => POPULAR_SLUGS.has(r.slug));
}

export function getRoutesByOrigin(origem: string): Route[] {
  return routes.filter((r) => r.origem === origem);
}

export function getRoutesByDestino(destino: string): Route[] {
  return routes.filter((r) => r.destino === destino);
}

export function getRelatedRoutes(route: Route, limit = 4): Route[] {
  return routes
    .filter(
      (r) =>
        r.slug !== route.slug &&
        (r.origem === route.origem ||
          r.destino === route.destino ||
          r.origem === route.destino ||
          r.destino === route.origem)
    )
    .slice(0, limit);
}
