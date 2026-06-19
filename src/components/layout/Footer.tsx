import Link from "next/link";
import { SITE } from "@/lib/site";
import { getPopularRoutes } from "@/data/routes";
import { posts } from "@/data/posts";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const popularRoutes = getPopularRoutes();

  return (
    <footer className="border-t border-slate-200 bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                VP
              </div>
              <span className="font-bold text-lg">{SITE.name}</span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Informações sobre preços, empresas e dicas para passagens de ônibus no Brasil.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-4">
              Rotas populares
            </h2>
            <ul className="space-y-2">
              {popularRoutes.map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/rotas/${route.slug}`}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {route.origem} → {route.destino}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-4">
              Conteúdo
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/passagens" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Todas as passagens
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Empresas de ônibus
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Blog e dicas
                </Link>
              </li>
              {posts.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-blue-100 hover:text-white transition-colors line-clamp-1"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-sm uppercase tracking-wider text-blue-200 mb-4">
              Institucional
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Sobre o site
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-blue-300">
          <p>© {currentYear} {SITE.name}. Todos os direitos reservados.</p>
          <p>Este site contém links de afiliados. Podemos receber comissão por compras realizadas.</p>
        </div>
      </div>
    </footer>
  );
}
