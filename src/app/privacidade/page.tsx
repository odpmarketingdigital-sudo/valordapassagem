import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade",
  description: `Política de privacidade do ${SITE.name}. Saiba como coletamos, usamos e protegemos seus dados.`,
  path: "/privacidade",
});

export default function PrivacidadePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacidade" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        Política de Privacidade
      </h1>

      <div className="prose-content space-y-4">
        <p>
          <em>Última atualização: junho de 2025</em>
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          1. Informações que coletamos
        </h2>
        <p>
          O {SITE.name} pode coletar informações de navegação através de cookies
          e ferramentas de análise (como Google Analytics) para melhorar a
          experiência do usuário e entender como o site é utilizado.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          2. Uso de cookies
        </h2>
        <p>
          Utilizamos cookies para análise de tráfego, personalização de conteúdo
          e para rastrear links de afiliado. Você pode desabilitar cookies nas
          configurações do seu navegador.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          3. Links de afiliado
        </h2>
        <p>
          Este site contém links de afiliado para plataformas parceiras. Quando
          você clica nesses links e realiza uma compra, podemos receber uma
          comissão. Isso não altera o preço para você.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          4. Compartilhamento de dados
        </h2>
        <p>
          Não vendemos, alugamos ou compartilhamos seus dados pessoais com
          terceiros, exceto conforme necessário para operar o site ou conforme
          exigido por lei.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          5. Seus direitos
        </h2>
        <p>
          De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem
          direito de acessar, corrigir, excluir e solicitar informações sobre
          seus dados pessoais. Para exercer esses direitos, entre em contato
          pelo e-mail {SITE.email}.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-6 mb-2">
          6. Contato
        </h2>
        <p>
          Para questões sobre esta política, entre em contato: {SITE.email}.
        </p>
      </div>
    </div>
  );
}
