import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description: `Entre em contato com o ${SITE.name}. Tire dúvidas, envie sugestões ou reporte problemas.`,
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contato" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
        Contato
      </h1>

      <div className="prose-content space-y-4">
        <p>
          Tem dúvidas, sugestões ou encontrou algum problema no site? Entre em
          contato conosco.
        </p>

        <div className="rounded-xl border border-slate-200 bg-white p-6 not-prose">
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-slate-500">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-primary font-medium hover:underline"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Site</dt>
              <dd className="mt-1 text-slate-700">{SITE.url}</dd>
            </div>
          </dl>
        </div>

        <p className="text-sm text-slate-500">
          Responderemos em até 48 horas úteis. Para questões sobre passagens
          já compradas, contate diretamente a empresa de ônibus ou a plataforma
          onde a compra foi realizada.
        </p>
      </div>
    </div>
  );
}
