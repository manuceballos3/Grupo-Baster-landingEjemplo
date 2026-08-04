'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const SERVICE_OPTIONS = [
  'Ploteo de vidriera',
  'Mural / pared',
  'Stickers',
  'Cartelería',
  'Otro',
]

export function Cta() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Demo: mostramos confirmación. Conectá acá tu backend, email o WhatsApp.
    setSent(true)
  }

  return (
    <section
      id="cotizar"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 sm:px-10 md:py-16">
          {/* Decorative halftone */}
          <div
            aria-hidden="true"
            className="halftone pointer-events-none absolute -right-16 -bottom-16 size-72 rounded-full text-white/10"
          />
          {/* CMYK registration bar */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1.5">
            <span className="flex-1 bg-cyan-brand" />
            <span className="flex-1 bg-magenta-brand" />
            <span className="flex-1 bg-yellow-brand" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal
                as="h2"
                className="font-display font-bold tracking-tight text-balance text-white"
              >
                <span className="block text-2xl sm:text-3xl">¿Tenés un proyecto?</span>
                <span className="misregister block text-4xl sm:text-5xl">Hablemos.</span>
              </Reveal>
              <Reveal
                as="p"
                delay={80}
                className="mt-4 max-w-md text-lg leading-relaxed text-pretty text-white/70"
              >
                Contanos tu proyecto y te enviamos un presupuesto sin cargo en
                menos de 24 horas. Sin compromiso.
              </Reveal>
              <Reveal delay={140} className="mt-8">
                <a
                  href="https://wa.me/5490000000000"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-yellow-brand px-6 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-brand"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Escribinos por WhatsApp
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              {sent ? (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-ink/10 bg-white p-10 text-center shadow-sm"
                >
                  <CheckCircle2 className="size-12 text-cyan-brand" aria-hidden="true" />
                  <p className="font-display text-xl font-bold text-ink">
                    ¡Gracias por escribirnos!
                  </p>
                  <p className="text-ink-soft">
                    Recibimos tu consulta y te respondemos a la brevedad.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_4px_32px_-8px_rgba(32,31,39,0.14)] sm:p-7"
                  aria-label="Formulario de cotización"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-ink outline-none transition-colors focus-visible:border-cyan-brand focus-visible:ring-3 focus-visible:ring-cyan-brand/25"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-ink outline-none transition-colors focus-visible:border-cyan-brand focus-visible:ring-3 focus-visible:ring-cyan-brand/25"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        ¿Qué necesitás?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-ink outline-none transition-colors focus-visible:border-cyan-brand focus-visible:ring-3 focus-visible:ring-cyan-brand/25"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        Contanos tu proyecto
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Medidas, cantidades, fecha estimada…"
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus-visible:border-cyan-brand focus-visible:ring-3 focus-visible:ring-cyan-brand/25"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-magenta-brand px-6 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magenta-brand"
                  >
                    Pedir mi presupuesto
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
