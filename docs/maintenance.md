# Guia de Manutenção — Rapha.QA Portfolio

Este documento descreve como manter o portfólio com segurança: editar conteúdo bilíngue,
regenerar os PDFs de CV, rodar os testes (unitários e E2E) e publicar no GitHub Pages.

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
index.html                 Estrutura + fallback estático PT-BR + IDs/hooks
qa-sandbox.html             QA Sandbox (projeto interativo: login, filtros, mock de API)
style.css                   Sistema visual dark do Portfolio (NÃO precisa mudar para editar texto)
script.js                   Modelo de conteúdo bilíngue + toggle + render
mixitup.min.js               Filtro de projetos (vendor)
playwright.config.js        Configuração dos testes E2E (Playwright)
src/cv/                     CVs publicados (HTML + PDF, PT e EN)
src/img/                    Imagens / bandeiras / screenshots
tests/                      Testes unitários estáticos (Node --test)
tests/e2e/                  Testes end-to-end (Playwright)
tools/update-qa-lab-summary.mjs   Gera qa-lab/results/latest.json a partir do relatório do Playwright
qa-lab/results/latest.json  Resumo de evidências exibido na seção "Automação" do site
.github/workflows/portfolio-quality.yml   Workflow de CI (testes a cada push/PR)
docs/                       Este guia
```

Arquivos locais de apoio como `.vscode/`, `imgs/`, `.claude/`, `.superpowers/`, relatórios
Playwright brutos e rascunhos de CV ficam no `.gitignore`. Eles podem existir na máquina local,
mas não fazem parte da entrega pública do Portfolio.

---

## 3. Caminhos dos CVs

| Idioma | PDF (primário) | HTML (web) |
|--------|----------------|------------|
| PT-BR  | `src/cv/DEV_Rapha_CV_PT.pdf` | `src/cv/DEV_Rapha_CV_PT.html` |
| EN-US  | `src/cv/DEV_Rapha_CV_EN.pdf` | `src/cv/DEV_Rapha_CV_EN.html` |

Esses caminhos estão referenciados no modelo de conteúdo de `script.js`
(`content["pt-BR"].cv` e `content["en-US"].cv`). **Não renomeie** sem atualizar as referências.

> A escolha de qual variante de CV é "oficial" (PT ou EN como padrão) está fora do escopo deste
> guia e é tratada à parte.

---

## 4. Como editar o conteúdo bilíngue (`script.js`)

Todo o texto do site vive no objeto `content` no topo de `script.js`, com duas chaves de idioma:

```js
const content = {
  "pt-BR": { /* ... */ },
  "en-US": { /* ... */ },
};
```

As duas chaves de idioma têm **exatamente a mesma estrutura**. Chaves de topo e o que cada uma
controla:

| Chave | O que controla |
|-------|----------------|
| `metaTitle` | `<title>` da página |
| `nav` | Rótulos do menu: `home`, `about`, `automation`, `ecosystem`, `projects`, `experience`, `contact` |
| `cv` | `pdf`, `web` (caminhos) + `downloadLabel`, `webLabel` |
| `hero` | `kicker`, `title`, `subtitle`, `description`, `tags[]`, `evidenceTeaser`, `linkedin`, `contact`, `opsSubtitle`, `opsDesc1..4`, `opsLabel3`, `opsLabel4` (rótulos dos cards "O que eu demonstro") |
| `toolsStripLabel` | Rótulo da faixa de tecnologias/ferramentas |
| `about` | `kicker`, `titleLine`, `lead`, `narrative`, `highlights[]` |
| `automation` | `kicker`, `benefit1..3`, `title`, `lead`, `evidenceTitle`, `evidenceMeta`, `statLabelTotal/Suites/Failed`, `coverageTitle`, `sandboxTitle`, `sandboxDesc`, `sandboxLinkLabel`, `honestText`, `statusLabels{passed,failed,attention,not-run}`, `loadingLabel`, `items[]` (`label`, `title`, `description`, `icon`) |
| `ecosystem` | `kicker`, `title`, `lead`, `note`, `groups[]` (`title`, `description`, `icon`, `items[]`) |
| `projects` | `kicker`, `title`, `lead`, `note`, `inDev` (rótulo do fallback "em desenvolvimento"), `filters[]` (`value`, `label`), `items[]` |
| `experience` | `kicker`, `titleSpan1/2`, `title`, `lead`, `skill1..4`, `note`, `items[]` (`company`, `period`, `role`, `badges[]`, `icon`, `bullets[]`) |
| `contact` | `kicker`, `titleSpan`, `title`, `lead`, `perk1..3`, `channelsLabel`, `emailDesc`, `linkedinDesc`, `githubDesc`, `cvLabel`, `cvDesc`, `ctaEmail`, `ctaMessage`, `barTitle`, `barSub`, `statusLabel`, `modalEyebrow`, `modalTitle`, `modalLabel*`, `modalPlaceholder*`, `modalSubmit`, `button` |
| `footer` | `home`, `automation`, `contact`, `copy` |

**Regras ao editar:**

1. Edite **sempre os dois idiomas** (`pt-BR` e `en-US`) para não misturar idioma na tela.
2. O EN deve ser copy natural, **não tradução literal**. Termos de mercado podem permanecer em inglês
   (Playwright, API Testing, E2E, QA, release readiness).
3. **Todo campo de `content` precisa estar conectado a um `setText`/`setHref` (ou usado em
   `renderList`/`renderProject`) dentro de `applyLanguage()`.** Um campo preenchido nos dois
   idiomas mas nunca lido em `applyLanguage()` é um "campo morto" — o texto correspondente no
   HTML fica hardcoded (geralmente em PT) e nunca muda ao trocar de idioma. Ao adicionar um campo
   novo, sempre adicione também a chamada `setText`/`setHref` correspondente.
4. **IDs no `index.html` devem ser únicos.** `setText`/`setHref` usam `getElementById`, que só
   atinge a *primeira* ocorrência de um `id`; um `id` duplicado faz o segundo elemento nunca
   receber atualização de idioma (bug real já corrigido uma vez neste projeto, nos elementos de
   CV/CTA da seção de contato). Ao copiar um bloco de HTML existente, sempre gere novos `id`s.
5. **Não remova IDs/hooks do `index.html`** — `script.js` depende deles. Principais grupos:
   - Seções: `#home #about #automation #ecosystem #projects #experience #contact`
   - Nav: `#nav-home #nav-about #nav-automation #nav-ecosystem #nav-projects #nav-experience #nav-contact`
   - Hero: `#hero-kicker #hero-title #hero-subtitle #hero-description`, `.hero-tags`, `#hero-evidence-teaser(-text)`, `#cv-download`, `#cv-web`, `#linkedin-cta`, `#ops-kicker #ops-subtitle #ops-desc-1..4 #ops-title-3 #ops-title-4`
   - Títulos/leads das seções: `#about-title(-span) #about-kicker #about-lead #about-narrative`, `#auto-kicker #auto-title-span #auto-benefit-1..3 #automation-title #automation-lead`, `#eco-kicker #ecosystem-title #ecosystem-lead #ecosystem-note-text`, `#projects-kicker #projects-title #projects-lead #projects-note-text`, `#exp-kicker #exp-title-span1/2 #exp-skill-1..4 #experience-title #experience-lead #experience-note-text`, `#contact-kicker #contact-title(-span) #contact-lead #contact-perk-1..3`
   - Evidência/automação: `#automation-evidence #evidence-title #evidence-meta #evidence-label-total/suites/failed #evidence-stat-total/suites/failed #evidence-status #evidence-coverage-title #evidence-coverage-list #evidence-sandbox-title/desc/link #evidence-honest-text`
   - Containers renderizados dinamicamente: `#automation-grid #ecosystem-grid #project-filters #projects-grid #experience-list`
   - Contato: `#contact-channels-label #contact-email-desc #contact-linkedin-desc #contact-github-desc #contact-cv-desc #cv-download-channel #cv-channel-name #contact-cta-email(-text) #contact-cta-message #contact-bar-title/sub #contact-status-label`
   - Modal de contato: `#contact-modal #open-contact-modal #close-contact-modal #modal-eyebrow #modal-title #modal-name/email/subject/message #modal-label-* #modal-submit(-label)`
   - Rodapé: `#footer-home #footer-automation #footer-contact #footer-copy`
   - Controles: `#lang-toggle #lang-flag #theme-toggle #menu-icon #primary-navigation`

