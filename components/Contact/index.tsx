'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

import styles from './Contact.module.scss';

const SPOTLIGHT_SIZE = 220;
const SPOTLIGHT_MARGIN = 24;
const MIN_MOVE_DURATION = 5000;
const MAX_MOVE_DURATION = 9000;

type SpotlightState = {
  x: number;
  y: number;
  duration: number;
};

// Keeps the initial glow close to the center so it does not pop in from an edge.
const getCenteredSpotlightPosition = (node: HTMLDivElement) => {
  const width = node.clientWidth;
  const height = node.clientHeight;

  return {
    x: Math.max((width - SPOTLIGHT_SIZE) / 2, 0),
    y: Math.max((height - SPOTLIGHT_SIZE) / 2, 0),
  };
};

// Generates a pseudo-random position while keeping a small margin inside the container.
const getRandomSpotlightPosition = (node: HTMLDivElement) => {
  const width = node.clientWidth;
  const height = node.clientHeight;

  const availableX = Math.max(width - SPOTLIGHT_SIZE - SPOTLIGHT_MARGIN * 2, 0);
  const availableY = Math.max(height - SPOTLIGHT_SIZE - SPOTLIGHT_MARGIN * 2, 0);

  const x =
    availableX > 0
      ? SPOTLIGHT_MARGIN + Math.random() * availableX
      : Math.max((width - SPOTLIGHT_SIZE) / 2, 0);

  const y =
    availableY > 0
      ? SPOTLIGHT_MARGIN + Math.random() * availableY
      : Math.max((height - SPOTLIGHT_SIZE) / 2, 0);

  return { x, y };
};

const getRandomDuration = () =>
  MIN_MOVE_DURATION + Math.random() * (MAX_MOVE_DURATION - MIN_MOVE_DURATION);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [spotlight, setSpotlight] = useState<SpotlightState>({
    x: 0,
    y: 0,
    duration: (MIN_MOVE_DURATION + MAX_MOVE_DURATION) / 2,
  });

  useEffect(() => {
    // Kick off smooth transitions between random spotlight targets.
    const initializePosition = () => {
      const node = containerRef.current;
      if (!node) {
        return;
      }

      setSpotlight((prev) => ({
        ...prev,
        ...getCenteredSpotlightPosition(node),
      }));
    };

    const animate = () => {
      const node = containerRef.current;
      if (!node) {
        return;
      }

      const nextPosition = getRandomSpotlightPosition(node);
      const nextDuration = getRandomDuration();

      setSpotlight({
        ...nextPosition,
        duration: nextDuration,
      });

      animationTimeout = window.setTimeout(animate, nextDuration);
    };

    let animationTimeout: number | null = null;

    initializePosition();
    animationTimeout = window.setTimeout(animate, 400);

    const handleResize = () => {
      const node = containerRef.current;
      if (!node) {
        return;
      }

      setSpotlight((prev) => ({
        ...prev,
        ...getRandomSpotlightPosition(node),
      }));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationTimeout !== null) {
        window.clearTimeout(animationTimeout);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const spotlightStyles = {
    '--spotlight-x': `${spotlight.x}px`,
    '--spotlight-y': `${spotlight.y}px`,
    '--spotlight-duration': `${spotlight.duration}ms`,
  } as CSSProperties;

  return (
    <section id="contact" className={styles.section}>
      <div ref={containerRef} className={styles.container} style={spotlightStyles}>
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


