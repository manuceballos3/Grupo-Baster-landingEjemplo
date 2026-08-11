'use client'

import { Reveal } from '@/components/reveal'

type Accent = 'cyan' | 'magenta' | 'yellow' | 'ink'

type Category = {
  name: string
  image: string
  alt: string
  accent: Accent
}

const CATEGORIES: Category[] = [
  {
    name: 'Cartelería luminosa',
    image: '/cartelerialuminosa.jpg',
    alt: 'Trabajo de cartelería luminosa realizado por Baster',
    accent: 'cyan',
  },
  {
    name: 'Gráfica para supermercado',
    image: '/graficasupermercado.jpg',
    alt: 'Trabajo de gráfica para supermercado realizado por Baster',
    accent: 'magenta',
  },
  {
    name: 'Gran formato',
    image: '/granformato.jpg',
    alt: 'Trabajo de impresión en gran formato realizado por Baster',
    accent: 'yellow',
  },
  {
    name: 'Cartelería',
    image: '/carteleria.jpg',
    alt: 'Trabajo de cartelería realizado por Baster',
    accent: 'ink',
  },
  {
    name: 'Impresión 3D',
    image: '/impresion3d.jpg',
    alt: 'Trabajo de impresión 3D realizado por Baster',
    accent: 'cyan',
  },
  {
    name: 'Indumentaria',
    image: '/indumentaria.png',
    alt: 'Trabajo de bordado en indumentaria realizado por Baster',
    accent: 'magenta',
  },
  {
    name: 'Ploteo',
    image: '/ploteo.jpg',
    alt: 'Trabajo de ploteo realizado por Baster',
    accent: 'yellow',
  },
  {
    name: 'Rotulación',
    image: '/rotulacion.jpg',
    alt: 'Trabajo de rotulación de vidrieras realizado por Baster',
    accent: 'ink',
  },
  {
    name: 'Stickers',
    image: '/stickers.jpg',
    alt: 'Trabajo de stickers personalizados realizado por Baster',
    accent: 'cyan',
  },
]

const ACCENT_BG: Record<Accent, string> = {
  cyan: 'bg-cyan-brand',
  magenta: 'bg-magenta-brand',
  yellow: 'bg-yellow-brand',
  ink: 'bg-ink',
}

export function WorkCategories() {
  return (
    <section id="rubros" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal
          as="p"
          className="text-sm font-semibold tracking-wide text-magenta-brand uppercase"
        >
          Todo lo que hacemos
        </Reveal>
        <Reveal
          as="h2"
          delay={60}
          className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
        >
          Un rubro para cada necesidad
        </Reveal>

        <Reveal
          delay={120}
          className="[scrollbar-width:none] mt-10 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0"
        >
          {CATEGORIES.map((category, index) => (
            <figure
              key={category.name}
              className="group relative aspect-square w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-border md:w-auto"
            >
              <img
                src={category.image || '/placeholder.svg'}
                alt={category.alt}
                className="size-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-110 motion-reduce:group-hover:scale-100"
              />
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  ACCENT_BG[category.accent]
                }`}
              />
              <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/80 px-4 py-2 backdrop-blur-sm transition-all duration-300 motion-reduce:transition-none group-hover:scale-110 group-hover:px-5 group-hover:py-2.5 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:px-4 motion-reduce:group-hover:py-2">
                <span className="whitespace-nowrap font-display text-sm font-semibold text-white transition-all duration-300 motion-reduce:transition-none group-hover:text-lg motion-reduce:group-hover:text-sm">
                  {category.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
