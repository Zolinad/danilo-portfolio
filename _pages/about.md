---
layout: about
title: Home
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.
subtitle: Welcome, visitor!
description: Data Scientist focused on Automation, BI, ETL, and Machine Learning. Explore my portfolio of projects and technical articles.

profile:
  align: right
  image: profile_pic_PB.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Oriximiná/Belém, PA, Brasil</p>
    <p>daniloz.fig@gmail.com</p>
# <p><i class="fa-brands fa-whatsapp fa-lg" aria-hidden="true"></i> +55 (91) 99107-1457</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<!-- BIO DESKTOP (Português - Imagem 1) -->
<div class="d-none d-md-block">
  <p>Sou cientista de dados com formação em Engenharia de Controle e Automação e MBA em Data Science & Analytics. Minha trajetória combina experiência em operações de mineração, com foco em estratégia e indicadores, e atuação em docência na área de tecnologia, incluindo experiência como Professor na Universidade Federal do Oeste do Pará (UFOPA), ministrando disciplinas de Inteligência Artificial e Data Science.</p>

  <p>Gosto de transformar problemas reais em soluções práticas: automação, ETL, análise de dados, construção de KPIs e aplicações de machine learning para apoiar decisões com mais clareza e agilidade.</p>

  <p>Neste site você vai encontrar alguns projetos de minha autoria, postagens sobre experiências acadêmicas/profissionais e o meu currículo. Veja abaixo minhas outras redes e formas de contato.</p>
</div>

<!-- BIO MOBILE (Inglês - Nova Solicitação) -->
<div class="d-md-none text-center" style="margin-bottom: 2rem; padding: 0 5vw;">
  <p style="font-size: 1.15rem; line-height: 1.6; color: var(--global-text-color);">
    Specialized in transforming real-world problems into practical solutions using automation, ETL, KPIs, and Machine Learning for clear data-driven decisions. Experienced Professor of AI & Data Science.
  </p>
</div>

<!-- CTA MOBILE (Estrutura em Blocos conforme Imagem) -->
<section class="home-mobile-cta-section d-md-none" aria-label="Quick Navigation">
  
  <!-- Bloco Principal (2x2 Grid) -->
  <div class="home-mobile-cta-shell mb-3">
    <div class="home-mobile-cta-grid-2x2">
      <a class="home-mobile-cta-card" href="{{ '/blog/' | relative_url }}">
        <i class="fa-regular fa-newspaper" aria-hidden="true"></i>
        <span>Insights & Articles</span>
      </a>
      <a class="home-mobile-cta-card" href="{{ '/projects/' | relative_url }}">
        <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
        <span>Projects</span>
      </a>
      <a class="home-mobile-cta-card" href="{{ '/repositories/' | relative_url }}">
        <i class="fa-brands fa-github" aria-hidden="true"></i>
        <span>Repositories</span>
      </a>
      <a class="home-mobile-cta-card" href="{{ '/cv/' | relative_url }}">
        <i class="fa-regular fa-file-lines" aria-hidden="true"></i>
        <span>CV</span>
      </a>
    </div>
  </div>

  <!-- Bloco Secundário (2 Colunas) -->
  <div class="home-mobile-cta-shell">
    <div class="home-mobile-cta-grid-2x1">
      <a class="home-mobile-cta-card" href="{{ '/teaching/' | relative_url }}">
        <i class="fa-solid fa-chalkboard-user" aria-hidden="true"></i>
        <span>Teaching</span>
      </a>
      <a class="home-mobile-cta-card" href="{{ '/people/' | relative_url }}">
        <i class="fa-solid fa-users" aria-hidden="true"></i>
        <span>People</span>
      </a>
    </div>
  </div>

</section>

<div class="home-skill-grid" aria-label="Core skills">
  <div class="row g-2 g-sm-3">
    <div class="col-6 col-md-3">
      <div class="home-skill-item">
        <i class="fa-solid fa-database" aria-hidden="true"></i>
        <span>DATA</span>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="home-skill-item">
        <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
        <span>ANALYTICS</span>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="home-skill-item">
        <i class="fa-solid fa-brain" aria-hidden="true"></i>
        <span>MACHINE LEARNING</span>
      </div>
    </div>
    <div class="col-6 col-md-3">
      <div class="home-skill-item">
        <i class="fa-solid fa-award" aria-hidden="true"></i>
        <span>GREEN BELT</span>
      </div>
    </div>
  </div>
</div>

<script>
  (() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");
    if (!touchQuery.matches) return;

    const pressedClass = "is-pressed";
    const selector = ".home-mobile-cta-card, .social .contact-icons.contact-icons-custom > a";
    const pressDelayMs = 110;

    const applyPressedState = (element) => {
      element.classList.add(pressedClass);
      window.setTimeout(() => element.classList.remove(pressedClass), pressDelayMs + 140);
    };

    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener(
        "pointerdown",
        (event) => {
          if (event.pointerType !== "touch") return;
          applyPressedState(element);
        },
        { passive: true }
      );

      element.addEventListener("click", (event) => {
        if (!touchQuery.matches) return;
        if (event.defaultPrevented) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const href = element.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

        event.preventDefault();

        const target = element.getAttribute("target");
        const rel = element.getAttribute("rel") || "";

        window.setTimeout(() => {
          if (target === "_blank") {
            const openedWindow = window.open(href, "_blank", rel.includes("noopener") ? "noopener" : undefined);
            if (openedWindow && rel.includes("noopener")) {
              openedWindow.opener = null;
            }
            return;
          }

          window.location.assign(href);
        }, pressDelayMs);
      });
    });
  })();
</script>
