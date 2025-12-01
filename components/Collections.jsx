'use client'

import { useState } from 'react'
import CollectionCard from './CollectionCard'
import './Collections.css'

export default function Collections({ openLightbox }) {
  const [activeCollection, setActiveCollection] = useState(null)

  const collections = [
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
          fullImage: '/Figure 1A 2025/SilentRobber_lowres.jpg'
        },
        {
          title: 'Borrowed Shade',
          description: 'Urban heat islands and social inequalities in cities.',
          image: '/Figure 1A 2025/BorrowedShade_lowres.jpg',
          fullImage: '/Figure 1A 2025/BorrowedShade_lowres.jpg'
        }
      ]
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
          fullImage: '/No Plane Adventures/maroc_ENG.png'
        }
      ]
    },
    {
      id: 'other',
      title: 'Other Comics',
      subtitle: 'Standalone stories',
      description: 'A collection of comics about social justice, climate, and personal reflections.',
      items: [
        {
          title: 'Othering',
          description: 'Comic inspired by the Border Forensics report on structural inequalities behind Swiss police-related deaths.',
          image: '/Other comics/BF_Nzoy.png',
          fullImage: '/Other comics/BF_Nzoy.png'
        },
        {
          title: 'Another one breathes the dust',
          description: 'Op-ed for REVOLVE - social inequalities in car-related emissions and vulnerabilities in Geneva.',
          image: '/Other comics/6t_REVOLVE.png',
          fullImage: '/Other comics/6t_REVOLVE.png'
        },
        {
          title: 'Summer Palimpsest',
          description: 'Overflowing with emotions.',
          image: '/Other comics/SummerPalimpsest-ENG.png',
          fullImage: '/Other comics/SummerPalimpsest-ENG.png'
        },
        {
          title: 'When the pain takes over',
          description: 'Introspection and resilience.',
          image: '/Other comics/WhenThePainTakesOver-ENG.png',
          fullImage: '/Other comics/WhenThePainTakesOver-ENG.png'
        },
        {
          title: 'al-Ard (فلسطين)',
          description: 'Reflections on land, loss, and solidarity.',
          image: '/Other comics/al-Ard.png',
          fullImage: '/Other comics/al-Ard.png'
        },
        {
          title: 'Line 3 replacement',
          description: 'A story of water protectors and care for Earth.',
          image: '/Other comics/Enbridge_Line3.jpg',
          fullImage: '/Other comics/Enbridge_Line3.jpg'
        }
      ]
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
          fullImage: '/Posters/Lausanne.png'
        },
        {
          title: 'Arpette',
          description: 'Wonderful stargazing spot.',
          image: '/Posters/Arpette.png',
          fullImage: '/Posters/Arpette.png'
        },
        {
          title: 'Rabat',
          description: 'Drawn from a photo from February 2025.',
          image: '/Posters/Rabat.png',
          fullImage: '/Posters/Rabat.png'
        },
        {
          title: 'Tour d\'Ai',
          description: 'Drawn from internet photos.',
          image: '/Posters/TourDAi.png',
          fullImage: '/Posters/TourDAi.png'
        }
      ]
    }
  ]

  return (
    <section id="collections" className="collections">
      <div className="collections-header">
        <h2>Explore the Collections</h2>
        <p>Browse through different series and standalone works</p>
      </div>

      <div className="collections-grid">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            isActive={activeCollection === collection.id}
            onToggle={() => setActiveCollection(
              activeCollection === collection.id ? null : collection.id
            )}
            openLightbox={openLightbox}
          />
        ))}
      </div>
    </section>
  )
}

