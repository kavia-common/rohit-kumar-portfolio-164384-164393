import React from 'react';
import css from './Footer.module.css';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with social icons and copyright line */
  const year = new Date().getFullYear();
  const socials = [
    { label: 'GitHub', href: process.env.REACT_APP_GITHUB_URL || 'https://github.com/', icon: '' },
    { label: 'LinkedIn', href: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/', icon: '' },
    { label: 'Twitter', href: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/', icon: '' }
  ];
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.row}>
          <div className={css.copy}>© {year} Rohit Kumar • All rights reserved.</div>
          <div className={css.socials}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
