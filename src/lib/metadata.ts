import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const image = ogImage ?? `${SITE.url}/og-default.png`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "passagem de ônibus",
      "passagem ônibus",
      "preço passagem ônibus",
      "valor passagem",
      ...keywords,
    ],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
