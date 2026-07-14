# Hasan Raza — Portfolio

A personal portfolio site built with **React + Vite + Tailwind CSS**, based on the original Canva design. Sections: Hero, About, Skills, Industry Projects, Education & Certifications, and Contact.

Frame 15 is included as a waiting person to look cool.

## Tech stack

- [Vite](https://vitejs.dev/) + React 19
- [Tailwind CSS](https://tailwindcss.com/) v3
- Fonts: Baloo 2 (display), Fraunces (serif headings), Caveat (script accent), Inter (body)

## Getting started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/           # photos (hero-photo.jpg, about-photo.jpg)
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
  App.jsx
  index.css
```

## Editing content

All copy lives directly inside each component under `src/components/` as plain
JS (arrays of objects for skills/projects/education, or JSX for hero/about/contact
text) — no CMS or data file to wire up. Open the relevant component and edit the
text/arrays directly. To swap photos, replace the files in `src/assets/` (keep the
same filenames, or update the `import` at the top of `Hero.jsx` / `About.jsx`).

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds and deploys automatically on every push to `main`.

1. Push this repo to GitHub.
2. In the repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No build configuration changes are needed — `vite.config.js` already uses a
relative base path (`base: './'`) so the build works under any repo name/subpath.

### Alternative: deploy with the `gh-pages` package

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Then set Pages source to the `gh-pages` branch in repo settings.

## License

MIT — feel free to fork and adapt for your own portfolio.
