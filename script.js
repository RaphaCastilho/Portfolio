const content = {
  "pt-BR": {
    nav: {
      home: "Início",
      about: "Perfil",
      automation: "Automação",
      ecosystem: "Stack",
      projects: "Sistemas",
      experience: "Experiência",
      contact: "Contato",
    },
    cv: {
      pdf: "src/cv/DEV_Rapha_CV_PT.pdf",
      web: "src/cv/DEV_Rapha_CV_PT.html",
      downloadLabel: "Baixar CV",
      webLabel: "Ver versão web do CV",
    },
    hero: {
      kicker: "Quality Engineering • Automation • Operational Systems",
      title: "QA Engineering",
      subtitle: "focado em qualidade e confiabilidade.",
      description:
        "Atuo na validação de aplicações web com automação Playwright, testes de API e análise operacional para garantir releases confiáveis e experiências consistentes.",
      tags: ["Playwright", "QA Engineering", "API Testing", "Operational Systems", "AI-assisted QA"],
      metrics: "90+ testes · 6 suítes · 2 projetos · CI/CD ativo",
      linkedin: "LinkedIn",
      contact: "Contato",
    },
    about: {
      title: "Perfil Operacional",
      lead: "Atuo na interseção entre qualidade de software, análise sistêmica e operação. Minha experiência combina troubleshooting enterprise, validação funcional, automação Playwright e leitura de fluxos críticos para apoiar times que precisam entregar software com mais confiabilidade.",
      highlights: [
        "Investigação e reprodução de bugs em aplicações web corporativas.",
        "Validação de fluxos funcionais, regressão, estados de UI e integrações.",
        "Comunicação técnica entre suporte, produto, QA e desenvolvimento.",
        "Mentalidade orientada a rastreabilidade, estabilidade e melhoria contínua.",
      ],
    },
    automation: {
      title: "Automation Engineering",
      lead: "Desenho e implemento soluções de automação confiáveis para validar o que importa, reduzir riscos de regressão e acelerar entregas com segurança e previsibilidade.",
      items: [
        {
          label: "Playwright E2E",
          title: "Fluxos críticos automatizados",
          description: "Automação de jornadas reais, estados da interface, autenticação e comportamento cross-browser com Playwright.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "API Validation",
          title: "Contratos e respostas confiáveis",
          description: "Validação de endpoints, payloads, status codes e consistência funcional entre camadas.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "Regression Strategy",
          title: "Cobertura contra regressões",
          description: "Organização de suítes para proteger funcionalidades principais e reduzir risco em mudanças.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18 4l2 4-4-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "AI-Assisted QA",
          title: "Aceleração com IA",
          description: "Uso de IA para apoiar análise, documentação, geração de cenários e investigação técnica com revisão humana.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M9 17.5c.83.33 1.67.5 3 .5s2.17-.17 3-.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        },
      ],
    },
    ecosystem: {
      title: "Ecossistema Técnico",
      lead: "Stack organizada por capacidade operacional, não por lista genérica de ferramentas.",
      groups: [
        { title: "QA & Analysis", items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"] },
        { title: "Automation", items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"] },
        { title: "API & Systems", items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"] },
        { title: "CI/CD & DevOps", items: ["GitHub Actions", "CI/CD Pipelines", "Jenkins", "GitHub Pages", "Deploy Automation"] },
        { title: "Workflow & Collaboration", items: ["Jira", "JQL", "Git", "GitHub", "Agile", "Documentation"] },
        { title: "Web Foundations", items: ["HTML", "CSS", "Responsive Testing", "Front-end Debugging"] },
      ],
    },
    projects: {
      title: "Sistemas e Projetos",
      lead: "Projetos reposicionados como sistemas de validação, operação e aprendizado técnico aplicado.",
      filters: [
        { label: "Todos", value: "all" },
        { label: "QA Systems", value: ".qa-system" },
        { label: "Automation", value: ".automation" },
        { label: "Portfolio", value: ".portfolio" },
      ],
      items: [
        {
          category: "automation",
          type: "Automation Showcase",
          title: "Playwright QA Lab",
          description: "Dashboard interativo para acompanhamento de testes E2E, métricas de qualidade e integração contínua.",
          stack: ["Playwright", "CI/CD", "GitHub Pages", "Dashboard"],
          image: "src/img/qa-lab-dashboard.png",
          imageAlt: "Screenshot do dashboard do Playwright QA Lab",
          panelLabel: "QA Lab",
          url: "https://github.com/RaphaCastilho/qa-test-lab",
          linkLabel: "Ver repositório",
          liveUrl: "https://raphacastilho.github.io/qa-test-lab/",
        },
        {
          category: "qa-system",
          type: "Flagship Ecosystem",
          title: "Sentinel Tech QA",
          description: "Plataforma institucional e ecossistema de qualidade para comunicar QA, automação e fluxos assistidos por IA.",
          stack: ["QA", "Automation", "AI-assisted workflows", "Web"],
          image: "src/img/Sentinel-Tech-QA.png",
          imageAlt: "Screenshot do projeto Sentinel Tech QA",
          panelLabel: "QA Ops",
          url: "https://github.com/SentinelQAtech/sentinel-website",
          linkLabel: "Ver repositório",
        },
        {
          category: "portfolio",
          type: "Flagship Ecosystem",
          title: "Rapha.QA — Portfólio",
          description: "Portfólio bilíngue de Quality Engineering com tema escuro, cards interativos e integração com CV e LinkedIn.",
          stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
          image: "",
          imageAlt: "",
          panelLabel: "Portfólio",
          url: "https://github.com/RaphaCastilho/Portfolio",
          linkLabel: "Ver repositório",
          liveUrl: "https://raphacastilho.github.io/Portfolio",
        },
      ],
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
            "Troubleshooting avançado com base em logs, diagnóstico funcional e reprodução de falhas.",
          ],
        },
        {
          company: "Brooks Hamburgueria",
          period: "01/2019 - 01/2025",
          role: "Coordenador Operacional",
          bullets: [
            "Análise de processos operacionais com foco em eficiência, inconsistências e indicadores.",
            "Diagnóstico de falhas operacionais e estruturação de melhoria contínua com base em dados.",
            "Padronização de procedimentos e controle de qualidade operacional em rotinas críticas.",
          ],
        },
        {
          company: "Kairus Tecnologia",
          period: "09/2014 - 05/2016",
          role: "Analista de Operações e Sistemas",
          bullets: [
            "Automação de processos SaaS para otimização operacional e consistência sistêmica.",
            "Análise de fluxos de sistema e identificação de oportunidades de melhoria.",
            "Apoio técnico em sistemas de gestão e suporte especializado a usuários internos.",
          ],
        },
      ],
    },
    contact: {
      title: "Falar sobre oportunidade",
      lead: "Aberto a oportunidades PJ em QA, Automation, Quality Engineering e validação de sistemas.",
      name: "Nome completo",
      email: "Email",
      phone: "Telefone",
      subject: "Assunto",
      message: "Conte rapidamente sobre a oportunidade",
      button: "Enviar mensagem",
    },
    footer: {
      home: "Início",
      contact: "Contato",
      copy: "© Rapha.QA 2026 - Quality Engineering & Automation",
    },
  },
  "en-US": {
    nav: {
      home: "Home",
      about: "Profile",
      automation: "Automation",
      ecosystem: "Stack",
      projects: "Systems",
      experience: "Experience",
      contact: "Contact",
    },
    cv: {
      pdf: "src/cv/DEV_Rapha_CV_EN.pdf",
      web: "src/cv/DEV_Rapha_CV_EN.html",
      downloadLabel: "Download CV",
      webLabel: "View web CV",
    },
    hero: {
      kicker: "Quality Engineering • Automation • Operational Systems",
      title: "QA Engineering",
      subtitle: "focused on quality and reliability.",
      description:
        "I validate web applications through Playwright automation, API testing, and operational analysis to ensure reliable releases and consistent experiences.",
      tags: ["Playwright", "QA Engineering", "API Testing", "Operational Systems", "AI-assisted QA"],
      metrics: "90+ tests · 6 suites · 2 projects · CI/CD active",
      linkedin: "LinkedIn",
      contact: "Contact",
    },
    about: {
      title: "Operational Profile",
      lead: "I work at the intersection of software quality, system analysis, and operations. My background combines enterprise troubleshooting, functional validation, Playwright automation, and critical workflow analysis for teams that need more reliable software delivery.",
      highlights: [
        "Bug investigation and reproduction in enterprise web applications.",
        "Functional flow validation, regression analysis, UI states, and integrations.",
        "Technical communication across support, product, QA, and engineering teams.",
        "Traceability, stability, and continuous improvement mindset.",
      ],
    },
    automation: {
      title: "Automation Engineering",
      lead: "I design and implement reliable automation solutions to validate what matters, reduce regression risks, and accelerate delivery with safety and predictability.",
      items: [
        {
          label: "Playwright E2E",
          title: "Automated critical workflows",
          description: "Automation of real user journeys, UI states, authentication, and cross-browser behavior with Playwright.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "API Validation",
          title: "Reliable contracts and responses",
          description: "Endpoint, payload, status code, and functional consistency checks across system layers.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "Regression Strategy",
          title: "Coverage against regressions",
          description: "Suite organization to protect core functionality and reduce change risk.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18 4l2 4-4-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "AI-Assisted QA",
          title: "AI-enabled acceleration",
          description: "AI support for analysis, documentation, scenario generation, and technical investigation with human review.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M9 17.5c.83.33 1.67.5 3 .5s2.17-.17 3-.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        },
      ],
    },
    ecosystem: {
      title: "Technical Ecosystem",
      lead: "A stack organized by operational capability, not a generic tool list.",
      groups: [
        { title: "QA & Analysis", items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"] },
        { title: "Automation", items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"] },
        { title: "API & Systems", items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"] },
        { title: "CI/CD & DevOps", items: ["GitHub Actions", "CI/CD Pipelines", "Jenkins", "GitHub Pages", "Deploy Automation"] },
        { title: "Workflow & Collaboration", items: ["Jira", "JQL", "Git", "GitHub", "Agile", "Documentation"] },
        { title: "Web Foundations", items: ["HTML", "CSS", "Responsive Testing", "Front-end Debugging"] },
      ],
    },
    projects: {
      title: "Systems and Projects",
      lead: "Projects reframed as validation systems, operational tools, and applied technical learning.",
      filters: [
        { label: "All", value: "all" },
        { label: "QA Systems", value: ".qa-system" },
        { label: "Automation", value: ".automation" },
        { label: "Portfolio", value: ".portfolio" },
      ],
      items: [
        {
          category: "automation",
          type: "Automation Showcase",
          title: "Playwright QA Lab",
          description: "Interactive dashboard for E2E test tracking, quality metrics, and continuous integration.",
          stack: ["Playwright", "CI/CD", "GitHub Pages", "Dashboard"],
          image: "src/img/qa-lab-dashboard.png",
          imageAlt: "Playwright QA Lab dashboard screenshot",
          panelLabel: "QA Lab",
          url: "https://github.com/RaphaCastilho/qa-test-lab",
          linkLabel: "View repository",
          liveUrl: "https://raphacastilho.github.io/qa-test-lab/",
        },
        {
          category: "qa-system",
          type: "Flagship Ecosystem",
          title: "Sentinel Tech QA",
          description: "A quality-focused platform and ecosystem communicating QA, automation, and AI-assisted workflows.",
          stack: ["QA", "Automation", "AI-assisted workflows", "Web"],
          image: "src/img/Sentinel-Tech-QA.png",
          imageAlt: "Sentinel Tech QA project screenshot",
          panelLabel: "QA Ops",
          url: "https://github.com/SentinelQAtech/sentinel-website",
          linkLabel: "View repository",
        },
        {
          category: "portfolio",
          type: "Flagship Ecosystem",
          title: "Rapha.QA — Portfolio",
          description: "Bilingual Quality Engineering portfolio with dark theme, interactive cards, and CV/LinkedIn integration.",
          stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
          image: "",
          imageAlt: "",
          panelLabel: "Portfolio",
          url: "https://github.com/RaphaCastilho/Portfolio",
          linkLabel: "View repository",
          liveUrl: "https://raphacastilho.github.io/Portfolio",
        },
      ],
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
            "Performed advanced troubleshooting using log analysis, functional diagnosis, and failure reproduction.",
          ],
        },
        {
          company: "Brooks Hamburgueria",
          period: "01/2019 - 01/2025",
          role: "Operational Coordinator",
          bullets: [
            "Analyzed operational processes to improve efficiency, identify inconsistencies, and monitor performance indicators.",
            "Diagnosed operational failures and structured continuous improvement flows based on data and metrics.",
            "Standardized procedures and operational quality controls for critical routines.",
          ],
        },
        {
          company: "Kairus Tecnologia",
          period: "09/2014 - 05/2016",
          role: "Operations & Systems Analyst",
          bullets: [
            "Automated SaaS processes to improve operational efficiency and system consistency.",
            "Analyzed system workflows and identified improvement opportunities.",
            "Provided specialized technical support for management systems and internal users.",
          ],
        },
      ],
    },
    contact: {
      title: "Discuss an opportunity",
      lead: "Open to contractor opportunities in QA, Automation, Quality Engineering, and system validation.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Briefly describe the opportunity",
      button: "Send message",
    },
    footer: {
      home: "Home",
      contact: "Contact",
      copy: "© Rapha.QA 2026 - Quality Engineering & Automation",
    },
  },
};

let projectMixer = null;

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

function escapeHtml(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return String(value).replace(/[&<>"']/g, (character) => entities[character]);
}

const tagIcons = {
  "Playwright": "bx-code-alt",
  "QA Engineering": "bx-shield-quarter",
  "API Testing": "bx-link",
  "Operational Systems": "bx-cog",
  "AI-assisted QA": "bx-chip",
};

function renderTags(items) {
  return items.map((item) => {
    const iconClass = tagIcons[item];
    const icon = iconClass ? `<i class="bx ${iconClass}"></i>` : "";
    return `<span>${icon}${escapeHtml(item)}</span>`;
  }).join("");
}

function renderAutomationItem(item) {
  return `
    <article class="auto-card">
      <div class="auto-card-icon">${item.icon || ""}</div>
      <p class="auto-card-eyebrow">${escapeHtml(item.label)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `;
}

function renderEcosystemGroup(group) {
  return `
    <article class="ecosystem-group">
      <h3>${escapeHtml(group.title)}</h3>
      <div class="tech-tags">
        ${renderTags(group.items)}
      </div>
    </article>
  `;
}

const githubIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.4c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.13 20.64 22 16.79 22 12.25 22 6.59 17.52 2 12 2z"/></svg>';
const externalIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderProject(project) {
  const imageMarkup = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" />`
    : `<div class="project-cover-text" aria-hidden="true">
        <span class="proj-cover-eyebrow">${escapeHtml(project.panelLabel)}</span>
        <strong class="proj-cover-title">${escapeHtml(project.title)}</strong>
        <span class="proj-cover-sub">Quality Engineer</span>
        <div class="proj-cover-divider"></div>
       </div>`;

  const visualClass = project.image ? "project-visual" : "project-visual project-visual-dark";

  const githubLink = project.url
    ? `<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" class="proj-link">${githubIcon}GitHub</a>`
    : "";

  const liveLink = project.liveUrl
    ? `<a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="proj-link proj-link-live">Live Demo ${externalIcon}</a>`
    : `<span class="proj-link-disabled">Em desenvolvimento</span>`;

  return `
    <article class="project-card mix ${escapeHtml(project.category)}">
      <div class="${visualClass}">${imageMarkup}</div>
      <div class="project-body">
        <p class="proj-eyebrow">${escapeHtml(project.type)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="proj-desc">${escapeHtml(project.description)}</p>
        <div class="tech-tags">${renderTags(project.stack)}</div>
      </div>
      <div class="project-footer">
        ${githubLink}
        ${liveLink}
      </div>
    </article>
  `;
}

function renderExperienceItem(item) {
  return `
    <article class="experience-item">
      <div class="experience-header">
        <p class="experience-role">${escapeHtml(item.role)}</p>
        <p class="experience-meta">${escapeHtml(item.company)} <span class="experience-period">${escapeHtml(item.period)}</span></p>
      </div>
      <ul>
        ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderProjectFilter(filter) {
  return `<button class="btn filter-button" type="button" data-filter="${escapeHtml(filter.value)}">${escapeHtml(filter.label)}</button>`;
}

function updateHeroTags(tags) {
  const container = document.querySelector(".hero-tags");
  if (!container) return;
  container.innerHTML = renderTags(tags);
}

function updateAboutHighlights(highlights) {
  // profile-grid foi substituído pelo about-grid na refatoração — não sobrescrever
  const container = byId("about-highlights");
  if (!container) return;
  container.innerHTML = "";

  highlights.forEach((highlight, index) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<article class="profile-highlight"><span class="card-label">${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(highlight)}</p></article>`,
    );
  });
}

function updateContactLabels(contact) {
  const fields = {
    "contact-name": contact.name,
    "contact-email": contact.email,
    "contact-phone": contact.phone,
    "contact-subject": contact.subject,
    "contact-message": contact.message,
  };

  for (const [id, label] of Object.entries(fields)) {
    const field = byId(id);
    if (field) field.setAttribute("placeholder", label);

    const labelElement = document.querySelector(`label[for="${id}"]`);
    if (labelElement) labelElement.textContent = label;
  }

  const button = byId("contact-button");
  if (!button) return;

  if ("value" in button) {
    button.value = contact.button;
  } else {
    button.textContent = contact.button;
  }
}

function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures in private or restricted browser contexts.
  }
}

function readFromLocalStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function initProjectFiltering() {
  const grid = byId("projects-grid");
  if (!grid || typeof mixitup !== "function") return;

  if (projectMixer) {
    if (typeof projectMixer.destroy === "function") {
      projectMixer.destroy();
    } else {
      return;
    }
  }

  try {
    projectMixer = mixitup(grid, {
      selectors: {
        target: ".mix",
      },
    });
  } catch {
    projectMixer = null;
  }
}

function updateLanguageFlag(lang) {
  const flag = byId("lang-flag");
  const label = lang === "pt-BR" ? "Switch to English" : "Mudar para português";

  if (flag) {
    flag.src = lang === "pt-BR" ? "src/img/united-states-of-america-flag.svg" : "src/img/brazil-flag.svg";
    flag.alt = label;
  }

  const toggle = byId("lang-toggle");
  if (toggle) toggle.setAttribute("aria-label", label);
}

function applyLanguage(lang) {
  const active = content[lang] ? lang : "pt-BR";
  const t = content[active];

  document.documentElement.lang = active;
  saveToLocalStorage("siteLang", active);

  setText("nav-home", t.nav.home);
  setText("nav-about", t.nav.about);
  setText("nav-automation", t.nav.automation);
  setText("nav-ecosystem", t.nav.ecosystem);
  setText("nav-projects", t.nav.projects);
  setText("nav-experience", t.nav.experience);
  setText("nav-contact", t.nav.contact);

  setText("hero-kicker", t.hero.kicker);
  setText("hero-title", t.hero.title);
  setText("hero-subtitle", t.hero.subtitle);
  setText("hero-description", t.hero.description);
  updateHeroTags(t.hero.tags);
  setText("cv-download", t.cv.downloadLabel);
  setHref("cv-download", t.cv.pdf);
  setText("cv-web", t.cv.webLabel);
  setHref("cv-web", t.cv.web);
  setText("linkedin-cta", t.hero.linkedin);
  setText("contact-cta", t.hero.contact);

  setText("about-title", t.about.title);
  setText("about-lead", t.about.lead);
  setText("automation-title", t.automation.title);
  setText("automation-lead", t.automation.lead);
  setText("ecosystem-title", t.ecosystem.title);
  setText("ecosystem-lead", t.ecosystem.lead);
  setText("projects-title", t.projects.title);
  setText("projects-lead", t.projects.lead);
  setText("experience-title", t.experience.title);
  setText("experience-lead", t.experience.lead);
  setText("contact-title", t.contact.title);
  setText("contact-lead", t.contact.lead);

  updateAboutHighlights(t.about.highlights);
  renderList("automation-grid", t.automation.items, renderAutomationItem);
  renderList("ecosystem-grid", t.ecosystem.groups, renderEcosystemGroup);
  renderList("project-filters", t.projects.filters, renderProjectFilter);
  renderList("projects-grid", t.projects.items, renderProject);
  renderList("experience-list", t.experience.items, renderExperienceItem);

  updateContactLabels(t.contact);
  setText("footer-home", t.footer.home);
  setText("footer-projects", t.nav.projects);
  setText("footer-contact", t.footer.contact);
  setText("footer-copy", t.footer.copy);
  updateLanguageFlag(active);
  initProjectFiltering();
}

