"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { cities } from "@/data/cities";
import { routes } from "@/data/routes";
import { buildRouteSlug } from "@/lib/utils";

export function HeroSearch() {
  const router = useRouter();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!origin || !destination) return;

    const slug = buildRouteSlug(origin, destination);
    const existingRoute = routes.find((r) => r.slug === slug);

    if (existingRoute) {
      router.push(`/rotas/${slug}`);
    } else {
      router.push(`/passagens?origem=${origin}&destino=${destination}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-5 sm:p-6 shadow-xl border border-slate-100"
      aria-label="Buscar passagem de ônibus"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="hero-origin"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-1.5"
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Origem
          </label>
          <select
            id="hero-origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          >
            <option value="">Selecione a cidade</option>
            {cities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name} ({city.stateCode})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="hero-destination"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-1.5"
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Destino
          </label>
          <select
            id="hero-destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          >
            <option value="">Selecione a cidade</option>
            {cities.map((city) => (
              <option key={city.slug} value={city.slug}>
                {city.name} ({city.stateCode})
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Consultar preço da passagem
      </button>
    </form>
  );
}
