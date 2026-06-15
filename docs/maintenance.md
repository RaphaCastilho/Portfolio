# Guia de Manutenção — DEV.Rapha Portfolio

Este documento descreve como manter o portfólio com segurança: editar conteúdo bilíngue,
regenerar os PDFs de CV, rodar os testes e publicar no GitHub Pages.

---

## 1. Como o site renderiza

O site é **estático**. O conteúdo aparece em duas camadas:

1. **`index.html`** contém a estrutura semântica e um **conteúdo estático de fallback em PT-BR**
   (funciona mesmo sem JavaScript).
2. **`script.js`** contém um **modelo de conteúdo bilíngue** (`content`) e, ao carregar,
   sobrescreve as seções com o idioma ativo via `applyLanguage(lang)`.

O idioma ativo é persistido em `localStorage["siteLang"]`. **PT-BR é o fallback**: se o idioma
salvo for inválido, cai para `pt-BR`.

> A camada visível em produção é a renderizada por `script.js`. O fallback estático existe para
> robustez (no-JS) e SEO — mantenha os dois coerentes ao alterar conteúdo principal.

---

## 2. Estrutura final

```
index.html        Estrutura + fallback estático PT-BR + IDs/hooks
style.css         Sistema visual dark enterprise (NÃO precisa mudar para editar texto)
script.js         Modelo de conteúdo bilíngue + toggle + render
mixitup.min.js    Filtro de projetos (vendor)
src/cv/           CVs publicados (HTML + PDF, PT e EN)
src/img/          Imagens / bandeiras / screenshots
tests/            Smoke tests estáticos (Node)
docs/             Este guia + spec/plano
```

---

## 3. Caminhos dos CVs

| Idioma | PDF (primário) | HTML (web) |
|--------|----------------|------------|
| PT-BR  | `src/cv/DEV_Rapha_CV_PT.pdf` | `src/cv/DEV_Rapha_CV_PT.html` |
| EN-US  | `src/cv/DEV_Rapha_CV_EN.pdf` | `src/cv/DEV_Rapha_CV_EN.html` |

Esses caminhos estão referenciados no modelo de conteúdo de `script.js`
(`content["pt-BR"].cv` e `content["en-US"].cv`). **Não renomeie** sem atualizar as referências.

---

## 4. Como editar o conteúdo bilíngue (`script.js`)

Todo o texto do site vive no objeto `content` no topo de `script.js`, com duas chaves de idioma:

```js
const content = {
  "pt-BR": { /* ... */ },
  "en-US": { /* ... */ },
};
```

Cada idioma tem as mesmas chaves:

| Chave | O que controla |
|-------|----------------|
| `nav` | Rótulos do menu (`home`, `about`, `automation`, `ecosystem`, `projects`, `experience`, `contact`) |
| `cv` | `pdf`, `web` (caminhos) + `downloadLabel`, `webLabel` |
| `hero` | `kicker`, `title`, `description`, `tags[]`, `linkedin`, `contact` |
| `about` | `title`, `lead`, `highlights[]` |
| `automation` | `title`, `lead`, `items[]` (`label`, `title`, `description`) |
| `ecosystem` | `title`, `lead`, `groups[]` (`title`, `items[]`) |
| `projects` | `title`, `lead`, `filters[]` (`label`, `value`), `items[]` |
| `experience` | `title`, `lead`, `items[]` (`company`, `period`, `role`, `bullets[]`) |
| `contact` | `title`, `lead`, `name`, `email`, `phone`, `subject`, `message`, `button` |
| `footer` | `home`, `contact`, `copy` |

**Regras ao editar:**

1. Edite **sempre os dois idiomas** (`pt-BR` e `en-US`) para não misturar idioma na tela.
2. O EN deve ser copy natural, **não tradução literal**. Termos de mercado podem permanecer em inglês
   (Playwright, API Testing, E2E, QA, release readiness).
3. **Não remova IDs/hooks do `index.html`** — `script.js` depende deles. Os principais:
   - Seções: `#home #about #automation #ecosystem #projects #experience #contact`
   - Nav: `#nav-home … #nav-contact`
   - Hero: `#hero-kicker #hero-title #hero-description`, `.hero-tags`, `#cv-download`, `#cv-web`, `#linkedin-cta`, `#contact-cta`
   - Títulos/leads: `#about-title #about-lead … #contact-title #contact-lead`
   - Containers renderizados: `#automation-grid #ecosystem-grid #project-filters #projects-grid #experience-list`
   - Contato: `#contact-name #contact-email #contact-phone #contact-subject #contact-message #contact-button`
   - Rodapé: `#footer-home #footer-projects #footer-contact #footer-copy`
   - Controles: `#lang-toggle #lang-flag #theme-toggle #menu-icon`

