import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">
        Página não encontrada
      </h1>
      <p className="text-slate-500 mb-8">
        A página que você procura não existe ou foi removida.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
        >
          Voltar ao início
        </Link>
        <Link
          href="/passagens"
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Ver passagens
        </Link>
      </div>
    </div>
  );
}
