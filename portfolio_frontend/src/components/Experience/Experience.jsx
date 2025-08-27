import React from 'react';
import css from './Experience.module.css';

// PUBLIC_INTERFACE
export default function Experience() {
  /** Experience section showing roles and achievements */
  const roles = [
    {
      company: 'TechWave Inc.',
      role: 'Senior Software Engineer',
      period: '2022 — Present',
      points: [
        'Led development of a multi-tenant analytics platform (React, Node, Postgres).',
        'Improved Lighthouse performance by 35% through code splitting and caching.',
        'Built CI/CD pipelines reducing deployment time by 60%.'
      ]
    },
    {
      company: 'CloudNest',
      role: 'Full‑Stack Engineer',
      period: '2020 — 2022',
      points: [
        'Designed scalable REST/GraphQL APIs serving 1M+ monthly requests.',
        'Implemented feature flag system and A/B testing workflows.',
        'Mentored 4 junior engineers and conducted architecture reviews.'
      ]
    }
  ];

  return (
    <div className="container">
      <h2 className={css.title}>Experience</h2>
      <div className={css.list}>
        {roles.map((r) => (
          <article className="card reveal" key={r.company} style={{ animationDelay: '100ms' }}>
            <header className={css.header}>
              <div>
                <h3 className={css.role}>{r.role}</h3>
                <p className={css.company}>{r.company}</p>
              </div>
              <span className={css.period}>{r.period}</span>
            </header>
            <ul className={css.points}>
              {r.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