**Adicionar um projeto:** acrescente um item em `projects.items` **nos dois idiomas**, com:

```js
{
  category: "portfolio",          // deve casar com um valor de filtro: "portfolio" ou "sandbox"
  type: "Sandbox interativo",
  title: "...",
  description: "...",
  stack: ["...", "..."],
  image: "src/img/arquivo.png",   // se vazio (""), usa um painel de capa textual no lugar da imagem
  imageAlt: "...",
  panelLabel: "...",              // usado quando image === ""
  coverSub: "...",                // subtítulo do painel de capa quando image === ""
  url: "https://github.com/...",
  linkLabel: "Ver código" / "View code",
  liveUrl: "https://.../pagina.html",   // opcional: se ausente, mostra o rótulo de `projects.inDev`
  liveLabel: "Abrir" / "Open",          // opcional, usado junto com liveUrl
}
```

Os valores atuais de `category` são `"portfolio"` (o site em si) e `"sandbox"` (o QA Sandbox); os
filtros em `projects.filters` usam `value: "all"`, `value: ".portfolio"` e `value: ".sandbox"`
(prefixo `.` porque o MixItUp trata o valor como seletor CSS de classe). Se criar uma nova
categoria, adicione também o filtro correspondente nos dois idiomas.

Se usar `image`, garanta que o arquivo exista em `src/img/` (o teste de assets locais valida isso).
Se **não** usar `image`, preencha `panelLabel`/`coverSub` — eles vêm do `content`, não são mais
texto fixo em `script.js`.

