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
    </section>
  )
}
