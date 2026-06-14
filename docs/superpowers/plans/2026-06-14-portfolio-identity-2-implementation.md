# Portfolio Identity 2.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the DEV.Rapha Portfolio 2.0 identity package: a bilingual static Quality Engineering portfolio plus aligned PT-BR/EN CV HTML and PDF assets.

**Architecture:** Keep the project static and GitHub Pages-compatible. Rebuild the visible experience in `index.html`, `style.css`, and `script.js`, publish CV files in `src/cv/`, and add Node built-in smoke tests to protect language behavior, CV links, and asset references.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Boxicons, MixItUp if retained for project filtering, Node.js built-in `node:test`, static PDF generation from corrected CV HTML files.

---

## File Structure

Existing files to modify:

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\index.html`  
  Owns semantic page structure, section order, forms, links, and static fallback PT-BR content.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\style.css`  
  Owns the dark enterprise visual system, responsive layout, components, motion, and print-safe shared variables where useful.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\script.js`  
  Owns content localization, active language state, theme behavior if retained, mobile nav, active section nav, CV link resolution, and project filtering initialization.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\README.md`  
  Update positioning and local run/test instructions.

Files to create:

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\package.json`  
  Adds a no-dependency `npm test` command that runs Node built-in tests.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\tests\static-site.test.mjs`  
  Tests portfolio structure, broken local asset references, old positioning removal, and CV link references.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\tests\cv-content.test.mjs`  
  Tests CV language metadata, English CV language consistency, duplicated chips, and published CV assets.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_PT.html`  
  Published web CV in PT-BR.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_EN.html`  
  Published web CV in EN.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_PT.pdf`  
  Published PDF CV in PT-BR.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_EN.pdf`  
  Published PDF CV in EN.

- `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\.gitignore`  
  Add `.superpowers/` so brainstorming session files stay local.

External source files to read during implementation:

- `D:\DEV\04_QA\curriculo\DEV_Rapha_CV_2.0.html`
- `D:\DEV\04_QA\curriculo\DEV_Rapha_CV_USA_2.0.html`
- `D:\DEV\04_QA\curriculo\Raphael-Castilho-CV-QA-PT.pdf`
- `D:\DEV\04_QA\curriculo\Raphael-Castilho-CV-QA-US.pdf`

Important existing dirty worktree note:

- Do not revert existing modifications in `index.html`, `script.js`, `style.css`, `MELHORIAS.md`, or image changes.
- Read the current file state before editing.
- Stage and commit only the files changed by each task.

---

## Task 1: Add Smoke Test Harness

**Files:**

- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\package.json`
- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\tests\static-site.test.mjs`
- Create or modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\.gitignore`

- [ ] **Step 1: Write the failing static site tests**

Create `tests\static-site.test.mjs` with:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, "index.html"), "utf8");
const script = readFileSync(join(root, "script.js"), "utf8");

function localReferences(source, attribute) {
  const pattern = new RegExp(`${attribute}=["']([^"']+)["']`, "g");
  return [...source.matchAll(pattern)]
    .map((match) => match[1])
    .filter((value) => !value.startsWith("http"))
    .filter((value) => !value.startsWith("#"))
    .filter((value) => !value.startsWith("mailto:"))
    .filter((value) => !value.startsWith("tel:"));
}

