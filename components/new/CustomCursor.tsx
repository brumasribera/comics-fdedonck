'use client'

import { useEffect, useState } from 'react'

type PointerPosition = {
  x: number
  y: number
}

export default function CustomCursor() {
  const [position, setPosition] = useState<PointerPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)
    }

    const handlePointerLeave = () => setIsVisible(false)

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-150 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
      }}
    >
      <div className="w-10 h-10 rounded-full border border-white/70 bg-transparent backdrop-invert backdrop-saturate-150 mix-blend-difference" />
    </div>
  )
}


