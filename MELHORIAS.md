# Melhorias — Portfolio (DEV.Rapha)

> Análise realizada em 2026-05-08. Arquivos analisados: `index.html`, `style.css`, `script.js`, `mixitup.min.js`, `src/img/*`.

---

## 🔴 Críticas (bugs, quebras, segurança)

- [ ] **Imagem do card "Playwright + k6" não existe** ⚠️ Pendente: adicionar screenshot do projeto manualmente
  - 📍 Onde: `index.html:290` → `src="src/img/projeto-playwright.PNG"`
  - ❌ Problema: o arquivo `src/img/projeto-playwright.PNG` não existe na pasta. O card exibe imagem quebrada para qualquer visitante, o que parece desleixo — justamente no projeto de QA.
  - ✅ Solução: adicionar a screenshot do projeto Playwright e renomeá-la para `projeto-playwright.png` (minúsculas), ou usar `Projeto-planejador.PNG` que existe mas está órfão.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: alto

- [x] **Links de redes sociais abrem na mesma aba** ✅ 2026-05-08
  - 📍 Onde: `index.html:79-88` (ícones home), `index.html:362-371` (footer)
  - ❌ Problema: os `<a>` do LinkedIn, GitHub e Instagram não têm `target="_blank"` nem `rel="noopener noreferrer"`. O visitante que clicar sai do seu portfólio para sempre — e sem `rel="noopener noreferrer"` há um vetor de segurança (tabnapping).
  - ✅ Solução:
    ```html
    <a href="https://www.linkedin.com/in/raphael-castilho/"
       target="_blank" rel="noopener noreferrer">
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: alto

- [x] **`outline: none` remove foco de teclado em todos os elementos** ✅ 2026-05-08 — substituído por `:focus-visible`
  - 📍 Onde: `style.css:31` → `* { outline: none; }`
  - ❌ Problema: isso apaga visualmente o indicador de foco de botões, links e inputs para usuários que navegam por teclado (incluindo pessoas com deficiência). É uma falha de acessibilidade grave e pode reprovar em auditorias de a11y.
  - ✅ Solução: remover `outline: none` do reset global e criar um estilo de foco explícito para elementos interativos:
    ```css
    :focus-visible {
      outline: 3px solid var(--cor-primaria);
      outline-offset: 3px;
    }
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: alto

