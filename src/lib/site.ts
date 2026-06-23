export const SITE = {
  name: "Valor da Passagem",
  domain: "valordapassagem.com.br",
  url: "https://valordapassagem.com.br",
  description:
    "Consulte preços médios, empresas, tempo de viagem e dicas para passagens de ônibus no Brasil. Compare e compre nas melhores plataformas parceiras.",
  locale: "pt_BR",
  language: "pt-BR",
  email: "vdp@odpdigital.com.br",
  colors: {
    primary: "#2563eb",
    primaryDark: "#1e3a8a",
    light: "#f8fafc",
    white: "#ffffff",
  },
} as const;

export const RECOMMENDED_PARTNERS = [
  {
    name: "ClickBus",
    slug: "clickbus",
    description: "A maior plataforma de passagens de ônibus do Brasil.",
    url: "https://www.clickbus.com.br",
    highlight: true,
  },
  {
    name: "FlixBus",
    slug: "flixbus",
    description: "Viagens confortáveis com Wi-Fi e tomadas em diversas rotas.",
    url: "https://www.flixbus.com.br",
    highlight: false,
  },
  {
    name: "Quero Passagem",
    slug: "quero-passagem",
    description: "Compare e compre passagens de ônibus com facilidade.",
    url: "https://www.queropassagem.com.br",
    highlight: false,
  },
  {
    name: "Wemobi",
    slug: "wemobi",
    description: "Passagens de ônibus com opções de parcelamento.",
    url: "https://www.wemobi.me",
    highlight: false,
  },
] as const;

export const AFFILIATE_PARTNERS = RECOMMENDED_PARTNERS;
