'use client';

import Image from 'next/image';

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

    return (
      <div key={collection.id} id={collection.id} className={styles.collectionWrapper}>
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

                const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
                  if (hasDownloads) {
                    return;
                  }

                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openImage();
                  }
                };

                return (
                  <div
                    key={item.title}
                    className={cardClassName}
                    onClick={!hasDownloads ? openImage : undefined}
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
                        className={classNames(styles.overlay, hasDownloads && styles.overlayDownloads)}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (!hasDownloads) {
                            openImage();
                          }
                        }}
                      >
                        {hasDownloads ? (
                          <div className={styles.downloads}>
                            <span className={styles.downloadLabel}>View PDF</span>
                            <div className={styles.downloadLinks}>
                              {item.downloads?.map((download) => (
                                <a
                                  key={`${item.title}-${download.label}`}
                                  href={download.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.downloadLink}
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

