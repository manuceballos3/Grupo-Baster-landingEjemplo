import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-empresa.jpg"
              alt="Logotipo de Cuatricolor"
              width={40}
              height={40}
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              Cuatri<span className="text-magenta-brand">color</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Imprenta especializada en ploteados personalizados para vidrieras,
            paredes y superficies, más stickers a medida con color de
            cuatricromía.
          </p>
        </div>

        <nav aria-label="Enlaces del pie">
          <h2 className="font-display text-sm font-bold tracking-wide text-ink uppercase">
            Navegación
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {[
              { href: '#servicios', label: 'Servicios' },
              { href: '#beneficios', label: 'Beneficios' },
              { href: '#clientes', label: 'Clientes' },
              { href: '#faq', label: 'Preguntas frecuentes' },
              { href: '#cotizar', label: 'Pedir cotización' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded text-ink-soft transition-colors hover:text-magenta-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-ink uppercase">
            Contacto
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-brand" aria-hidden="true" />
              Av. Siempreviva 1234, tu ciudad
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-cyan-brand" aria-hidden="true" />
              <a
                href="tel:+5490000000000"
                className="rounded transition-colors hover:text-magenta-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand"
              >
                +54 9 000 000-0000
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-cyan-brand" aria-hidden="true" />
              <a
                href="mailto:hola@cuatricolor.com"
                className="rounded transition-colors hover:text-magenta-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-brand"
              >
                hola@cuatricolor.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-cyan-brand" aria-hidden="true" />
              Lun a Vie 9–18 h · Sáb 9–13 h
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-ink-soft sm:flex-row sm:px-6">
          <p>© {year} Cuatricolor. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-3 rounded-full bg-cyan-brand" />
            <span className="size-3 rounded-full bg-magenta-brand" />
            <span className="size-3 rounded-full bg-yellow-brand" />
            <span className="size-3 rounded-full bg-ink" />
          </div>
        </div>
      </div>
    </footer>
  )
}
