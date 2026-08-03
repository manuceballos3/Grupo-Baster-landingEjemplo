'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { FAQ_ITEMS } from '@/lib/faq'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border bg-secondary/50 py-16 md:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal
            as="p"
            className="text-sm font-semibold tracking-wide text-yellow-brand uppercase"
          >
            <span className="rounded bg-ink px-2 py-0.5 text-yellow-brand">
              Preguntas frecuentes
            </span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
          >
            Todo lo que necesitás saber antes de pedir
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft"
          >
            ¿No encontrás tu respuesta? Escribinos y te sacamos la duda al
            instante.
          </Reveal>
        </div>

        <Reveal as="ul" delay={100} className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-ink transition-colors hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-brand"
                  >
                    {item.question}
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        'size-5 shrink-0 text-magenta-brand transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-ink-soft">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
