import { Reveal } from '@/components/reveal'
import { TestimonialsGsap } from '@/components/testimonials-gsap'

const CLIENTS = [
  'Café Bar Plaza',
  'Estudio Caneva Abogados',
  'Verdulería La Quinta',
  'Gimnasio CEKIDE',
  'Boutique Lila',
  'Farmacia Roggio',
  'Barbería Roble',
  'Heladería Neo Helados',
]

// Fotos reales del local — repetidas para llenar el loop mientras no haya más.
const PHOTOS = [
  { src: '/bordadora1.png', alt: 'Bordadora de Baster en funcionamiento' },
  { src: '/grupobaster1.png', alt: 'Interior del local de Grupo Baster' },
  { src: '/logobasterpuerta1.png', alt: 'Logo de Baster en la puerta de entrada' },
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

        {/* Testimonials animated with GSAP + ScrollTrigger */}
        <TestimonialsGsap />
      </div>

      {/* Photo marquee — loop lento hacia la izquierda */}
      <Reveal
        delay={80}
        className="group relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <ul className="flex w-max animate-marquee-photos items-center gap-4 group-hover:[animation-play-state:paused]">
          {[...PHOTOS, ...PHOTOS].map((photo, i) => (
            <li
              key={`${photo.src}-${i}`}
              aria-hidden={i >= PHOTOS.length}
              className="h-56 w-auto shrink-0 overflow-hidden rounded-2xl border border-border sm:h-64"
            >
              <img
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                className="aspect-[4/3] h-full w-auto object-cover"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
