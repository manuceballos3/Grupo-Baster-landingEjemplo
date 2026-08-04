import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = 'https://baster-imprenta.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Baster — Ploteados personalizados y stickers para tu marca',
    template: '%s | Baster',
  },
  description:
    'Imprenta especializada en ploteados personalizados para vidrieras, paredes y superficies, más stickers a medida. Diseño, impresión de alta calidad e instalación en toda la ciudad.',
  keywords: [
    'ploteados personalizados',
    'ploteo de vidrieras',
    'vinilos para paredes',
    'stickers personalizados',
    'imprenta',
    'gigantografías',
    'cartelería',
    'vinilo de corte',
  ],
  authors: [{ name: 'Baster' }],
  creator: 'Baster',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Baster',
    title: 'Baster — Ploteados personalizados y stickers para tu marca',
    description:
      'Ploteados para vidrieras, paredes y superficies + stickers a medida. Diseño, impresión de alta calidad e instalación profesional.',
    images: [
      {
        url: '/logo-empresa.jpg',
        width: 1024,
        height: 1024,
        alt: 'Logotipo de Baster imprenta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baster — Ploteados personalizados y stickers',
    description:
      'Ploteados para vidrieras, paredes y superficies + stickers a medida. Diseño, impresión e instalación profesional.',
    images: ['/logo-empresa.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${inter.variable} ${spaceGrotesk.variable} bg-background`}
      style={{ colorScheme: 'light' }}
    >
      <body className="font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
