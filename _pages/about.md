---
layout: about
title: Home
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.
subtitle: Data Scientist | Machine Learning Engineer
description: Data Scientist focused on Automation, BI, ETL, and Machine Learning. Explore my portfolio of projects and technical articles.

profile:
  align: left
  image: profile_pic_PB.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>Oriximiná / Belém, PA, Brasil</p>
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

<div class="home-bio-full text-center" style="max-width: 800px; margin: 0 auto 2rem auto;">
  <p style="font-size: 1.15rem; line-height: 1.6; color: var(--global-text-color-light);">
    Specialized in transforming real-world problems into practical solutions using automation, ETL, KPIs, and Machine Learning for clear data-driven decisions. Experienced Professor of AI & Data Science.
  </p>
</div>

<section class="home-mobile-cta-shell" aria-label="Primary site sections">
  <div class="home-mobile-cta-group home-mobile-cta-group-primary">
    <a class="home-mobile-cta-link" href="{{ '/blog/' | relative_url }}">
      <span class="home-mobile-cta-icon"><i class="fa-regular fa-newspaper" aria-hidden="true"></i></span>
      <span class="home-mobile-cta-label">Insights & Articles</span>
    </a>
    <a class="home-mobile-cta-link" href="{{ '/projects/' | relative_url }}">
      <span class="home-mobile-cta-icon"><i class="fa-solid fa-diagram-project" aria-hidden="true"></i></span>
      <span class="home-mobile-cta-label">Projects</span>
    </a>
    <a class="home-mobile-cta-link" href="{{ '/repositories/' | relative_url }}">
      <span class="home-mobile-cta-icon"><i class="fa-brands fa-github" aria-hidden="true"></i></span>
      <span class="home-mobile-cta-label">Repositories</span>
    </a>
    <a class="home-mobile-cta-link" href="{{ '/cv/' | relative_url }}">
      <span class="home-mobile-cta-icon"><i class="fa-regular fa-file-lines" aria-hidden="true"></i></span>
      <span class="home-mobile-cta-label">CV</span>
    </a>
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

<section class="home-mobile-cta-shell home-secondary-links-shell" aria-label="Secondary site sections">
  <div class="home-mobile-cta-group home-mobile-cta-group-secondary">
    <a class="home-mobile-cta-link home-mobile-cta-link-secondary" href="{{ '/teaching/' | relative_url }}">
      <span class="home-mobile-cta-icon"><i class="fa-solid fa-chalkboard-user" aria-hidden="true"></i></span>
      <span class="home-mobile-cta-label">Teaching</span>
    </a>
    <a class="home-mobile-cta-link home-mobile-cta-link-secondary" href="{{ '/people/' | relative_url }}">
      <span class="home-mobile-cta-icon"><i class="fa-solid fa-users" aria-hidden="true"></i></span>
      <span class="home-mobile-cta-label">People</span>
    </a>
  </div>
</section>

<script>
  (() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");
    if (!touchQuery.matches) return;

    const pressedClass = "is-pressed";
    const selector = ".home-mobile-cta-link, .social .contact-icons.contact-icons-custom > a";
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
            if (openedWindow && rel.includes("noreferrer")) {
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
