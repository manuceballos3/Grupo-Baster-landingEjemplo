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

              {/* Oscurecido progresivo, solo en desktop al hacer hover — la imagen se ve 
                  atenuada pero nunca desaparece del todo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-ink/0 transition-colors duration-300 motion-reduce:transition-none md:group-hover:bg-ink/55"
              />

              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  ACCENT_BG[category.accent]
                }`}
              />

              {/* Nombre del rubro centrado en el medio de la imagen. Siempre visible en 
                  mobile (no hay hover táctil); en desktop arranca oculto y aparece + crece 
                  con el hover, en el mismo lugar, sin desplazarse. */}
              <figcaption className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 text-center">
                <span className="font-display font-semibold text-white drop-shadow-md text-base transition-all duration-300 motion-reduce:transition-none md:text-lg md:opacity-0 md:group-hover:text-2xl md:group-hover:opacity-100 motion-reduce:md:opacity-100 motion-reduce:md:group-hover:text-lg">
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
