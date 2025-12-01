'use client'

import { useState } from 'react'
import Image from 'next/image'
import './CollectionCard.css'

export default function CollectionCard({ collection, isActive, onToggle, openLightbox }) {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (itemTitle) => {
    setImageErrors(prev => ({ ...prev, [itemTitle]: true }))
  }

  return (
    <div className={`collection-card ${isActive ? 'active' : ''}`}>
      <div className="collection-header" onClick={onToggle}>
        <div>
          <h3>{collection.title}</h3>
          <p className="collection-subtitle">{collection.subtitle}</p>
        </div>
        <button className="toggle-button">
          <span className={`arrow ${isActive ? 'open' : ''}`}>▼</span>
        </button>
      </div>

      {isActive && (
        <div className="collection-content">
          <p className="collection-description">{collection.description}</p>
          <div className="items-grid">
            {collection.items.map((item, index) => (
              <div key={index} className="comic-item">
                <div 
                  className="comic-image-wrapper"
                  onClick={() => openLightbox(item.fullImage, item.title)}
                >
                  {!imageErrors[item.title] ? (
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      onError={() => handleImageError(item.title)}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>Image not found</span>
                    </div>
                  )}
                  <div className="image-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
                <div className="comic-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

