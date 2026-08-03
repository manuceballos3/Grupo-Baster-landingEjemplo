import { Quote, Star } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const CLIENTS = [
  'Café Aurora',
  'Estudio Norte',
  'Verdulería La Huerta',
  'Gimnasio Pulso',
  'Boutique Lila',
  'Farmacia San Martín',
  'Barbería Roble',
  'Heladería Polo',
]

type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

// Texto e imágenes de ejemplo — reemplazalos por testimonios reales cuando los tengas.
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
]

export function SocialProof() {
  return (
    <section id="clientes" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal
          as="p"
          className="text-center text-sm font-medium text-ink-soft"
        >
          Marcas y comercios que ya confían en nosotros
        </Reveal>
      </div>

      {/* Client logos marquee */}
      <Reveal
        delay={80}
        className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <ul className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <li
              key={`${client}-${i}`}
              aria-hidden={i >= CLIENTS.length}
              className="flex h-14 items-center rounded-xl border border-border bg-card px-6 font-display text-base font-semibold whitespace-nowrap text-ink-soft"
            >
              {client}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal
          as="h2"
          className="mt-16 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
        >
          Lo que dicen quienes ya plotearon con nosotros
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <Reveal
              as="li"
              key={t.name}
              delay={index * 90}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <Quote
                className="size-8 text-cyan-brand"
                aria-hidden="true"
              />
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
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
