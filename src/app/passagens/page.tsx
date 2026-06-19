import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RouteCard } from "@/components/routes/RouteCard";
import { routes } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Passagens de ônibus — preços e rotas",
  description:
    "Consulte preços médios de passagens de ônibus em todas as rotas do Brasil. Compare empresas, tempo de viagem e encontre a melhor opção.",
  path: "/passagens",
  keywords: ["passagens ônibus", "rotas ônibus brasil", "preço passagem"],
});

export default function PassagensPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Passagens" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        Passagens de ônibus
      </h1>
      <p className="text-slate-500 text-lg mb-10 max-w-2xl">
        Consulte preços médios, empresas e tempo de viagem para as principais
        rotas de ônibus no Brasil.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <RouteCard key={route.slug} route={route} />
        ))}
      </div>
    </div>
  );
}
