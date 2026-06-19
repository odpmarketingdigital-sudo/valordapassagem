import Link from "next/link";
import type { Company } from "@/data/companies";

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      href={`/empresas/${company.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors mb-2">
        {company.name}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
        {company.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {company.regions.map((region) => (
          <span
            key={region}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
          >
            {region}
          </span>
        ))}
      </div>
    </Link>
  );
}
