import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CompanyCard } from "@/components/companies/CompanyCard";
import { companies } from "@/data/companies";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Empresas de ônibus no Brasil",
  description:
    "Conheça as principais empresas de transporte rodoviário do Brasil: Cometa, Gontijo, Águia Branca, Catarinense e mais.",
  path: "/empresas",
  keywords: ["empresas ônibus brasil", "viação ônibus", "empresas rodoviárias"],
});

export default function EmpresasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Empresas" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        Empresas de ônibus
      </h1>
      <p className="text-slate-500 text-lg mb-10 max-w-2xl">
        Conheça as principais empresas de transporte rodoviário que operam no
        Brasil, suas regiões de atuação e diferenciais.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <CompanyCard key={company.slug} company={company} />
        ))}
      </div>
    </div>
  );
}
