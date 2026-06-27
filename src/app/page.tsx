import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bus,
  ExternalLink,
  MapPinned,
  Newspaper,
  Route,
  Star,
} from "lucide-react";
import { AdBanner } from "@/components/AdBanner";
import { HeroSearch } from "@/components/HeroSearch";
import { RouteCard } from "@/components/routes/RouteCard";
import { PostCard } from "@/components/articles/PostCard";
import { RECOMMENDED_PARTNERS } from "@/lib/site";
import { getPopularRoutes, routes } from "@/data/routes";
import { posts } from "@/data/posts";

export default function HomePage() {
  const popularRoutes = getPopularRoutes();
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
     {/* Hero */}
     <section className="bg-gradient-to-br from-primary-dark via-primary fd-topo to-blue-500 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-200 text-sm font-medium">
                <Bus className="h-4 w-4" aria-hidden="true" />
                <span>valordapassagem.com.br</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Preço de passagem de ônibus no Brasil
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Consulte preços médios, empresas, tempo de viagem e dicas para
                economizar. Compare e compre nas melhores plataformas parceiras.
              </p>
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
                href="#popular-routes-heading"
              >
                Ver todas as rotas
              </a>
              <div className="flex flex-wrap gap-4 text-sm" style={{display: 'none'}}>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                    {routes.length}
                  </span>
                  <span className="text-blue-100">rotas disponíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                    {posts.length}
                  </span>
                  <span className="text-blue-100">artigos no blog</span>
                </div>
              </div>
            </div>
            {/*<HeroSearch />*/}
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <AdBanner slot="home-top" format="horizontal" label="Banner superior — Homepage" />
      </div>
      {/* Rotas mais procuradas */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="popular-routes-heading"
      >
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Route className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2
                id="popular-routes-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900"
              >
                Rotas mais procuradas
              </h2>
            </div>
            <p className="text-slate-500">
              Preços médios das passagens de ônibus mais buscadas no Brasil
            </p>
          </div>
          <Link
            href="/passagens"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/passagens"
            className="flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Ver todas as passagens
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
      

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Empresas recomendadas
            </h2>
          </div>
        </div>
      </section>

      {/* Empresas recomendadas */}
      <section
        className="bg-white border-y border-slate-200 py-16"
        aria-labelledby="partners-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2
                id="partners-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900"
              >
                Empresas recomendadas
              </h2>
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Compare preços e compre nas melhores plataformas parceiras.
              Links de afiliado — sem custo adicional para você.
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
                    partner.highlight
                      ? "text-white"
                      : "text-slate-900 group-hover:text-primary"
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
                  className={`mt-4 flex items-center gap-1 text-sm font-semibold ${
                    partner.highlight ? "text-white" : "text-primary"
                  }`}
                >
                  Ver passagens
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
        aria-labelledby="blog-heading"
      >
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2
                id="blog-heading"
                className="text-2xl sm:text-3xl font-bold text-slate-900"
              >
                Blog — dicas e guias
              </h2>
            </div>
            <p className="text-slate-500">
              Conteúdo prático para economizar e viajar melhor de ônibus
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Ver todos os artigos
            <BookOpen className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Acessar o blog
          </Link>
          <Link
            href="/passagens"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <MapPinned className="h-4 w-4" aria-hidden="true" />
            Explorar todas as rotas
          </Link>
        </div>
      </section>
    </>
  );
}
