# Portfolio Demo

A personal portfolio website built with Astro and Tailwind CSS.

## Description

A fast, modern portfolio site that presents a professional profile: an about section, skills, work experience, a projects gallery, GitHub project listings, and a contact form. It ships with dark mode, smooth section animations, and full English/Spanish localization. Project and skill content live in simple data files, so updating the site does not require touching the components.

### Screenshots

![Portfolio homepage](docs/screenshot.png)

## Getting Started

### Dependencies

- Node.js >= 22.12.0
- npm (bundled with Node.js)

Main libraries:

- [Astro](https://astro.build) ^7.2
- [Tailwind CSS](https://tailwindcss.com) ^4.3
- [@lucide/astro](https://lucide.dev) and [morphicons](https://morphicons.com) for icons
- [@animateicons/react](https://animateicons.dev) for icon animations

### Installing

1. Clone the repository:

```sh
git clone <repository-url>
cd portfolio-demo
```

2. Install dependencies:

```sh
npm install
```

### Executing program

Run all commands from the project root:

```sh
npm run dev
```

Starts the local dev server at `localhost:4321`.

Other commands:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds the production site to `./dist/`          |
| `npm run preview`         | Previews the build locally, before deploying     |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Shows help for the Astro CLI                     |

## Project Structure

```text
/
├── public/            # Static assets (favicons)
├── src/
│   ├── assets/        # Images and media
│   ├── components/    # UI sections (Hero, About, Skills, Experience, Projects, Contact, ...)
│   ├── data/          # Content data (projects, skills)
│   ├── i18n/          # Localization files (en, es)
│   ├── layouts/       # Page layouts
│   ├── lib/           # Helpers (GitHub API)
│   ├── pages/         # Routes (index, projects)
│   └── styles/        # Global styles
├── astro.config.mjs
└── package.json
```

## Help

If the dev server does not start, make sure your Node.js version matches the requirement above:

```sh
node -v
```

To reinstall dependencies from a clean state:

```sh
rm -rf node_modules package-lock.json
npm install
```

For Astro CLI help:

```sh
npm run astro -- --help
```

More information is available in the [Astro documentation](https://docs.astro.build).

## License

No license has been specified for this project yet. Contact the author for usage terms.
