import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const runtime = 'nodejs'
export const alt = 'ForjaCV - Creador de Currículums en Formato MIT'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), 'public', 'logo.png'),
  )
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 25% 20%, rgba(56, 189, 248, 0.12), transparent 45%), radial-gradient(circle at 80% 85%, rgba(16, 185, 129, 0.10), transparent 40%)',
          padding: 80,
          fontFamily: 'sans-serif',
          color: '#fafafa',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 36,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={110}
            height={110}
            alt=""
            style={{
              borderRadius: 24,
              objectFit: 'contain',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: -0.5,
            marginBottom: 8,
            color: '#e5e5e5',
          }}
        >
          ForjaCV
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            textAlign: 'center',
            lineHeight: 1.05,
            marginBottom: 28,
            backgroundImage: 'linear-gradient(90deg, #38bdf8, #10b981)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Forja tu currículum con el formato MIT
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#a3a3a3',
            textAlign: 'center',
            marginBottom: 48,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Crea un CV profesional, compatible ATS. Edita en tiempo real y
          exporta a PDF o LaTeX. Sin registro.
        </div>

        <div
          style={{
            display: 'flex',
            gap: 16,
            fontSize: 24,
            fontWeight: 600,
            color: '#38bdf8',
          }}
        >
          <span>#PDF</span>
          <span>#LaTeX</span>
          <span>#ATS</span>
          <span>#OpenSource</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
