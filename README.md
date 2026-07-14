# Chandramouli Rajagopalan Research Portfolio

This repository contains the GitHub Pages site for Chandramouli Rajagopalan. It is a small Jekyll static site designed as an academic research portfolio for robot learning and embodied AI.

## Structure

- `_data/portfolio.yml` contains editable biography, project, publication, link, and media metadata.
- `index.html` renders the homepage from `_data/portfolio.yml`.
- `_layouts/default.html` contains global metadata, navigation, JSON-LD, and footer markup.
- `style.scss` contains the site CSS compiled by GitHub Pages/Jekyll.
- `TODO_ASSETS.md` lists missing media and CV files.
- `TODO_CONTENT.md` lists publication metadata that still needs verification.

## Local Preview

Install Jekyll dependencies if needed:

```bash
bundle install
```

Run a local server:

```bash
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/`.

If Bundler is unavailable, GitHub Pages will still build the site from the repository root using the checked-in Jekyll files.

## Deployment

The site deploys from the repository root through GitHub Pages. Push changes to the default branch after review and GitHub Pages will rebuild the static site.

To add project media later, place files at the paths listed in `_data/portfolio.yml`, update each media item's `available` field to `true`, and remove the corresponding entry from `TODO_ASSETS.md`.
