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
      title: 'QA Engineering: <span class="hero-sub">automação, validação e release readiness.</span>',
      description:
        "Construo fluxos de validação, automação Playwright e análise operacional para aumentar confiabilidade, rastreabilidade e prontidão de release em aplicações web.",
      tags: ["Playwright", "QA Engineering", "API Testing", "Operational Systems", "AI-assisted QA"],
      metrics: "90+ testes · 6 suítes · 2 projetos live · CI/CD ativo",
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
      lead: "Automação como camada de confiança operacional: fluxos E2E, validação de API, regressão e sinais de prontidão para release.",
      items: [
        {
          label: "Playwright E2E",
          title: "Fluxos críticos automatizados",
          description: "Cenários que validam jornadas reais, estados da interface, autenticação e comportamento cross-browser.",
        },
        {
          label: "API Validation",
          title: "Contratos e respostas confiáveis",
          description: "Validação de endpoints, payloads, status codes e consistência funcional entre camadas.",
        },
        {
          label: "Regression Strategy",
          title: "Cobertura contra regressões",
          description: "Organização de suítes para proteger funcionalidades principais e reduzir risco em mudanças.",
        },
        {
          label: "AI-assisted QA",
          title: "Aceleração com IA",
          description: "Uso de IA para apoiar análise, documentação, geração de cenários e investigação técnica com revisão humana.",
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
      ],
      items: [
        {
          category: "automation",
          type: "Automation showcase",
          title: "Playwright QA Lab",
          description: "90+ testes Playwright com dashboard interativo, CI/CD, GitHub Pages. Suítes: smoke, conteúdo, interação, responsivo, API mocking e acessibilidade.",
          stack: ["Playwright", "JavaScript", "CI/CD", "GitHub Pages", "Dashboard"],
          image: "src/img/qa-lab-dashboard.png",
          imageAlt: "Screenshot do dashboard do Playwright QA Lab",
          panelLabel: "QA Lab",
          url: "https://github.com/RaphaCastilho/qa-test-lab",
          linkLabel: "Ver repositório",
          liveUrl: "https://raphacastilho.github.io/qa-test-lab/",
        },
        {
          category: "qa-system",
          type: "Flagship ecosystem",
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
          category: "qa-system",
          type: "Flagship ecosystem",
          title: "Rapha.QA — Portfolio",
          description: "Portfólio bilíngue (PT/EN) de Quality Engineering com tema escuro, cards interativos, filtros por categoria e integração com CV e LinkedIn.",
          stack: ["HTML", "CSS", "JavaScript", "MixItUp", "GitHub Pages"],
          image: "",
          imageAlt: "",
          panelLabel: "Portfolio",
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
      title: 'QA Engineering: <span class="hero-sub">automation, validation, and release readiness.</span>',
      description:
        "I build validation workflows, Playwright automation, and operational analysis practices that improve reliability, traceability, and release readiness for web applications.",
      tags: ["Playwright", "QA Engineering", "API Testing", "Operational Systems", "AI-assisted QA"],
      metrics: "90+ tests · 6 suites · 2 live projects · CI/CD active",
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
      lead: "Automation as an operational confidence layer: E2E flows, API validation, regression coverage, and release readiness signals.",
      items: [
        {
          label: "Playwright E2E",
          title: "Automated critical workflows",
          description: "Scenarios that validate real user journeys, UI states, authentication, and cross-browser behavior.",
        },
        {
          label: "API Validation",
          title: "Reliable contracts and responses",
          description: "Endpoint, payload, status code, and functional consistency checks across system layers.",
        },
        {
          label: "Regression Strategy",
          title: "Coverage against regressions",
          description: "Suite organization to protect core functionality and reduce change risk.",
        },
        {
          label: "AI-assisted QA",
          title: "AI-enabled acceleration",
          description: "AI support for analysis, documentation, scenario generation, and technical investigation with human review.",
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
      ],
      items: [
        {
          category: "automation",
          type: "Automation showcase",
          title: "Playwright QA Lab",
          description: "90+ Playwright tests with interactive dashboard, CI/CD, GitHub Pages. Suites: smoke, content, interaction, responsive, API mocking, and accessibility.",
          stack: ["Playwright", "JavaScript", "CI/CD", "GitHub Pages", "Dashboard"],
          image: "src/img/qa-lab-dashboard.png",
          imageAlt: "Playwright QA Lab dashboard screenshot",
          panelLabel: "QA Lab",
          url: "https://github.com/RaphaCastilho/qa-test-lab",
          linkLabel: "View repository",
          liveUrl: "https://raphacastilho.github.io/qa-test-lab/",
        },
        {
          category: "qa-system",
          type: "Flagship ecosystem",
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
          category: "qa-system",
          type: "Flagship ecosystem",
          title: "Rapha.QA — Portfolio",
          description: "Bilingual (PT/EN) Quality Engineering portfolio with dark theme, interactive cards, category filters, and CV/LinkedIn integration.",
          stack: ["HTML", "CSS", "JavaScript", "MixItUp", "GitHub Pages"],
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
function setHTML(id, html) {
  const element = byId(id);
  if (element) element.innerHTML = html;
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

function renderTags(items) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function renderAutomationItem(item) {
  return `
    <article class="automation-card">
      <span class="card-label">${escapeHtml(item.label)}</span>
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

function renderProject(project) {
  const imageMarkup = project.image
    ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" />`
    : `<div class="project-system-panel" aria-hidden="true"><span>${escapeHtml(project.panelLabel)}</span><strong>${escapeHtml(project.title)}</strong></div>`;

  const linkMarkup = project.url
    ? `<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel)}</a>${project.liveUrl ? `<span style="margin:0 8px;color:var(--text-color);opacity:.3;">·</span><a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="project-live">Live →</a>` : ''}`
    : `<span class="project-status">${escapeHtml(project.linkLabel)}</span>`;

  return `
    <article class="project-card mix ${escapeHtml(project.category)}">
      <div class="project-visual">${imageMarkup}</div>
      <div class="project-body">
        <span class="card-label">${escapeHtml(project.type)}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="tech-tags">
          ${renderTags(project.stack)}
        </div>
        ${linkMarkup}
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
  const container = byId("about-highlights") || document.querySelector("#about .profile-grid");
  if (!container) return;
  container.id = container.id || "about-highlights";
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
  setHTML("hero-title", t.hero.title);
  setText("hero-description", t.hero.description);
  updateHeroTags(t.hero.tags);
  setText("cv-download", t.cv.downloadLabel);
  setHref("cv-download", t.cv.pdf);
  setText("cv-web", t.cv.webLabel);
  setHref("cv-web", t.cv.web);
  setText("linkedin-cta", t.hero.linkedin);
  setText("contact-cta", t.hero.contact);
  setText("hero-metrics", t.hero.metrics);

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
