'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import './Header.css'

const NAV_SECTIONS = [
  { id: 'figure1a', label: 'Figure 1A 2025' },
  { id: 'noplane', label: 'No Plane Adventures' },
  { id: 'other', label: 'Other Comics' },
  { id: 'posters', label: 'Posters' }
]

const TRACKED_SECTION_IDS = [...NAV_SECTIONS.map((section) => section.id), 'about']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [visibleSections, setVisibleSections] = useState(() => new Set())
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, x: 0, visible: false })
  const navRef = useRef(null)
  const buttonRefs = useRef({})

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return
      
      setScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const headerOffset = 120
      const triggerPoint = scrollY + headerOffset
      
      // Check hero first - if we're near the top, no active section
      const heroElement = document.getElementById('hero')
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect()
        if (heroRect.bottom > viewportHeight * 0.5 && scrollY < 300) {
          setActiveSection('')
          return
        }
      }
      
      let activeId = ''
      let bestMatch = null
      let bestScore = -1
      
      // Check all sections to find the best match
      TRACKED_SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (!element) return
        
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrollY
        const elementBottom = elementTop + rect.height
        const elementCenter = elementTop + rect.height / 2
        
        // Calculate score based on how close the trigger point is to the section
        let score = 0
        
        // If trigger point is within the section, high score
        if (triggerPoint >= elementTop && triggerPoint <= elementBottom) {
          score = 1000 + (elementBottom - triggerPoint) // Prefer sections we're deeper into
        } 
        // If we've passed the section start
        else if (triggerPoint > elementTop) {
          score = 500 - (triggerPoint - elementBottom) // Closer = better
        }
        // If section is coming up
        else if (elementTop - triggerPoint < viewportHeight) {
          score = 100 - (elementTop - triggerPoint) // Closer = better
        }
        
        if (score > bestScore && score > 0) {
          bestScore = score
          bestMatch = sectionId
        }
      })
      
      setActiveSection(bestMatch || '')
    }
    
    // Use throttled scroll handler
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    // Wait for page to be fully loaded
    const initScroll = () => {
      if (document.readyState === 'complete') {
        handleScroll()
      } else {
        window.addEventListener('load', handleScroll, { once: true })
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    // Multiple initialization attempts
    initScroll()
    const initTimeout1 = setTimeout(handleScroll, 100)
    const initTimeout2 = setTimeout(handleScroll, 500)
    const initTimeout3 = setTimeout(handleScroll, 1000)
    
    return () => {
      clearTimeout(initTimeout1)
      clearTimeout(initTimeout2)
      clearTimeout(initTimeout3)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const next = new Set(prev)

          entries.forEach((entry) => {
            const { id } = entry.target
            if (entry.isIntersecting) {
              next.add(id)
            } else {
              next.delete(id)
            }
          })

          return next
        })
      },
      { 
        threshold: 0.2, // Section is visible when 20% is in viewport
        rootMargin: '-120px 0px -40% 0px' // Account for header
      }
    )

    // Function to observe all sections
    const observeSections = () => {
      TRACKED_SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
        }
      })
    }

    // Observe sections after DOM is ready
    if (typeof window !== 'undefined') {
      // Try immediately
      observeSections()
      // Also try after delays to catch dynamically loaded content
      const timeout1 = setTimeout(observeSections, 100)
      const timeout2 = setTimeout(observeSections, 500)
      
      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const updateIndicator = () => {
      const navElement = navRef.current
      const buttonElement = buttonRefs.current[activeSection]

      if (navElement && buttonElement) {
        const navRect = navElement.getBoundingClientRect()
        const buttonRect = buttonElement.getBoundingClientRect()
        setIndicatorStyle({
          width: buttonRect.width,
          x: buttonRect.left - navRect.left,
          visible: true
        })
      } else {
        setIndicatorStyle((prev) => (prev.visible ? { width: 0, x: 0, visible: false } : prev))
      }
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeSection])

  const scrollToSection = (id) => {
    console.log('scrollToSection called with id:', id)
    const element = document.getElementById(id)
    console.log('Element found:', element)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight
      
      console.log('Scrolling to:', offsetPosition)
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      console.warn('Element not found for id:', id)
    }
  }

  const aboutIsActive = activeSection === 'about'
  const aboutIsVisible = visibleSections.has('about')
  const aboutClassName = [aboutIsActive ? 'active' : '', aboutIsVisible ? 'visible' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log('Logo clicked'); scrollToSection('hero'); }}>
          <div className="logo-mark">
            <Image
              src="/favicon.png"
              alt="Fien De Doncker logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="logo-text">
            <h1>Fien De Doncker</h1>
            <span className="subtitle">Comics Portfolio</span>
          </div>
        </div>
        <nav className="nav" ref={navRef}>
          <span
            className="nav-indicator"
            aria-hidden="true"
            style={{
              width: `${indicatorStyle.width}px`,
              transform: `translate(${indicatorStyle.x}px, -50%)`,
              opacity: indicatorStyle.visible ? 1 : 0
            }}
          />
          {NAV_SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            const isVisible = visibleSections.has(section.id)
            const className = [isActive ? 'active' : '', isVisible ? 'visible' : '']
              .filter(Boolean)
              .join(' ')

            return (
              <button
                key={section.id}
                type="button"
                className={className}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log('Button clicked:', section.id); scrollToSection(section.id); }}
                aria-current={isActive ? 'page' : undefined}
                ref={(el) => {
                  if (el) {
                    buttonRefs.current[section.id] = el
                  } else {
                    delete buttonRefs.current[section.id]
                  }
                }}
              >
                {section.label}
              </button>
            )
          })}
          <button
            type="button"
            className={aboutClassName}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log('About button clicked'); scrollToSection('about'); }}
            aria-current={aboutIsActive ? 'page' : undefined}
            ref={(el) => {
              if (el) {
                buttonRefs.current.about = el
              } else {
                delete buttonRefs.current.about
              }
            }}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  )
}

