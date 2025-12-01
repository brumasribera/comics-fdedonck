'use client'

import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Science, Art & Storytelling
        </h1>
        <p className="hero-subtitle">
          Making the invisible visible through comics
        </p>
        <p className="hero-description">
          A collection of science and storytelling comics at the intersection of 
          research, art, and social justice. Each piece aims to make complex 
          issues accessible and inspire action.
        </p>
        <div className="hero-quote">
          <p>"Art touches, science enlightens, together they can lead to action."</p>
        </div>
        <button 
          className="cta-button"
          onClick={() => {
            document.getElementById('figure1a')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Explore Collections
        </button>
      </div>
    </section>
  )
}

