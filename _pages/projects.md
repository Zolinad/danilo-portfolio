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
{% assign data_projects = site.projects | where_exp: "project", "project.focus_areas contains 'data'" | sort: "importance" %}
{% assign analytics_projects = site.projects | where_exp: "project", "project.focus_areas contains 'analytics'" | sort: "importance" %}
{% assign ml_projects = site.projects | where_exp: "project", "project.focus_areas contains 'machine-learning'" | sort: "importance" %}
{% assign green_belt_projects = site.projects | where_exp: "project", "project.focus_areas contains 'green-belt'" | sort: "importance" %}

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

<section class="projects-focus-sections" aria-label="Project focus areas">
  <section id="focus-data" class="projects-focus-section">
    <h3>Data</h3>
    <p>Projects where the main value comes from structuring data, improving consistency, and making downstream analysis trustworthy.</p>
    <div class="projects-focus-links">
      {% for project in data_projects %}
        <a class="projects-focus-project-link" href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% endfor %}
    </div>
  </section>

  <section id="focus-analytics" class="projects-focus-section">
    <h3>Analytics</h3>
    <p>Work focused on KPI architecture, monitoring, prioritization, and faster diagnosis for operational decisions.</p>
    <div class="projects-focus-links">
      {% for project in analytics_projects %}
        <a class="projects-focus-project-link" href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% endfor %}
    </div>
  </section>

  <section id="focus-machine-learning" class="projects-focus-section">
    <h3>Machine Learning</h3>
    <p>Projects that use modeling to reduce noise, rank risk, and surface actions that deserve attention first.</p>
    <div class="projects-focus-links">
      {% for project in ml_projects %}
        <a class="projects-focus-project-link" href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% endfor %}
    </div>
  </section>

  <section id="focus-green-belt" class="projects-focus-section">
    <h3>Green Belt</h3>
    <p>Cases that reflect process discipline, hierarchical indicators, and a clearer path from deviation to action.</p>
    <div class="projects-focus-links">
      {% for project in green_belt_projects %}
        <a class="projects-focus-project-link" href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% endfor %}
    </div>
  </section>
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
