'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import './Lightbox.css'

export default function Lightbox({ imageSrc, title, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false)
        } else {
          onClose()
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, isZoomed])

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>×</button>
        {title && !isZoomed && <h3 className="lightbox-title">{title}</h3>}
        <div 
          className={`lightbox-image-container ${isZoomed ? 'zoomed' : ''}`}
          onClick={handleImageClick}
        >
          <Image 
            src={imageSrc} 
            alt={title || 'Comic'} 
            width={1200}
            height={1600}
            className={isZoomed ? 'zoomed' : ''}
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

