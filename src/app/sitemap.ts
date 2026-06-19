import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { companies } from "@/data/companies";
import { posts } from "@/data/posts";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/passagens`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/empresas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/contato`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/termos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const routePages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE.url}/rotas/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const companyPages: MetadataRoute.Sitemap = companies.map((company) => ({
    url: `${SITE.url}/empresas/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...routePages, ...companyPages, ...postPages];
}