- [x] **`innerHTML` para injetar traduções — risco de XSS** ✅ 2026-05-08 — trocado por `textContent` onde não há HTML
  - 📍 Onde: `script.js:178-214` → todas as chamadas `element.innerHTML = t.xxxxx`
  - ❌ Problema: usar `innerHTML` com conteúdo de um objeto externo é um padrão inseguro. Hoje as strings são hardcoded, mas se alguém injetar via extensão de browser ou ataque DOM-based, o código executa. Também é desnecessário para textos puros.
  - ✅ Solução: usar `textContent` para textos sem HTML, e `innerHTML` apenas onde há tags necessárias (ex: `homeTitle` que tem `<span>`):
    ```js
    // Texto puro → textContent
    document.getElementById("homenav").textContent = t.homeNav;
    // Com HTML → innerHTML apenas quando necessário
    document.getElementById("hometitle").innerHTML = t.homeTitle;
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

---

## 🟠 Importantes (UX, acessibilidade, performance)

- [ ] **Sem favicon** ⚠️ Pendente: criar o arquivo `src/img/favicon.svg` e adicionar o `<link>` no HTML
  - 📍 Onde: `index.html` → seção `<head>`, ausente
  - ❌ Problema: a aba do browser exibe o ícone padrão do browser. Em portfólios profissionais isso é um detalhe que conta — o favicon reforça identidade e aparece em favoritos.
  - ✅ Solução: criar um favicon de 32×32px e 16×16px (ou SVG) e adicionar:
    ```html
    <link rel="icon" href="src/img/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="src/img/favicon.png" sizes="32x32" />
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Sem Open Graph e Twitter Card meta tags** ✅ 2026-05-08
  - 📍 Onde: `index.html:4-15` → seção de meta dados
  - ❌ Problema: quando alguém compartilha o link do seu portfólio no LinkedIn, WhatsApp ou Twitter, não aparece preview algum — só o URL bruto. Isso é crítico para um portfólio que você vai compartilhar em vagas.
  - ✅ Solução:
    ```html
    <meta property="og:title" content="DEV.Rapha — Desenvolvedor Web" />
    <meta property="og:description" content="Portfólio de Raphael Castilho, desenvolvedor Frontend focado em interfaces modernas e soluções digitais." />
    <meta property="og:image" content="https://seudominio.com/src/img/og-image.png" />
    <meta property="og:url" content="https://seudominio.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: alto

- [x] **Formulário sem labels de acessibilidade** ✅ 2026-05-08 — adicionado `<label class="sr-only">` + classe `.sr-only` no CSS
  - 📍 Onde: `index.html:312-356` → seção de contato
  - ❌ Problema: os campos do formulário usam apenas `placeholder` como identificação. Leitores de tela não anunciam corretamente campos sem `<label>` associado. Além disso, placeholders somem ao digitar, o que confunde usuários.
  - ✅ Solução: usar `<label>` visualmente oculto (para não quebrar o design) com `class="sr-only"`:
    ```html
    <label for="contactname" class="sr-only">Nome Completo</label>
    <input type="text" id="contactname" name="Nome" placeholder="Nome Completo" />
    ```
    ```css
    .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); }
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Scripts sem `defer` bloqueiam renderização** ✅ 2026-05-08
  - 📍 Onde: `index.html:391-392`
  - ❌ Problema: `<script src="mixitup.min.js">` e `<script src="script.js">` estão no final do body sem `defer`. Apesar de estarem no final (o que mitiga parcialmente), adicionar `defer` é a prática correta e garante melhor pontuação no Lighthouse.
  - ✅ Solução:
    ```html
    <script src="mixitup.min.js" defer></script>
    <script src="script.js" defer></script>
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Google Fonts carregado via `@import` no CSS — mais lento** ✅ 2026-05-08 — movido para `<link>` com `preconnect` no HTML, apenas os 6 pesos usados
  - 📍 Onde: `style.css:2`
  - ❌ Problema: `@import url("https://fonts.googleapis.com/...")` no CSS bloqueia o render até o CSS ser baixado e depois baixar a fonte. O HTML não tem `<link rel="preconnect">` para o Google Fonts, aumentando a latência.
  - ✅ Solução: mover o carregamento da fonte para o HTML com preconnect:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    ```
    E remover o `@import` do CSS. (Nota: você importa todos os 18 pesos da Poppins — usar só os que aparecem no CSS economiza ~30% no tamanho da fonte.)
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Alt da imagem de perfil não é descritivo** ✅ 2026-05-08
  - 📍 Onde: `index.html:100` → `alt="home-img"`
  - ❌ Problema: o `alt` deve descrever o conteúdo para leitores de tela e SEO de imagem. "home-img" não diz nada.
  - ✅ Solução: `alt="Foto de Raphael Castilho, desenvolvedor web"`
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Nome do arquivo da foto de perfil gerado por IA** ✅ 2026-05-08 — renomeado para `foto-perfil.png`
  - 📍 Onde: `index.html:100` e `src/img/aiease_1748015024598.png`
  - ❌ Problema: `aiease_1748015024598.png` expõe que a imagem foi gerada pela ferramenta AiEase. Prejudica SEO de imagem e parece descuidado no código-fonte.
  - ✅ Solução: renomear para `foto-perfil.png` ou `rapha-profile.png`.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **Sem feedback visual ao enviar o formulário** ✅ 2026-05-08 — adicionado `_next`, `_captcha` e `_subject` via formsubmit.co
  - 📍 Onde: `index.html:306-358` + `script.js` (ausente)
  - ❌ Problema: ao clicar em "Enviar Mensagem", o formsubmit.co faz um redirect sem aviso. O usuário não sabe se enviou, se deu erro, ou o que aconteceu. Experiência ruim.
  - ✅ Solução: adicionar um honeypot e usar o modo AJAX do formsubmit.co, ou adicionar `_next` para redirecionar para uma página de sucesso:
    ```html
    <input type="hidden" name="_next" value="https://seusite.com/obrigado.html" />
    <input type="hidden" name="_captcha" value="false" />
    ```
  - ⏱️ Esforço: médio
  - 🎯 Impacto: alto

---

