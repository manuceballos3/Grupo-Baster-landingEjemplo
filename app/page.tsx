import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ScrollGrowImage } from '@/components/scroll-grow-image'
import { Services } from '@/components/services'
import { Benefits } from '@/components/benefits'
import { SocialProof } from '@/components/social-proof'
import { WorkCategories } from '@/components/work-categories'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { Location } from '@/components/location'
import { SiteFooter } from '@/components/site-footer'
import { FAQ_ITEMS } from '@/lib/faq'

const siteUrl = 'https://baster-imprenta.vercel.app'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Baster',
      description:
        'Imprenta especializada en ploteados personalizados para vidrieras, paredes y superficies, más stickers a medida.',
      url: siteUrl,
      image: `${siteUrl}/logo-empresa.jpg`,
      logo: `${siteUrl}/logo-empresa.jpg`,
      telephone: '+54-9-000-000-0000',
      email: 'grupobaster@gmail.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Avenida General López y Moreno',
        addressLocality: 'Sastre',
        addressRegion: 'Santa Fe',
        addressCountry: 'AR',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '13:00',
        },
      ],
      makesOffer: [
        'Ploteo de vidrieras',
        'Murales y vinilos para paredes',
        'Stickers personalizados',
        'Cartelería y señalética',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD para SEO/AEO — permite que buscadores con IA entiendan y citen el contenido.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <ScrollGrowImage />
        <Services />
        <Benefits />
        <SocialProof />
        <WorkCategories />
        <Faq />
        <Cta />
        <Location />
      </main>
      <SiteFooter />
    </>
  )
}
