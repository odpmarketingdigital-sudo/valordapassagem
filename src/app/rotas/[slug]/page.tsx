import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Route as RouteIcon,
  Tag,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdBanner } from "@/components/AdBanner";
import { RouteCard } from "@/components/routes/RouteCard";
import { RouteFaq } from "@/components/rotas/RouteFaq";
import { RECOMMENDED_PARTNERS, SITE } from "@/lib/site";
import {
  routes,
  getRouteBySlug,
  getRelatedRoutes,
  getAveragePrice,
  type Route,
} from "@/data/routes";
import { companies } from "@/data/companies";
import {
  breadcrumbJsonLd,
  busTripJsonLd,
  faqJsonLd,
  routePriceJsonLd,
} from "@/lib/seo";
import { formatCurrency } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};

  const averagePrice = getAveragePrice(route);
  const title = `Passagem de ônibus de ${route.origem} para ${route.destino} — Preço médio ${formatCurrency(averagePrice)}`;
  const description = `Consulte o preço da passagem de ônibus de ${route.origem} para ${route.destino}. Média de ${formatCurrency(averagePrice)}, de ${formatCurrency(route.precoMin)} a ${formatCurrency(route.precoMax)}. Duração: ${route.duracao}. Empresas: ${route.empresas.join(", ")}.`;
  const canonical = `${SITE.url}/rotas/${slug}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function PriceTable({ route, averagePrice }: { route: Route; averagePrice: number }) {
  const convencionalMax = Math.round(averagePrice * 0.9);
  const executivoMin = Math.round(averagePrice * 1.2);

  const rows = [
    { label: "Preço mínimo", value: formatCurrency(route.precoMin), highlight: "green" as const },
    { label: "Preço médio estimado", value: formatCurrency(averagePrice), highlight: "primary" as const },
    { label: "Preço máximo", value: formatCurrency(route.precoMax), highlight: "default" as const },
    {
      label: "Convencional (estimado)",
      value: `${formatCurrency(route.precoMin)} – ${formatCurrency(convencionalMax)}`,
      highlight: "default" as const,
    },
    {
      label: "Executivo / Leito (estimado)",
      value: `${formatCurrency(executivoMin)} – ${formatCurrency(route.precoMax)}`,
      highlight: "default" as const,
    },
  ];

  return (
    <section aria-labelledby="prices-heading">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 id="prices-heading" className="text-xl font-bold text-slate-900">
          Tabela de preços
        </h2>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Tipo</th>
              <th className="px-4 py-3 text-right font-semibold text-slate-700">Preço</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="px-4 py-3 text-slate-600">{row.label}</td>
                <td
                  className={`px-4 py-3 text-right font-semibold ${
                    row.highlight === "green"
                      ? "text-green-600"
                      : row.highlight === "primary"
                        ? "text-primary"
                        : "text-slate-700"
                  }`}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-400">
        Preços estimados baseados em dados de mercado. Confirme o valor final na plataforma de compra.
      </p>
    </section>
  );
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  const relatedRoutes = getRelatedRoutes(route);
  const path = `/rotas/${slug}`;
  const averagePrice = getAveragePrice(route);

  const faqItems = route.faq.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  const jsonLdData = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Passagens", path: "/passagens" },
      { name: `${route.origem} → ${route.destino}`, path },
    ]),
    routePriceJsonLd({
      origem: route.origem,
      destino: route.destino,
      precoMin: route.precoMin,
      precoMax: route.precoMax,
      precoMedio: averagePrice,
      empresas: route.empresas,
      path,
    }),
    busTripJsonLd({
      origin: route.origem,
      destination: route.destino,
      price: averagePrice,
      duration: route.duracao,
      companies: route.empresas,
      path,
      lowPrice: route.precoMin,
      highPrice: route.precoMax,
    }),
    faqJsonLd(faqItems),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Passagens", href: "/passagens" },
            { label: `${route.origem} → ${route.destino}` },
          ]}
        />

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Passagem de ônibus de {route.origem} para {route.destino}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {route.distancia} km
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              {route.duracao}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" aria-hidden="true" />
              {route.empresas.length} empresas
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-primary">
              <Tag className="h-4 w-4" aria-hidden="true" />
              Média {formatCurrency(averagePrice)}
            </span>
          </div>
        </header>

        { /*<AdBanner
          slot="route-top"
          format="horizontal"
          label="Banner superior — Página de rota"
          className="mb-10"
        />*/}

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <PriceTable route={route} averagePrice={averagePrice} />

            <section aria-labelledby="details-heading">
              <div className="flex items-center gap-2 mb-4">
                <RouteIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 id="details-heading" className="text-xl font-bold text-slate-900">
                  Detalhes da rota
                </h2>
              </div>

              <dl className="grid gap-4 sm:grid-cols-2 mb-6">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="text-sm text-slate-500">Origem</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">{route.origem}</dd>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="text-sm text-slate-500">Destino</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">{route.destino}</dd>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="text-sm text-slate-500">Distância</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">{route.distancia} km</dd>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="text-sm text-slate-500">Duração da viagem</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">{route.duracao}</dd>
                </div>
              </dl>

              <h3 className="mb-3 font-semibold text-slate-900">Empresas que operam</h3>
              <div className="flex flex-wrap gap-2">
                {route.empresas.map((empresa) => {
                  const company = companies.find((c) => c.name === empresa);
                  if (company) {
                    return (
                      <Link
                        key={empresa}
                        href={`/empresas/${company.slug}`}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                      >
                        {empresa}
                      </Link>
                    );
                  }
                  return (
                    <span
                      key={empresa}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {empresa}
                    </span>
                  );
                })}
              </div>
            </section>

            <AdBanner slot="route-mid" format="rectangle" label="Banner retangular — Conteúdo" />

            <RouteFaq items={route.faq} />
          </div>

          <aside className="space-y-6">
          <div className="rounded-xl bg-gradient-to-br from-primary to-primary-dark p-5 text-white">
              <h3 className="font-bold text-lg mb-2">Comprar passagem</h3>
              <p className="text-sm text-blue-100 mb-4">
                {route.origem} → {route.destino}
              </p>
              <div className="space-y-2">
                {RECOMMENDED_PARTNERS.map((partner) => (
                  <a
                    key={partner.slug}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block rounded-lg bg-white px-4 py-2.5 text-center text-sm font-semibold text-primary hover:bg-blue-50 transition-colors"
                  >
                    {partner.name}
                  </a>
                ))}
              </div>
            </div>  

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900 mb-3">Resumo de preços</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Mínimo</dt>
                  <dd className="font-medium text-green-600">{formatCurrency(route.precoMin)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Médio</dt>
                  <dd className="font-medium text-primary">{formatCurrency(averagePrice)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Máximo</dt>
                  <dd className="font-medium">{formatCurrency(route.precoMax)}</dd>
                </div>
              </dl>
            </div>  
            
            <AdBanner slot="route-sidebar" format="sidebar" label="Banner lateral — Sidebar" />

            

            
          </aside>
        </div>

        {relatedRoutes.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-bold text-slate-900 mb-6">
              Rotas relacionadas
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedRoutes.map((r) => (
                <RouteCard key={r.slug} route={r} />
              ))}
            </div>
          </section>
        )}

        <AdBanner
          slot="route-bottom"
          format="horizontal"
          label="Banner inferior — Página de rota"
          className="mt-12"
        />
      </div>
    </>
  );
}
