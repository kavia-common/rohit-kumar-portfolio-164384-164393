import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ResumeButton from './components/ResumeButton/ResumeButton';
import { THEME_VARS } from './theme';
import { smoothScrollTo } from './utils/scroll';

// PUBLIC_INTERFACE
function App() {
  /**
   * App is the root component for Rohit Kumar's portfolio SPA.
   * It manages the dark theme, renders navigation, sections,
   * and provides smooth in-page navigation.
   */
  const [theme, setTheme] = useState('dark'); // default dark

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const palette = useMemo(() => THEME_VARS, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) smoothScrollTo(el, 700);
  };

  return (
    <div className={styles.app}>
      <Header
        onNavigate={handleNavClick}
        onToggleTheme={toggleTheme}
        currentTheme={theme}
        palette={palette}
        name="Rohit Kumar"
      />
      <main>
        <section id="home" className={styles.section}>
          <Hero palette={palette} />
        </section>

        <section id="about" className={styles.section}>
          <About palette={palette} />
        </section>

        <section id="experience" className={styles.section}>
          <Experience palette={palette} />
        </section>

        <section id="projects" className={styles.section}>
          <Projects palette={palette} />
        </section>

        <section id="contact" className={styles.section}>
          <Contact palette={palette} />
        </section>
      </main>

      <aside className={styles.resumeCta}>
        <ResumeButton />
      </aside>

      <Footer palette={palette} />
    </div>
  );
}

export default App;
