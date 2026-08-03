'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#faq', label: 'Preguntas' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-background/0',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-brand"
          aria-label="Baster — inicio"
        >
          <Image
            src="/logo-empresa.jpg"
            alt="Logotipo de Baster"
            width={40}
            height={40}
            className="h-9 w-9 rounded-lg object-contain transition-transform duration-300 group-hover:rotate-6"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Bas<span className="text-magenta-brand">ter</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="#cotizar"
            className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-magenta-brand active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-brand"
          >
            Pedir cotización
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-ink transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <nav aria-label="Principal móvil" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-secondary hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#cotizar"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-ink px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-magenta-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-brand"
              >
                Pedir cotización
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
