# Valor da Passagem

Portal de informações sobre passagens de ônibus no Brasil. Consulte preços médios, empresas, tempo de viagem e dicas para economizar.

**Domínio:** [valordapassagem.com.br](https://valordapassagem.com.br)

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **SEO técnico** (metadata, JSON-LD, sitemap, robots, Open Graph)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/                    # Páginas (App Router)
│   ├── passagem/[slug]/    # Detalhe de rota (SEO: passagem-de-X-para-Y)
│   ├── passagens/          # Listagem de rotas
│   ├── empresas/[slug]/    # Empresas de ônibus
│   ├── dicas/[slug]/       # Artigos e guias
│   ├── sitemap.ts          # Sitemap dinâmico
│   └── robots.ts           # Robots.txt
├── components/             # Componentes React
├── data/                   # Dados estáticos (rotas, empresas, artigos)
└── lib/                    # Utilitários (SEO, metadata, utils)
```

## SEO

- Metadata dinâmica por página (`generateMetadata`)
- JSON-LD: Organization, WebSite, BreadcrumbList, Article, Trip, FAQPage
- URLs canônicas
- Sitemap XML automático
- Open Graph e Twitter Cards
- `lang="pt-BR"` no HTML
- Breadcrumbs semânticos

## Cores

| Nome        | Hex       |
|-------------|-----------|
| Azul principal | `#2563eb` |
| Azul escuro    | `#1e3a8a` |
| Cinza claro    | `#f8fafc` |
| Branco         | `#ffffff` |

## Afiliados

O site recomenda plataformas parceiras (ClickBus, Buscapé, Decolar) via links de afiliado. Configure as URLs em `src/lib/site.ts`.
