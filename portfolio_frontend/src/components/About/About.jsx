import React from 'react';
import css from './About.module.css';

// PUBLIC_INTERFACE
export default function About() {
  /** About section with short bio and key skills */
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Express', 'GraphQL',
    'Python', 'Django', 'REST APIs', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'CI/CD', 'Testing', 'Performance'
  ];

  return (
    <div className="container">
      <div className={css.wrap}>
        <div className="reveal" style={{ animationDelay: '80ms' }}>
          <h2 className={css.title}>About</h2>
          <p className={css.text}>
            I am a software engineer focused on building modern, scalable web applications.
            I enjoy transforming ideas into intuitive products, optimizing performance, and
            collaborating across teams to deliver impactful solutions.
          </p>
        </div>

        <div className={`${css.skills} reveal`} style={{ animationDelay: '140ms' }}>
          {skills.map((s) => (
            <span className={css.skill} key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
