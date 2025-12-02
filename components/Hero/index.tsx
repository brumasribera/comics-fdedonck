'use client';

import styles from './Hero.module.scss';

const highlights = [
  { label: 'Latest award', value: 'Figure 1A Jury Award · 2025' },
  { label: 'Focus', value: 'Science communication, justice & fieldwork' },
  { label: 'Mediums', value: 'Comics · Research diaries · Poster narratives' },
];

export default function Hero() {
  const scrollToCollections = () => {
    if (typeof document === 'undefined') return;
    document.getElementById('figure1a')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Portfolio
            <span aria-hidden="true" />
            Science · Art · Storytelling
          </p>
          <h1 className={styles.title}>Fien De Doncker</h1>
          <p className={styles.subtitle}>Comics translating research into stories that can be felt.</p>
          <p className={styles.description}>
            Fieldwork notes, climate data, and lived experience meet visual storytelling to make complex issues tangible
            and galvanize action for climate and social justice.
          </p>

          <div className={styles.actions}>
            <button type="button" className={styles.primaryButton} onClick={scrollToCollections}>
              Explore Collections
            </button>
            <a
              className={styles.secondaryButton}
              href="mailto:fien.a.c.de.doncker@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </div>

          <div className={styles.highlights}>
            {highlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

