import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Termos de Uso",
  description: `Termos de uso do ${SITE.name}. Leia as condições para utilização do site.`,
  path: "/termos",
});

export default function TermosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Termos de uso" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        Termos de Uso
      </h1>

      <div className="prose-content space-y-4">
        <p>
          <em>Última atualização: junho de 2025</em>
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          1. Aceitação dos termos
        </h2>
        <p>
          Ao acessar e usar o {SITE.name}, você concorda com estes termos de
          uso. Se não concorda, por favor não utilize o site.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          2. Natureza do serviço
        </h2>
        <p>
          O {SITE.name} é um portal informativo. Não vendemos passagens de ônibus
          nem intermediamos transações. As informações de preços são estimativas
          e podem variar. Sempre confirme o preço final na plataforma de compra.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          3. Links de terceiros
        </h2>
        <p>
          O site contém links para sites de terceiros (plataformas parceiras).
          Não nos responsabilizamos pelo conteúdo, políticas ou práticas desses
          sites. A compra de passagens é realizada diretamente nas plataformas
          parceiras, sob suas próprias condições.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          4. Links de afiliado
        </h2>
        <p>
          Alguns links no site são links de afiliado. Podemos receber comissão
          quando você compra através desses links, sem custo adicional para você.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          5. Limitação de responsabilidade
        </h2>
        <p>
          As informações do site são fornecidas &quot;como estão&quot;, sem
          garantias de precisão ou completude. Não nos responsabilizamos por
          decisões tomadas baseadas nas informações apresentadas.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          6. Alterações
        </h2>
        <p>
          Podemos atualizar estes termos periodicamente. Alterações significativas
          serão comunicadas no site. O uso continuado após alterações constitui
          aceitação dos novos termos.
        </p>
      </div>
    </div>
  );
}
