'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

import type { LightboxImage } from '@/components/Lightbox';
import type { Collection } from '@/types/collections';
import { classNames } from '@/utils/classNames';

import styles from './Collections.module.scss';
import perpignanPreview from '@/No Plane Adventures/Perpignan-preview.jpg';

const perpignanPreviewSrc = typeof perpignanPreview === 'string' ? perpignanPreview : perpignanPreview.src;

type CollectionsProps = {
  openLightbox: (items: LightboxImage[], startIndex: number) => void;
};

const collections: Collection[] = [
  {
    id: 'figure1a',
    title: 'Figure 1A 2025',
    subtitle: 'Winner of the jury award – Figure 1A Sci-Art Competition 2025',
    description: 'Two sci-art comics exploring glacial erosion and urban heat islands.',
    items: [
      {
        title: 'Silent Robber',
        description: 'Visual reflections on glacial erosion, landscapes, and the stories hidden beneath the ice.',
        image: '/Figure 1A 2025/SilentRobber_lowres.jpg',
        fullImage: '/Figure 1A 2025/SilentRobber_lowres.jpg',
      },
      {
        title: 'Borrowed Shade',
        description: 'Urban heat islands and social inequalities in cities.',
        image: '/Figure 1A 2025/BorrowedShade_lowres.jpg',
        fullImage: '/Figure 1A 2025/BorrowedShade_lowres.jpg',
      },
    ],
  },
  {
    id: 'noplane',
    title: 'No Plane Adventures',
    subtitle: 'Travels without taking the airplane',
    description: 'A series of short comics from sustainable travels.',
    items: [
      {
        title: 'Morocco',
        description: 'A journey to Morocco by alternative means of transportation.',
        image: '/No Plane Adventures/maroc_ENG.png',
        fullImage: '/No Plane Adventures/maroc_ENG.png',
        downloads: [
          { label: 'French', href: '/No Plane Adventures/Maroc-FR.pdf' },
          { label: 'English', href: '/No Plane Adventures/Morocco-ENG.pdf' },
        ],
      },
      {
        title: 'Perpignan à vélo',
        description: 'Cycling from Switzerland to visit friends in the south of France, no flights needed.',
        image: perpignanPreviewSrc,
        fullImage: perpignanPreviewSrc,
        downloads: [{ label: 'French', href: '/No Plane Adventures/PerpignanAVelo-FR.pdf' }],
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Comics',
    subtitle: 'Standalone stories',
    description: 'A collection of comics about social justice, climate, and personal reflections.',
    items: [
      {
        title: 'Othering',
        description:
          'Comic inspired by the Border Forensics report on structural inequalities behind Swiss police-related deaths.',
        image: '/Other comics/BF_Nzoy.png',
        fullImage: '/Other comics/BF_Nzoy.png',
      },
      {
        title: 'Another one breathes the dust',
        description: 'Op-ed for REVOLVE - social inequalities in car-related emissions and vulnerabilities in Geneva.',
        image: '/Other comics/6t_REVOLVE.png',
        fullImage: '/Other comics/6t_REVOLVE.png',
      },
      {
        title: 'Summer Palimpsest',
        description: 'Overflowing with emotions.',
        image: '/Other comics/SummerPalimpsest-ENG.png',
        fullImage: '/Other comics/SummerPalimpsest-ENG.png',
      },
      {
        title: 'When the pain takes over',
        description: 'Introspection and resilience.',
        image: '/Other comics/WhenThePainTakesOver-ENG.png',
        fullImage: '/Other comics/WhenThePainTakesOver-ENG.png',
      },
      {
        title: 'al-Ard (فلسطين)',
        description: 'Reflections on land, loss, and solidarity.',
        image: '/Other comics/al-Ard.png',
        fullImage: '/Other comics/al-Ard.png',
      },
      {
        title: 'Line 3 replacement',
        description: 'A story of water protectors and care for Earth.',
        image: '/Other comics/Enbridge_Line3.jpg',
        fullImage: '/Other comics/Enbridge_Line3.jpg',
      },
    ],
  },
  {
    id: 'posters',
    title: 'Posters',
    subtitle: 'Artistic posters',
    description: 'Posters made as gifts, capturing special moments and places.',
    items: [
      {
        title: 'Lausanne',
        description: 'View from the balcony of some of my dearest friends.',
        image: '/Posters/Lausanne.png',
        fullImage: '/Posters/Lausanne.png',
      },
      {
        title: 'Arpette',
        description: 'Wonderful stargazing spot.',
        image: '/Posters/Arpette.png',
        fullImage: '/Posters/Arpette.png',
      },
      {
        title: 'Rabat',
        description: 'Drawn from a photo from February 2025.',
        image: '/Posters/Rabat.png',
        fullImage: '/Posters/Rabat.png',
      },
      {
        title: "Tour d'Ai",
        description: 'Drawn from internet photos.',
        image: '/Posters/TourDAi.png',
        fullImage: '/Posters/TourDAi.png',
      },
    ],
  },
];

export default function Collections({ openLightbox }: CollectionsProps) {
  const renderCollection = (collection: Collection) => {
    const isCompact = collection.id === 'figure1a' || collection.id === 'noplane';
    const lightboxItems: LightboxImage[] = collection.items.map((item) => ({
      src: item.fullImage,
      title: item.title,
    }));
    const collectionWrapperClassName = classNames(
      styles.collectionWrapper,
      collection.id === 'posters' && styles.posterCollection,
    );

    return (
      <div key={collection.id} id={collection.id} className={collectionWrapperClassName}>
        <div className={classNames(styles.panel, isCompact && styles.panelCompact)}>
          <div className={styles.panelHeader}>
            <div className={styles.titleSection}>
              <h3>{collection.title}</h3>
              <p className={styles.subtitle}>{collection.subtitle}</p>
            </div>
          </div>

          <div className={styles.panelContent}>
            <p className={styles.description}>{collection.description}</p>

            <div className={styles.grid}>
              {collection.items.map((item, index) => {
                const hasDownloads = Boolean(item.downloads?.length);
                const cardClassName = classNames(styles.card, hasDownloads && styles.cardWithDownloads);
                const openImage = () => openLightbox(lightboxItems, index);
                const [showDownloads, setShowDownloads] = useState(false);
                const touchStartTimeRef = useRef<number | null>(null);
                const isLinkTouchRef = useRef<boolean>(false);

                const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
                  if (hasDownloads) {
                    return;
                  }

                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openImage();
                  }
                };

                const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
                  console.log('[DEBUG] Card onClick fired:', {
                    hasDownloads,
                    target: event.target,
                    currentTarget: event.currentTarget,
                    isLinkTouch: isLinkTouchRef.current,
                    timeSinceTouch: touchStartTimeRef.current ? Date.now() - touchStartTimeRef.current : null,
                  });
                  
                  // If this click was preceded by a touch on a link, ignore it
                  if (isLinkTouchRef.current) {
                    console.log('[DEBUG] Ignoring card click - was a link touch');
                    isLinkTouchRef.current = false;
                    touchStartTimeRef.current = null;
                    return;
                  }
                  
                  // On small screens with downloads, toggle visibility
                  if (hasDownloads) {
                    // Check if click was on the download buttons area or any link - if so, don't toggle
                    const target = event.target as HTMLElement;
                    const isClickOnDownloads = target.closest(`.${styles.downloads}`) !== null;
                    const isClickOnLink = target.closest('a') !== null;
                    
                    console.log('[DEBUG] Card click check:', {
                      isClickOnDownloads,
                      isClickOnLink,
                      showDownloads,
                    });
                    
                    // If click is on download buttons or links, let them handle it (don't toggle)
                    if (isClickOnDownloads || isClickOnLink) {
                      console.log('[DEBUG] Click on downloads/link, returning early');
                      return;
                    }
                    
                    // Otherwise toggle visibility (show on first click, hide on second if clicking outside)
                    console.log('[DEBUG] Toggling showDownloads from', showDownloads, 'to', !showDownloads);
                    setShowDownloads(!showDownloads);
                  } else {
                    openImage();
                  }
                };

                return (
                  <div
                    key={item.title}
                    className={cardClassName}
                    onClick={handleCardClick}
                    onTouchStart={(e) => {
                      console.log('[DEBUG] Card onTouchStart:', {
                        hasDownloads,
                        target: e.target,
                        closestA: (e.target as HTMLElement).closest('a'),
                        closestDownloads: (e.target as HTMLElement).closest(`.${styles.downloads}`),
                      });
                      // On mobile, if touching a link, don't let card handler interfere
                      if (hasDownloads) {
                        const target = e.target as HTMLElement;
                        if (target.closest('a') || target.closest(`.${styles.downloads}`)) {
                          console.log('[DEBUG] Stopping propagation on card touch');
                          e.stopPropagation();
                        }
                      }
                    }}
                    role={!hasDownloads ? 'button' : undefined}
                    tabIndex={!hasDownloads ? 0 : undefined}
                    onKeyDown={handleKeyDown}
                    aria-label={
                      hasDownloads ? `${item.title} download options` : `View ${item.title} in full screen`
                    }
                  >
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover', pointerEvents: 'none' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={55}
                        loading="lazy"
                      />
                      <div
                        className={classNames(
                          styles.overlay,
                          hasDownloads && styles.overlayDownloads,
                          // Only apply visible class on mobile when showDownloads is true
                          showDownloads && styles.overlayDownloadsVisible,
                        )}
                        onClick={(event) => {
                          // Only handle clicks if not clicking on download links
                          const target = event.target as HTMLElement;
                          if (target.closest('a')) {
                            // Let the link handle the click
                            return;
                          }
                          event.stopPropagation();
                          if (!hasDownloads) {
                            openImage();
                          }
                        }}
                        onTouchStart={(event) => {
                          console.log('[DEBUG] Overlay onTouchStart:', {
                            target: event.target,
                            closestA: (event.target as HTMLElement).closest('a'),
                            closestDownloads: (event.target as HTMLElement).closest(`.${styles.downloads}`),
                          });
                          // If touching downloads area, let it pass through
                          const target = event.target as HTMLElement;
                          if (target.closest('a') || target.closest(`.${styles.downloads}`)) {
                            console.log('[DEBUG] Stopping propagation on overlay touch - link/downloads');
                            event.stopPropagation();
                            // Don't prevent default - let the link handle it
                            return;
                          }
                        }}
                      >
                        {hasDownloads ? (
                          <div 
                            className={classNames(
                              styles.downloads,
                              // Only hide on mobile when showDownloads is false
                              !showDownloads && styles.downloadsHidden
                            )} 
                            onClick={(e) => {
                              // Only stop propagation if clicking on the container itself, not links
                              const target = e.target as HTMLElement;
                              if (!target.closest('a')) {
                                e.stopPropagation();
                              }
                            }}
                            onTouchStart={(e) => {
                              console.log('[DEBUG] Downloads container onTouchStart:', {
                                target: e.target,
                                closestA: (e.target as HTMLElement).closest('a'),
                                isLink: (e.target as HTMLElement).tagName === 'A',
                              });
                              // Always stop propagation from downloads container to prevent card handler
                              e.stopPropagation();
                              
                              // If touching a link directly, mark it
                              const target = e.target as HTMLElement;
                              if (target.tagName === 'A' || target.closest('a')) {
                                console.log('[DEBUG] Direct link touch detected');
                                isLinkTouchRef.current = true;
                                touchStartTimeRef.current = Date.now();
                              }
                            }}
                          >
                            <span className={styles.downloadLabel}>View PDF</span>
                            <div className={styles.downloadLinks}>
                              {item.downloads?.map((download) => (
                                <a
                                  key={`${item.title}-${download.label}`}
                                  href={download.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.downloadLink}
                                  onClick={(e) => {
                                    console.log('[DEBUG] Link onClick fired:', {
                                      href: download.href,
                                      target: e.target,
                                      currentTarget: e.currentTarget,
                                      defaultPrevented: e.defaultPrevented,
                                      isTrusted: e.isTrusted,
                                    });
                                    
                                    // Stop all propagation to prevent card handler
                                    e.stopPropagation();
                                    e.nativeEvent.stopImmediatePropagation();
                                    
                                    // On mobile, if default was prevented, manually navigate
                                    if (e.defaultPrevented) {
                                      console.log('[DEBUG] Default was prevented, manually navigating to:', download.href);
                                      window.open(download.href, '_blank', 'noopener,noreferrer');
                                    } else {
                                      console.log('[DEBUG] Default navigation should work, href:', download.href);
                                    }
                                  }}
                                  onTouchStart={(e) => {
                                    console.log('[DEBUG] Link onTouchStart fired:', {
                                      href: download.href,
                                      target: e.target,
                                      tagName: (e.target as HTMLElement).tagName,
                                    });
                                    // Mark that we're touching a link
                                    isLinkTouchRef.current = true;
                                    touchStartTimeRef.current = Date.now();
                                    // Prevent parent handlers from interfering on touch devices
                                    e.stopPropagation();
                                    e.nativeEvent.stopImmediatePropagation();
                                  }}
                                  onTouchEnd={(e) => {
                                    console.log('[DEBUG] Link onTouchEnd fired:', {
                                      href: download.href,
                                      target: e.target,
                                    });
                                    // Prevent card click from firing
                                    e.stopPropagation();
                                    e.nativeEvent.stopImmediatePropagation();
                                    
                                    // Small delay to ensure click event can fire
                                    setTimeout(() => {
                                      isLinkTouchRef.current = false;
                                      touchStartTimeRef.current = null;
                                    }, 300);
                                  }}
                                  onMouseDown={(e) => {
                                    // Also prevent mousedown from triggering card click
                                    e.stopPropagation();
                                  }}
                                  onTouchEnd={(e) => {
                                    console.log('[DEBUG] Link onTouchEnd fired:', {
                                      href: download.href,
                                      target: e.target,
                                    });
                                  }}
                                >
                                  {download.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <span className={styles.viewText}>View Full</span>
                        )}
                      </div>
                    </div>
                    <div className={styles.cardInfo}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="collections" className={styles.section}>
      <div className={styles.header}>
        <h2>Explore the Collections</h2>
        <p>Browse through different series and standalone works</p>
      </div>

      <div className={styles.container}>{collections.map((collection) => renderCollection(collection))}</div>
    </section>
  );
}

