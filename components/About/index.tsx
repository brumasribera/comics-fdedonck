'use client';

import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>About</h2>
          <div className={styles.text}>
            <p>
              This portfolio is a growing collection of comics at the intersection of science, art, and storytelling. Each
              piece aims to make the invisible visible.
            </p>
            <p>
              Through visual narratives, I explore complex topics ranging from climate science and social justice to personal
              reflections. My work combines rigorous research with artistic expression to create accessible and impactful
              stories.
            </p>
            <p>
              Feel free to browse the collections above or download individual comics for personal reading. If you'd like to
              collaborate or feature my work, please get in touch.
            </p>
          </div>

          <div className={styles.contactSection}>
          <div className={styles.contactBadge}>Available for collaborations</div>
            <h3>Contact</h3>
          <p className={styles.contactSubtitle}>
            Let’s craft science-driven stories, editorial illustrations, or workshops together.
          </p>
          <ul className={styles.contactHighlights}>
            <li>Science storytelling & research translation</li>
            <li>Editorial & educational illustration</li>
            <li>Talks, workshops, and residencies</li>
          </ul>
            <div className={styles.contactActions}>
              <a
                href="mailto:fien.a.c.de.doncker@gmail.com"
                className={styles.emailButton}
                aria-label="Email Fien De Doncker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me an email
              </a>
            </div>
            <p className={styles.note}>Please ask before sharing these comics elsewhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

