import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville'
})

export const metadata: Metadata = {
  title: 'ForjaCV - Creador de Curriculum Profesional',
  description: 'Crea tu curriculum en formato MIT: edita en un panel lateral, previsualiza en tiempo real y exporta a PDF o LaTeX. Compatible ATS, sin registro.',
  generator: 'v0.app',
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
      </body>
    </html>
  )
}
