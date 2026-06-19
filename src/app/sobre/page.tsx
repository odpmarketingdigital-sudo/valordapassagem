import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre o Valor da Passagem",
  description:
    "Saiba mais sobre o Valor da Passagem: nosso objetivo de ajudar você a encontrar as melhores passagens de ônibus no Brasil.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Sobre" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        Sobre o {SITE.name}
      </h1>

      <div className="prose-content space-y-4">
        <p>
          O <strong>{SITE.name}</strong> é um portal de informações sobre
          passagens de ônibus no Brasil. Nosso objetivo é ajudar você a
          encontrar o melhor preço e a melhor opção para sua viagem.
        </p>
        <p>
          <strong>Não vendemos passagens.</strong> Reunimos informações sobre
          preços médios, empresas que operam em cada rota, tempo de viagem,
          frequência e dicas práticas para economizar. Quando você decide
          comprar, recomendamos plataformas parceiras através de links de
          afiliado.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">
          O que oferecemos
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Preços médios, mínimos e máximos de passagens de ônibus</li>
          <li>Informações sobre empresas de transporte rodoviário</li>
          <li>Tempo de viagem e distância das rotas</li>
          <li>Dicas para economizar na compra de passagens</li>
          <li>Guias práticos sobre documentação, tipos de serviço e terminais</li>
          <li>Comparação via plataformas parceiras confiáveis</li>
        </ul>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">
          Transparência
        </h2>
        <p>
          Este site contém links de afiliado. Quando você compra uma passagem
          através dos nossos links parceiros, podemos receber uma comissão sem
          custo adicional para você. Isso nos ajuda a manter o site e continuar
          oferecendo informações gratuitas.
        </p>
        <p>
          Os preços apresentados são estimativas baseadas em dados de mercado e
          podem variar. Sempre confirme o preço final na plataforma de compra
          antes de finalizar a transação.
        </p>
      </div>
    </div>
  );
}
