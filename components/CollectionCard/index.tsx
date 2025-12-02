'use client';

import Image from 'next/image';
import { useState } from 'react';

import type { LightboxImage } from '@/components/Lightbox';
import type { Collection } from '@/types/collections';
import { classNames } from '@/utils/classNames';

import styles from './CollectionCard.module.scss';

type CollectionCardProps = {
  collection: Collection;
  isActive: boolean;
  onToggle: () => void;
  openLightbox: (items: LightboxImage[], startIndex: number) => void;
};

export default function CollectionCard({ collection, isActive, onToggle, openLightbox }: CollectionCardProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const lightboxItems: LightboxImage[] = collection.items.map((item) => ({
    src: item.fullImage,
    title: item.title,
  }));

  const handleImageError = (itemTitle: string) => {
    setImageErrors((prev) => ({ ...prev, [itemTitle]: true }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={onToggle}>
        <div>
          <h3>{collection.title}</h3>
          <p className={styles.subtitle}>{collection.subtitle}</p>
        </div>
        <button type="button" className={styles.toggleButton}>
          <span className={classNames(styles.arrow, isActive && styles.arrowOpen)}>▼</span>
        </button>
      </div>

      {isActive && (
        <div className={styles.content}>
          <p className={styles.description}>{collection.description}</p>
          <div className={styles.itemsGrid}>
            {collection.items.map((item, index) => (
              <div key={item.title} className={styles.comicItem}>
                <div className={styles.imageWrapper} onClick={() => openLightbox(lightboxItems, index)}>
                  {!imageErrors[item.title] ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      onError={() => handleImageError(item.title)}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={55}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>Image not found</span>
                    </div>
                  )}
                  <div className={styles.imageOverlay}>
                    <span>Click to view</span>
                  </div>
                </div>
                <div className={styles.comicInfo}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

