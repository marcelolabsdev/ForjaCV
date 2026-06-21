import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const SITE_URL = 'https://forja-cv.vercel.app'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville'
})

const title = 'ForjaCV - Creador de Currículums en Formato MIT'
const description =
  'Crea tu currículum en formato MIT: edita en un panel lateral, previsualiza en tiempo real y exporta a PDF o LaTeX. Compatible ATS, sin registro. Código abierto.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'ForjaCV',
  title: {
    default: title,
    template: '%s · ForjaCV',
  },
  description,
  keywords: [
    'currículum',
    'curriculum',
    'cv',
    'curriculum vitae',
    'formato MIT',
    'plantilla CV MIT',
    'crear CV online',
    'creador de currículum',
    'generador de CV',
    'CV ATS',
    'compatible ATS',
    'applicant tracking system',
    'exportar CV PDF',
    'currículum PDF',
    'CV LaTeX',
    'plantilla LaTeX CV',
    'currículum profesional',
    'plantilla CV gratis',
    'CV sin registro',
    'CV online gratis',
  ],
  authors: [{ name: 'marcelolabsdev', url: 'https://github.com/marcelolabsdev' }],
  creator: 'marcelolabsdev',
  publisher: 'marcelolabsdev',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'ForjaCV',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@marcelolabsdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark bg-background">
      <body className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <JsonLd />
      </body>
    </html>
  )
}
