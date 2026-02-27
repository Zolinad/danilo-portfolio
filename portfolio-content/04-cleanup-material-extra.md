# Limpeza de Material Extra (Avaliação)

Objetivo: separar conteúdo que fortalece a marca profissional do que é apenas template/demo do al-folio.

## 1) Manter (conteúdo autoral atual)

### Posts autorais (Insights)
- `_posts/2026-02-26-kpi-bonito-nao-paga-conta.md`
- `_posts/2026-02-26-etl-para-decisao-operacional.md`
- `_posts/2026-02-26-anomalia-sem-fadiga-de-alerta.md`

### Projects autorais
- `_projects/10_auditoria-financeira-anomalias.md`
- `_projects/11_dashboard-kpis-hierarquicos.md`

### Arquivos de estratégia interna
- `portfolio-content/01-mapa-portfolio.md`
- `portfolio-content/02-insights-arquitetura.md`
- `portfolio-content/03-projects-arquitetura.md`

## 2) Arquivar (recomendado)

Conteúdo útil como referência técnica, mas que não deve aparecer no site final:

### Posts de demonstração do tema
- `_posts/2015-03-15-formatting-and-links.md`
- `_posts/2015-05-15-images.md`
- `_posts/2015-07-15-code.md`
- `_posts/2015-10-20-disqus-comments.md`
- `_posts/2015-10-20-math.md`
- `_posts/2018-12-22-distill.md`
- `_posts/2020-09-28-twitter.md`
- `_posts/2021-07-04-diagrams.md`
- `_posts/2022-02-01-redirect.md`
- `_posts/2022-12-10-giscus-comments.md`
- `_posts/2023-03-20-table-of-contents.md`
- `_posts/2023-03-21-tables.md`
- `_posts/2023-04-24-videos.md`
- `_posts/2023-04-25-audios.md`
- `_posts/2023-04-25-sidebar-table-of-contents.md`
- `_posts/2023-05-12-custom-blockquotes.md`
- `_posts/2023-07-04-jupyter-notebook.md`
- `_posts/2023-07-12-post-bibliography.md`
- `_posts/2023-12-12-tikzjax.md`
- `_posts/2024-01-26-chartjs.md`
- `_posts/2024-01-26-echarts.md`
- `_posts/2024-01-26-geojson-map.md`
- `_posts/2024-01-27-advanced-images.md`
- `_posts/2024-01-27-code-diff.md`
- `_posts/2024-01-27-vega-lite.md`
- `_posts/2024-04-15-pseudocode.md`
- `_posts/2024-04-28-post-citation.md`
- `_posts/2024-04-29-typograms.md`
- `_posts/2024-05-01-tabs.md`
- `_posts/2024-12-04-photo-gallery.md`
- `_posts/2025-03-26-plotly.md`

### Projetos de demonstração
- `_projects/1_project.md`
- `_projects/2_project.md`
- `_projects/3_project.md`
- `_projects/4_project.md`
- `_projects/5_project.md`
- `_projects/6_project.md`
- `_projects/7_project.md`
- `_projects/8_project.md`
- `_projects/9_project.md`

## 3) Remover do site público (recomendado)

### Referências explícitas a Einstein/template
- `_pages/profiles.md` (usa `about_einstein.md` com dados placeholder)
- `_pages/about_einstein.md`

### Referências que podem confundir identidade profissional
- `assets/json/resume.json` (dados de exemplo, inclui e-mail `einstein@example.com`)

## 4) Revisar depois (depende da estratégia)

- `_bibliography/papers.bib`
  - contém várias entradas de exemplo com Einstein.
  - decisão: substituir por bibliografia real do autor ou manter apenas as entradas reais.

- `_data/citations.yml`
  - contém dados amplos de citações de exemplo; verificar se ainda é necessário para o uso atual.

## 5) Estratégia de execução sugerida

1. Criar pasta de arquivo interno (ex.: `portfolio-content/archive-template/`) para manter cópia dos demos.
2. Remover demos de `_posts/` e `_projects/` publicados.
3. Ajustar navegação para esconder/remover página `People` se não houver conteúdo real.
4. Revisar bibliografia para manter apenas publicações e citações reais.
5. Fazer validação visual final (home, blog, projects, publications).

## 6) Critério final

Manter no portfólio público apenas conteúdo que:
- reforça sua trajetória real;
- demonstra capacidade técnica e impacto;
- melhora leitura de recrutadores em menos de 1-2 minutos por seção.
