# LifeJar Website (React)

This project contains a React‑based marketing site for **LifeJar**, a cross‑border fintech super‑app designed to serve kids, teens, adults and seniors. The site reflects the brand’s warm, family‑centric aesthetic and explains the core value proposition.

## Setup

1. Install dependencies (requires Node.js 18+):

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm start
   ```

   This runs the app in development mode. Open http://localhost:3000 to view it in your browser.

3. Build for production (the output goes to the `build` directory):

   ```sh
   npm run build
   ```

## Deploying to Vercel

This project includes a `vercel.json` configuration that tells Vercel to perform a static React build and serve the built files as a single‑page application. After pushing to GitHub, link the repo in Vercel and it will automatically install dependencies and deploy.

## Structure

- `public/index.html` – The HTML entry point (includes links to Google Fonts).
- `src/index.js` – React entry point that renders the `App` component.
- `src/App.js` – Root component that assembles the page sections.
- `src/index.css` – Global styles, variables and responsive layout rules.
- `src/components/` – React components for each section of the page:
  - `HeroSection.js`
  - `StatsSection.js`
  - `ProblemSection.js`
  - `SolutionSection.js`
  - `FeaturesSection.js`
  - `GallerySection.js`
  - `RoadmapSection.js`
  - `CTASection.js`
- `src/assets/hero.png` – Illustration used in the hero section (generated with AI to match LifeJar’s teal/yellow palette).

You can replace the text, numbers and images with real data and polished artwork as your product evolves.
