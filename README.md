# Artes que Vendem com ChatGPT — Landing Page

Site de vendas do ebook, feito em Vite + React + TypeScript + CSS puro.

## 1. Instalar Node.js

Baixe a versão LTS em https://nodejs.org e instale.

Confirme no terminal:

```
node -v
npm -v
```

## 2. Instalar dependências

```
npm install
```

## 3. Rodar em desenvolvimento

```
npm run dev
```

Abre em `http://localhost:5173`.

## 4. Gerar build de produção

```
npm run build
```

Gera a pasta `dist/`. Para testar localmente:

```
npm run preview
```

## 5. Onde alterar preço, link, garantia e contato

Tudo fica em **`src/config.ts`**:

```ts
export const PRODUCT_CONFIG = {
  productName: "Artes que Vendem com ChatGPT",
  price: "R$37,90",
  checkoutUrl: "[LINK DO CHECKOUT DA KIWIFY]",
  guaranteeDays: "7 dias",
  supportContact: "igorisaque466@gmail.com",
  author: "Igor Isaque da Silva Porfírio",
  siteUrl: "[URL FINAL DO SITE NA VERCEL]",
};
```

- **Preço**: altere `price`.
- **Link da Kiwify**: altere `checkoutUrl`. Todos os botões usam este valor automaticamente.
- **Garantia**: altere `guaranteeDays`.
- **Contato de suporte**: altere `supportContact`.
- **URL do site**: altere `siteUrl` (usada no JSON-LD e em `index.html`).

## 6. Onde adicionar as imagens

Coloque os arquivos em `public/`:

```
public/ebook-mockup.png
public/hero-creative.png
public/product-original.jpg
public/product-first-result.jpg
public/product-final-result.jpg
public/og-image.jpg
```

Se algum arquivo não existir, aparece um bloco "Adicione esta imagem em /public/[nome]" no lugar — o site não quebra.

## 7. Publicar no GitHub

```
git init
git add .
git commit -m "primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## 8. Importar na Vercel

1. Acesse https://vercel.com e faça login.
2. Clique em "Add New" → "Project".
3. Selecione o repositório do GitHub.
4. Framework preset: **Vite**.
5. Build command: `npm run build` (já vem preenchido).
6. Output directory: `dist` (já vem preenchido).
7. Clique em "Deploy".

## 9. Alterar o domínio

No painel do projeto na Vercel:

1. Vá em "Settings" → "Domains".
2. Adicione seu domínio próprio ou use o subdomínio `.vercel.app` gerado.
3. Depois de definir o domínio final, atualize `siteUrl` em `src/config.ts` e o `og:url`/`canonical` em `index.html`.

## 10. Ativar o Google Tag Manager depois

O site já dispara o evento `checkout_click` via `window.dataLayer`, mesmo sem GTM instalado (não gera erro).

Para ativar de fato:

1. Crie uma conta no Google Tag Manager.
2. Copie o snippet do GTM fornecido pelo Google.
3. Cole o primeiro bloco (`<script>`) dentro de `<head>` no `index.html`.
4. Cole o segundo bloco (`<noscript>`) logo após `<body>` no `index.html`.
5. No GTM, crie uma tag/trigger escutando o evento `checkout_click` do `dataLayer`.

## Estrutura do projeto

```
artes-que-vendem-com-chatgpt/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   ├── ASSETS.md
│   └── (imagens do produto — adicionar manualmente)
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── config.ts
    ├── styles.css
    ├── vite-env.d.ts
    ├── components/
    │   ├── SafeImage.tsx
    │   ├── CheckoutButton.tsx
    │   ├── Accordion.tsx
    │   ├── Header.tsx
    │   ├── MobileStickyBar.tsx
    │   └── BackToTop.tsx
    └── sections/
        ├── Hero.tsx
        ├── PainSection.tsx
        ├── BeforeAfter.tsx
        ├── ProductPresentation.tsx
        ├── MethodSection.tsx
        ├── LearningSection.tsx
        ├── IncludedSection.tsx
        ├── AudienceSection.tsx
        ├── ObjectionsSection.tsx
        ├── OfferSection.tsx
        ├── FAQSection.tsx
        ├── FinalCTA.tsx
        └── Footer.tsx
```
