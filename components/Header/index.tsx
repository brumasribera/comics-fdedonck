'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { classNames } from '@/utils/classNames';

import styles from './Header.module.scss';

const NAV_SECTIONS = [
  { id: 'figure1a', label: 'Figure 1A 2025' },
  { id: 'noplane', label: 'No Plane Adventures' },
  { id: 'other', label: 'Other Comics' },
  { id: 'posters', label: 'Posters' },
] as const;

type NavSectionId = (typeof NAV_SECTIONS)[number]['id'];
type SectionId = NavSectionId | 'about';

const TRACKED_SECTION_IDS: SectionId[] = [...NAV_SECTIONS.map((section) => section.id), 'about'];

const isSectionId = (value: string): value is SectionId =>
  TRACKED_SECTION_IDS.some((sectionId) => sectionId === value);

type IndicatorStyle = {
  width: number;
  x: number;
  visible: boolean;
};

const SCROLL_BUFFER = 24;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | ''>('');
  const [visibleSections, setVisibleSections] = useState<Set<SectionId>>(() => new Set());
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    width: 0,
    x: 0,
    visible: false,
  });
  const [isAtTop, setIsAtTop] = useState(true);

  const headerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | undefined>>({});

  const getHeaderHeight = () => headerRef.current?.getBoundingClientRect().height ?? 0;

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setIsAtTop(scrollY <= 0);
      const viewportHeight = window.innerHeight;
      const headerOffset = getHeaderHeight() + SCROLL_BUFFER;
      const triggerPoint = scrollY + headerOffset;

      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        if (heroRect.bottom > viewportHeight * 0.5 && scrollY < 300) {
          setActiveSection('');
          return;
        }
      }

      let bestMatch: SectionId | '' = '';
      let bestScore = -1;

      TRACKED_SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;

        let score = 0;

        if (triggerPoint >= elementTop && triggerPoint <= elementBottom) {
          score = 1000 + (elementBottom - triggerPoint);
        } else if (triggerPoint > elementTop) {
          score = 500 - (triggerPoint - elementBottom);
        } else if (elementTop - triggerPoint < viewportHeight) {
          score = 100 - (elementTop - triggerPoint);
        }

        if (score > bestScore && score > 0) {
          bestScore = score;
          bestMatch = sectionId;
        }
      });

      setActiveSection(bestMatch);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const initScroll = () => {
      if (document.readyState === 'complete') {
        handleScroll();
      } else {
        window.addEventListener('load', handleScroll, { once: true });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    initScroll();
    const initTimeout1 = setTimeout(handleScroll, 100);
    const initTimeout2 = setTimeout(handleScroll, 500);
    const initTimeout3 = setTimeout(handleScroll, 1000);

    return () => {
      clearTimeout(initTimeout1);
      clearTimeout(initTimeout2);
      clearTimeout(initTimeout3);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const next = new Set(prev);

          entries.forEach((entry) => {
            const { id } = entry.target;
            if (!isSectionId(id)) return;
            if (entry.isIntersecting) {
              next.add(id);
            } else {
              next.delete(id);
            }
          });

          return next;
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-120px 0px -40% 0px',
      },
    );

    const observeSections = () => {
      TRACKED_SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    };

    if (typeof window !== 'undefined') {
      observeSections();
      const timeout1 = setTimeout(observeSections, 100);
      const timeout2 = setTimeout(observeSections, 500);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const navElement = navRef.current;
      const buttonElement = buttonRefs.current[activeSection];

      if (navElement && buttonElement) {
        const navRect = navElement.getBoundingClientRect();
        const buttonRect = buttonElement.getBoundingClientRect();

        setIndicatorStyle({
          width: buttonRect.width,
          x: buttonRect.left - navRect.left,
          visible: true,
        });
      } else {
        setIndicatorStyle((prev) => (prev.visible ? { width: 0, x: 0, visible: false } : prev));
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const scrollToSection = (id: SectionId | 'hero') => {
    if (typeof window === 'undefined') return;

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (!element) {
      console.warn('Element not found for id:', id);
      return;
    }

    const headerHeight = getHeaderHeight();
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(elementPosition - headerHeight - SCROLL_BUFFER, 0);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

  };

  const aboutIsActive = activeSection === 'about';
  const aboutIsVisible = visibleSections.has('about');

  return (
    <header
      ref={headerRef}
      className={classNames(
        styles.header,
        scrolled && styles.headerScrolled,
        !isAtTop && styles.headerHidden,
      )}
    >
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            scrollToSection('hero');
          }}
        >
          <div className={styles.logoMark}>
            <Image src="/favicon.png" alt="Fien De Doncker logo" width={40} height={40} priority />
          </div>
          <div className={styles.logoText}>
            <h1>Fien De Doncker</h1>
            <span className={styles.logoSubtitle}>Comics Portfolio</span>
          </div>
        </div>
        <nav className={styles.nav} ref={navRef}>
          <span
            className={styles.navIndicator}
            aria-hidden="true"
            style={{
              width: `${indicatorStyle.width}px`,
              transform: `translate(${indicatorStyle.x}px, -50%)`,
              opacity: indicatorStyle.visible ? 1 : 0,
            }}
          />
          {NAV_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            const isVisible = visibleSections.has(section.id);
            const buttonClassName = classNames(
              styles.navButton,
              isActive && styles.navButtonActive,
              isVisible && styles.navButtonVisible,
            );

            return (
              <button
                key={section.id}
                type="button"
                className={buttonClassName}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  scrollToSection(section.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                ref={(element) => {
                  if (element) {
                    buttonRefs.current[section.id] = element;
                  } else {
                    delete buttonRefs.current[section.id];
                  }
                }}
              >
                {section.label}
              </button>
            );
          })}
          <button
            type="button"
            className={classNames(
              styles.navButton,
              aboutIsActive && styles.navButtonActive,
              aboutIsVisible && styles.navButtonVisible,
            )}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              scrollToSection('about');
            }}
            aria-current={aboutIsActive ? 'page' : undefined}
            ref={(element) => {
              if (element) {
                buttonRefs.current.about = element;
              } else {
                delete buttonRefs.current.about;
              }
            }}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}

