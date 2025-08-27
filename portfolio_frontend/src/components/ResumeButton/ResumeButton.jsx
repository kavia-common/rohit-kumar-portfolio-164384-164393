import React from 'react';
import css from './ResumeButton.module.css';
import { getPublicSiteUrl } from '../../theme';

// PUBLIC_INTERFACE
export default function ResumeButton() {
  /**
   * ResumeButton provides a quick floating CTA to download the CV.
   * You can place a file in public/resume.pdf or define REACT_APP_RESUME_URL.
   */
  const envUrl = process.env.REACT_APP_RESUME_URL;
  const siteUrl = getPublicSiteUrl();
  const href = envUrl || `${siteUrl || ''}/resume.pdf` || '/resume.pdf';

  return (
    <a className={css.btn} href={href} target="_blank" rel="noreferrer" download>
      <span className={css.icon}>⬇</span>
      <span>Resume</span>
    </a>
  );
}
