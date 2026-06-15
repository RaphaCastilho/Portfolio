# DEV.Rapha — Quality Engineering Portfolio

Portfólio profissional de **Raphael Castilho**, focado em **Quality Engineering, Playwright Automation, Operational Systems, validação de API e fluxos modernos de QA**.

Site estático, bilíngue (PT-BR / EN-US) e compatível com GitHub Pages.

## Acesso

> **[Ver online →](https://raphacastilho.github.io/Portfolio)**

## Funcionalidades

- **Hero command center** comunicando Quality Engineering, Automation e Operational Systems
- **Bilíngue PT-BR / EN-US** com troca de idioma em tempo real (`html.lang`, textos, labels, ARIA)
- **CTA de CV por idioma**: o botão principal aponta para o PDF do idioma ativo; link secundário abre a versão web (HTML)
- **CVs publicados em HTML e PDF** (PT-BR e EN-US)
- Seções: Perfil Operacional, Automation Engineering, Ecossistema Técnico, Sistemas/Projetos, Experiência e Contato
- **Filtros de projeto** por QA Systems / Automation / Web Foundations (MixItUp)
- **Formulário de contato** via [FormSubmit](https://formsubmit.co/)
- **Tema dark/light** com persistência (direção principal: dark enterprise)
- **Smoke tests estáticos** com Node.js (`node:test`)

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **Tipografia:** Inter (Google Fonts)
- **Ícones:** Boxicons
- **Filtro de projetos:** MixItUp
- **Testes:** Node.js built-in test runner (sem dependências)

## Estrutura

```
Portfolio/
├── index.html              # Estrutura semântica + conteúdo estático de fallback (PT-BR)
├── style.css               # Sistema visual dark enterprise / operational UI
├── script.js               # Modelo de conteúdo bilíngue, toggle, CTAs, render das seções
├── mixitup.min.js          # Lib de filtro de projetos (vendor)
├── package.json            # Script de teste (npm test)
├── src/
│   ├── cv/                 # Currículos publicados (HTML + PDF, PT e EN)
│   │   ├── DEV_Rapha_CV_PT.html
│   │   ├── DEV_Rapha_CV_PT.pdf
│   │   ├── DEV_Rapha_CV_EN.html
│   │   └── DEV_Rapha_CV_EN.pdf
│   └── img/                # Imagens, bandeiras e screenshots de projeto
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

Roda os smoke tests estáticos (estrutura das seções, remoção do posicionamento antigo, existência de assets locais, validade dos PDFs de CV e consistência de idioma dos CVs).

## Manutenção

Para editar textos bilíngues, regenerar os PDFs a partir dos HTMLs, entender os testes e o fluxo seguro de alteração, veja **[docs/maintenance.md](docs/maintenance.md)**.

## Compatibilidade GitHub Pages

Site 100% estático. Servido em `https://<usuario>.github.io/Portfolio/`, todos os caminhos são relativos (`src/cv/...`, `style.css`, `script.js`). Como o GitHub Pages roda em Linux (case-sensitive), os nomes de arquivo devem bater exatamente com as referências em `script.js` e `index.html`. Detalhes em [docs/maintenance.md](docs/maintenance.md).

## Contato

- LinkedIn: [linkedin.com/in/raphael-castilho](https://www.linkedin.com/in/raphael-castilho/)
- GitHub: [github.com/RaphaCastilho](https://github.com/RaphaCastilho)
- Email: Castilho_raphael@hotmail.com
