import { Store, LayoutPanelLeft, Sticker, Layers, type LucideIcon } from 'lucide-react'

import { Reveal } from '@/components/reveal'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  accent: 'cyan' | 'magenta' | 'yellow' | 'ink'
}

const SERVICES: Service[] = [
  {
    icon: Store,
    title: 'Ploteo de vidrieras',
    description:
      'Vinilos de corte y full color para tu vidriera: logos, promociones, horarios y esmerilados. Frenan el sol y llaman la atención desde la vereda.',
    accent: 'cyan',
  },
  {
    icon: LayoutPanelLeft,
    title: 'Murales y paredes',
    description:
      'Ambientación de locales, oficinas y espacios con gráficas de gran formato. Convertimos una pared vacía en la cara de tu marca.',
    accent: 'magenta',
  },
  {
    icon: Sticker,
    title: 'Stickers personalizados',
    description:
      'Troquelados a medida, en hojas o unidades, resistentes al agua. Ideales para packaging, productos, eventos y merchandising.',
    accent: 'yellow',
  },
  {
    icon: Layers,
    title: 'Cartelería y señalética',
    description:
      'Carteles, banners y señalización interior en distintos materiales. Diseño, impresión y colocación con terminación prolija.',
    accent: 'ink',
  },
]

const ACCENT_STYLES: Record<Service['accent'], { icon: string; bar: string }> = {
  cyan: { icon: 'bg-cyan-brand/12 text-cyan-brand', bar: 'bg-cyan-brand' },
  magenta: { icon: 'bg-magenta-brand/12 text-magenta-brand', bar: 'bg-magenta-brand' },
  yellow: { icon: 'bg-yellow-brand/25 text-ink', bar: 'bg-yellow-brand' },
  ink: { icon: 'bg-ink/8 text-ink', bar: 'bg-ink' },
}

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal
            as="p"
            className="text-sm font-semibold tracking-wide text-magenta-brand uppercase"
          >
            Qué hacemos
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
          >
            Un servicio de impresión para cada superficie
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft"
          >
            Del vinilo chico al mural completo. Trabajamos con materiales de
            primera calidad y te acompañamos desde el diseño hasta la
            instalación final.
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const accent = ACCENT_STYLES[service.accent]
            const Icon = service.icon
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={index * 80}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accent.bar}`}
                />
                <span
                  aria-hidden="true"
                  className={`flex size-12 items-center justify-center rounded-xl ${accent.icon}`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