function setLanguage(lang) {
  applyLanguage(lang);
}

function toggleLanguage() {
  const current = document.documentElement.lang || "pt-BR";
  applyLanguage(current === "pt-BR" ? "en-US" : "pt-BR");
}

function applyTheme(theme) {
  const active = theme === "light" ? "light" : "dark";
  const themeIcon = document.querySelector("#theme-toggle i");

  document.body.classList.toggle("light", active === "light");

  if (themeIcon) {
    themeIcon.classList.toggle("bx-sun", active === "light");
    themeIcon.classList.toggle("bx-moon", active !== "light");
  }

  saveToLocalStorage("theme", active);
}

function setupMobileMenu() {
  const menuButton = byId("menu-icon");
  const navbar = document.querySelector(".navbar");
  if (!menuButton || !navbar) return;

  const icon = menuButton.querySelector("i");

  function setMenuState(isOpen) {
    navbar.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (icon) {
      icon.classList.toggle("bx-menu", !isOpen);
      icon.classList.toggle("bx-x", isOpen);
    }
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

function setupActiveNavOnScroll() {
  const sectionIds = ["home", "about", "automation", "ecosystem", "projects", "experience", "contact"];
  const sections = sectionIds.map((id) => byId(id)).filter(Boolean);
  const navLinks = document.querySelectorAll("header nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisible = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry.target;
        }
      });

      if (mostVisible) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${mostVisible.id}`);
        });
      }
    },
    { rootMargin: "-96px 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupActiveNavOnScroll();

  const langToggle = byId("lang-toggle");
  if (langToggle) langToggle.addEventListener("click", toggleLanguage);

  const themeToggle = byId("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("light") ? "dark" : "light";
      applyTheme(nextTheme);
    });
  }

  applyLanguage(readFromLocalStorage("siteLang", "pt-BR"));
  applyTheme(readFromLocalStorage("theme", "dark"));
});
