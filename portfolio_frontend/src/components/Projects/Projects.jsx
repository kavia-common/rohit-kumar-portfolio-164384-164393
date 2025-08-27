import React from 'react';
import css from './Projects.module.css';

// PUBLIC_INTERFACE
export default function Projects() {
  /** Projects gallery with images and descriptions */
  const projects = [
    {
      title: 'Insight Dashboard',
      img: 'https://images.unsplash.com/photo-1551281044-8c5f6047a9d8?q=80&w=1600&auto=format&fit=crop',
      description: 'Analytics dashboard with custom charts, collaborative filters, and data export.',
      tags: ['React', 'D3', 'Node', 'Postgres'],
      link: 'https://example.com'
    },
    {
      title: 'Commerce Engine',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
      description: 'Headless e‑commerce platform with real‑time inventory sync and checkout.',
      tags: ['Next.js', 'Stripe', 'Redis', 'Prisma'],
      link: 'https://example.com'
    },
    {
      title: 'Realtime Chat',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
      description: 'Secure, scalable chat with presence, typing indicators, and offline queue.',
      tags: ['WebSocket', 'Express', 'MongoDB', 'JWT'],
      link: 'https://example.com'
    }
  ];

  return (
    <div className="container">
      <h2 className={css.title}>Projects</h2>
      <div className={css.grid}>
        {projects.map((p) => (
          <article className={`${css.card} card reveal`} key={p.title} style={{ animationDelay: '120ms' }}>
            <div className={css.thumb}>
              <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
            </div>
            <div className={css.body}>
              <h3 className={css.name}>{p.title}</h3>
              <p className={css.desc}>{p.description}</p>
              <div className={css.tags}>
                {p.tags.map((t) => (<span className={css.tag} key={t}>{t}</span>))}
              </div>
              <div className={css.actions}>
                <a className="btn" href={p.link} target="_blank" rel="noreferrer">View</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
