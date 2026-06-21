import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editor',
  description:
    'Edita tu currículum en formato MIT con vista previa en tiempo real. Exporta a PDF o LaTeX. Sin registro, tus datos se quedan en tu navegador.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
