'use client'

import { Quote, Star } from 'lucide-react'

import { Reveal } from '@/components/reveal'

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
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TESTIMONIALS.map((t, i) => (
        <Reveal
          as="li"
          key={t.name}
          delay={i * 100}
          className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
        >
          <Quote className="size-8 text-cyan-brand" aria-hidden="true" />
          <div
            className="mt-3 flex gap-0.5"
            aria-label={`${t.name} calificó con 5 de 5 estrellas`}
          >
            {[0, 1, 2, 3, 4].map((j) => (
              <Star
                key={j}
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
        </Reveal>
      ))}
    </ul>
  )
}
