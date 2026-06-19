import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {post.category}
        </span>
        <span className="text-xs text-slate-400">
          {post.readingTime} min de leitura
        </span>
      </div>
      <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
        {post.excerpt}
      </p>
      <time
        dateTime={post.datePublished}
        className="text-xs text-slate-400 mt-auto"
      >
        {new Date(post.datePublished).toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
    </Link>
  );
}