---

## 5. Como regenerar os PDFs a partir dos HTMLs

Os PDFs são **gerados a partir de `src/cv/*.html`** para manter consistência HTML↔PDF.
Os CVs oficiais têm CSS de impressão pronto: `@page { size: A4; margin: 0 }` e
`@media print`. A versão atual foi ajustada para **1 página A4** em PT-BR e EN-US.

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

Equivalente ao método usado nesta entrega. Requer Playwright/Chromium disponível (já é uma
dependência do projeto, ver seção 6):

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

Existem dois tipos de teste no projeto: **testes unitários** (Node, checam arquivos estáticos) e
**testes E2E** (Playwright, abrem o site num navegador real).

```bash
npm test              # alias de npm run test:unit — node --test tests/*.test.mjs
npm run test:unit     # idem, explícito
npm run test:e2e      # roda a suíte Playwright (tests/e2e/*.spec.js)
npm run test:e2e:ui   # abre o test:e2e em modo interativo (UI mode do Playwright)
npm run test:e2e:report   # abre o último relatório HTML gerado (playwright-report/)
npm run qa:summary    # regenera qa-lab/results/latest.json a partir do último resultado E2E
npm run qa:run        # roda test:e2e e, em seguida, qa:summary — atalho para o fluxo completo
```

Antes de rodar `test:e2e` pela primeira vez localmente, instale os browsers do Playwright:

```bash
npx playwright install --with-deps chromium
```

### Testes unitários (`tests/*.test.mjs`)

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

### Testes E2E (`tests/e2e/*.spec.js`, Playwright)

Suíte com 6 arquivos de spec, cobrindo `index.html` e `qa-sandbox.html`:

