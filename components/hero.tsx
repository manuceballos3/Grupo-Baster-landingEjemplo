import { ArrowRight, MapPin, Star } from 'lucide-react'

import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Decorative CMYK registration bar (animada) */}
      <div
        aria-hidden="true"
        className="cmyk-bar absolute inset-x-0 top-0 h-1.5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 hidden text-cyan-brand/15 lg:block"
      >
        <div className="halftone animate-spin-slow size-[420px] rounded-full" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <Reveal
            as="span"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-ink-soft uppercase"
          >
            <span className="size-2 rounded-full bg-magenta-brand" aria-hidden="true" />
            Imprenta &amp; ploteos a medida
          </Reveal>

          <Reveal
            as="h1"
            delay={60}
            className="mt-5 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl"
          >
            Vestí tu marca con{' '}
            <span className="text-cyan-brand">ploteados</span> que se ven de{' '}
            <span className="text-magenta-brand">lejos</span>.
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft"
          >
            Diseñamos, imprimimos e instalamos ploteados personalizados para
            vidrieras, paredes y superficies. También hacemos stickers a medida,
            en tiradas chicas o grandes, con colores fieles y terminación
            profesional.
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cotizar"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-magenta-brand active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-brand"
            >
              Pedí tu presupuesto
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#servicios"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-7 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand"
            >
              Ver servicios
            </a>
          </Reveal>

          <Reveal
            delay={240}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-yellow-brand text-yellow-brand" />
                ))}
              </span>
              <span className="font-medium text-ink">+500 proyectos</span> instalados
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-cyan-brand" aria-hidden="true" />
              Envíos e instalación en toda la ciudad
            </span>
          </Reveal>
        </div>

        {/* Visual composition */}
        <Reveal delay={120} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="animate-float-slow absolute inset-0 -rotate-3 rounded-3xl bg-yellow-brand/25" aria-hidden="true" />
            <div className="animate-float absolute inset-0 rotate-2 rounded-3xl bg-cyan-brand/20" aria-hidden="true" />
            <div className="absolute inset-2 overflow-hidden rounded-3xl border border-border bg-secondary shadow-xl">
              <img
                src="/hero-baster.jpg"
                alt="Integrante del equipo Grupo Baster trabajando en el local, con maquinaria de impresión y ploteado de fondo"
                className="size-full object-cover object-top"
              />
            </div>
            {/* Floating chip */}
            <div className="animate-float absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur">
              <span className="flex size-9 items-center justify-center rounded-full bg-magenta-brand/10 text-magenta-brand" aria-hidden="true">
                <Star className="size-4 fill-magenta-brand" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">Colores fieles</p>
                <p className="text-xs text-ink-soft">Impresión cuatricromía</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
