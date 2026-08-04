'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Martina Gómez',
    role: 'Dueña de Café Aurora',
    quote:
      'Ploteamos toda la vidriera y el local se nota desde la esquina. La instalación fue impecable y los colores quedaron tal cual el diseño.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Diego Fernández',
    role: 'Marketing en Gimnasio Pulso',
    quote:
      'Pedimos stickers y un mural para la recepción. Rapidísimos con los tiempos y el acabado es de primera. Ya somos clientes fijos.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Carla Ruiz',
    role: 'Emprendedora textil',
    quote:
      'Hago tiradas chicas de stickers para mi packaging y siempre salen perfectos. Me asesoraron con el material y el troquel sin drama.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Sebastián Torres',
    role: 'Dueño de Barbería Roble',
    quote:
      'El vinilo de la entrada le cambió la cara al local. Varios clientes me preguntaron dónde lo había hecho. Ya pedí el segundo encargo.',
    image: '/placeholder-user.jpg',
  },
]

export function TestimonialsGsap() {
  const containerRef = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        containerRef.current?.querySelectorAll('.testimonial-card') ?? [],
      )

      // Alternating: even index slides in from left, odd from right
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -72 : 72

        gsap.fromTo(
          card,
          {
            x: fromX,
            opacity: 0,
            filter: 'blur(5px)',
          },
          {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.85,
            ease: 'power3.out',
            // Sequential stagger: each card delays 120ms after the previous
            delay: i * 0.12,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <ul
      ref={containerRef}
      className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {TESTIMONIALS.map((t) => (
        <li
          key={t.name}
          className="testimonial-card flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          style={{ opacity: 0 }}
        >
          <Quote className="size-8 text-cyan-brand" aria-hidden="true" />
          <div
            className="mt-3 flex gap-0.5"
            aria-label={`${t.name} calificó con 5 de 5 estrellas`}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="size-4 fill-yellow-brand text-yellow-brand"
                aria-hidden="true"
              />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-pretty text-ink">
            <p className="leading-relaxed">{t.quote}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
            <img
              src={t.image || '/placeholder.svg'}
              alt={`Foto de ${t.name}`}
              width={44}
              height={44}
              className="size-11 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className="text-sm text-ink-soft">{t.role}</p>
            </div>
          </figcaption>
        </li>
      ))}
    </ul>
  )
}
