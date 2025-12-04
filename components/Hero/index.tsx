'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFullyLoaded, setImageFullyLoaded] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const scrollToCollections = () => {
    if (typeof document === 'undefined') return;
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Check if Space Grotesk font is loaded
    const checkFontLoaded = () => {
      if (!document.fonts) {
        // Fallback: if Font Loading API is not available, show after a short delay
        setTimeout(() => setFontLoaded(true), 500);
        return;
      }

      // Function to check if the font is actually loaded
      const isFontReady = () => {
        if (document.fonts && document.fonts.check) {
          // Check for Space Grotesk with weight 600 (used in the title)
          return document.fonts.check('600 1em "Space Grotesk"');
        }
        return false;
      };

      // If font is already loaded, show immediately
      if (isFontReady()) {
        setFontLoaded(true);
        return;
      }

      // Wait for fonts to be ready, then verify Space Grotesk is loaded
      document.fonts.ready.then(() => {
        // Poll to check if Space Grotesk is loaded (with timeout)
        let attempts = 0;
        const maxAttempts = 20; // 2 seconds max (20 * 100ms)
        
        const pollFont = () => {
          if (isFontReady() || attempts >= maxAttempts) {
            setFontLoaded(true);
            return;
          }
          attempts++;
          setTimeout(pollFont, 100);
        };

        pollFont();
      });
    };

    checkFontLoaded();
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Fast-loading blurred placeholder - low quality version - loads immediately */}
      <div className={styles.placeholderContainer}>
        <img
          src="/Figure 1A 2025/BorrowedShade_placeholder.jpg"
          alt=""
          className={styles.placeholderImage}
          fetchPriority="high"
          loading="eager"
          aria-hidden="true"
        />
      </div>

      {/* Main high-quality image */}
      <div className={styles.imageContainer}>
        <Image
          src="/Figure 1A 2025/BorrowedShade_lowres.jpg"
          alt="Borrowed Shade — exploring urban heat islands and social inequality"
          fill
          sizes="100vw"
          priority
          quality={85}
          className={`${styles.mainImage} ${imageLoaded ? styles.imageLoaded : styles.imageLoading}`}
          onLoad={() => {
            setImageLoaded(true);
            // Wait a bit for image to fully render before enabling blur effects
            setTimeout(() => setImageFullyLoaded(true), 100);
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay} />

      <div className={styles.content}>
        {/* Skeleton loader */}
        {!fontLoaded && (
          <div className={styles.skeletonContainer}>
            <div className={styles.copy}>
              <div className={styles.skeletonEyebrow}>
                <div className={styles.skeletonLine} style={{ width: '120px' }}></div>
                <div className={styles.skeletonLine} style={{ width: '200px' }}></div>
              </div>
              <div className={styles.skeletonTitle}>
                <div className={styles.skeletonLine} style={{ width: '60%', height: 'clamp(3.2rem, 5vw, 5.4rem)' }}></div>
              </div>
              <div className={styles.skeletonSubtitle}>
                <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
                <div className={styles.skeletonLine} style={{ width: '85%', marginTop: '8px' }}></div>
              </div>
              <div className={styles.skeletonDescription}>
                <div className={styles.skeletonLine} style={{ width: '70%', marginTop: '18px' }}></div>
              </div>
              <div className={styles.skeletonActions}>
                <div className={styles.skeletonButton} style={{ width: '180px', height: '48px' }}></div>
                <div className={styles.skeletonButton} style={{ width: '140px', height: '48px' }}></div>
              </div>
              <div className={styles.skeletonHighlights}>
                <div className={styles.skeletonCard}>
                  <div className={styles.skeletonLine} style={{ width: '80px', height: '12px' }}></div>
                  <div className={styles.skeletonLine} style={{ width: '100%', height: '16px', marginTop: '10px' }}></div>
                </div>
                <div className={styles.skeletonCard}>
                  <div className={styles.skeletonLine} style={{ width: '60px', height: '12px' }}></div>
                  <div className={styles.skeletonLine} style={{ width: '100%', height: '16px', marginTop: '10px' }}></div>
                </div>
                <div className={styles.skeletonCard}>
                  <div className={styles.skeletonLine} style={{ width: '70px', height: '12px' }}></div>
                  <div className={styles.skeletonLine} style={{ width: '100%', height: '16px', marginTop: '10px' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actual content */}
        <div className={styles.copy} style={{ opacity: fontLoaded ? 1 : 0, transition: 'opacity 0.3s ease', visibility: fontLoaded ? 'visible' : 'hidden' }}>
          <p className={styles.eyebrow}>
            Portfolio
            <span aria-hidden="true"></span>
            Science · Art · Storytelling
          </p>
          <h1 className={styles.title}>Fien De Doncker</h1>
          <p className={styles.subtitle}>
            Comics turning research into felt stories where field notes, data, and lived realities make climate justice visceral.
          </p>
          <p className={styles.description}>
            <span className={styles.mantraLine}>Art touches, science enlightens, together they can lead to action.</span>
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
            <div className={styles.highlightCard}>
              <span>Latest award</span>
              <strong>Figure 1A Jury Award · 2025</strong>
            </div>
            <div className={styles.highlightCard}>
              <span>Focus</span>
              <strong>Science communication, justice &amp; fieldwork</strong>
            </div>
            <div className={styles.highlightCard}>
              <span>Mediums</span>
              <strong>Comics · Research diaries · Poster narratives</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine}></span>
      </div>
    </section>
  );
}