test("portfolio exposes the approved Quality Engineering sections", () => {
  for (const id of ["home", "about", "automation", "ecosystem", "projects", "experience", "contact"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`), `missing #${id}`);
  }
});

test("portfolio no longer leads with junior front-end positioning", () => {
  const forbidden = [
    /desenvolvedor Frontend em início de carreira/i,
    /front-end beginner/i,
    /landing pages e sites de vendas/i,
    /web designer/i
  ];

  for (const pattern of forbidden) {
    assert.doesNotMatch(html, pattern);
    assert.doesNotMatch(script, pattern);
  }
});

test("published CV assets are referenced by the site script", () => {
  for (const expectedPath of [
    "src/cv/DEV_Rapha_CV_PT.pdf",
    "src/cv/DEV_Rapha_CV_EN.pdf",
    "src/cv/DEV_Rapha_CV_PT.html",
    "src/cv/DEV_Rapha_CV_EN.html"
  ]) {
    assert.match(script, new RegExp(expectedPath.replaceAll("/", "\\/")));
  }
});

test("all local image and stylesheet references in index.html exist", () => {
  const refs = [
    ...localReferences(html, "src"),
    ...localReferences(html, "href").filter((value) => value.endsWith(".css") || value.startsWith("src/"))
  ];

  for (const ref of refs) {
    const localPath = normalize(join(root, decodeURIComponent(ref)));
    assert.ok(existsSync(localPath), `missing local asset: ${ref}`);
  }
});
```

- [ ] **Step 2: Add a no-dependency test command**

Create `package.json` with:

```json
{
  "scripts": {
    "test": "node --test tests/*.test.mjs"
  }
}
```

- [ ] **Step 3: Ignore local brainstorming files**

Create `.gitignore` if it does not exist. Ensure it contains:

```gitignore
.superpowers/
```

- [ ] **Step 4: Run the static tests and verify RED**

Run:

```powershell
npm test
```

Expected result:

- `tests/static-site.test.mjs` fails because the current portfolio does not yet expose all approved sections and does not yet reference the new CV assets.

- [ ] **Step 5: Commit test harness**

Run:

```powershell
git add package.json tests/static-site.test.mjs .gitignore
git commit -m "test: add portfolio identity smoke tests"
```

---

## Task 2: Publish and Normalize CV HTML Assets

**Files:**

- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\tests\cv-content.test.mjs`
- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_PT.html`
- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_EN.html`

- [ ] **Step 1: Write the failing CV content tests**

Create `tests\cv-content.test.mjs` with:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const ptPath = join(root, "src", "cv", "DEV_Rapha_CV_PT.html");
const enPath = join(root, "src", "cv", "DEV_Rapha_CV_EN.html");

function read(path) {
  return readFileSync(path, "utf8");
}

test("published CV HTML files exist", () => {
  assert.ok(existsSync(ptPath), "missing PT-BR CV HTML");
  assert.ok(existsSync(enPath), "missing EN CV HTML");
});

test("CV files declare the correct document languages", () => {
  assert.match(read(ptPath), /<html lang="pt-BR">/);
  assert.match(read(enPath), /<html lang="en-US">/);
});

test("English CV does not contain Portuguese operational bullet text", () => {
  const en = read(enPath);
  const portugueseFragments = [
    "Análise de processos",
    "Diagnóstico de falhas",
    "Padronização de procedimentos",
    "Investigação de falhas",
    "Validação funcional",
    "Sistemas de Gestão",
    "Diferenciais Técnicos"
  ];

  for (const fragment of portugueseFragments) {
    assert.doesNotMatch(en, new RegExp(fragment, "i"));
  }
});

test("CV automation skill rows do not duplicate JavaScript chips", () => {
  for (const file of [ptPath, enPath]) {
    const source = read(file);
    const automationBlock = source.match(/Automation &amp; Engineering[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? "";
    const javascriptCount = [...automationBlock.matchAll(/>JavaScript</g)].length;
    assert.equal(javascriptCount, 1, `${file} repeats JavaScript in Automation & Engineering`);
  }
});
```

- [ ] **Step 2: Run CV tests and verify RED**

Run:

```powershell
npm test
```

Expected result:

- CV tests fail because `src/cv/DEV_Rapha_CV_PT.html` and `src/cv/DEV_Rapha_CV_EN.html` do not exist yet.

- [ ] **Step 3: Create the `src/cv` folder**

Run:

```powershell
New-Item -ItemType Directory -Force -Path "src\cv" | Out-Null
```

- [ ] **Step 4: Create the PT-BR CV HTML from the approved source**

Copy the structure from:

```text
D:\DEV\04_QA\curriculo\DEV_Rapha_CV_2.0.html
```

Create:

```text
D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_PT.html
```

Required edits:

- Keep `<html lang="pt-BR">`.
- Use title `Raphael Castilho — Quality Engineer`.
- Keep the header positioning around `Quality Engineering • Automation • Operational Systems`.
- Remove the duplicated `JavaScript` chip from the Automation & Engineering row.
- Keep PT-BR bullets in experience and projects.
- Keep technical market terms such as Playwright, API Testing, E2E, QA, System Analysis where they read naturally.
- Keep print CSS and page breaks.

- [ ] **Step 5: Create the EN CV HTML from the approved source**

Copy the structure from:

```text
D:\DEV\04_QA\curriculo\DEV_Rapha_CV_USA_2.0.html
```

Create:

```text
D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_EN.html
```

Required edits:

- Change `<html lang="pt-BR">` to `<html lang="en-US">`.
- Keep title `Raphael Castilho — Quality Engineer`.
- Rewrite Portuguese bullet text into English in all experience, projects, and highlights sections.
- Remove the duplicated `JavaScript` chip from the Automation & Engineering row.
- Use `Araçatuba, Brazil`.
- Keep English section titles: Professional Summary, Technical Skills, Automation Engineering, Technical Ecosystem, Professional Experience, Operating Environments, Independent Projects & Engineering, Education & Certifications, Technical Highlights.

Use these English bullets for LINX:

```html
<li>Analyzed and resolved critical incidents in complex enterprise applications.</li>
<li>Investigated systemic failures in direct collaboration with development and architecture teams.</li>
<li>Validated system behavior to identify bugs, inconsistencies, and regressions.</li>
<li>Performed advanced troubleshooting using log analysis, functional diagnosis, and failure reproduction.</li>
<li>Validated critical workflows before releases and production fixes.</li>
<li>Identified integration inconsistencies and application behavior issues in enterprise environments.</li>
```

Use these English bullets for Brooks:

```html
<li>Analyzed operational processes to improve efficiency, identify inconsistencies, and monitor performance indicators.</li>
<li>Diagnosed operational failures and structured continuous improvement flows based on data and metrics.</li>
<li>Standardized procedures, operational quality controls, and troubleshooting routines for critical processes.</li>
<li>Managed teams with focus on operational consistency and adherence to defined processes.</li>
```

Use these English bullets for Kairus:

```html
<li>Automated SaaS processes to improve operational efficiency and system consistency.</li>
<li>Analyzed system workflows and identified improvement opportunities.</li>
<li>Provided specialized technical support for management systems and internal users.</li>
```

- [ ] **Step 6: Run CV tests and verify GREEN for CV scope**

Run:

```powershell
npm test
```

Expected result:

- `tests/cv-content.test.mjs` passes.
- `tests/static-site.test.mjs` still fails until the portfolio references the new CV assets and sections.

- [ ] **Step 7: Commit CV HTML assets**

Run:

```powershell
git add tests/cv-content.test.mjs src/cv/DEV_Rapha_CV_PT.html src/cv/DEV_Rapha_CV_EN.html
git commit -m "feat: publish bilingual quality engineering CVs"
```

---

## Task 3: Rebuild Portfolio Semantic Structure

**Files:**

- Modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\index.html`

- [ ] **Step 1: Read the current dirty file before editing**

Run:

```powershell
Get-Content -Raw index.html
```

Confirm:

- Existing accessibility improvements are preserved, including form labels and external link `target`/`rel`.
- Existing `foto-perfil.png` reference is preserved if the identity block uses the profile photo.

- [ ] **Step 2: Replace old nav labels and section IDs**

Use these section IDs in order:

```html
<section class="hero" id="home"></section>
<section class="operational-profile" id="about"></section>
<section class="automation-engineering" id="automation"></section>
<section class="technical-ecosystem" id="ecosystem"></section>
<section class="systems-projects" id="projects"></section>
<section class="experience" id="experience"></section>
<section class="contact" id="contact"></section>
```

Use these nav anchors:

```html
<a href="#home" class="active" id="nav-home">Início</a>
<a href="#about" id="nav-about">Perfil</a>
<a href="#automation" id="nav-automation">Automação</a>
<a href="#ecosystem" id="nav-ecosystem">Stack</a>
<a href="#projects" id="nav-projects">Sistemas</a>
<a href="#experience" id="nav-experience">Experiência</a>
<a href="#contact" id="nav-contact">Contato</a>
```

- [ ] **Step 3: Implement the hero command center markup**

Use semantic static PT-BR fallback content:

```html
<section class="hero" id="home">
  <div class="hero-content">
    <p class="section-kicker" id="hero-kicker">Quality Engineering • Automation • Operational Systems</p>
    <h1 id="hero-title">Engenharia de Qualidade para sistemas modernos.</h1>
    <p id="hero-description">
      Construo fluxos de validação, automação Playwright e análise operacional para aumentar confiabilidade, rastreabilidade e prontidão de release em aplicações web.
    </p>
    <div class="hero-tags" aria-label="Principais frentes técnicas">
      <span>Playwright</span>
      <span>QA Engineering</span>
      <span>API Testing</span>
      <span>Operational Systems</span>
      <span>AI-assisted QA</span>
    </div>
    <div class="hero-actions">
      <a href="src/cv/DEV_Rapha_CV_PT.pdf" class="btn btn-primary" id="cv-download" target="_blank" rel="noopener noreferrer">Baixar CV</a>
      <a href="https://www.linkedin.com/in/raphael-castilho/" class="btn btn-secondary" id="linkedin-cta" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="#contact" class="btn btn-ghost" id="contact-cta">Contato</a>
    </div>
    <a href="src/cv/DEV_Rapha_CV_PT.html" class="cv-web-link" id="cv-web" target="_blank" rel="noopener noreferrer">Ver versão web do CV</a>
  </div>

  <div class="ops-panel" aria-label="Painel visual de operações de qualidade">
    <div class="ops-panel-header">
      <span>Quality Ops</span>
      <strong>Live validation map</strong>
    </div>
    <div class="ops-flow">
      <div class="ops-node is-valid">E2E</div>
      <div class="ops-line"></div>
      <div class="ops-node">API</div>
      <div class="ops-line"></div>
      <div class="ops-node is-valid">Release</div>
    </div>
    <div class="ops-grid">
      <article><span>Playwright E2E</span><strong>workflow coverage</strong></article>
      <article><span>API validation</span><strong>contract signals</strong></article>
      <article><span>Incident analysis</span><strong>root-cause flow</strong></article>
      <article><span>AI workflows</span><strong>QA acceleration</strong></article>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Implement the remaining section skeletons**

Add these section heading IDs so `script.js` can localize them:

```html
<h2 id="about-title">Perfil Operacional</h2>
<p id="about-lead"></p>

<h2 id="automation-title">Automation Engineering</h2>
<p id="automation-lead"></p>
<div class="automation-grid" id="automation-grid"></div>

<h2 id="ecosystem-title">Ecossistema Técnico</h2>
<p id="ecosystem-lead"></p>
<div class="ecosystem-grid" id="ecosystem-grid"></div>

<h2 id="projects-title">Sistemas e Projetos</h2>
<p id="projects-lead"></p>
<div class="project-filters" id="project-filters"></div>
<div class="portfolio-gallery systems-grid" id="projects-grid"></div>

<h2 id="experience-title">Experiência em Operações e Sistemas</h2>
<p id="experience-lead"></p>
<div class="experience-list" id="experience-list"></div>

<h2 id="contact-title">Falar sobre oportunidade</h2>
<p id="contact-lead"></p>
```

- [ ] **Step 5: Preserve and rename the contact form IDs**

Keep the existing FormSubmit action and hidden fields. Use these stable IDs:

```html
<input type="text" name="Nome" id="contact-name" required />
<input type="email" name="email" id="contact-email" required />
<input type="tel" name="Telefone" id="contact-phone" />
<input type="text" name="Assunto" id="contact-subject" />
<textarea name="Mensagem" id="contact-message" required></textarea>
<input type="submit" value="Enviar mensagem" class="btn btn-primary" id="contact-button" />
```

- [ ] **Step 6: Run tests and verify the expected partial GREEN**

Run:

```powershell
npm test
```

Expected result:

- Section ID checks pass.
- CV asset checks may still fail until `script.js` is updated.
- Old positioning checks pass if old copy was removed from HTML and script.

- [ ] **Step 7: Commit semantic portfolio structure**

Run:

```powershell
git add index.html
git commit -m "feat: rebuild portfolio structure for quality engineering"
```

---

## Task 4: Implement Bilingual Content and CTA Behavior

**Files:**

- Modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\script.js`

- [ ] **Step 1: Write content model in `script.js`**

Define a top-level `content` object with this shape:

```js
const content = {
  "pt-BR": {
    nav: {
      home: "Início",
      about: "Perfil",
      automation: "Automação",
      ecosystem: "Stack",
      projects: "Sistemas",
      experience: "Experiência",
      contact: "Contato"
    },
    cv: {
      pdf: "src/cv/DEV_Rapha_CV_PT.pdf",
      web: "src/cv/DEV_Rapha_CV_PT.html",
      downloadLabel: "Baixar CV",
      webLabel: "Ver versão web do CV"
    },
    hero: {
      kicker: "Quality Engineering • Automation • Operational Systems",
      title: "Engenharia de Qualidade para sistemas modernos.",
      description: "Construo fluxos de validação, automação Playwright e análise operacional para aumentar confiabilidade, rastreabilidade e prontidão de release em aplicações web.",
      tags: ["Playwright", "QA Engineering", "API Testing", "Operational Systems", "AI-assisted QA"],
      linkedin: "LinkedIn",
      contact: "Contato"
    }
  },
  "en-US": {
    nav: {
      home: "Home",
      about: "Profile",
      automation: "Automation",
      ecosystem: "Stack",
      projects: "Systems",
      experience: "Experience",
      contact: "Contact"
    },
    cv: {
      pdf: "src/cv/DEV_Rapha_CV_EN.pdf",
      web: "src/cv/DEV_Rapha_CV_EN.html",
      downloadLabel: "Download CV",
      webLabel: "View web CV"
    },
    hero: {
      kicker: "Quality Engineering • Automation • Operational Systems",
      title: "Quality Engineering for modern systems.",
      description: "I build validation workflows, Playwright automation, and operational analysis practices that improve reliability, traceability, and release readiness for web applications.",
      tags: ["Playwright", "QA Engineering", "API Testing", "Operational Systems", "AI-assisted QA"],
      linkedin: "LinkedIn",
      contact: "Contact"
    }
  }
};
```

Extend the same object with `about`, `automation`, `ecosystem`, `projects`, `experience`, `contact`, and `footer` keys using the content below.

PT-BR content:

```js
about: {
  title: "Perfil Operacional",
  lead: "Atuo na interseção entre qualidade de software, análise sistêmica e operação. Minha experiência combina troubleshooting enterprise, validação funcional, automação Playwright e leitura de fluxos críticos para apoiar times que precisam entregar software com mais confiabilidade.",
  highlights: [
    "Investigação e reprodução de bugs em aplicações web corporativas.",
    "Validação de fluxos funcionais, regressão, estados de UI e integrações.",
    "Comunicação técnica entre suporte, produto, QA e desenvolvimento.",
    "Mentalidade orientada a rastreabilidade, estabilidade e melhoria contínua."
  ]
},
automation: {
  title: "Automation Engineering",
  lead: "Automação como camada de confiança operacional: fluxos E2E, validação de API, regressão e sinais de prontidão para release.",
  items: [
    { label: "Playwright E2E", title: "Fluxos críticos automatizados", description: "Cenários que validam jornadas reais, estados da interface, autenticação e comportamento cross-browser." },
    { label: "API Validation", title: "Contratos e respostas confiáveis", description: "Validação de endpoints, payloads, status codes e consistência funcional entre camadas." },
    { label: "Regression Strategy", title: "Cobertura contra regressões", description: "Organização de suítes para proteger funcionalidades principais e reduzir risco em mudanças." },
    { label: "AI-assisted QA", title: "Aceleração com IA", description: "Uso de IA para apoiar análise, documentação, geração de cenários e investigação técnica com revisão humana." }
  ]
},
ecosystem: {
  title: "Ecossistema Técnico",
  lead: "Stack organizada por capacidade operacional, não por lista genérica de ferramentas.",
  groups: [
    { title: "QA & Analysis", items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"] },
    { title: "Automation", items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"] },
    { title: "API & Systems", items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"] },
    { title: "Workflow & Collaboration", items: ["Jira", "JQL", "Git", "GitHub", "Agile", "Documentation"] },
    { title: "Web Foundations", items: ["HTML", "CSS", "Responsive Testing", "Front-end Debugging"] }
  ]
},
projects: {
  title: "Sistemas e Projetos",
  lead: "Projetos reposicionados como sistemas de validação, operação e aprendizado técnico aplicado.",
  filters: [
    { label: "Todos", value: "all" },
    { label: "QA Systems", value: ".qa-system" },
    { label: "Automation", value: ".automation" },
    { label: "Web Foundations", value: ".web-foundation" }
  ],
  items: [
    {
      category: "qa-system",
      type: "Flagship ecosystem",
      title: "Sentinel Tech QA",
      description: "Plataforma institucional e ecossistema de qualidade para comunicar QA, automação e fluxos assistidos por IA.",
      stack: ["QA", "Automation", "AI-assisted workflows", "Web"],
      image: "src/img/Sentinel-Tech-QA.png",
      imageAlt: "Screenshot do projeto Sentinel Tech QA",
      panelLabel: "QA Ops",
      url: "https://github.com/RaphaCastilho/DEV/tree/main/Sentinel-Tech-QA",
      linkLabel: "Ver repositório"
    },
    {
      category: "automation",
      type: "Validation suite",
      title: "Playwright + k6",
      description: "Suíte de validação E2E e performance para exercitar fluxos, carga e confiabilidade de APIs e aplicações.",
      stack: ["Playwright", "k6", "E2E", "Performance"],
      image: "",
      imageAlt: "",
      panelLabel: "E2E Suite",
      url: "https://github.com/RaphaCastilho/playwright-serverest",
      linkLabel: "Ver repositório"
    },
    {
      category: "qa-system",
      type: "Operational dashboard",
      title: "Operational Intelligence Dashboard",
      description: "Aplicação de gestão reposicionada como painel operacional para controle, edição e validação de dados.",
      stack: ["JavaScript", "UI states", "Data validation", "Responsive testing"],
      image: "src/img/projeto-gestor.PNG",
      imageAlt: "Screenshot do projeto Gestor Web",
      panelLabel: "Ops Dashboard",
      url: "https://github.com/RaphaCastilho/DEV/tree/main/Gestor",
      linkLabel: "Ver repositório"
    },
    {
      category: "qa-system",
      type: "Workflow validation",
      title: "Operational Workflow Validation System",
      description: "Aplicativo de checklist usado como base para validação de estados, persistência local e fluxos de produtividade.",
      stack: ["JavaScript", "LocalStorage", "Exploratory Testing", "UI validation"],
      image: "src/img/projeto-checklist.PNG",
      imageAlt: "Screenshot do projeto Checklist",
      panelLabel: "Workflow",
      url: "https://github.com/RaphaCastilho/DEV/tree/main/CheckList",
      linkLabel: "Ver repositório"
    },
    {
      category: "web-foundation",
      type: "Web foundation",
      title: "Cromo e Ruínas",
      description: "Experimento visual de front-end mantido como prova secundária de composição, responsividade e atmosfera web.",
      stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      image: "src/img/Cromo%20e%20Ruinas.png",
      imageAlt: "Screenshot do projeto Cromo e Ruínas",
      panelLabel: "Web UI",
      url: "https://github.com/RaphaCastilho/Projetos",
      linkLabel: "Ver repositório"
    }
  ]
},
experience: {
  title: "Experiência em Operações e Sistemas",
  lead: "Experiência prática em incidentes, suporte avançado, análise de processos e operação crítica aplicada à qualidade de software.",
  items: [
    {
      company: "LINX",
      period: "06/2016 - 07/2019",
      role: "Engenheiro de Suporte L4",
      bullets: [
        "Análise e resolução de incidentes críticos em aplicações corporativas de alta complexidade.",
        "Investigação de falhas sistêmicas em colaboração direta com equipes de desenvolvimento e arquitetura.",
        "Validação de comportamentos de sistema para identificação de bugs, inconsistências e regressões.",
        "Troubleshooting avançado com base em logs, diagnóstico funcional e reprodução de falhas."
      ]
    },
    {
      company: "Brooks Hamburgueria",
      period: "01/2019 - 01/2025",
      role: "Coordenador Operacional",
      bullets: [
        "Análise de processos operacionais com foco em eficiência, inconsistências e indicadores.",
        "Diagnóstico de falhas operacionais e estruturação de melhoria contínua com base em dados.",
        "Padronização de procedimentos e controle de qualidade operacional em rotinas críticas."
      ]
    },
    {
      company: "Kairus Tecnologia",
      period: "09/2014 - 05/2016",
      role: "Analista de Operações e Sistemas",
      bullets: [
        "Automação de processos SaaS para otimização operacional e consistência sistêmica.",
        "Análise de fluxos de sistema e identificação de oportunidades de melhoria.",
        "Apoio técnico em sistemas de gestão e suporte especializado a usuários internos."
      ]
    }
  ]
},
contact: {
  title: "Falar sobre oportunidade",
  lead: "Aberto a oportunidades PJ em QA, Automation, Quality Engineering e validação de sistemas.",
  name: "Nome completo",
  email: "Email",
  phone: "Telefone",
  subject: "Assunto",
  message: "Conte rapidamente sobre a oportunidade",
  button: "Enviar mensagem"
},
footer: {
  home: "Início",
  contact: "Contato",
  copy: "© DEV.Rapha 2026 - Quality Engineering & Automation"
}
```

EN content:

```js
about: {
  title: "Operational Profile",
  lead: "I work at the intersection of software quality, system analysis, and operations. My background combines enterprise troubleshooting, functional validation, Playwright automation, and critical workflow analysis for teams that need more reliable software delivery.",
  highlights: [
    "Bug investigation and reproduction in enterprise web applications.",
    "Functional flow validation, regression analysis, UI states, and integrations.",
    "Technical communication across support, product, QA, and engineering teams.",
    "Traceability, stability, and continuous improvement mindset."
  ]
},
automation: {
  title: "Automation Engineering",
  lead: "Automation as an operational confidence layer: E2E flows, API validation, regression coverage, and release readiness signals.",
  items: [
    { label: "Playwright E2E", title: "Automated critical workflows", description: "Scenarios that validate real user journeys, UI states, authentication, and cross-browser behavior." },
    { label: "API Validation", title: "Reliable contracts and responses", description: "Endpoint, payload, status code, and functional consistency checks across system layers." },
    { label: "Regression Strategy", title: "Coverage against regressions", description: "Suite organization to protect core functionality and reduce change risk." },
    { label: "AI-assisted QA", title: "AI-enabled acceleration", description: "AI support for analysis, documentation, scenario generation, and technical investigation with human review." }
  ]
},
ecosystem: {
  title: "Technical Ecosystem",
  lead: "A stack organized by operational capability, not a generic tool list.",
  groups: [
    { title: "QA & Analysis", items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"] },
    { title: "Automation", items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"] },
    { title: "API & Systems", items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"] },
    { title: "Workflow & Collaboration", items: ["Jira", "JQL", "Git", "GitHub", "Agile", "Documentation"] },
    { title: "Web Foundations", items: ["HTML", "CSS", "Responsive Testing", "Front-end Debugging"] }
  ]
},
projects: {
  title: "Systems and Projects",
  lead: "Projects reframed as validation systems, operational tools, and applied technical learning.",
  filters: [
    { label: "All", value: "all" },
    { label: "QA Systems", value: ".qa-system" },
    { label: "Automation", value: ".automation" },
    { label: "Web Foundations", value: ".web-foundation" }
  ],
  items: [
    {
      category: "qa-system",
      type: "Flagship ecosystem",
      title: "Sentinel Tech QA",
      description: "A quality-focused platform and ecosystem communicating QA, automation, and AI-assisted workflows.",
      stack: ["QA", "Automation", "AI-assisted workflows", "Web"],
      image: "src/img/Sentinel-Tech-QA.png",
      imageAlt: "Sentinel Tech QA project screenshot",
      panelLabel: "QA Ops",
      url: "https://github.com/RaphaCastilho/DEV/tree/main/Sentinel-Tech-QA",
      linkLabel: "View repository"
    },
    {
      category: "automation",
      type: "Validation suite",
      title: "Playwright + k6",
      description: "An E2E and performance validation suite for exercising workflows, load, and reliability signals across APIs and applications.",
      stack: ["Playwright", "k6", "E2E", "Performance"],
      image: "",
      imageAlt: "",
      panelLabel: "E2E Suite",
      url: "https://github.com/RaphaCastilho/playwright-serverest",
      linkLabel: "View repository"
    },
    {
      category: "qa-system",
      type: "Operational dashboard",
      title: "Operational Intelligence Dashboard",
      description: "A management application reframed as an operational panel for control, editing, and data validation.",
      stack: ["JavaScript", "UI states", "Data validation", "Responsive testing"],
      image: "src/img/projeto-gestor.PNG",
      imageAlt: "Gestor Web project screenshot",
      panelLabel: "Ops Dashboard",
      url: "https://github.com/RaphaCastilho/DEV/tree/main/Gestor",
      linkLabel: "View repository"
    },
    {
      category: "qa-system",
      type: "Workflow validation",
      title: "Operational Workflow Validation System",
      description: "A checklist app used as a foundation for validating UI states, local persistence, and productivity workflows.",
      stack: ["JavaScript", "LocalStorage", "Exploratory Testing", "UI validation"],
      image: "src/img/projeto-checklist.PNG",
      imageAlt: "Checklist project screenshot",
      panelLabel: "Workflow",
      url: "https://github.com/RaphaCastilho/DEV/tree/main/CheckList",
      linkLabel: "View repository"
    },
    {
      category: "web-foundation",
      type: "Web foundation",
      title: "Cromo e Ruínas",
      description: "A front-end visual experiment retained as secondary proof of composition, responsiveness, and web atmosphere.",
      stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      image: "src/img/Cromo%20e%20Ruinas.png",
      imageAlt: "Cromo e Ruínas project screenshot",
      panelLabel: "Web UI",
      url: "https://github.com/RaphaCastilho/Projetos",
      linkLabel: "View repository"
    }
  ]
},
experience: {
  title: "Operations and Systems Experience",
  lead: "Hands-on experience with incidents, advanced support, process analysis, and critical operations applied to software quality.",
  items: [
    {
      company: "LINX",
      period: "06/2016 - 07/2019",
      role: "L4 Support Engineer",
      bullets: [
        "Analyzed and resolved critical incidents in complex enterprise applications.",
        "Investigated systemic failures in direct collaboration with development and architecture teams.",
        "Validated system behavior to identify bugs, inconsistencies, and regressions.",
        "Performed advanced troubleshooting using log analysis, functional diagnosis, and failure reproduction."
      ]
    },
    {
      company: "Brooks Hamburgueria",
      period: "01/2019 - 01/2025",
      role: "Operational Coordinator",
      bullets: [
        "Analyzed operational processes to improve efficiency, identify inconsistencies, and monitor performance indicators.",
        "Diagnosed operational failures and structured continuous improvement flows based on data and metrics.",
        "Standardized procedures and operational quality controls for critical routines."
      ]
    },
    {
      company: "Kairus Tecnologia",
      period: "09/2014 - 05/2016",
      role: "Operations & Systems Analyst",
      bullets: [
        "Automated SaaS processes to improve operational efficiency and system consistency.",
        "Analyzed system workflows and identified improvement opportunities.",
        "Provided specialized technical support for management systems and internal users."
      ]
    }
  ]
},
contact: {
  title: "Discuss an opportunity",
  lead: "Open to contractor opportunities in QA, Automation, Quality Engineering, and system validation.",
  name: "Full name",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  message: "Briefly describe the opportunity",
  button: "Send message"
},
footer: {
  home: "Home",
  contact: "Contact",
  copy: "© DEV.Rapha 2026 - Quality Engineering & Automation"
}
```

- [ ] **Step 2: Implement safe DOM helpers**

Add:

```js
function byId(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const element = byId(id);
  if (element) element.textContent = value;
}

function setHref(id, value) {
  const element = byId(id);
  if (element) element.setAttribute("href", value);
}

function renderList(containerId, items, renderItem) {
  const container = byId(containerId);
  if (!container) return;
  container.innerHTML = "";
  for (const item of items) {
    container.insertAdjacentHTML("beforeend", renderItem(item));
  }
}
```

- [ ] **Step 3: Implement `applyLanguage(lang)`**

Add:

```js
function applyLanguage(lang) {
  const active = content[lang] ? lang : "pt-BR";
  const t = content[active];

  document.documentElement.lang = active;
  localStorage.setItem("siteLang", active);

  setText("nav-home", t.nav.home);
  setText("nav-about", t.nav.about);
  setText("nav-automation", t.nav.automation);
  setText("nav-ecosystem", t.nav.ecosystem);
  setText("nav-projects", t.nav.projects);
  setText("nav-experience", t.nav.experience);
  setText("nav-contact", t.nav.contact);

  setText("hero-kicker", t.hero.kicker);
  setText("hero-title", t.hero.title);
  setText("hero-description", t.hero.description);
  setText("cv-download", t.cv.downloadLabel);
  setHref("cv-download", t.cv.pdf);
  setText("cv-web", t.cv.webLabel);
  setHref("cv-web", t.cv.web);
  setText("linkedin-cta", t.hero.linkedin);
  setText("contact-cta", t.hero.contact);

  renderList("automation-grid", t.automation.items, renderAutomationItem);
  renderList("ecosystem-grid", t.ecosystem.groups, renderEcosystemGroup);
  renderList("projects-grid", t.projects.items, renderProject);
  renderList("experience-list", t.experience.items, renderExperienceItem);

  updateContactLabels(t.contact);
  updateLanguageFlag(active);
}
```

- [ ] **Step 4: Implement render functions**

Add:

```js
function renderAutomationItem(item) {
  return `
    <article class="automation-card">
      <span class="card-label">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `;
}

function renderEcosystemGroup(group) {
  return `
    <article class="ecosystem-group">
      <h3>${group.title}</h3>
      <div class="tech-tags">
        ${group.items.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderProject(project) {
  const imageMarkup = project.image
    ? `<img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />`
    : `<div class="project-system-panel" aria-hidden="true"><span>${project.panelLabel}</span><strong>${project.title}</strong></div>`;

  return `
    <article class="project-card mix ${project.category}">
      <div class="project-visual">${imageMarkup}</div>
      <div class="project-body">
        <span class="card-label">${project.type}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${project.stack.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.linkLabel}</a>
      </div>
    </article>
  `;
}

function renderExperienceItem(item) {
  return `
    <article class="experience-item">
      <div>
        <span class="experience-period">${item.period}</span>
        <h3>${item.company}</h3>
        <p class="experience-role">${item.role}</p>
      </div>
      <ul>
        ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
    </article>
  `;
}
```

- [ ] **Step 5: Wire language toggle**

Use:

```js
function updateLanguageFlag(lang) {
  const flag = byId("lang-flag");
  if (!flag) return;
  flag.src = lang === "pt-BR" ? "src/img/united-states-of-america-flag.svg" : "src/img/brazil-flag.svg";
  flag.alt = lang === "pt-BR" ? "Switch to English" : "Mudar para português";
}

function toggleLanguage() {
  const current = document.documentElement.lang || "pt-BR";
  applyLanguage(current === "pt-BR" ? "en-US" : "pt-BR");
}
```

- [ ] **Step 6: Run tests and verify static language behavior GREEN**

Run:

```powershell
npm test
```

Expected result:

- Static tests pass once `script.js` references all CV paths and old positioning is removed.
- CV PDF existence checks are not present yet, so missing PDFs do not fail this task.

- [ ] **Step 7: Commit bilingual behavior**

Run:

```powershell
git add script.js
git commit -m "feat: add bilingual quality engineering content model"
```

---

## Task 5: Build the Premium Enterprise Visual System

**Files:**

- Modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\style.css`

- [ ] **Step 1: Define final design tokens**

Replace the old color variables with:

```css
:root {
  --bg: #05070d;
  --bg-elevated: #090d16;
  --surface: #0e1422;
  --surface-soft: #121a2a;
  --line: rgba(148, 163, 184, 0.18);
  --line-strong: rgba(148, 163, 184, 0.32);
  --text: #f8fafc;
  --text-muted: #a7b1c2;
  --text-soft: #748093;
  --accent: #5b7cfa;
  --accent-purple: #8b5cf6;
  --success: #22c55e;
  --danger: #ef4444;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --container: 1180px;
}
```

- [ ] **Step 2: Set global typography**

Use:

```css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", "Aptos", "Segoe UI", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

section {
  padding: 112px 24px;
}

section > .section-inner,
.header-inner,
.footer-inner {
  width: min(100%, var(--container));
  margin: 0 auto;
}
```

- [ ] **Step 3: Implement hero layout**

Create responsive CSS for:

```css
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  align-items: center;
  gap: 56px;
  padding-top: 132px;
}

.hero h1 {
  max-width: 760px;
  margin: 0;
  font-size: clamp(4.8rem, 8vw, 8.8rem);
  line-height: 0.94;
  letter-spacing: 0;
}

.hero-content p {
  max-width: 680px;
  color: var(--text-muted);
}

.ops-panel {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: linear-gradient(145deg, rgba(14, 20, 34, 0.92), rgba(9, 13, 22, 0.98));
  box-shadow: var(--shadow);
  padding: 24px;
}
```

- [ ] **Step 4: Implement shared components**

Add styles for:

```css
.btn,
.tech-tags span,
.automation-card,
.ecosystem-group,
.project-card,
.experience-item,
.contact form,
.cv-web-link,
.section-kicker,
.card-label
```

Rules:

- Buttons use 8px radius.
- Cards use 12px to 18px radius.
- No nested card styling.
- Tags are compact and readable.
- Hover effects move no more than 4px.

- [ ] **Step 5: Implement responsive behavior**

Add breakpoints:

```css
@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .ops-panel {
    order: -1;
  }
}

@media (max-width: 720px) {
  section {
    padding: 84px 18px;
  }

  .hero h1 {
    font-size: 4.6rem;
  }

  .hero-actions,
  .header-actions {
    width: 100%;
    flex-wrap: wrap;
  }
}
```

- [ ] **Step 6: Run tests and inspect manually**

Run:

```powershell
npm test
```

Then open:

```text
D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\index.html
```

Expected result:

- Tests pass.
- Desktop first viewport reads as QA/Automation/Operational Intelligence.
- Mobile does not overflow horizontally.

- [ ] **Step 7: Commit visual system**

Run:

```powershell
git add style.css
git commit -m "style: apply operational intelligence visual system"
```

---

## Task 6: Add Final CV PDFs and Link Verification

**Files:**

- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_PT.pdf`
- Create: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\src\cv\DEV_Rapha_CV_EN.pdf`
- Modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\tests\static-site.test.mjs`

- [ ] **Step 1: Extend tests to require PDF files**

Add this test to `tests\static-site.test.mjs`:

```js
test("published CV PDF files exist", () => {
  for (const expectedPath of [
    "src/cv/DEV_Rapha_CV_PT.pdf",
    "src/cv/DEV_Rapha_CV_EN.pdf"
  ]) {
    assert.ok(existsSync(join(root, expectedPath)), `missing ${expectedPath}`);
  }
});
```

- [ ] **Step 2: Run tests and verify RED**

Run:

```powershell
npm test
```

Expected result:

- Tests fail because the PDF files are not published yet.

- [ ] **Step 3: Generate or copy the PT-BR PDF**

Preferred generation path:

1. Open `src/cv/DEV_Rapha_CV_PT.html` in Chrome or Edge.
2. Print to PDF using A4.
3. Save as `src/cv/DEV_Rapha_CV_PT.pdf`.

Fallback path if browser PDF generation is not available:

```powershell
Copy-Item "D:\DEV\04_QA\curriculo\Raphael-Castilho-CV-QA-PT.pdf" "src\cv\DEV_Rapha_CV_PT.pdf"
```

- [ ] **Step 4: Generate or copy the EN PDF**

Preferred generation path:

1. Open `src/cv/DEV_Rapha_CV_EN.html` in Chrome or Edge.
2. Print to PDF using A4.
3. Save as `src/cv/DEV_Rapha_CV_EN.pdf`.

Fallback path if browser PDF generation is not available:

```powershell
Copy-Item "D:\DEV\04_QA\curriculo\Raphael-Castilho-CV-QA-US.pdf" "src\cv\DEV_Rapha_CV_EN.pdf"
```

- [ ] **Step 5: Run tests and verify GREEN**

Run:

```powershell
npm test
```

Expected result:

- All tests pass.

- [ ] **Step 6: Commit PDF assets**

Run:

```powershell
git add tests/static-site.test.mjs src/cv/DEV_Rapha_CV_PT.pdf src/cv/DEV_Rapha_CV_EN.pdf
git commit -m "feat: publish bilingual CV PDFs"
```

---

## Task 7: Update Documentation and Final QA

**Files:**

- Modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\README.md`
- Optionally modify: `D:\DEV\03_PERSONAL_PRODUCTS\Portfolio\MELHORIAS.md`

- [ ] **Step 1: Update README positioning**

Replace the old intro with:

```markdown
# DEV.Rapha — Quality Engineering Portfolio

Portfolio profissional de Raphael Castilho, focado em Quality Engineering, Playwright Automation, Operational Systems, API validation e fluxos modernos de QA.
```

Update the features list to include:

```markdown
- Identidade bilíngue PT-BR/EN
- CTA de CV conforme idioma ativo
- CVs publicados em HTML e PDF
- Seções focadas em Quality Engineering, Automation Engineering, Technical Ecosystem, Systems/Projects e Experience
- Formulário de contato via FormSubmit
- Smoke tests estáticos com Node.js
```

Update local commands:

```markdown
## Como rodar localmente

Abra `index.html` no navegador.

## Como testar

```bash
npm test
```
```

- [ ] **Step 2: Run full automated verification**

Run:

```powershell
npm test
```

Expected result:

- All tests pass.

- [ ] **Step 3: Browser verification desktop**

Open `index.html` in the browser and verify:

- Hero communicates QA/Automation/Operational Intelligence.
- CV button opens `src/cv/DEV_Rapha_CV_PT.pdf` in PT-BR.
- Language toggle changes to EN.
- CV button opens `src/cv/DEV_Rapha_CV_EN.pdf` in EN.
- Web CV link follows active language.
- LinkedIn opens in a new tab.
- Contact form labels and fields are visible/accessible.
- No broken images.
- No console errors.

- [ ] **Step 4: Browser verification mobile**

Set viewport near 390px width and verify:

- Header controls do not overlap.
- Hero text does not overflow.
- Ops panel stacks cleanly.
- Project cards stack cleanly.
- Contact form inputs fit the viewport.
- Mobile nav opens and closes cleanly.

- [ ] **Step 5: Commit docs and QA fixes**

Run:

```powershell
git add README.md MELHORIAS.md index.html style.css script.js
git commit -m "docs: update portfolio usage and QA notes"
```

Only include `MELHORIAS.md`, `index.html`, `style.css`, or `script.js` if they changed in this task.

---

## Task 8: Final Integration Review

**Files:**

- Review all changed files.

- [ ] **Step 1: Check final git status**

Run:

```powershell
git status --short
```

Expected result:

- Only intentionally untracked local files are left, or the working tree is clean.
- `.superpowers/` is ignored.

- [ ] **Step 2: Review commit history**

Run:

```powershell
git log --oneline -8
```

Expected result:

- Commits show design spec, tests, CVs, structure, content, styles, PDFs, and docs.

- [ ] **Step 3: Final test run**

Run:

```powershell
npm test
```

Expected result:

- All tests pass.

- [ ] **Step 4: Prepare handoff summary**

Summarize:

- Files changed.
- CV PDF and web paths.
- Verification commands.
- Desktop/mobile/browser checks.
- Any intentional deviations from the design spec.
