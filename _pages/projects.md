---
layout: page
title: Projects
permalink: /projects/
description: Selected case studies and applied data products.
nav: true
nav_order: 3
horizontal: false
---

{% assign sorted_projects = site.projects | sort: "importance" %}

<section class="projects-focus-overview" aria-labelledby="projects-focus-title">
  <p class="projects-focus-kicker">Explore by focus</p>
  <h2 id="projects-focus-title" class="projects-focus-title">How these projects are organized</h2>
  <p class="projects-focus-intro">
    Instead of treating every case study as a standalone artifact, this page groups the work by the type of
    decision support it strengthens.
  </p>

  <div class="projects-focus-grid">
    <a class="projects-focus-card" href="#focus-data">
      <span class="projects-focus-icon"><i class="fa-solid fa-database" aria-hidden="true"></i></span>
      <span class="projects-focus-card-title">Data</span>
      <span class="projects-focus-card-copy">Pipelines, data quality, and structured foundations for reliable analysis.</span>
    </a>
    <a class="projects-focus-card" href="#focus-analytics">
      <span class="projects-focus-icon"><i class="fa-solid fa-chart-line" aria-hidden="true"></i></span>
      <span class="projects-focus-card-title">Analytics</span>
      <span class="projects-focus-card-copy">KPI logic, diagnosis, and decision support built for operational clarity.</span>
    </a>
    <a class="projects-focus-card" href="#focus-machine-learning">
      <span class="projects-focus-icon"><i class="fa-solid fa-brain" aria-hidden="true"></i></span>
      <span class="projects-focus-card-title">Machine Learning</span>
      <span class="projects-focus-card-copy">Applied models that help prioritize action instead of just generating scores.</span>
    </a>
    <a class="projects-focus-card" href="#focus-green-belt">
      <span class="projects-focus-icon"><i class="fa-solid fa-award" aria-hidden="true"></i></span>
      <span class="projects-focus-card-title">Green Belt</span>
      <span class="projects-focus-card-copy">Process-oriented thinking, KPI governance, and continuous-improvement discipline.</span>
    </a>
  </div>
</section>

<div class="projects">
  <h2 class="category projects-main-grid-heading">Selected projects</h2>

  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
</div>
