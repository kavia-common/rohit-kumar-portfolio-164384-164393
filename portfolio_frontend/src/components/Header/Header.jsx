import React from 'react';
import css from './Header.module.css';

// PUBLIC_INTERFACE
export default function Header({ onNavigate, onToggleTheme, currentTheme, palette, name }) {
  /** Header renders the navigation bar, brand, theme toggle, and social buttons. */
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.row}>
          <div className={css.brand} onClick={() => onNavigate('home')} role="button" tabIndex={0}>
            <div className={css.logo} aria-hidden />
            <span className={css.name}>{name}</span>
          </div>

          <nav className={css.nav} aria-label="Primary Navigation">
            {items.map((it) => (
              <button key={it.id} className={`${css.navLink}`} onClick={() => onNavigate(it.id)}>
                {it.label}
              </button>
            ))}
          </nav>

          <div className={css.actions}>
            <button
              className={`${css.iconBtn}`}
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              title="Toggle theme"
            >
              {currentTheme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a
              className={css.social}
              href={process.env.REACT_APP_GITHUB_URL || 'https://github.com/'}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <span className={css.icon}></span>
            </a>
            <a
              className={css.social}
              href={process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/'}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <span className={css.icon}></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
