import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RouteCard } from "@/components/routes/RouteCard";
import { companies, getCompanyBySlug } from "@/data/companies";
import { routes } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return {};

  return createPageMetadata({
    title: `${company.name} — empresa de ônibus`,
    description: `${company.description} Saiba mais sobre rotas, regiões de atuação e diferenciais da ${company.name}.`,
    path: `/empresas/${slug}`,
    keywords: [`${company.name} ônibus`, `passagem ${company.name}`, company.name],
  });
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const companyRoutes = routes.filter((r) =>
    r.empresas.includes(company.name)
  );
  const path = `/empresas/${slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Empresas", path: "/empresas" },
          { name: company.name, path },
        ])}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Empresas", href: "/empresas" },
            { label: company.name },
          ]}
        />

        <div className="flex items-start gap-4 mb-8">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold text-2xl">
            {company.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {company.name}
            </h1>
            <p className="text-slate-500 mt-1">{company.headquarters}</p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Sobre</h2>
              <p className="text-slate-600 leading-relaxed">{company.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Diferenciais
              </h2>
              <div className="flex flex-wrap gap-2">
                {company.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            {companyRoutes.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Rotas operadas pela {company.name}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {companyRoutes.map((route) => (
                    <RouteCard key={route.slug} route={route} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900 mb-3">Informações</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Sede</dt>
                  <dd className="font-medium">{company.headquarters}</dd>
                </div>
                {company.founded && (
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Fundação</dt>
                    <dd className="font-medium">{company.founded}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-slate-500 mb-1">Regiões</dt>
                  <dd className="flex flex-wrap gap-1">
                    {company.regions.map((region) => (
                      <span
                        key={region}
                        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs"
                      >
                        {region}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-primary p-4 text-center font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Site oficial da {company.name} →
              </a>
            )}

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                Outras empresas
              </h3>
              <ul className="space-y-2">
                {companies
                  .filter((c) => c.slug !== company.slug)
                  .slice(0, 5)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/empresas/${c.slug}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
