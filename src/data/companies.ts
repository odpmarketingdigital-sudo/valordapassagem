export type Company = {
  slug: string;
  name: string;
  description: string;
  founded?: number;
  headquarters: string;
  website?: string;
  regions: string[];
  features: string[];
};

export const companies: Company[] = [
  {
    slug: "cometa",
    name: "Cometa",
    description:
      "Uma das maiores empresas de transporte rodoviário do Brasil, com frota moderna e rotas que cobrem o Sudeste e outras regiões.",
    founded: 1949,
    headquarters: "Campinas, SP",
    website: "https://www.viacaocometa.com.br",
    regions: ["Sudeste", "Centro-Oeste"],
    features: ["Wi-Fi", "Ar-condicionado", "Poltronas reclináveis", "Banheiro"],
  },
  {
    slug: "gontijo",
    name: "Gontijo",
    description:
      "Tradicional empresa mineira com uma das maiores malhas rodoviárias do país, conectando capitais e cidades do interior.",
    founded: 1943,
    headquarters: "Belo Horizonte, MG",
    website: "https://www.gontijo.com.br",
    regions: ["Sudeste", "Nordeste", "Centro-Oeste"],
    features: ["Ar-condicionado", "Poltronas reclináveis", "Banheiro", "Tomadas USB"],
  },
  {
    slug: "aguia-branca",
    name: "Águia Branca",
    description:
      "Empresa com forte presença no Espírito Santo e rotas que ligam o Sudeste ao Nordeste, com serviço executivo e leito.",
    founded: 1952,
    headquarters: "Vitória, ES",
    website: "https://www.aguiabranca.com.br",
    regions: ["Sudeste", "Nordeste"],
    features: ["Wi-Fi", "Ar-condicionado", "Leito", "Semi-leito", "Banheiro"],
  },
  {
    slug: "catarinense",
    name: "Catarinense",
    description:
      "Viação catarinense com rotas no Sul e Sudeste, oferecendo conforto e pontualidade em viagens regionais e interestaduais.",
    founded: 1947,
    headquarters: "Florianópolis, SC",
    website: "https://www.catarinense.com.br",
    regions: ["Sul", "Sudeste"],
    features: ["Ar-condicionado", "Poltronas reclináveis", "Banheiro"],
  },
  {
    slug: "kaissara",
    name: "Kaissara",
    description:
      "Empresa paulista com rotas no Sudeste, conhecida por preços competitivos e boa frequência de viagens.",
    headquarters: "São Paulo, SP",
    regions: ["Sudeste"],
    features: ["Ar-condicionado", "Banheiro", "Poltronas reclináveis"],
  },
  {
    slug: "expresso-do-sul",
    name: "Expresso do Sul",
    description:
      "Viação com rotas no Sul do Brasil, conectando capitais e cidades do interior com conforto e segurança.",
    headquarters: "Porto Alegre, RS",
    regions: ["Sul"],
    features: ["Ar-condicionado", "Banheiro", "Poltronas reclináveis"],
  },
  {
    slug: "penha",
    name: "Penha",
    description:
      "Tradicional empresa com rotas no Sudeste e Sul, oferecendo desde linhas econômicas até serviços executivos.",
    headquarters: "São Paulo, SP",
    regions: ["Sudeste", "Sul"],
    features: ["Ar-condicionado", "Wi-Fi", "Leito", "Banheiro"],
  },
  {
    slug: "viacao-brasil",
    name: "Viação Brasil",
    description:
      "Empresa com rotas no Nordeste, conectando capitais e cidades do interior com preços acessíveis.",
    headquarters: "Salvador, BA",
    regions: ["Nordeste"],
    features: ["Ar-condicionado", "Banheiro"],
  },
  {
    slug: "andorinha",
    name: "Andorinha",
    description:
      "Viação Andorinha com rotas entre o Nordeste e o Sudeste, oferecendo serviços convencionais, executivos e leito em viagens interestaduais.",
    founded: 1988,
    headquarters: "Fortaleza, CE",
    website: "https://www.andorinha.com",
    regions: ["Nordeste", "Sudeste"],
    features: ["Ar-condicionado", "Wi-Fi", "Leito", "Semi-leito", "Banheiro", "Tomadas USB"],
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}

export function getCompaniesByRegion(region: string): Company[] {
  return companies.filter((c) => c.regions.includes(region));
}
