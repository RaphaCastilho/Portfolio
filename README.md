# Rapha.QA — Quality Engineering Portfolio

Portfólio profissional de **Raphael Castilho**, focado em **Quality Engineering, Playwright Automation, Operational Systems, validação de API e fluxos modernos de QA**.

Site estático, bilíngue (PT-BR / EN-US) e compatível com GitHub Pages.

## Acesso

> **[Ver online →](https://raphacastilho.github.io/Portfolio)**

## Funcionalidades

- **Hero command center** com painel "Quality Ops" e métricas operacionais (testes, suítes, projetos live, CI/CD)
- **Bilíngue PT-BR / EN-US** com troca de idioma em tempo real (`html.lang`, textos, labels, ARIA)
- **CTA de CV por idioma**: o botão principal aponta para o PDF do idioma ativo; link secundário abre a versão web (HTML)
- **CVs publicados em HTML e PDF** (PT-BR e EN-US)
- **Favicon personalizado** com identidade QA (SVG + PNGs em todos os tamanhos: 16, 32, 48, 64, 128, 180, 192, 512px)
- **Sistema visual dark enterprise** — Operational Intelligence Platform com gradientes sutis, glow em cards e borders premium
- **Tipografia dupla:** Inter para corpo de texto, Geist para títulos, botões e logo
- **Tools strip** com ícones SVG inline das principais tecnologias
- Seções: Hero, Perfil Operacional, Automation Engineering, Ecossistema Técnico (Stack), Sistemas/Projetos, Experiência e Contato
- **Seção Sobre** — layout 2 colunas, grid 2×2 com ícones SVG
- **Seção Automation** — layout 2 colunas, grid 2×2, lista de benefícios
- **Seção Stack** — header centralizado, grid 3×2, cards com ícone + descrição + chips
- **Seção Experiência** — layout 2 colunas, timeline vertical, cards com badges e bullets
- **Seção Projetos** — header + filtros inline, cards 3 colunas altura fixa, rodapé alinhado; links sem repositório exibem estado "em breve"
- **Seção Contato** — CTA moderno, grid de canais 2×2, barra de status, modal de formulário no estilo do portfólio
- **Filtros de projeto** por QA Systems / Automation / Web Foundations (MixItUp)
- **Tema dark/light** com persistência (direção principal: dark enterprise)
- **Smoke tests estáticos** com Node.js (`node:test`)

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **Tipografia:** Geist + Inter (Google Fonts)
- **Ícones:** Boxicons + SVG inline
- **Filtro de projetos:** MixItUp
- **Testes:** Node.js built-in test runner (sem dependências)

## Estrutura

```
Portfolio/
├── index.html              # Estrutura semântica + conteúdo estático de fallback (PT-BR)
├── style.css               # Sistema visual dark enterprise / operational UI
├── script.js               # Modelo de conteúdo bilíngue, toggle, CTAs, render das seções
├── mixitup.min.js          # Lib de filtro de projetos (vendor)
├── favicon.svg             # Favicon SVG (identidade QA)
├── site.webmanifest        # Web app manifest
├── package.json            # Script de teste (npm test)
├── src/
│   ├── cv/                 # Currículos publicados (HTML + PDF, PT e EN)
│   │   ├── DEV_Rapha_CV_PT.html
│   │   ├── DEV_Rapha_CV_PT.pdf
│   │   ├── DEV_Rapha_CV_EN.html
│   │   └── DEV_Rapha_CV_EN.pdf
│   └── img/                # Imagens, bandeiras, favicons e screenshots de projeto
│       ├── favicon-16.png … favicon-512.png
│       ├── favicon-180.png (apple-touch-icon)
│       ├── favicon-192.png / favicon-512.png (PWA)
│       ├── brazil-flag.svg
│       ├── united-states-of-america-flag.svg
│       └── qa-lab-dashboard.png
├── tests/
│   ├── static-site.test.mjs  # Estrutura, posicionamento, assets locais, PDFs
│   └── cv-content.test.mjs    # Idioma/consistência dos CVs HTML
└── docs/
    ├── maintenance.md       # Guia de manutenção (conteúdo bilíngue, PDFs, testes, deploy)
    └── superpowers/         # Spec de design e plano de implementação
```

## Currículos (caminhos finais)

| Idioma | PDF (primário p/ recrutador) | HTML (versão web) |
|--------|------------------------------|-------------------|
| PT-BR  | `src/cv/DEV_Rapha_CV_PT.pdf` | `src/cv/DEV_Rapha_CV_PT.html` |
| EN-US  | `src/cv/DEV_Rapha_CV_EN.pdf` | `src/cv/DEV_Rapha_CV_EN.html` |

Os caminhos são relativos e os nomes são **case-sensitive** (importante para GitHub Pages). Eles estão referenciados no modelo de conteúdo de `script.js`.

## Como rodar localmente

Abra `index.html` no navegador (ou use uma extensão como Live Server no VS Code).

## Como testar

```bash
npm test
```

Roda os smoke tests estáticos (estrutura das seções, existência de assets locais, validade dos PDFs de CV e consistência de idioma dos CVs).

## Manutenção

Para editar textos bilíngues, regenerar os PDFs a partir dos HTMLs, entender os testes e o fluxo seguro de alteração, veja **[docs/maintenance.md](docs/maintenance.md)**.

## Compatibilidade GitHub Pages

Site 100% estático. Servido em `https://raphacastilho.github.io/Portfolio/`, todos os caminhos são relativos (`src/cv/...`, `style.css`, `script.js`). Como o GitHub Pages roda em Linux (case-sensitive), os nomes de arquivo devem bater exatamente com as referências em `script.js` e `index.html`. Detalhes em [docs/maintenance.md](docs/maintenance.md).

## Contato

- LinkedIn: [linkedin.com/in/raphael-castilho](https://www.linkedin.com/in/raphael-castilho/)
- GitHub: [github.com/RaphaCastilho](https://github.com/RaphaCastilho)
- Email: castilho_raphael@hotmail.com
