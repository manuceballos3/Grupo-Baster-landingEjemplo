import {
  Palette,
  ShieldCheck,
  Truck,
  Clock,
  PencilRuler,
  Printer,
  type LucideIcon,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

type Benefit = {
  icon: LucideIcon
  title: string
  description: string
}

const BENEFITS: Benefit[] = [
  {
    icon: Palette,
    title: 'Color fiel a tu marca',
    description:
      'Perfiles de color calibrados para que el vinilo salga igual que tu diseño. Nada de sorpresas entre la pantalla y la pared.',
  },
  {
    icon: ShieldCheck,
    title: 'Materiales que duran',
    description:
      'Vinilos y laminados resistentes a sol, lluvia y roces. Pensados para aguantar años sin despegarse ni perder color.',
  },
  {
    icon: PencilRuler,
    title: 'Diseño incluido',
    description:
      'Si no tenés el arte listo, lo armamos con vos. Adaptamos tu logo a cada medida sin costo de diseño básico.',
  },
  {
    icon: Clock,
    title: 'Entregas rápidas',
    description:
      'Tiempos claros desde el primer mensaje. Trabajos exprés disponibles para cuando lo necesitás para ayer.',
  },
  {
    icon: Truck,
    title: 'Instalación profesional',
    description:
      'Colocamos nosotros para que quede sin burbujas ni arrugas. También enviamos a todo el país si preferís instalarlo vos.',
  },
  {
    icon: Printer,
    title: 'Tiradas chicas y grandes',
    description:
      'Desde un solo sticker hasta miles de unidades. El mismo cuidado sin importar el tamaño del pedido.',
  },
]

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="scroll-mt-20 border-y border-border bg-secondary/50 py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal
            as="p"
            className="text-sm font-semibold tracking-wide text-cyan-brand uppercase"
          >
            Por qué elegirnos
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
          >
            Calidad de imprenta, trato de barrio
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft"
          >
            Somos una imprenta que combina equipos profesionales con la
            atención cercana de siempre. Estos son los motivos por los que
            nuestros clientes vuelven.
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal
                as="li"
                key={benefit.title}
                delay={(index % 3) * 80}
                className="flex gap-4"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-ink shadow-sm ring-1 ring-border"
                >
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
