import React, { useEffect } from 'react';
import css from './Hero.module.css';
import { mountReveals } from '../../utils/scroll';

// PUBLIC_INTERFACE
export default function Hero({ palette }) {
  /** Hero section with profile, headline, and CTAs */
  useEffect(() => {
    const obs = mountReveals();
    return () => obs && obs.disconnect && obs.disconnect();
  }, []);

  return (
    <div className="container">
      <div className={css.wrap}>
        <div className={`${css.col} reveal`} style={{ animationDelay: '80ms' }}>
          <div className={css.badge} aria-label="Availability badge">
            <span className={css.pulse} />
            Open to opportunities
          </div>
          <h1 className={css.title}>
            Rohit Kumar
          </h1>
          <p className={css.subtitle}>
            Software Engineer • Full‑Stack • Problem Solver
          </p>
          <p className={css.description}>
            I craft reliable, user‑centric web experiences with modern technologies,
            clean architectures, and delightful details.
          </p>
          <div className={css.cta}>
            <a href="#projects" className="btn btnPrimary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>

        <div className={`${css.col} ${css.right} reveal`} style={{ animationDelay: '140ms' }}>
          <div className={css.avatar}>
            <div className={css.glow} />
            <div className={css.circle} />
            <img
              className={css.img}
              src={`https://api.dicebear.com/7.x/initials/svg?seed=Rohit%20Kumar&backgroundType=gradientLinear&fontFamily=Arial`}
              alt="Rohit Kumar avatar"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
