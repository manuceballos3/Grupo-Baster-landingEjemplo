'use client'

import { useEffect, useState } from 'react'

type RotatorImage = {
  src: string
  alt: string
}

const IMAGES: RotatorImage[] = [
  { src: '/grupobaster.png', alt: 'Fachada de Grupo Baster' },
  { src: '/bordadora.png', alt: 'Bordadora trabajando en el local' },
  { src: '/logobasterpuerta.png', alt: 'Puerta de entrada con el logo de Baster' },
  { src: '/vidrierabaster.png', alt: 'Vidriera de Baster ploteada' },
]

export function HeroImageRotator() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % IMAGES.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative size-full">
      {IMAGES.map((image, index) => (
        <img
          key={image.src}
          src={image.src || '/placeholder.svg'}
          alt={image.alt}
          className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
