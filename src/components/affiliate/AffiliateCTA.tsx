import { RECOMMENDED_PARTNERS } from "@/lib/site";

type AffiliateCTAProps = {
  origin?: string;
  destination?: string;
  variant?: "default" | "compact";
};

export function AffiliateCTA({
  origin,
  destination,
  variant = "default",
}: AffiliateCTAProps) {
  const title =
    origin && destination
      ? `Comprar passagem de ${origin} para ${destination}`
      : "Comprar passagem de ônibus";

  if (variant === "compact") {
    return (
      <div className="rounded-xl bg-primary p-5 text-white">
        <p className="font-semibold mb-3">{title}</p>
        <div className="flex flex-wrap gap-2">
          {RECOMMENDED_PARTNERS.map((partner) => (
            <a
              key={partner.slug}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-blue-50 transition-colors"
            >
              {partner.name}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      aria-label="Plataformas parceiras"
      className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 sm:p-8 text-white"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-blue-100 text-sm sm:text-base mb-6">
        Compare preços e compre nas melhores plataformas parceiras. Links de afiliado —
        podemos receber comissão sem custo adicional para você.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {RECOMMENDED_PARTNERS.map((partner) => (
          <a
            key={partner.slug}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`flex flex-col rounded-xl p-4 transition-all hover:scale-[1.02] ${
              partner.highlight
                ? "bg-white text-primary-dark"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            <span className="font-bold text-lg">{partner.name}</span>
            <span
              className={`text-sm mt-1 ${
                partner.highlight ? "text-slate-500" : "text-blue-200"
              }`}
            >
              {partner.description}
            </span>
            <span
              className={`mt-3 text-sm font-semibold ${
                partner.highlight ? "text-primary" : "text-white"
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