## 🟡 Recomendadas (refatoração, organização, boas práticas)

- [x] **Duas chamadas `DOMContentLoaded` separadas no mesmo script** ✅ 2026-05-08 — consolidadas em uma única chamada
  - 📍 Onde: `script.js:2` e `script.js:274`
  - ❌ Problema: o código divide a inicialização em dois listeners `DOMContentLoaded` — um para menu/scroll, outro para idioma/tema. Funciona, mas é confuso e dificulta manutenção.
  - ✅ Solução: consolidar em um único listener:
    ```js
    document.addEventListener("DOMContentLoaded", () => {
      initMenu();
      initScroll();
      initMixitup();
      initTheme();
      initLanguage();
    });
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **`justify-content: left` inválido no CSS** ✅ 2026-05-08 — corrigido para `flex-start`
  - 📍 Onde: `style.css:553` → `.service-box .service-info { justify-content: left; }`
  - ❌ Problema: `left` não é um valor válido para `justify-content` em flexbox. O browser ignora silenciosamente — provavelmente é `flex-start` a intenção.
  - ✅ Solução: `justify-content: flex-start;`
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **`<div class="header-right">` vazio sem uso** ✅ 2026-05-08 — removido
  - 📍 Onde: `index.html:42`
  - ❌ Problema: elemento div sem conteúdo e sem função aparente no layout. Código morto.
  - ✅ Solução: remover o elemento.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **`scroll-behavior: smooth` no reset global `*`** ✅ 2026-05-08 — movido para `html` com `prefers-reduced-motion`
  - 📍 Onde: `style.css:33`
  - ❌ Problema: aplicar `scroll-behavior: smooth` ao seletor `*` é tecnicamente incorreto — a propriedade se aplica ao scroll container, que no caso é o `html`. Além disso, ignora a preferência de sistema `prefers-reduced-motion`.
  - ✅ Solução:
    ```css
    @media (prefers-reduced-motion: no-preference) {
      html { scroll-behavior: smooth; }
    }
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **`console.warn` de debug no script** ✅ 2026-05-08 — removido
  - 📍 Onde: `script.js:43`
  - ❌ Problema: `console.warn("MixItUp não foi carregado!")` aparece no DevTools do visitante. Não é crítico, mas indica que o código é de desenvolvimento.
  - ✅ Solução: remover ou manter apenas para ambiente de dev.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [ ] **Imagens órfãs na pasta `src/img/`**
  - 📍 Onde: `src/img/Projeto-planejador.PNG` e `src/img/projeto-oraculum.PNG`
  - ❌ Problema: duas imagens existem na pasta mas não são referenciadas em nenhum lugar do HTML — ou são de projetos removidos, ou são para projetos que ainda não foram adicionados.
  - ✅ Solução: verificar se pertencem a algum projeto planejado para o portfolio e adicionar o card, ou deletar as imagens.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [ ] **`mixitup.min.js` na raiz do projeto**
  - 📍 Onde: `d:/DEV/Portfolio/mixitup.min.js`
  - ❌ Problema: biblioteca de terceiro misturada com os arquivos raiz do projeto. Dificulta navegação.
  - ✅ Solução: mover para `src/js/vendor/mixitup.min.js` e atualizar a referência no HTML.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **Campos `Nome`, `Telefone` e `Assunto` sem `required`** ✅ 2026-05-08 — adicionado `required` em Nome e Mensagem
  - 📍 Onde: `index.html:312-338`
  - ❌ Problema: só o `email` é obrigatório. Alguém pode enviar formulário em branco com uma mensagem vazia, gerando emails inúteis.
  - ✅ Solução: adicionar `required` ao menos no campo `Nome` e `Mensagem`.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **Heading hierarchy: `<h3>` aparece antes do `<h2>` em serviços** ✅ 2026-05-08 — `h4` → `h3` nos 4 cards de serviço
  - 📍 Onde: `index.html:179` → `.service-info h4` para títulos de cards de serviço
  - ❌ Problema: os títulos dos serviços usam `h4` mas a seção tem `h2`. Pulando `h3`, a hierarquia fica: h2 → h4. Leitores de tela e SEO preferem hierarquia contínua.
  - ✅ Solução: trocar `h4` por `h3` nos cards de serviço.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

---

