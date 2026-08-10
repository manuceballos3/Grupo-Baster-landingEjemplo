'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollGrowImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion || !imageRef.current) return

      gsap.fromTo(
        imageRef.current,
        { scale: 0.8 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="overflow-hidden rounded-3xl border border-border">
        <img
          ref={imageRef}
          src="/vidrierabaster1.png"
          alt="Vidriera de Baster ploteada, vista de cerca"
          className="aspect-video w-full object-cover"
        />
      </div>
    </div>
  )
}
