import { RECOMMENDED_PARTNERS } from "@/lib/site";

export function RecommendedPartners() {
  return (
    <section aria-labelledby="partners-heading" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 id="partners-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
          Empresas recomendadas
        </h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          Compare preços e compre nas melhores plataformas parceiras. Links de afiliado —
          podemos receber comissão sem custo adicional para você.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RECOMMENDED_PARTNERS.map((partner) => (
          <a
            key={partner.slug}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`group flex flex-col rounded-xl border p-5 transition-all hover:shadow-md ${
              partner.highlight
                ? "border-primary bg-primary text-white hover:bg-primary/95"
                : "border-slate-200 bg-white hover:border-primary"
            }`}
          >
            <span
              className={`font-bold text-lg ${
                partner.highlight ? "text-white" : "text-slate-900 group-hover:text-primary"
              }`}
            >
              {partner.name}
            </span>
            <span
              className={`mt-2 text-sm leading-relaxed ${
                partner.highlight ? "text-blue-100" : "text-slate-500"
              }`}
            >
              {partner.description}
            </span>
            <span
              className={`mt-4 text-sm font-semibold ${
                partner.highlight ? "text-white" : "text-primary"
              }`}
            >
              Ver passagens →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
