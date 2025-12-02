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

        </div>
      </div>
    </section>
  );
}

