'use client'

import { useEffect } from 'react'

/**
 * Intercepts all same-page anchor clicks (#section) and smoothly scrolls
 * to the target, accounting for the sticky header height.
 *
 * This centralised hook replaces the CSS `scroll-behavior: smooth` approach,
 * which can be unreliable when the header is sticky or body overflow is
 * temporarily set to hidden (mobile menu).
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const el = document.querySelector(hash)
      if (!el) return

      event.preventDefault()

      // Respect prefers-reduced-motion
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      // Get the sticky header height dynamically
      const header = document.querySelector('header')
      const headerHeight = header ? header.getBoundingClientRect().height : 0

      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 8

      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReduced ? 'auto' : 'smooth',
      })

      // Update URL without jumping
      window.history.pushState(null, '', hash)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
