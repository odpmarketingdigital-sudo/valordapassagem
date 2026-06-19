export type City = {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  region: string;
};

export const cities: City[] = [
  { slug: "sao-paulo", name: "São Paulo", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "rio-de-janeiro", name: "Rio de Janeiro", state: "Rio de Janeiro", stateCode: "RJ", region: "Sudeste" },
  { slug: "belo-horizonte", name: "Belo Horizonte", state: "Minas Gerais", stateCode: "MG", region: "Sudeste" },
  { slug: "curitiba", name: "Curitiba", state: "Paraná", stateCode: "PR", region: "Sul" },
  { slug: "brasilia", name: "Brasília", state: "Distrito Federal", stateCode: "DF", region: "Centro-Oeste" },
  { slug: "salvador", name: "Salvador", state: "Bahia", stateCode: "BA", region: "Nordeste" },
  { slug: "fortaleza", name: "Fortaleza", state: "Ceará", stateCode: "CE", region: "Nordeste" },
  { slug: "recife", name: "Recife", state: "Pernambuco", stateCode: "PE", region: "Nordeste" },
  { slug: "porto-alegre", name: "Porto Alegre", state: "Rio Grande do Sul", stateCode: "RS", region: "Sul" },
  { slug: "florianopolis", name: "Florianópolis", state: "Santa Catarina", stateCode: "SC", region: "Sul" },
  { slug: "goiania", name: "Goiânia", state: "Goiás", stateCode: "GO", region: "Centro-Oeste" },
  { slug: "campinas", name: "Campinas", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "manaus", name: "Manaus", state: "Amazonas", stateCode: "AM", region: "Norte" },
  { slug: "belem", name: "Belém", state: "Pará", stateCode: "PA", region: "Norte" },
  { slug: "vitoria", name: "Vitória", state: "Espírito Santo", stateCode: "ES", region: "Sudeste" },
  { slug: "natal", name: "Natal", state: "Rio Grande do Norte", stateCode: "RN", region: "Nordeste" },
  { slug: "joao-pessoa", name: "João Pessoa", state: "Paraíba", stateCode: "PB", region: "Nordeste" },
  { slug: "maceio", name: "Maceió", state: "Alagoas", stateCode: "AL", region: "Nordeste" },
  { slug: "cuiaba", name: "Cuiabá", state: "Mato Grosso", stateCode: "MT", region: "Centro-Oeste" },
  { slug: "londrina", name: "Londrina", state: "Paraná", stateCode: "PR", region: "Sul" },
  { slug: "sao-jose-do-rio-preto", name: "São José do Rio Preto", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "araraquara", name: "Araraquara", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "aracatuba", name: "Araçatuba", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "ribeirao-preto", name: "Ribeirão Preto", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "sorocaba", name: "Sorocaba", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "marilia", name: "Marília", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "piracicaba", name: "Piracicaba", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
  { slug: "presidente-prudente", name: "Presidente Prudente", state: "São Paulo", stateCode: "SP", region: "Sudeste" },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: string): City[] {
  return cities.filter((c) => c.region === region);
}

export const regions = [
  "Norte",
  "Nordeste",
  "Centro-Oeste",
  "Sudeste",
  "Sul",
] as const;
