'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

/**
 * Mounts the smooth-scroll interceptor and configures GSAP global defaults
 * (respects prefers-reduced-motion) once at the top of the tree.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useSmoothScroll()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      gsap.globalTimeline.timeScale(1000)
    }
    const handler = (e: MediaQueryListEvent) => {
      gsap.globalTimeline.timeScale(e.matches ? 1000 : 1)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return <>{children}</>
}
