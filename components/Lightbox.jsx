'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import './Lightbox.css'

export default function Lightbox({ imageSrc, title, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>×</button>
        {title && <h3 className="lightbox-title">{title}</h3>}
        <div className="lightbox-image-container">
          <Image 
            src={imageSrc} 
            alt={title || 'Comic'} 
            width={1200}
            height={1600}
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              objectFit: 'contain'
            }}
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

