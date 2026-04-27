
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll("header nav a");

  // Toggle menu
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  // Scroll active link
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (scrollY >= offset && scrollY < offset + height) {
        navlinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `header nav a[href="#${id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });

  // Mixitup init
  if (typeof mixitup !== "undefined") {
    mixitup(".portfolio-gallery");
  } else {
    console.warn("MixItUp não foi carregado!");
  }
});

const translations = {
  pt: {
    homeNav: "Início",
    educationNav: "Conhecimento",
    servicesNav: "Serviços",
    portNav: "Portfólio",
    contactNav: "Contato",
    homeTitle: "Oi, sou o <span>Rapha!</span>",
    homeSubtitle: "Eu sou <span></span>",
    homeDescription: `Sou desenvolvedor Frontend em início de carreira, com foco em
    construção de interfaces modernas, funcionais e bem estruturadas.
    <br>Sou proativo, detalhista e com forte capacidade de organização e
    liderança, características que desenvolvi ao longo de experiências
    anteriores em gestão de pessoas e projetos. Valorizo o trabalho em
    equipe, a comunicação clara e o compromisso com prazos e qualidade.`,
    hire: "Contratar",
    educationtitle: "Conhecimento",
    educationtitle1: "Liderança e Gestão de Pessoas",
    educationdescription1:
      "Curso de Liderança e Gestão de Pessoas com foco prático e transformacional, abordando habilidades essenciais como Comunicação, Escuta Ativa, Negociação, Gestão Ágil de Projetos(SCRUM), Produtividade (GTD), Inteligência Emocional, Gestão de Equipes Remotas e Multiculturais, Delegação, Feedback e Motivação.",
    educationtitle2:
      "Negociações de sucesso: estratégias e habilidades essenciais - Universidade de Michigan",
    educationdescription2:
      "Curso prático em Estratégias de Negociação, abordando os quatro estágios principais: planejamento, negociação, criação e execução.",
    educationtitle3: "Desenvolvimento Front-End",
    educationdescription3:
      "Criação de interfaces modernas e responsivas com foco na experiência do usuário, utilizando HTML, CSS e JavaScript. Transformo ideias em designs funcionais, com código limpo e otimizado.",
    educationtitle4: "Desenvolvimento Back-End",
    educationdescription4:
      "Construção de APIs robustas e escaláveis com Node.js e Express, integrando bancos de dados como MongoDB e MySQL. Foco em performance, segurança e arquitetura eficiente para soluções sólidas e modernas.",
    servicestitle: "Serviços",
    servicestitle1: "Desenvolvimento Web",
    servicesdescription1:
      "Criação de sites profissionais, personalizados para apresentar sua marca ou vender seus produtos.<br> Sites responsivos, rápidos e focados em gerar resultado.<br> <strong>Sua presença digital</strong>, do jeito que o mercado exige!",
    servicestitle2: "Desenvolvimento de App Web",
    servicesdescription2:
      "Aplicativos web responsivos, com foco na melhor experiência para o usuário.<br> Soluções práticas e acessíveis para transformar ideias em plataformas digitais que funcionam em qualquer dispositivo.",
    servicestitle3: "Landing Pages e Sites de Vendas",
    servicesdescription3:
      "Landing Pages estratégicas, pensadas para converter visitantes em clientes.<br>Layouts modernos, rápidos e com foco total em gerar vendas e oportunidades para o seu negócio.",
    servicestitle4: "Consultoria e Suporte Técnico",
    servicesdescription4:
      "Acompanhamento técnico completo, desde a escolha da melhor solução até a manutenção do seu site ou app.<br> Consultoria personalizada para garantir que sua presença online esteja sempre atualizada e segura.</p>",
    portfoliotitle: "Projetos",
    filterAll: "Todos",
    filterWebpage: "Web Page",
    filterWebapp: "App Web",
    filterQa: "QA & Testing",
    contacttitle: "Entrar em Contato",
    contactname: "Nome Completo",
    contactemail: "Email",
    contactphone: "Telefone",
    contactsubject: "Assunto",
    contactmessage: "Sua Mensagem",
    contactbutton: "Enviar Mensagem",
    footerhome: "Início",
    footerservice: "Serviços",
    footercontact: "Contato",
    footercopy: "© DEV.Rapha 2025 - Todos os direitos reservados",
  },

  en: {
    homeNav: "Home",
    educationNav: "Education",
    servicesNav: "Services",
    portNav: "Portfolio",
    contactNav: "Contact",
    homeTitle: "Hi, I'm <span>Rapha!</span>",
    homeSubtitle: "I'm a <span></span>",
    homeDescription: `I'm a junior Frontend developer focused on building modern, functional, and well-structured interfaces.
    <br>I'm proactive, detail-oriented, and have strong organizational and leadership skills,
    developed through past experience managing people and projects. I value teamwork, clear communication,
    and commitment to deadlines and quality.`,
    hire: "Hire Me",
    educationtitle: "Education",
    educationtitle1: "Leadership and People Management",
    educationdescription1:
      "Leadership and People Management course with a practical and transformational focus, covering essential skills such as Communication, Active Listening, Negotiation, Agile Project Management (SCRUM), Productivity (GTD), Emotional Intelligence, Management of Remote and Multicultural Teams, Delegation, Feedback and Motivation.",
    educationtitle2:
      "Successful Negotiations: Essential Strategies and Skills - University of Michigan",
    educationdescription2:
      "Practical course in Negotiation Strategies, covering the four main stages: planning, negotiation, creation and execution.",
    educationtitle3: "Front-End Development",
    educationdescription3:
      "Creation of modern and responsive interfaces with a focus on user experience, using HTML, CSS and JavaScript. I transform ideas into functional designs, with clean and optimized code.",
    educationtitle4: "Back-end Development",
    educationdescription4:
      "Building robust and scalable APIs with Node.js and Express, integrating databases such as MongoDB and MySQL. Focus on performance, security and efficient architecture for solid and modern solutions.",
    servicestitle: "Services",
    servicestitle1: "Web Development",
    servicesdescription1:
      "Creation of professional, personalized websites to present your brand or sell your products. Responsive, fast websites focused on generating results. Your digital presence, just the way the market demands!",
    servicestitle2: "App Web - Development",
    servicesdescription2:
      "Responsive web applications, focused on the best user experience. Practical and accessible solutions to transform ideas into digital platforms that work on any device.",
    servicestitle3: "Landing Pages and Sales Sites",
    servicesdescription3:
      "Strategic landing pages designed to convert visitors into customers. Modern, fast layouts with a total focus on generating sales and opportunities for your business.",
    servicestitle4: "Consulting and Technical Support",
    servicesdescription4:
      "Complete technical support, from choosing the best solution to maintaining your website or app. Personalized consultancy to ensure that your online presence is always up to date and secure.",
    portfoliotitle: "Portfolio",
    filterAll: "All",
    filterWebpage: "Web Page",
    filterWebapp: "Web App",
    filterQa: "QA & Testing",
    contacttitle: "Contact Me",
    contactname: "Full Name",
    contactemail: "Email",
    contactphone: "Phone Number",
    contactsubject: "Subject",
    contactmessage: "Your Message",
    contactbutton: "Send Message",
    footerhome: "Home",
    footerservice: "Services",
    footercontact: "Contact",
    footercopy: "© DEV.Rapha 2025 - All rights Reserved",
  },
};


function changeLanguage(lang) {
  const t = translations[lang];
  // menu
  document.getElementById("homenav").innerText = t.homeNav;
  document.getElementById("educationnav").innerText = t.educationNav;
  document.getElementById("servicesnav").innerText = t.servicesNav;
  document.getElementById("portnav").innerText = t.portNav;
  document.getElementById("contactnav").innerText = t.contactNav;
  //menu
  //home
  document.getElementById("hometitle").innerHTML = t.homeTitle;
  document.getElementById("homesubtitle").innerHTML = t.homeSubtitle;
  document.getElementById("homedescription").innerHTML = t.homeDescription;
  document.getElementById("hire").innerHTML = t.hire;
  //home
  //Education
  document.getElementById("educationtitle").innerHTML = t.educationtitle;
  document.getElementById("educationtitle1").innerHTML = t.educationtitle1;
  document.getElementById("educationdescription1").innerHTML =
    t.educationdescription1;
  document.getElementById("educationtitle2").innerHTML = t.educationtitle2;
  document.getElementById("educationdescription2").innerHTML =
    t.educationdescription2;
  document.getElementById("educationtitle3").innerHTML = t.educationtitle3;
  document.getElementById("educationdescription3").innerHTML =
    t.educationdescription3;
  document.getElementById("educationtitle4").innerHTML = t.educationtitle4;
  document.getElementById("educationdescription4").innerHTML =
    t.educationdescription4;
  //Education
  //Services
  document.getElementById("servicestitle").innerHTML = t.servicestitle;
  document.getElementById("servicestitle1").innerHTML = t.servicestitle1;
  document.getElementById("servicesdescription1").innerHTML =
    t.servicesdescription1;
  document.getElementById("servicestitle2").innerHTML = t.servicestitle2;
  document.getElementById("servicesdescription2").innerHTML =
    t.servicesdescription2;
  document.getElementById("servicestitle3").innerHTML = t.servicestitle3;
  document.getElementById("servicesdescription3").innerHTML =
    t.servicesdescription3;
  document.getElementById("servicestitle4").innerHTML = t.servicestitle4;
  document.getElementById("servicesdescription4").innerHTML =
    t.servicesdescription4;
  //Services
  //Portfolio
  document.getElementById("portfoliotitle").innerHTML = t.portfoliotitle;
  //Portfolio
  //Contact
  document.getElementById("contacttitle").innerHTML = t.contacttitle;
  //placeholders
  document
    .getElementById("contactname")
    .setAttribute("placeholder", t.contactname);
  document
    .getElementById("contactemail")
    .setAttribute("placeholder", t.contactemail);
  document
    .getElementById("contactphone")
    .setAttribute("placeholder", t.contactphone);
  document
    .getElementById("contactsubject")
    .setAttribute("placeholder", t.contactsubject);
  document
    .getElementById("contactmessage")
    .setAttribute("placeholder", t.contactmessage);
  //placeholders
  // Botão
  document.getElementById("contactbutton").value = t.contactbutton;
  // Botão
  // Footer
  document.getElementById("footerhome").innerHTML = t.footerhome;
  document.getElementById("footerservice").innerHTML = t.footerservice;
  document.getElementById("footercontact").innerHTML = t.footercontact;
  document.getElementById("footercopy").innerHTML = t.footercopy;
  // Footer
}

// Trocar a bandeira
const langToggle = document.getElementById("lang-toggle");
const langFlag = document.getElementById("lang-flag");
const htmlTag = document.documentElement;

function setLanguage(lang) {
  htmlTag.lang = lang;

  if (lang === "pt-BR") {
    langFlag.src = "src/img/united-states-of-america-flag.svg";
    changeLanguage("pt");
  } else {
    langFlag.src = "src/img/brazil-flag.svg";
    changeLanguage("en");
  }

  // Salva no localStorage
  localStorage.setItem("siteLang", lang);
}

// Quando clicar no botão, alterna
langToggle.addEventListener("click", () => {
  const currentLang = htmlTag.lang;
  const newLang = currentLang === "pt-BR" ? "en-US" : "pt-BR";
  setLanguage(newLang);
});

// Ao carregar o site, verifica se tem linguagem salva
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "pt-BR";
  setLanguage(savedLang);
});

// DARK MODE //
const themeToggle = document.getElementById("theme-toggle");
const themeIconEl = themeToggle.querySelector("i");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    themeIconEl.classList.replace("bx-moon", "bx-sun");
  } else {
    document.body.classList.remove("light");
    themeIconEl.classList.replace("bx-sun", "bx-moon");
  }
  localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("theme") || "dark");
});

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
});
