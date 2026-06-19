import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdBanner } from "@/components/AdBanner";
import { posts, getPostBySlug } from "@/data/posts";
import { SITE } from "@/lib/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title} | ${SITE.name}`;
  const canonical = `${SITE.url}/blog/${slug}`;

  return {
    title,
    description: post.description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const otherPosts = posts.filter((p) => p.slug !== slug);
  const publishedDate = new Date(post.datePublished).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          articleJsonLd({
            title: post.title,
            description: post.description,
            path,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
              <Tag className="h-3.5 w-3.5" aria-hidden="true" />
              {post.category}
            </span>
            <time dateTime={post.datePublished} className="text-slate-400">
              {publishedDate}
            </time>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime} min de leitura
            </span>
          </div>

          <h1 className="text-3xl sm:text-[2.125rem] font-bold text-slate-900 leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Conteúdo principal — layout leve para Core Web Vitals */}
        <div
          className="rounded-xl border border-slate-200 bg-white px-6 py-8 sm:px-10 sm:py-10"
          style={{ contentVisibility: "auto" }}
        >
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-[1.0625rem] text-slate-600 leading-[1.85] mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Anúncios após o conteúdo para não bloquear LCP */}
        <div className="mt-8 space-y-6">
          <AdBanner
            slot="blog-post-bottom"
            format="horizontal"
            label="Banner inferior — Artigo"
          />
        </div>

        <nav
          aria-label="Artigos relacionados"
          className="mt-10 border-t border-slate-200 pt-8"
        >
          <h2 className="font-semibold text-slate-900 mb-4">Continue lendo</h2>
          <ul className="space-y-3">
            {otherPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-primary hover:underline leading-snug text-[1.0625rem]"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar ao blog
          </Link>
          <Link
            href="/passagens"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors sm:ml-auto"
          >
            Consultar passagens de ônibus
          </Link>
        </footer>
      </article>
    </>
  );
}
