# ajkhabbazi.github.io

Personal academic website of Arash Jalil Khabbazi — live at <https://ajkhabbazi.github.io/>.

Built with [Jekyll](https://jekyllrb.com/) on the [al-folio](https://github.com/alshedivat/al-folio)
theme. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

## Running locally

Either of these works:

```bash
# Ruby toolchain
bundle install
bundle exec jekyll serve   # http://localhost:4000

# or Docker (the slim compose file pulls a prebuilt image and starts faster)
docker compose up
docker compose -f docker-compose-slim.yml up
```

## Where the content lives

| Path                       | What it holds                                                        |
| -------------------------- | -------------------------------------------------------------------- |
| `_pages/`                  | The four real pages: about (`/`), cv, news, publications             |
| `_news/`                   | News items, `announcement_NN.md`, one per item, newest = highest `NN` |
| `_bibliography/papers.bib` | Publications; `selected={true}` puts an entry on the about page      |
| `_data/socials.yml`        | Social links; `coauthors.yml` and `venues.yml` support the bib list  |
| `assets/img/`              | Profile photo and `publication_preview/` thumbnails                  |
| `assets/pdf/cv.pdf`        | The CV — `/cv/` is just a redirect to this file                      |
| `_config.yml`              | Site-wide settings                                                   |

## Template content kept on purpose

The following came with al-folio and is **not** used by any page on the site today. It is kept
deliberately, as a working reference in case these features get turned on later — deleting it
would mean copying the examples back out of the upstream theme.

- `_posts/` — ~30 demo blog posts, one per theme feature (math, code, diagrams, charts, Jupyter,
  tables, videos, audio, etc.). No blog page exists in `_pages/`, and `latest_posts.enabled` is
  `false` in `_pages/about.md`, so none of them appear on the site.
- `_projects/` — nine demo project cards. No projects page exists in `_pages/`.
- `assets/video/`, `assets/audio/`, `assets/jupyter/`, `assets/plotly/`, `assets/html/`,
  `assets/bibliography/`, `assets/json/table_data.json` — the media and data files those demo
  posts embed. They only make sense together with `_posts/`; delete them as a set or not at all.
- `assets/json/resume.json` — sample JSON Resume. Still read at build time by the
  `jekyll_get_json` block in `_config.yml`, so removing the file means removing that block too.
- `_books/` — the bookshelf collection, now empty; no bookshelf page exists.
- Unused theme layouts and includes (e.g. `_layouts/cv.liquid`, `_includes/repository/`) backing
  features the site does not currently enable.

To actually publish any of the above, add the matching page to `_pages/` (see the
[al-folio docs](https://github.com/alshedivat/al-folio) for the expected front matter).

## Template content removed

Upstream project scaffolding with no bearing on this site was deleted: al-folio's own docs
(`CONTRIBUTING.md`, `CUSTOMIZE.md`, `FAQ.md`, `INSTALL.md`), README screenshots
(`readme_preview/`), Lighthouse badge results, upstream issue templates and bots, sample CV and
repository data, and the CI workflows for accessibility, link checking, CodeQL, Prettier, TOC
updates, Lighthouse badges and Docker image publishing. Of the workflows only `deploy.yml`
remains. All of it is recoverable from this repository's git history, or from upstream.

## License

MIT, inherited from al-folio — see `LICENSE`.
