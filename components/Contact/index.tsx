'use client';

import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badge}>Available for collaborations</div>
        <div className={styles.header}>
          <h2>Contact</h2>
          <p className={styles.subtitle}>
            Let’s craft science-driven stories, editorial illustrations, or workshops together.
          </p>
        </div>
        <ul className={styles.highlights}>
          <li>Science storytelling &amp; research translation</li>
          <li>Editorial &amp; educational illustration</li>
          <li>Talks, workshops, and residencies</li>
        </ul>
        <div className={styles.actions}>
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
    </section>
  );
}


