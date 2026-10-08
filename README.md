# Risk & Analytics Portfolio

A privacy-redacted, static Jekyll portfolio prepared for GitHub Pages. The current content omits personal names, profile links, exact schools, employers, dates, and business metrics.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` to update page content.
- Each page uses YAML front matter for its title, description, and URL.
- Shared HTML lives in `_layouts/` and `_includes/`.
- Update colors and responsive styles in `assets/css/main.css`; the small theme toggle is in `assets/js/theme.js`.
- Site title, navigation, and page build settings are in `_config.yml`.
- Keep the site files at the repository root. `baseurl` must remain empty for a GitHub user site.
- Keep personal identifiers and exact business metrics out of the public copy unless they are reviewed and approved.
- The public hostname in `_config.yml` is the approved user-site URL; re-review before changing it.

## Preview locally

1. Install Ruby and Jekyll if they are not already available: `gem install jekyll`.
2. From the repository root, run `jekyll serve`.
3. Open `http://127.0.0.1:4000`. Jekyll rebuilds the site when files change.

To check a production-like build, run `jekyll build`. Generated files go to `_site/`; that folder is ignored by Git.

## Run Lighthouse

1. Start the local preview with `jekyll serve`.
2. Open `http://127.0.0.1:4000` in Chrome.
3. Open Developer Tools, select **Lighthouse**, choose Performance, Accessibility, Best Practices, and SEO, then run the audit. Repeat with mobile and desktop settings.
4. Review any failing audit, fix the source files, rebuild, and rerun. The target is 90 or higher in each category.

## Publish with GitHub Pages

1. Use the approved user-site repository, named `<username>.github.io`.
2. Push the contents of this repository root to its `main` branch.
3. In the repository’s **Settings → Pages**, select **Deploy from a branch**, choose `main`, and choose `/(root)`.
4. Keep `url` in `_config.yml` aligned with the approved hostname. GitHub Pages builds the Jekyll site automatically; no separate application build step is needed.

The GitHub repository and published pages are public. Do not push private source material or résumé files into the repository. A personal GitHub account or user-site hostname may itself identify its owner.