**Adicionar um projeto:** acrescente um item em `projects.items` **nos dois idiomas**, com:

```js
{
  category: "qa-system",          // deve casar com um filtro (.qa-system / .automation / .web-foundation)
  type: "Operational dashboard",
  title: "...",
  description: "...",
  stack: ["...", "..."],
  image: "src/img/arquivo.png",   // se vazio (""), usa um painel "sistema" no lugar da imagem
  imageAlt: "...",
  panelLabel: "Ops",              // usado quando image === ""
  url: "https://github.com/...",
  linkLabel: "Ver repositório" / "View repository"
}
```

Se usar `image`, garanta que o arquivo exista em `src/img/` (o teste de assets locais valida isso).

---

## 5. Como regenerar os PDFs a partir dos HTMLs

Os PDFs são **gerados a partir de `src/cv/*.html`** para manter consistência HTML↔PDF.
Os CVs já têm CSS de impressão pronto: `@page { size: A4; margin: 0 }` e `@media print`
com quebras explícitas (`.page-2`, `.page-3`) → **3 páginas A4**.

### Método A — Navegador (recomendado, sem dependências)

1. Abra `src/cv/DEV_Rapha_CV_PT.html` no Chrome ou Edge.
2. `Ctrl + P` (Imprimir).
3. Destino: **Salvar como PDF**.
4. Tamanho do papel: **A4**.
5. Margens: **Nenhuma** (o layout já controla as margens internas).
6. Opções: marque **Gráficos de plano de fundo / Background graphics** (preserva cores e chips).
7. Salve sobrescrevendo `src/cv/DEV_Rapha_CV_PT.pdf`.
8. Repita para `DEV_Rapha_CV_EN.html` → `DEV_Rapha_CV_EN.pdf`.

### Método B — Automatizado (Playwright/Chromium)

Equivalente ao método usado nesta entrega. Requer Playwright/Chromium disponível:

```js
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const cvs = [
  ["src/cv/DEV_Rapha_CV_PT.html", "src/cv/DEV_Rapha_CV_PT.pdf"],
  ["src/cv/DEV_Rapha_CV_EN.html", "src/cv/DEV_Rapha_CV_EN.pdf"],
];
const browser = await chromium.launch();
for (const [html, pdf] of cvs) {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(html).href, { waitUntil: "networkidle" });
  await page.pdf({ path: pdf, format: "A4", printBackground: true, preferCSSPageSize: true,
                   margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await page.close();
}
await browser.close();
```

Depois de regenerar, rode `npm test` (valida header `%PDF-` e tamanho) e confira abrindo os PDFs.

> Sempre que alterar o **conteúdo de um CV HTML**, regenere o PDF correspondente para não divergir.

---

## 6. Testes disponíveis

```bash
npm test          # node --test tests/*.test.mjs
```

**`tests/static-site.test.mjs`**
- Expõe as seções aprovadas (`#home … #contact`).
- Não contém posicionamento júnior antigo (em `index.html` e `script.js`).
- `script.js` referencia os 4 assets de CV.
- Todas as imagens/CSS locais referenciados em `index.html` existem.
- Os PDFs de CV existem e são PDFs válidos (`%PDF-`, > 10 KB).

**`tests/cv-content.test.mjs`**
- CVs HTML existem e declaram o idioma correto (`pt-BR` / `en-US`).
- O CV EN não contém texto operacional em português.
- O CV EN mantém os rótulos de seção/local esperados.
- CVs são documentos estáticos; ampersands escapados; sem chip JavaScript duplicado.

---

## 7. Fluxo seguro de manutenção

1. Edite o conteúdo no objeto `content` de `script.js` (**os dois idiomas**).
2. Se mexer em CV: edite o HTML e **regenere o PDF** (seção 5).
3. **Não** remova IDs/hooks do `index.html` (seção 4).
4. Rode `npm test` — corrija falhas antes de seguir.
5. Confira no navegador: troca de idioma, CTA de CV por idioma, sem erro de console, mobile sem overflow.
6. Faça commits pequenos e descritivos. `.superpowers/` permanece ignorado (`.gitignore`).

---

## 8. Compatibilidade GitHub Pages

- Site 100% estático, publicado em `https://<usuario>.github.io/Portfolio/`.
- Todos os caminhos são **relativos** (`src/cv/...`, `style.css`, `script.js`, `mixitup.min.js`).
- GitHub Pages roda em **Linux (case-sensitive)**: os nomes de arquivo devem bater **exatamente**
  com as referências em `script.js` e `index.html` (ex.: `DEV_Rapha_CV_PT.pdf`, não `..._pt.pdf`).
- O formulário usa FormSubmit; o campo oculto `_next` aponta para a URL do Pages.
- Não há build: o conteúdo do repositório é servido como está.