| Spec | Cobertura |
|------|-----------|
| `portfolio.spec.js` | Home carrega e mantém as seções principais; links de GitHub/LinkedIn/CV acessíveis |
| `i18n.spec.js` | Toggle PT-BR/EN-US atualiza conteúdo e o arquivo de CV vinculado |
| `automation-evidence.spec.js` | Resumo de evidências (seção Automação) renderiza corretamente ao lado do que testa |
| `qa-sandbox.spec.js` | Sandbox valida login, filtros, estado vazio, logout, erro 500 e renderização segura de conteúdo retornado por mock/API |
| `responsive.spec.js` | Layout sem overflow em mobile, tablet e desktop |
| `accessibility.spec.js` | Checagens básicas de acessibilidade |

A configuração (`playwright.config.js`) sobe um `http-server` local na porta `4173` (ou `$PORT`),
roda os specs em Chromium desktop e Chromium mobile (`Pixel 5`), e grava:
- relatório HTML em `playwright-report/`;
- resultado bruto em JSON em `qa-lab/results/playwright-results.json` (gitignored).

### Evidências no site (`qa-lab/results/latest.json`) — atenção ao CI

A seção "Automação" do site lê `qa-lab/results/latest.json` para mostrar contagem de testes,
suítes, status e cobertura. Esse arquivo é gerado por `tools/update-qa-lab-summary.mjs` a partir
de `qa-lab/results/playwright-results.json` (a saída do Playwright).

O campo `coverage` é bilíngue:

```json
{
  "coverage": {
    "pt-BR": ["..."],
    "en-US": ["..."]
  }
}
```

O `script.js` escolhe a lista de cobertura conforme o idioma ativo da página.

**O workflow de CI (`.github/workflows/portfolio-quality.yml`) roda `npm run qa:summary` a cada
push/PR, mas só faz upload do resultado como *artifact* do GitHub Actions — ele não commita o
arquivo de volta no repositório.** Ou seja, `qa-lab/results/latest.json` só reflete a suíte atual
se alguém **rodar os testes localmente e commitar o JSON manualmente**. Se specs forem
adicionados/removidos/renomeados e ninguém regenerar e commitar esse arquivo, os números exibidos
no site na seção de evidências ficam desatualizados (isso já aconteceu neste projeto).

**Sempre que alterar `tests/e2e/*.spec.js`** (adicionar, remover ou renomear specs), rode:

```bash
npm run qa:run
```

e depois **commite `qa-lab/results/latest.json`** junto com a mudança nos specs.

---

## 7. Fluxo seguro de manutenção

1. Edite o conteúdo no objeto `content` de `script.js` (**os dois idiomas**), garantindo que todo
   campo novo tenha um `setText`/`setHref` correspondente em `applyLanguage()` (seção 4, regra 3).
2. Se mexer em CV: edite o HTML e **regenere o PDF** (seção 5).
3. **Não** remova nem duplique IDs/hooks do `index.html` (seção 4, regras 4 e 5).
4. Rode `npm test` (unitários) e `npm run test:e2e` (E2E) — corrija falhas antes de seguir.
5. Se alterou specs E2E, rode `npm run qa:run` e commite o `qa-lab/results/latest.json` atualizado
   (seção 6).
6. Confira no navegador: troca de idioma nas duas direções (PT→EN e EN→PT), CTA de CV por idioma
   (inclusive na seção de contato, não só no hero), sem erro de console, mobile sem overflow.
7. Faça commits pequenos e descritivos.

---

## 8. Compatibilidade GitHub Pages

- Site 100% estático, publicado em `https://<usuario>.github.io/Portfolio/`.
- Todos os caminhos são **relativos** (`src/cv/...`, `style.css`, `script.js`, `mixitup.min.js`).
- GitHub Pages roda em **Linux (case-sensitive)**: os nomes de arquivo devem bater **exatamente**
  com as referências em `script.js` e `index.html` (ex.: `DEV_Rapha_CV_PT.pdf`, não `..._pt.pdf`).
- O formulário usa FormSubmit; o campo oculto `_next` aponta para a URL do Pages.
- Não há build: o conteúdo do repositório é servido como está.
