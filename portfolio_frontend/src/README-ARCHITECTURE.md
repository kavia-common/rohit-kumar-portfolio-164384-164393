Architecture notes

- Components are organized by section under src/components/<Section>.
- Global theme variables live in src/App.css; section-specific styles are CSS Modules next to components.
- App manages theme (data-theme on <html>) and in-page navigation via smoothScrollTo.
- Environment vars (REACT_APP_*) are read via process.env (CRA convention). See .env.example.
- Public resume: public/resume.pdf or REACT_APP_RESUME_URL overrides.
- Sections anchor IDs: home, about, experience, projects, contact.
