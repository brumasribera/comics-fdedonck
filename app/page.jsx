'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Collections from '@/components/Collections'
import About from '@/components/About'
import Lightbox from '@/components/Lightbox'

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxTitle, setLightboxTitle] = useState('')

  const openLightbox = (imageSrc, title) => {
    setLightboxImage(imageSrc)
    setLightboxTitle(title)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxTitle('')
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <Collections openLightbox={openLightbox} />
      <About />
      {lightboxImage && (
        <Lightbox
          imageSrc={lightboxImage}
          title={lightboxTitle}
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}

