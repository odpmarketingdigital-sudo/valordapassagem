import Link from "next/link";
import type { Route } from "@/data/routes";
import { getAveragePrice, isPopularRoute } from "@/data/routes";
import { formatCurrency } from "@/lib/utils";

export function RouteCard({ route }: { route: Route }) {
  const averagePrice = getAveragePrice(route);

  return (
    <Link
      href={`/rotas/${route.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
            {route.origem} → {route.destino}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            {route.distancia} km · {route.duracao}
          </p>
        </div>
        {isPopularRoute(route) && (
          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            Popular
          </span>
        )}
      </div>

      <div className="flex items-end justify-between mt-auto">
        <div>
          <p className="text-xs text-slate-500">Preço médio</p>
          <p className="text-2xl font-bold text-primary-dark">
            {formatCurrency(averagePrice)}
          </p>
          <p className="text-xs text-slate-400">
            de {formatCurrency(route.precoMin)} a {formatCurrency(route.precoMax)}
          </p>
        </div>
        <span className="text-sm font-medium text-primary group-hover:underline">
          Ver detalhes →
        </span>
      </div>
    </Link>
  );
}
