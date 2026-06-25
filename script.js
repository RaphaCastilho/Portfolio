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
      opsSubtitle: "O que eu entrego",
      opsDesc1: "Cobertura de fluxos críticos e jornadas completas.",
      opsDesc2: "Validações de contrato, regras e integrações.",
      opsDesc3: "Análise de causa raiz e melhoria contínua.",
      opsDesc4: "Automação inteligente para acelerar entregas.",
      metricLabel1: "testes",
      metricLabel2: "suítes",
      metricLabel3: "projetos live",
      metricLabel4: "ativo",
    },
    toolsStripLabel: "Tecnologias e\nFerramentas",
    about: {
      kicker: "Sobre Mim",
      titleLine: "de qualidade.",
      lead: "Minha experiência combina QA, automação, investigação de falhas, análise operacional e colaboração multidisciplinar para aumentar a confiabilidade das entregas e reduzir riscos antes do release.",
      cardTitle1: "Investigação",
      cardDesc1: "Investigação e reprodução de bugs complexos em aplicações web corporativas. Isolamento de causa raiz e documentação clara para acelerar a resolução.",
      cardTitle2: "Validação",
      cardDesc2: "Validação de fluxos funcionais, regressão, estados de UI e integrações entre sistemas. Garantia de que o produto entrega o que foi planejado, em todas as camadas.",
      cardTitle3: "Colaboração",
      cardDesc3: "Comunicação técnica eficiente entre suporte, produto, QA e desenvolvimento. Trabalho conjunto para entender, priorizar e resolver problemas com agilidade.",
      cardTitle4: "Melhoria Contínua",
      cardDesc4: "Mentalidade orientada a dados, rastreabilidade, estabilidade e qualidade contínua. Processos e automações que evoluem junto com o produto e com o time.",
      highlights: [],
    },
    automation: {
      kicker: "Automação",
      benefit1: "Cobertura inteligente dos fluxos críticos",
      benefit2: "Feedback rápido para times de desenvolvimento",
      benefit3: "Qualidade contínua em cada etapa do ciclo",
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
      kicker: "Stack",
      title: "Ecossistema Técnico",
      lead: "Ferramentas organizadas por capacidade operacional, não por lista genérica de ferramentas.",
      note: "Stack em constante evolução para acompanhar tecnologia e necessidades do negócio.",
      groups: [
        {
          title: "QA & Analysis",
          description: "Estratégias e técnicas para garantir qualidade em todas as camadas do produto.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M21 21l-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"],
        },
        {
          title: "Automation",
          description: "Automação de testes e validações para aceleração de ciclos e confiabilidade.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"],
        },
        {
          title: "API & Systems",
          description: "Testes e integração de APIs e sistemas para garantir estabilidade e segurança.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"],
        },
        {
          title: "CI/CD & DevOps",
          description: "Integração contínua e entrega automatizada com qualidade em cada etapa.",
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
      kicker: "Sistemas",
      title: "Sistemas e Projetos",
      lead: "Projetos reposicionados como sistemas de validação, operação e aprendizado técnico aplicado.",
      note: "Mais projetos e experimentos em constante evolução.",
      inDev: "Em desenvolvimento",
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
      kicker: "Experiência",
      titleSpan1: "operações",
      titleSpan2: "qualidade.",
      title: "Minha trajetória em operações e qualidade.",
      lead: "Atuei por anos em operações críticas, suporte e análise de sistemas, evoluindo de ambientes de alta complexidade até me especializar em qualidade de software e automação.",
      skill1: "Investigação de incidentes",
      skill2: "Análise de sistemas",
      skill3: "Operações e indicadores",
      skill4: "Engenharia de qualidade",
      note: "Evolução contínua em qualidade, automação e excelência operacional.",
      items: [
        {
          company: "",
          period: "2025 — Presente",
          role: "QA Engineer",
          badges: ["QA", "Automação", "Playwright", "CI/CD"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          bullets: [
            "Automação de testes E2E com Playwright",
            "Criação de pipelines e integração contínua",
            "Validação de APIs e monitoramento de qualidade",
            "Documentação técnica e revisão de cenários",
          ],
        },
        {
          company: "Brooks Hamburgueria",
          period: "2019 — 2025",
          role: "Coordenador Operacional",
          badges: ["Operações", "Indicadores", "Processos"],
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
      lead: "Estou aberto a novas oportunidades PJ em QA, automação, Quality Engineering e validação de sistemas.",
      perk1: "Disponível para projetos e parcerias",
      perk2: "Atuação 100% remota",
      perk3: "Resposta em até 24h",
      channelsLabel: "Escolha o melhor canal para conversar",
      emailDesc: "Enviar mensagem",
      linkedinDesc: "Vamos nos conectar",
      githubDesc: "Ver meus projetos",
      cvDesc: "Download do CV",
      ctaEmail: "Enviar e-mail",
      ctaMessage: "Enviar mensagem",
      barTitle: "Foco em qualidade, automação e eficiência.",
      barSub: "Pronto para agregar valor ao seu time e aos seus produtos.",
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
      opsSubtitle: "What I deliver",
      opsDesc1: "Coverage of critical flows and complete user journeys.",
      opsDesc2: "Contract validation, rules, and integrations.",
      opsDesc3: "Root cause analysis and continuous improvement.",
      opsDesc4: "Intelligent automation to accelerate delivery.",
      metricLabel1: "tests",
      metricLabel2: "suites",
      metricLabel3: "live projects",
      metricLabel4: "active",
    },
    toolsStripLabel: "Technologies &\nTools",
    about: {
      kicker: "About Me",
      titleLine: "engineering.",
      lead: "My background combines QA, automation, incident investigation, operational analysis, and cross-functional collaboration to increase delivery reliability and reduce risk before release.",
      cardTitle1: "Investigation",
      cardDesc1: "Investigation and reproduction of complex bugs in enterprise web applications. Root cause isolation and clear documentation to speed up resolution.",
      cardTitle2: "Validation",
      cardDesc2: "Validation of functional flows, regression, UI states, and system integrations. Ensuring the product delivers what was planned, across all layers.",
      cardTitle3: "Collaboration",
      cardDesc3: "Efficient technical communication between support, product, QA, and engineering. Working together to understand, prioritize, and resolve issues quickly.",
      cardTitle4: "Continuous Improvement",
      cardDesc4: "Data-driven mindset focused on traceability, stability, and ongoing quality. Processes and automations that evolve alongside the product and the team.",
      highlights: [],
    },
    automation: {
      kicker: "Automation",
      benefit1: "Intelligent coverage of critical flows",
      benefit2: "Fast feedback for development teams",
      benefit3: "Continuous quality at every stage of the cycle",
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
      kicker: "Stack",
      title: "Technical Ecosystem",
      lead: "Tools organized by operational capability, not a generic tool list.",
      note: "Stack constantly evolving to keep up with technology and business needs.",
      groups: [
        {
          title: "QA & Analysis",
          description: "Strategies and techniques to ensure quality across all product layers.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M21 21l-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
          items: ["Functional Testing", "Exploratory Testing", "Bug Investigation", "Regression Testing", "Test Planning"],
        },
        {
          title: "Automation",
          description: "Test and validation automation to accelerate cycles and improve reliability.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          items: ["Playwright", "JavaScript", "TypeScript", "Node.js", "E2E Workflows"],
        },
        {
          title: "API & Systems",
          description: "API and system testing and integration to ensure stability and security.",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          items: ["REST APIs", "API Testing", "Postman", "Chrome DevTools", "Logs", "SQL"],
        },
        {
          title: "CI/CD & DevOps",
          description: "Continuous integration and automated delivery with quality at every step.",
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
      kicker: "Systems",
      title: "Systems and Projects",
      lead: "Projects reframed as validation systems, operational tools, and applied technical learning.",
      note: "More projects and experiments in constant evolution.",
      inDev: "In development",
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
      kicker: "Experience",
      titleSpan1: "operations",
      titleSpan2: "quality.",
      title: "My journey through operations and quality.",
      lead: "I spent years in critical operations, support, and systems analysis, evolving from high-complexity environments to specializing in software quality and automation.",
      skill1: "Incident investigation",
      skill2: "Systems analysis",
      skill3: "Operations and metrics",
      skill4: "Quality engineering",
      note: "Continuous evolution in quality, automation, and operational excellence.",
      items: [
        {
          company: "",
          period: "2025 — Present",
          role: "QA Engineer",
          badges: ["QA", "Automation", "Playwright", "CI/CD"],
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
          bullets: [
            "E2E test automation with Playwright",
            "Pipeline creation and continuous integration",
            "API validation and quality monitoring",
            "Technical documentation and scenario review",
          ],
        },
        {
          company: "Brooks Hamburgueria",
          period: "2019 — 2025",
          role: "Operational Coordinator",
          badges: ["Operations", "Indicators", "Processes"],
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
      lead: "Open to freelance opportunities in QA, automation, Quality Engineering, and system validation.",
      perk1: "Available for projects and partnerships",
      perk2: "100% remote",
      perk3: "Response within 24h",
      channelsLabel: "Choose the best channel to connect",
      emailDesc: "Send a message",
      linkedinDesc: "Let's connect",
      githubDesc: "View my projects",
      cvDesc: "Download CV",
      ctaEmail: "Send e-mail",
      ctaMessage: "Send message",
      barTitle: "Focused on quality, automation and efficiency.",
      barSub: "Ready to add value to your team and your products.",
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
  setText("ops-subtitle", t.hero.opsSubtitle);
  setText("ops-desc-1", t.hero.opsDesc1);
  setText("ops-desc-2", t.hero.opsDesc2);
  setText("ops-desc-3", t.hero.opsDesc3);
  setText("ops-desc-4", t.hero.opsDesc4);
  setText("metric-label-1", t.hero.metricLabel1);
  setText("metric-label-2", t.hero.metricLabel2);
  setText("metric-label-3", t.hero.metricLabel3);
  setText("metric-label-4", t.hero.metricLabel4);
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
  setText("about-card-title-1", t.about.cardTitle1);
  setText("about-card-desc-1", t.about.cardDesc1);
  setText("about-card-title-2", t.about.cardTitle2);
  setText("about-card-desc-2", t.about.cardDesc2);
  setText("about-card-title-3", t.about.cardTitle3);
  setText("about-card-desc-3", t.about.cardDesc3);
  setText("about-card-title-4", t.about.cardTitle4);
  setText("about-card-desc-4", t.about.cardDesc4);

  // automation
  setText("auto-kicker", t.automation.kicker);
  setText("automation-lead", t.automation.lead);
  setText("auto-benefit-1", t.automation.benefit1);
  setText("auto-benefit-2", t.automation.benefit2);
  setText("auto-benefit-3", t.automation.benefit3);

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
      aboutTitleEl.innerHTML = 'How I work<br>in quality<br><span id="about-title-span">' + escapeHtml(t.about.titleLine) + '</span>';
    } else {
      aboutTitleEl.innerHTML = 'Como atuo<br>na engenharia<br><span id="about-title-span">' + escapeHtml(t.about.titleLine) + '</span>';
    }
  }

  updateAboutHighlights(t.about.highlights);
  renderList("automation-grid", t.automation.items, renderAutomationItem);
  renderList("ecosystem-grid", t.ecosystem.groups, renderEcosystemGroup);
  renderList("project-filters", t.projects.filters, renderProjectFilter);
  renderList("projects-grid", t.projects.items, renderProject);
  renderList("experience-list", t.experience.items, renderExperienceItem);

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
});
