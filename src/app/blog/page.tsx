import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Newspaper } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PostCard } from "@/components/articles/PostCard";
import { AdBanner } from "@/components/AdBanner";
import { posts, postCategories } from "@/data/posts";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog — dicas e guias para passagens de ônibus | ${SITE.name}`,
  description:
    "Artigos práticos para economizar em passagens de ônibus, guias de documentação, tipos de serviço e muito mais.",
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    title: `Blog | ${SITE.name}`,
    description:
      "Dicas práticas, guias e conteúdo para viajar melhor de ônibus no Brasil.",
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <header className="max-w-2xl mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Newspaper className="h-6 w-6 text-primary" aria-hidden="true" />
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Blog
          </h1>
        </div>
        <p className="text-slate-500 text-lg leading-relaxed">
          Dicas práticas, guias e conteúdo para viajar melhor de ônibus no Brasil.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          {posts.length} artigos · Atualizado regularmente
        </p>
      </header>

      <AdBanner
        slot="blog-top"
        format="horizontal"
        label="Banner superior — Blog"
        className="mb-10"
      />

      <div className="flex flex-wrap gap-2 mb-8" aria-label="Categorias">
        {postCategories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-slate-900">Consultar passagens</p>
            <p className="text-sm text-slate-500 mt-1">
              Veja preços médios das principais rotas de ônibus no Brasil.
            </p>
          </div>
        </div>
        <Link
          href="/passagens"
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shrink-0"
        >
          Ver passagens
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