## 🟢 Polimento (consistência visual, microinterações)

- [x] **Copyright ainda marca 2025 — vai ficar desatualizado** ✅ 2026-05-08 — agora usa `new Date().getFullYear()` dinamicamente
  - 📍 Onde: `script.js:105` (PT) e `script.js:163` (EN)
  - ❌ Problema: o ano está hardcoded como "2025". Em janeiro de 2027 vai ficar velho.
  - ✅ Solução: gerar dinamicamente:
    ```js
    footercopy: `© DEV.Rapha ${new Date().getFullYear()} - Todos os direitos reservados`,
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: baixo

- [x] **Botões de filtro do portfólio sem estado ativo visual** ✅ 2026-05-08 — adicionado `.mixitup-control-active` no CSS
  - 📍 Onde: `index.html:237-241` + `style.css:587-608`
  - ❌ Problema: os botões "Todos / Web Page / App Web / QA & Testing" não têm estilo visual para o estado ativo (qual filtro está selecionado). O MixItUp adiciona a classe `.mixitup-control-active` automaticamente, mas não há estilo para ela.
  - ✅ Solução:
    ```css
    .fillter-buttons .btn.mixitup-control-active {
      background: var(--cor-secundaria);
      box-shadow: 0 0 15px var(--cor-secundaria);
    }
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Espaçamento excessivo no `<h2>` da seção de contato** ✅ 2026-05-08 — `margin: 10rem` → `margin: 0 0 4rem 0`
  - 📍 Onde: `style.css:722` → `.contato h2 { margin: 10rem; }`
  - ❌ Problema: `margin: 10rem` aplica 10rem em todos os 4 lados, incluindo esquerda e direita. Em telas menores causa overflow horizontal.
  - ✅ Solução: `margin: 0 0 4rem 0;` e centralizar via `text-align: center`.
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [x] **Imagens do portfólio sem `width` e `height` declarados (layout shift)** ✅ 2026-05-08 — adicionado `aspect-ratio: 16/9` + `object-fit: cover` no CSS
  - 📍 Onde: `index.html:246,256,267,278,290` → todas as `<img>` dos cards de projeto
  - ❌ Problema: sem dimensões declaradas o browser não reserva espaço antes de carregar a imagem, causando Cumulative Layout Shift (CLS) — métrica do Core Web Vitals que afeta SEO.
  - ✅ Solução: adicionar dimensões proporcionais ou usar `aspect-ratio` no CSS:
    ```css
    .port-img img { aspect-ratio: 16/9; }
    ```
  - ⏱️ Esforço: baixo
  - 🎯 Impacto: médio

- [ ] **Transição de menu mobile sem animação de entrada**
  - 📍 Onde: `style.css:876-882` → `.navbar` mobile
  - ❌ Problema: o menu mobile aparece/desaparece com `display: none/block`, sem transição. É abrupto comparado com o cuidado nas outras animações do site.
  - ✅ Solução: usar `opacity` + `transform` com `pointer-events`:
    ```css
    .navbar {
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .navbar.active {
      display: block;
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }
    ```
  - ⏱️ Esforço: médio
  - 🎯 Impacto: médio

---

## ✅ O que você fez bem (pontos fortes)

- **CSS Custom Properties com `oklch()`**: usar o espaço de cor oklch é o estado da arte em CSS moderno. Garante dark/light mode com consistência perceptual real — a maioria dos devs ainda usa hex ou hsl.
- **Dark mode + localStorage**: implementação correta e persistente. O toggle funciona sem flash ao recarregar.
- **Sistema de tradução PT/EN**: diferencial raro em portfólios. A estrutura de objeto `translations` é limpa e fácil de manter. Persistência no localStorage é o detalhe certo.
- **Animação de digitação em CSS puro**: a técnica de `::before` + `::after` com `@keyframes` para simular cursor e troca de palavras — sem JavaScript — é elegante e performática.
- **Separação de responsabilidades**: HTML, CSS e JS em arquivos separados, sem estilos inline.
- **Responsividade múltipla**: breakpoints em 1285px, 991px, 895px, 768px e 480px — cobre bem o espectro de dispositivos.
- **Link do LinkedIn com URL exata**: sem encurtadores ou links intermediários. SEO e confiança são favorecidos.
