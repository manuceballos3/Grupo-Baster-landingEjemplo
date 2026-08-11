import { Reveal } from '@/components/reveal'

export function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal
          as="h2"
          className="font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
        >
          Visitanos en el local
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <iframe
            src="https://www.google.com/maps?q=-31.768133,-61.825702&z=16&output=embed"
            width="100%"
            height={400}
            loading="lazy"
            className="rounded-3xl border border-border overflow-hidden"
            title="Ubicación de Baster en el mapa"
          />
        </Reveal>

        <Reveal delay={140} className="mt-6">
          <a
            href="https://www.google.com/maps?q=-31.768133,-61.825702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-magenta-brand active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-brand"
          >
            Ver en Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  )
}
