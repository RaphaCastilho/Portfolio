# Rapha.QA — Portfolio de QA

Portfolio profissional de **Raphael Castilho**, focado em **Analista de QA**, testes funcionais, API Testing e automação Playwright aplicada em projeto próprio.

O objetivo deste repositório é demonstrar um fluxo simples e verificável:

1. O Portfolio é o produto real sob teste.
2. O QA Sandbox simula fluxos controlados de login, filtros e respostas de API.
3. A suíte Playwright valida o comportamento em navegador real.
4. A Home exibe um resumo da última execução a partir de `qa-lab/results/latest.json`.

Site estático, bilíngue (PT-BR / EN-US) e compatível com GitHub Pages.

## Acesso

> **[Ver online](https://raphacastilho.github.io/Portfolio)**

## O que o projeto demonstra

- Posicionamento profissional para QA, sem exagerar experiência.
- Portfolio bilíngue com troca PT-BR / EN-US em tempo real.
- Links de CV por idioma, GitHub, LinkedIn e canais de contato.
- QA Sandbox próprio para praticar login, filtros, estado vazio e erro de API.
- Playwright usando navegador real, API mocking com `page.route`, responsividade e acessibilidade básica.
- Resumo de evidências exibido dentro da Home, ao lado da seção que explica a automação.
- CI com GitHub Actions para rodar testes unitários e E2E em push/PR.
- IA tratada apenas como apoio para estudo, revisão e documentação; a validação técnica continua humana.

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **Base:** HTML, CSS e JavaScript puro
- **Testes:** Node.js `node:test` + Playwright
- **Automação:** Playwright E2E, API mocking, execução desktop/mobile
- **Publicação:** GitHub Pages
- **CI:** GitHub Actions
- **UI:** fontes self-hosted, Boxicons local e SVG inline

## Estrutura

```text
Portfolio/
├── index.html                    # Home, fallback PT-BR e hooks usados pelo script
├── style.css                     # Sistema visual do Portfolio e componentes
├── script.js                     # Conteúdo bilíngue, tema, filtros, projetos e evidências
├── qa-sandbox.html               # Sandbox interativo de QA
├── qa-lab/
│   └── results/latest.json       # Resumo público da última execução Playwright
├── src/
│   ├── cv/                       # CVs publicados em HTML e PDF
│   ├── img/                      # Imagens, bandeiras e favicons
│   └── vendor/                   # Fontes e ícones locais
├── tests/
│   ├── *.test.mjs                # Testes estáticos com Node.js
│   └── e2e/*.spec.js             # Testes Playwright
├── tools/
│   └── update-qa-lab-summary.mjs # Gera latest.json a partir do JSON do Playwright
└── .github/workflows/
    └── portfolio-quality.yml     # Pipeline de qualidade
```

## Currículos

| Idioma | PDF | HTML |
| --- | --- | --- |
| PT-BR | `src/cv/DEV_Rapha_CV_PT.pdf` | `src/cv/DEV_Rapha_CV_PT.html` |
| EN-US | `src/cv/DEV_Rapha_CV_EN.pdf` | `src/cv/DEV_Rapha_CV_EN.html` |

Os caminhos são relativos e case-sensitive, o que é importante para GitHub Pages.

## Como rodar localmente

```bash
npm install
npm run serve
```

Depois abra:

```text
http://127.0.0.1:3000/
http://127.0.0.1:3000/qa-sandbox.html
```

Abrir `index.html` direto no navegador funciona para leitura básica, mas o bloco de evidências usa `fetch` para ler `qa-lab/results/latest.json`; por isso o servidor local é o caminho recomendado.

## Como testar

```bash
npm test          # testes estáticos: estrutura, assets, CVs e posicionamento
npm run test:e2e  # testes Playwright em Chromium desktop e mobile
npm run qa:run    # roda E2E e atualiza qa-lab/results/latest.json
```

O workflow `.github/workflows/portfolio-quality.yml` executa os testes no GitHub Actions e publica os relatórios como artifacts. O arquivo `qa-lab/results/latest.json` precisa ser regenerado e commitado quando a suíte Playwright mudar, porque o CI não commita resultados automaticamente.

## Cobertura atual

A suíte cobre:

- Home do Portfolio e seções principais.
- Links de GitHub, LinkedIn, CV e QA Sandbox.
- Troca de idioma PT-BR / EN-US.
- Carregamento de imagens locais.
- Resumo de evidências na Home.
- Login, filtros, estado vazio, logout e erro 500 no QA Sandbox.
- API mocking com `page.route` e `route.fulfill`.
- Renderização segura de conteúdo retornado por mock/API.
- Ausência de overflow horizontal em mobile, tablet e desktop.
- Acessibilidade básica: idioma da página, navegação nomeada e labels em formulário.

## Manutenção

Para editar textos bilíngues, regenerar PDFs de CV, entender os testes e seguir o fluxo seguro de alteração, veja [docs/maintenance.md](docs/maintenance.md).

## Contato

- LinkedIn: [linkedin.com/in/raphael-castilho](https://www.linkedin.com/in/raphael-castilho/)
- GitHub: [github.com/RaphaCastilho](https://github.com/RaphaCastilho)
- Email: castilho_raphael@hotmail.com
