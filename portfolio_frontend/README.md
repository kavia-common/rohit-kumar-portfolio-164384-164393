# Rohit Kumar — Portfolio Frontend (React)

A modern, minimalistic, and trendy portfolio SPA for Rohit Kumar with a responsive dark theme, smooth animations, and mobile‑first design.

## Features

- Responsive dark theme with theme toggle
- Header navigation with smooth in‑page scrolling
- Hero profile section with CTAs
- About, Experience, Projects (gallery), and Contact sections
- Resume/CV download button
- Client‑side validated contact form
- Social media integration and footer
- Clean modular architecture using CSS Modules

## Quick start

1. Install dependencies
   npm install

2. Configure environment (optional)
   Copy .env.example to .env and edit values.

3. Run in development
   npm start

4. Build for production
   npm run build

## Configuration

Set the following variables in .env (optional):

- REACT_APP_SITE_URL: Public site URL (used for absolute resume link).
- REACT_APP_RESUME_URL: Direct resume URL; if absent, app uses <SITE_URL>/resume.pdf.
- REACT_APP_GITHUB_URL, REACT_APP_LINKEDIN_URL, REACT_APP_TWITTER_URL: Social links.

## Styling

- Colors: primary #1a73e8, accent #ff6f61, secondary #23282d
- See src/App.css for global variables and utilities
- Component styles live next to components as CSS Modules

## Notes

- Contact form is client‑only demo (no backend integration).
- To provide a real resume, place resume.pdf in the public/ folder or set REACT_APP_RESUME_URL.
