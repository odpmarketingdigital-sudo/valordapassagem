import { SITE } from "./site";

export type JsonLdObject = Record<string, unknown>;

export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    email: SITE.email,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/passagens?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE.url}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
      },
    },
    inLanguage: SITE.language,
    mainEntityOfPage: `${SITE.url}${path}`,
  };
}

export function busTripJsonLd({
  origin,
  destination,
  price,
  duration,
  companies,
  path,
  lowPrice,
  highPrice,
}: {
  origin: string;
  destination: string;
  price: number;
  duration: string;
  companies: string[];
  path: string;
  lowPrice?: number;
  highPrice?: number;
}): JsonLdObject {
  const min = lowPrice ?? price;
  const max = highPrice ?? Math.round(price * 1.4);

  return {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: `Passagem de ônibus de ${origin} para ${destination}`,
    description: `Preço médio de R$ ${price} para passagem de ônibus de ${origin} para ${destination}. Duração aproximada: ${duration}.`,
    url: `${SITE.url}${path}`,
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@type": "City", name: origin },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@type": "City", name: destination },
        },
      ],
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: min,
      highPrice: max,
      offerCount: companies.length,
      availability: "https://schema.org/InStock",
    },
  };
}

export function routePriceJsonLd({
  origem,
  destino,
  precoMin,
  precoMax,
  precoMedio,
  empresas,
  path,
}: {
  origem: string;
  destino: string;
  precoMin: number;
  precoMax: number;
  precoMedio: number;
  empresas: string[];
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Passagem de ônibus de ${origem} para ${destino}`,
    description: `Passagem de ônibus de ${origem} para ${destino}. Preços de R$ ${precoMin} a R$ ${precoMax}, média de R$ ${precoMedio}.`,
    url: `${SITE.url}${path}`,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: precoMin,
      highPrice: precoMax,
      price: precoMedio,
      offerCount: empresas.length,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}${path}`,
      seller: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      offers: empresas.map((empresa) => ({
        "@type": "Offer",
        name: `Passagem ${empresa} — ${origem} para ${destino}`,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: empresa,
        },
      })),
    },
  };
}

export function faqJsonLd(
  questions: Array<{ question: string; answer: string }>
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
