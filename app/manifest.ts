import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ForjaCV - Creador de Currículums en Formato MIT',
    short_name: 'ForjaCV',
    description:
      'Crea tu currículum en formato MIT: edita en un panel lateral, previsualiza en tiempo real y exporta a PDF o LaTeX. Compatible ATS, sin registro.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    lang: 'es',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      { src: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
