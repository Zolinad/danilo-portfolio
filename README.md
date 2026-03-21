# Danilo A. Figueiredo Portfolio

This repository contains the source code for my personal portfolio website.

The site brings together:

- selected data and automation projects
- technical articles and short-form insights
- curriculum vitae and academic/professional background
- teaching, repositories, and contact channels

The portfolio is built with Jekyll and based on the `al-folio` ecosystem, but this repository is no longer intended as a generic setup guide or template for other users. Its purpose is to maintain and publish my own website.

## Website

- Production: <https://zolinad.github.io/danilo-portfolio/>
- Local preview: `http://localhost:8080/danilo-portfolio/`

## Main Sections

- `Home`: overview, profile, and quick navigation
- `Projects`: applied work in data, analytics, ETL, automation, and machine learning
- `Blog`: articles and insights on technical and professional topics
- `CV`: experience, education, publications, and selected projects
- `Teaching`: teaching-related activities and materials
- `Repositories`: selected code repositories
- `People`: collaborators and academic/professional connections

## Stack

- Jekyll
- al-folio as the base theme/framework
- Docker for local development
- GitHub Pages for hosting

## Local Development

If you already have Docker running, start the local environment with:

```bash
docker compose up
```

Then open:

```text
http://localhost:8080/danilo-portfolio/
```

To test on another device in the same network, replace `localhost` with your machine's local IP.

## Repository Scope

This repository is focused on the portfolio itself:

- content publishing
- layout and visual refinements
- CV and project presentation
- writing and navigation structure

It is not maintained as a step-by-step onboarding guide for creating new al-folio websites.

## Base Theme

This portfolio is built on top of `al-folio`:

<https://github.com/alshedivat/al-folio>
