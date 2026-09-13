const content = {
  "pt-BR": {
    metaTitle: "Raphael Castilho — Analista de QA | Playwright e API Testing",
    nav: {
      home: "Início",
      about: "Perfil",
      automation: "Automação",
      ecosystem: "Stack",
      projects: "Projetos",
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
      kicker: "QA Automation • API Testing • Projeto próprio",
      title: "Analista de QA",
      subtitle: "com prática em Playwright e APIs.",
      description:
        "Tenho foco em testes funcionais, API Testing e automação Playwright. Meu QA Lab usa este próprio Portfolio como produto-alvo para demonstrar cenários reais de teste, mocks de API e evidências de execução.",
      tags: ["Playwright", "API Testing", "Postman", "GitHub Actions", "QA Lab"],
      evidenceTeaser: "Última suíte Playwright rodada — ver resultado real",
      linkedin: "LinkedIn",
      contact: "Contato",
      opsSubtitle: "O que eu consigo demonstrar",
      opsDesc1: "Fluxos principais testados em browser real.",
      opsDesc2: "Mocks de API para sucesso, vazio e erro.",
      opsDesc3: "Evidências claras para bugs e regressões.",
      opsDesc4: "Uso de IA com revisão humana para estudo e documentação.",
    },
    toolsStripLabel: "Tecnologias e\nFerramentas",
    about: {
      kicker: "Sobre Mim",
      titleLine: "em QA.",
      lead: "Venho de mais de uma década em operações, suporte técnico e liderança antes de migrar para QA — incluindo a gestão de uma equipe inteira. Essa base me deu leitura de prioridade sob pressão, investigação estruturada de problema e comunicação direta com times técnicos e não técnicos.",
      narrative: "Hoje aplico isso em testes funcionais, exploratórios e de regressão, validação de API e investigação de defeitos. Automação, ferramentas e stack estão logo abaixo — aqui é sobre como eu penso QA, não sobre o que eu uso.",
      highlights: [],
    },
    automation: {
      kicker: "Automação",
      benefit1: "Fluxos principais testados em browser real",
      benefit2: "API mocking para sucesso, vazio e erro",
      benefit3: "Evidências organizadas para revisão técnica",
      title: "Automação Playwright aplicada",
      lead: "Uso automação para validar fluxos reais, simular respostas de API e documentar evidências. O foco é mostrar prática concreta, escopo claro e evolução técnica.",
      evidenceTitle: "Última execução real dessa suíte",
      evidenceMeta: "Gerado direto do resultado dos testes — sem página separada, o resumo fica aqui do lado do que ele testa.",
      statLabelTotal: "Testes passando",
      statLabelSuites: "Suítes",
      statLabelFailed: "Falhas",
      coverageTitle: "O que essa suíte cobre",
      sandboxTitle: "Sandbox interativo",
      sandboxDesc: "Ambiente próprio que criei pra praticar login, filtros e simulação de API (sucesso, vazio, erro) sem depender de backend real.",
      sandboxLinkLabel: "Testar o sandbox →",
      honestText: "Ainda estou evoluindo em automação — esta suíte documenta esse processo, não uma cobertura completa ou um produto pronto.",
      statusLabels: {
        passed: "Passou",
        failed: "Falhou",
        attention: "Atenção",
        "not-run": "Sem execução",
      },
      loadingLabel: "Carregando…",
      items: [
        {
          label: "Playwright E2E",
          title: "Fluxos reais automatizados",
          description: "Abertura de páginas, cliques, filtros, login, estado vazio, erro de API e validações visuais com Playwright.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "API Validation",
          title: "APIs simuladas com controle",
          description: "Uso de mocks para testar sucesso, erro 500 e respostas vazias sem depender de um backend real.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "Regression Testing",
          title: "Cobertura contra regressões",
          description: "Organização de testes para proteger links, idioma, imagens, responsividade e comportamento do Sandbox.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18 4l2 4-4-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "IA com revisão",
          title: "Apoio para estudar e documentar",
          description: "Uso de IA para organizar cenários, revisar textos e acelerar estudos, mantendo revisão humana.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M9 17.5c.83.33 1.67.5 3 .5s2.17-.17 3-.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        },
      ],
    },
    ecosystem: {
      kicker: "Stack",
      title: "Stack de QA em prática",
      lead: "Ferramentas que uso ou estou consolidando em projetos próprios e estudos aplicados.",
      note: "Stack em evolução, com foco em domínio real antes de inflar a lista de ferramentas.",
      groups: [
        {
          title: "QA & Analysis",
          description: "Técnicas para planejar cenários, reproduzir falhas e validar comportamento esperado.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M21 21l-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"],
        },
        {
          title: "Automation",
          description: "Automação aplicada em fluxos de tela, estados de UI e validações E2E.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"],
        },
        {
          title: "API & Systems",
          description: "Testes de APIs REST, payloads, status codes, integrações e troubleshooting.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"],
        },
        {
          title: "CI/CD & DevOps",
          description: "Execução automatizada de checks para dar visibilidade ao resultado dos testes.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8h6l-5 4 2 6-6-4-6 4 2-6L3 8h6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          items: ["GitHub Actions", "CI/CD Pipelines", "Jenkins", "GitHub Pages", "Deploy Automation"],
        },
        {
          title: "Workflow & Collaboration",
          description: "Gestão de tarefas, documentação e colaboração para mais eficiência e alinhamento.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="9" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 18c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 14c1.8.3 4 1.4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          items: ["Jira", "JQL", "Git", "GitHub", "Agile", "Documentation"],
        },
        {
          title: "Web Foundations",
          description: "Fundamentos e boas práticas para construção, teste e depuração de aplicações web.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" stroke-width="1.5"/></svg>',
          items: ["HTML", "CSS", "Responsive Testing", "Front-end Debugging"],
        },
      ],
    },
    projects: {
      kicker: "Projetos",
      title: "Projetos de QA",
      lead: "Projetos próprios usados para demonstrar testes manuais, automação Playwright, API mocking e evidências.",
      note: "Projetos em evolução conforme avanço nos estudos e nas aplicações para vagas QA.",
      inDev: "Em desenvolvimento",
      // com um único projeto listado, filtrar não tem função — o controle fica oculto (ver applyLanguage)
      filters: [],
      items: [
        {
          category: "portfolio",
          type: "Portfolio pessoal",
          title: "Rapha.QA — Portfólio",
          description: "Portfolio bilíngue com foco em QA, projetos práticos, CV, GitHub, LinkedIn e evidências técnicas.",
          stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
          image: "",
          imageAlt: "",
          panelLabel: "Portfólio",
          coverSub: "Analista de QA",
          url: "https://github.com/RaphaCastilho/Portfolio",
          linkLabel: "Ver repositório",
          liveUrl: "https://raphacastilho.github.io/Portfolio",
        },
      ],
    },
    experience: {
      kicker: "Experiência",
      titleSpan1: "operações",
      titleSpan2: "QA.",
      title: "Minha trajetória até QA.",
      lead: "Venho de suporte, operações e análise de sistemas, e hoje direciono essa base para testes funcionais, API Testing, documentação de bugs e automação Playwright.",
      skill1: "Investigação de incidentes",
      skill2: "Análise de sistemas",
      skill3: "Operações e indicadores",
      skill4: "Testes e automação",
      note: "Transição focada em QA, com projetos próprios para demonstrar prática e evolução técnica.",
      items: [
        {
          company: "Autônomo",
          period: "Jan/2025 — Atual",
          role: "Projetos próprios em QA",
          badges: ["Playwright", "API Testing", "Postman", "GitHub Actions"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          bullets: [
            "Automação E2E com Playwright em projeto próprio",
            "Testes funcionais, regressão e APIs REST com Postman",
            "Investigação e documentação de bugs",
            "Organização de evidências para revisão técnica",
          ],
        },
        {
          company: "Brooks Hamburgueria",
          period: "2019 — 2025",
          role: "Coordenador Operacional",
          badges: ["Operações", "Indicadores", "Processos", "Liderança"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          bullets: [
            "Gestão de operações e rotinas críticas",
            "Análise de indicadores e melhoria contínua",
            "Estruturação de processos e padronizações",
            "Liderança de equipes e treinamentos",
          ],
        },
        {
          company: "LINX",
          period: "2016 — 2019",
          role: "Engenheiro de Suporte L4",
          badges: ["Enterprise", "Suporte", "Sistemas", "Logs"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          bullets: [
            "Investigação e resolução de incidentes críticos",
            "Troubleshooting avançado e análise de logs",
            "Diagnóstico de falhas em sistemas complexos",
            "Suporte a equipes de desenvolvimento",
          ],
        },
        {
          company: "Kairus Tecnologia",
          period: "2014 — 2016",
          role: "Analista de Operações e Sistemas",
          badges: ["SaaS", "Operações", "Sistemas", "Suporte"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          bullets: [
            "Monitoramento de sistemas e serviços SaaS",
            "Análise de fluxos e identificação de melhorias",
            "Suporte técnico a usuários internos",
            "Documentação e controle de processos",
          ],
        },
      ],
    },
    contact: {
      kicker: "Contato",
      titleSpan: "juntos.",
      title: "Vamos construir qualidade juntos.",
      lead: "Estou aberto a oportunidades remotas CLT ou PJ em QA Júnior/Pleno, testes manuais, API Testing e automação Playwright.",
      perk1: "Disponibilidade imediata",
      perk2: "Atuação 100% remota",
      perk3: "Resposta em até 24h",
      channelsLabel: "Escolha o melhor canal para conversar",
      emailDesc: "Enviar mensagem",
      linkedinDesc: "Vamos nos conectar",
      githubDesc: "Ver meus projetos",
      cvDesc: "Download do CV",
      ctaEmail: "Enviar e-mail",
      ctaMessage: "Enviar mensagem",
      barTitle: "Foco em QA, APIs e automação Playwright.",
      barSub: "Projeto próprio disponível para demonstrar meu processo de validação.",
      statusLabel: "Disponível para novos desafios",
      modalEyebrow: "Contato",
      modalTitle: "Enviar mensagem",
      modalLabelName: "Nome",
      modalLabelEmail: "E-mail",
      modalLabelSubject: "Assunto",
      modalLabelMessage: "Mensagem",
      modalPlaceholderName: "Seu nome",
      modalPlaceholderSubject: "Sobre qual oportunidade?",
      modalPlaceholderMessage: "Conte brevemente sobre a oportunidade...",
      modalSubmit: "Enviar mensagem",
      button: "Enviar e-mail",
    },
    footer: {
      home: "Início",
      automation: "Automação",
      contact: "Contato",
      copy: "© Rapha.QA 2026 - QA Automation & API Testing",
    },
  },
  "en-US": {
    metaTitle: "Raphael Castilho — QA Analyst | Playwright and API Testing",
    nav: {
      home: "Home",
      about: "Profile",
      automation: "Automation",
      ecosystem: "Stack",
      projects: "Projects",
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
      kicker: "QA Automation • API Testing • Personal Project",
      title: "QA Analyst",
      subtitle: "practicing Playwright and APIs.",
      description:
        "I focus on functional testing, API Testing, and Playwright automation. My QA Lab uses this Portfolio as the tested product to demonstrate real test scenarios, API mocks, and execution evidence.",
      tags: ["Playwright", "API Testing", "Postman", "GitHub Actions", "QA Lab"],
      evidenceTeaser: "Latest Playwright suite run — see the real result",
      linkedin: "LinkedIn",
      contact: "Contact",
      opsSubtitle: "What I can demonstrate",
      opsDesc1: "Main flows tested in a real browser.",
      opsDesc2: "API mocks for success, empty and error states.",
      opsDesc3: "Clear evidence for bugs and regressions.",
      opsDesc4: "AI used with human review for study and documentation.",
    },
    toolsStripLabel: "Technologies &\nTools",
    about: {
      kicker: "About Me",
      titleLine: "in QA.",
      lead: "I bring over a decade in operations, technical support, and leadership before moving into QA — including managing a full team. That background gave me priority judgment under pressure, structured problem investigation, and direct communication with technical and non-technical teams.",
      narrative: "Today I apply that to functional, exploratory, and regression testing, API validation, and defect investigation. Automation, tools, and stack are right below — this section is about how I think QA, not what I use.",
      highlights: [],
    },
    automation: {
      kicker: "Automation",
      benefit1: "Main flows tested in a real browser",
      benefit2: "API mocking for success, empty and error states",
      benefit3: "Evidence organized for technical review",
      title: "Applied Playwright automation",
      lead: "I use automation to validate real flows, simulate API responses, and document evidence. The focus is practical work, clear scope, and technical progress.",
      evidenceTitle: "Latest real run of this suite",
      evidenceMeta: "Generated straight from the test results — no separate page, the summary sits right next to what it tests.",
      statLabelTotal: "Tests passing",
      statLabelSuites: "Suites",
      statLabelFailed: "Failures",
      coverageTitle: "What this suite covers",
      sandboxTitle: "Interactive sandbox",
      sandboxDesc: "A self-built environment to practice login, filters, and API simulation (success, empty, error) without depending on a real backend.",
      sandboxLinkLabel: "Try the sandbox →",
      honestText: "I'm still evolving in automation — this suite documents that process, not full coverage or a finished product.",
      statusLabels: {
        passed: "Passed",
        failed: "Failed",
        attention: "Attention",
        "not-run": "Not run",
      },
      loadingLabel: "Loading…",
      items: [
        {
          label: "Playwright E2E",
          title: "Automated real flows",
          description: "Page navigation, clicks, filters, login, empty state, API error, and visual validations with Playwright.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "API Validation",
          title: "Controlled API simulation",
          description: "Mocks used to test success, 500 errors, and empty responses without depending on a real backend.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "Regression Testing",
          title: "Coverage against regressions",
          description: "Tests organized to protect links, language switching, images, responsiveness, and Sandbox behavior.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 14.93-4M20 12a8 8 0 0 1-14.93 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18 4l2 4-4-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          label: "AI with review",
          title: "Support for studying and documentation",
          description: "AI support for organizing scenarios, reviewing copy, and accelerating study, with human review.",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M9 17.5c.83.33 1.67.5 3 .5s2.17-.17 3-.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
        },
      ],
    },
    ecosystem: {
      kicker: "Stack",
      title: "QA stack in practice",
      lead: "Tools I use or am consolidating through personal projects and applied study.",
      note: "Stack in progress, focused on real understanding before expanding the tool list.",
      groups: [
        {
          title: "QA & Analysis",
          description: "Techniques to plan scenarios, reproduce bugs, and validate expected behavior.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M21 21l-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"],
        },
        {
          title: "Automation",
          description: "Automation applied to screen flows, UI states, and E2E validations.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"],
        },
        {
          title: "API & Systems",
          description: "REST API tests, payloads, status codes, integrations, and troubleshooting.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"],
        },
        {
          title: "CI/CD & DevOps",
          description: "Automated check execution to make test results visible.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8h6l-5 4 2 6-6-4-6 4 2-6L3 8h6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          items: ["GitHub Actions", "CI/CD Pipelines", "Jenkins", "GitHub Pages", "Deploy Automation"],
        },
        {
          title: "Workflow & Collaboration",
          description: "Task management, documentation and collaboration for efficiency and alignment.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="9" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 18c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 14c1.8.3 4 1.4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          items: ["Jira", "JQL", "Git", "GitHub", "Agile", "Documentation"],
        },
        {
          title: "Web Foundations",
          description: "Fundamentals and best practices for building, testing and debugging web apps.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" stroke="currentColor" stroke-width="1.5"/></svg>',
          items: ["HTML", "CSS", "Responsive Testing", "Front-end Debugging"],
        },
      ],
    },
    projects: {
      kicker: "Projects",
      title: "QA Projects",
      lead: "Personal projects used to demonstrate manual testing, Playwright automation, API mocking, and evidence.",
      note: "Projects evolving as I advance in study and QA job applications.",
      inDev: "In development",
      // with a single project listed, filtering serves no purpose — the control is hidden (see applyLanguage)
      filters: [],
      items: [
        {
          category: "portfolio",
          type: "Personal portfolio",
          title: "Rapha.QA — Portfolio",
          description: "Bilingual portfolio focused on QA, practical projects, CV, GitHub, LinkedIn, and technical evidence.",
          stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
          image: "",
          imageAlt: "",
          panelLabel: "Portfolio",
          coverSub: "QA Portfolio",
          url: "https://github.com/RaphaCastilho/Portfolio",
          linkLabel: "View repository",
          liveUrl: "https://raphacastilho.github.io/Portfolio",
        },
      ],
    },
    experience: {
      kicker: "Experience",
      titleSpan1: "operations",
      titleSpan2: "QA.",
      title: "My path into QA.",
      lead: "I come from support, operations, and systems analysis, and now apply that background to functional testing, API Testing, bug documentation, and Playwright automation.",
      skill1: "Incident investigation",
      skill2: "Systems analysis",
      skill3: "Operations and metrics",
      skill4: "Testing and automation",
      note: "QA-focused transition, with personal projects built to demonstrate practical progress.",
      items: [
        {
          company: "Independent Consultant",
          period: "Jan/2025 — Present",
          role: "Personal QA projects",
          badges: ["Playwright", "API Testing", "Postman", "GitHub Actions"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          bullets: [
            "E2E automation with Playwright in a personal project",
            "Functional, regression, and REST API testing with Postman",
            "Bug investigation and documentation",
            "Evidence organization for technical review",
          ],
        },
        {
          company: "Brooks Hamburgueria",
          period: "2019 — 2025",
          role: "Operational Coordinator",
          badges: ["Operations", "Indicators", "Processes", "Leadership"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          bullets: [
            "Operations management and critical routines",
            "Indicator analysis and continuous improvement",
            "Process structuring and standardization",
            "Team leadership and training",
          ],
        },
        {
          company: "LINX",
          period: "2016 — 2019",
          role: "L4 Support Engineer",
          badges: ["Enterprise", "Support", "Systems", "Logs"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          bullets: [
            "Investigation and resolution of critical incidents",
            "Advanced troubleshooting and log analysis",
            "Fault diagnosis in complex systems",
            "Support for development teams",
          ],
        },
        {
          company: "Kairus Tecnologia",
          period: "2014 — 2016",
          role: "Operations & Systems Analyst",
          badges: ["SaaS", "Operations", "Systems", "Support"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          bullets: [
            "SaaS systems and services monitoring",
            "Workflow analysis and improvement identification",
            "Technical support for internal users",
            "Documentation and process control",
          ],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      titleSpan: "together.",
      title: "Let's build quality together.",
      lead: "Open to remote CLT or PJ opportunities in Junior/Mid-level QA, manual testing, API Testing, and Playwright automation.",
      perk1: "Immediate availability",
      perk2: "100% remote",
      perk3: "Response within 24h",
      channelsLabel: "Choose the best channel to connect",
      emailDesc: "Send a message",
      linkedinDesc: "Let's connect",
      githubDesc: "View my projects",
      cvDesc: "Download CV",
      ctaEmail: "Send e-mail",
      ctaMessage: "Send message",
      barTitle: "Focused on QA, APIs, and Playwright automation.",
      barSub: "Personal project available to demonstrate my validation process.",
      statusLabel: "Available for new challenges",
      modalEyebrow: "Contact",
      modalTitle: "Send a message",
      modalLabelName: "Name",
      modalLabelEmail: "E-mail",
      modalLabelSubject: "Subject",
      modalLabelMessage: "Message",
      modalPlaceholderName: "Your name",
      modalPlaceholderSubject: "What opportunity is this about?",
      modalPlaceholderMessage: "Briefly describe the opportunity...",
      modalSubmit: "Send message",
      button: "Send e-mail",
    },
    footer: {
      home: "Home",
      automation: "Automation",
      contact: "Contact",
      copy: "© Rapha.QA 2026 - QA Automation & API Testing",
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
  "API Testing": "bx-link",
  "Postman": "bx-cloud-upload",
  "GitHub Actions": "bxl-github",
  "QA Lab": "bx-layout",
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
  const chips = (group.items || []).map(i => `<span>${escapeHtml(i)}</span>`).join("");
  return `
    <article class="eco-card">
      <div class="eco-card-header">
        <div class="eco-card-icon">${group.icon || ""}</div>
        <h3>${escapeHtml(group.title)}</h3>
      </div>
      <p>${escapeHtml(group.description || "")}</p>
      <div class="eco-chips">${chips}</div>
    </article>
  `;
}

const githubIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.4c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.13 20.64 22 16.79 22 12.25 22 6.59 17.52 2 12 2z"/></svg>';
const externalIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderProject(project) {
  const imageMarkup = project.image
    ? `<picture>
        <source srcset="${escapeHtml(project.image.replace(/\.(png|jpe?g)$/i, ".webp"))}" type="image/webp" />
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" />
       </picture>`
    : `<div class="project-cover-text" aria-hidden="true">
        <span class="proj-cover-eyebrow">${escapeHtml(project.panelLabel)}</span>
        <strong class="proj-cover-title">${escapeHtml(project.title)}</strong>
        <span class="proj-cover-sub">${escapeHtml(project.coverSub || "Analista de QA")}</span>
        <div class="proj-cover-divider"></div>
       </div>`;

  const visualClass = project.image ? "project-visual" : "project-visual project-visual-dark";

  const githubLink = project.url
    ? `<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" class="proj-link">${githubIcon}${escapeHtml(project.linkLabel || "GitHub")}</a>`
    : "";

  const isExternalLiveUrl = /^https?:\/\//i.test(project.liveUrl || "");
  const liveAttrs = isExternalLiveUrl ? ' target="_blank" rel="noopener noreferrer"' : "";
  const liveLink = project.liveUrl
    ? `<a href="${escapeHtml(project.liveUrl)}"${liveAttrs} class="proj-link proj-link-live">${escapeHtml(project.liveLabel || "Live Demo")} ${externalIcon}</a>`
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
  const badges = (item.badges || []).map(b => `<span>${escapeHtml(b)}</span>`).join("");
  const bullets = item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");

  return `
    <article class="exp-card">
      <div class="exp-card-icon" aria-hidden="true">
        ${item.icon || '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/></svg>'}
      </div>
      <div class="exp-card-body">
        <div class="exp-card-top">
          <div class="exp-card-meta">
            <span class="exp-period">${escapeHtml(item.period)}</span>
            <h3 class="exp-role">${escapeHtml(item.role)}</h3>
            ${item.company ? `<span class="exp-company">${escapeHtml(item.company)}</span>` : ""}
            <div class="exp-badges">${badges}</div>
          </div>
          <ul class="exp-bullets">${bullets}</ul>
        </div>
      </div>
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

let evidenceData = null;

function renderEvidenceStatus(lang) {
  const pill = byId("evidence-status");
  if (!pill) return;

  const t = content[lang] || content["pt-BR"];
  const labels = t.automation.statusLabels || {};

  if (!evidenceData) {
    pill.textContent = t.automation.loadingLabel || "…";
    pill.className = "status-pill";
    return;
  }

  const status = evidenceData.status || "not-run";
  pill.textContent = labels[status] || status;
  pill.className = `status-pill ${status}`;
}

function renderEvidenceData(data) {
  evidenceData = data;

  const summary = data.summary || { total: 0, passed: 0, failed: 0 };
  setText("evidence-stat-total", `${summary.passed ?? 0}/${summary.total ?? 0}`);
  setText("evidence-stat-suites", String((data.suites || []).length));
  setText("evidence-stat-failed", String(summary.failed ?? 0));

  const list = byId("evidence-coverage-list");
  if (list) {
    list.innerHTML = (data.coverage || [])
      .slice(0, 5)
      .map((line) => `<li>${escapeHtml(line)}</li>`)
      .join("");
  }

  renderEvidenceStatus(document.documentElement.lang || "pt-BR");
}

function loadEvidence() {
  const fallback = {
    status: "not-run",
    summary: { total: 0, passed: 0, failed: 0, skipped: 0, flaky: 0 },
    coverage: [],
    suites: [],
  };

  fetch("./qa-lab/results/latest.json", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : fallback))
    .then(renderEvidenceData)
    .catch(() => renderEvidenceData(fallback));
}

function applyLanguage(lang) {
  const active = content[lang] ? lang : "pt-BR";
  const t = content[active];

  document.documentElement.lang = active;
  saveToLocalStorage("siteLang", active);

  if (t.metaTitle) document.title = t.metaTitle;

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
  setText("ops-subtitle", t.hero.opsSubtitle);
  setText("ops-desc-1", t.hero.opsDesc1);
  setText("ops-desc-2", t.hero.opsDesc2);
  setText("ops-desc-3", t.hero.opsDesc3);
  setText("ops-desc-4", t.hero.opsDesc4);
  setText("hero-evidence-teaser-text", t.hero.evidenceTeaser);
  setText("cv-download", t.cv.downloadLabel);
  setHref("cv-download", t.cv.pdf);
  setText("cv-web", t.cv.webLabel);
  setHref("cv-web", t.cv.web);
  setText("linkedin-cta", t.hero.linkedin);
  setText("contact-cta", t.hero.contact);

  // tools strip
  const toolsLabel = byId("tools-strip-label");
  if (toolsLabel) toolsLabel.innerHTML = t.toolsStripLabel.replace("\n", "<br />");

  // about
  setText("about-kicker", t.about.kicker);
  setText("about-lead", t.about.lead);
  if (t.about.titleLine) setText("about-title-span", t.about.titleLine);
  setText("about-narrative", t.about.narrative);

  // automation
  setText("auto-kicker", t.automation.kicker);
  setText("automation-title", t.automation.title);
  setText("automation-lead", t.automation.lead);
  setText("auto-benefit-1", t.automation.benefit1);
  setText("auto-benefit-2", t.automation.benefit2);
  setText("auto-benefit-3", t.automation.benefit3);

  // automation — evidence block
  setText("evidence-title", t.automation.evidenceTitle);
  setText("evidence-meta", t.automation.evidenceMeta);
  setText("evidence-label-total", t.automation.statLabelTotal);
  setText("evidence-label-suites", t.automation.statLabelSuites);
  setText("evidence-label-failed", t.automation.statLabelFailed);
  setText("evidence-coverage-title", t.automation.coverageTitle);
  setText("evidence-sandbox-title", t.automation.sandboxTitle);
  setText("evidence-sandbox-desc", t.automation.sandboxDesc);
  setText("evidence-sandbox-link", t.automation.sandboxLinkLabel);
  setText("evidence-honest-text", t.automation.honestText);
  renderEvidenceStatus(active);

  // ecosystem
  setText("eco-kicker", t.ecosystem.kicker);
  setText("ecosystem-title", t.ecosystem.title);
  setText("ecosystem-lead", t.ecosystem.lead);

  // projects
  setText("projects-kicker", t.projects.kicker);
  setText("projects-title", t.projects.title);
  setText("projects-lead", t.projects.lead);

  // experience
  setText("exp-kicker", t.experience.kicker);
  setText("experience-title", t.experience.title);
  setText("experience-lead", t.experience.lead);
  setText("exp-skill-1", t.experience.skill1);
  setText("exp-skill-2", t.experience.skill2);
  setText("exp-skill-3", t.experience.skill3);
  setText("exp-skill-4", t.experience.skill4);

  // contact
  setText("contact-kicker", t.contact.kicker);
  setText("contact-title", t.contact.title);
  setText("contact-lead", t.contact.lead);
  setText("contact-perk-1", t.contact.perk1);
  setText("contact-perk-2", t.contact.perk2);
  setText("contact-perk-3", t.contact.perk3);
  setText("contact-channels-label", t.contact.channelsLabel);
  setText("contact-email-desc", t.contact.emailDesc);
  setText("contact-linkedin-desc", t.contact.linkedinDesc);
  setText("contact-github-desc", t.contact.githubDesc);
  setText("contact-cv-desc", t.contact.cvDesc);
  setText("contact-bar-title", t.contact.barTitle);
  setText("contact-bar-sub", t.contact.barSub);
  setText("contact-status-label", t.contact.statusLabel);
  // modal
  setText("modal-eyebrow", t.contact.modalEyebrow);
  setText("modal-title", t.contact.modalTitle);
  setText("modal-submit-label", t.contact.modalSubmit);
  setText("contact-cta-message", t.contact.ctaMessage);
  setHref("cv-download", t.cv.pdf);

  // about title - rebuild with line
  const aboutTitleEl = byId("about-title");
  if (aboutTitleEl) {
    const lang = document.documentElement.lang;
    if (lang === "en-US") {
      aboutTitleEl.innerHTML = 'How I work<br>in practice<br><span id="about-title-span">' + escapeHtml(t.about.titleLine) + '</span>';
    } else {
      aboutTitleEl.innerHTML = 'Como atuo<br>na prática<br><span id="about-title-span">' + escapeHtml(t.about.titleLine) + '</span>';
    }
  }

  updateAboutHighlights(t.about.highlights);
  renderList("automation-grid", t.automation.items, renderAutomationItem);
  renderList("ecosystem-grid", t.ecosystem.groups, renderEcosystemGroup);
  renderList("project-filters", t.projects.filters, renderProjectFilter);
  const filtersContainer = byId("project-filters");
  if (filtersContainer) filtersContainer.hidden = t.projects.filters.length === 0;
  renderList("projects-grid", t.projects.items, renderProject);
  renderList("experience-list", t.experience.items, renderExperienceItem);

  setText("footer-home", t.footer.home);
  setText("footer-projects", t.nav.projects);
  setText("footer-automation", t.footer.automation);
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

  // barra do navegador acompanha o tema exibido (toggle manual, não só o SO)
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) themeColorMeta.content = active === "light" ? "#f3f6fb" : "#080b12";

  saveToLocalStorage("theme", active);
}

function setupContactModal() {
  const modal = byId("contact-modal");
  const openBtn = byId("open-contact-modal");
  const closeBtn = byId("close-contact-modal");
  if (!modal || !openBtn || !closeBtn) return;

  function openModal() {
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
    openBtn.focus();
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) closeModal();
  });
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
  setupContactModal();

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
  loadEvidence();
});
