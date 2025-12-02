'use client';

import { useState } from 'react';

import About from '@/components/About';
import Collections from '@/components/Collections';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Lightbox, { type LightboxImage } from '@/components/Lightbox';

type LightboxState = {
  items: LightboxImage[];
  index: number;
};

export default function Home() {
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  const openLightbox = (items: LightboxImage[], index: number) => {
    setLightboxState({ items, index });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  return (
    <div className="app relative">
      <Header />
      <Hero />
      <Collections openLightbox={openLightbox} />
      <About />
      <Contact />
      {lightboxState && (
        <Lightbox items={lightboxState.items} initialIndex={lightboxState.index} onClose={closeLightbox} />
      )}
    </div>
  );
}


