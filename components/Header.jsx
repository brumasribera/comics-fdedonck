'use client'

import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <h1>Fien De Doncker</h1>
          <span className="subtitle">Comics Portfolio</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('collections')}>Collections</button>
          <button onClick={() => scrollToSection('about')}>About</button>
        </nav>
      </div>
    </header>
  )
}

