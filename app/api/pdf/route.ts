import { createElement } from "react"
import { NextRequest } from "next/server"
import { Font, renderToBuffer } from "@react-pdf/renderer"
import { CVPDFDocument } from "@/components/cv-pdf-document"
import type { CVData } from "@/types/cv"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

let fontsRegistered = false

function registerFonts(origin: string) {
  if (fontsRegistered) return
  const base = `${origin}/fonts`
  Font.register({
    family: "CM Serif",
    fonts: [
      { src: `${base}/lmroman10-regular.otf` },
      { src: `${base}/lmroman10-bold.otf`, fontWeight: "bold" },
      { src: `${base}/lmroman10-italic.otf`, fontStyle: "italic" },
      {
        src: `${base}/lmroman10-bolditalic.otf`,
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  })
  fontsRegistered = true
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as CVData
    const origin = new URL(req.url).origin
    registerFonts(origin)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(
      createElement(CVPDFDocument, { data }) as any,
    )

    const safeName =
      (data.contact.fullName || "curriculum")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\- ]/g, "")
        .trim()
        .replace(/\s+/g, "_") || "curriculum"

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "content-type": "application/pdf",
        "content-disposition": `attachment; filename="${safeName}.pdf"`,
        "cache-control": "no-store",
      },
    })
  } catch (err) {
    console.error("Error generando PDF:", err)
    return new Response(
      JSON.stringify({ error: "Error generando PDF" }),
      { status: 500, headers: { "content-type": "application/json" } },
    )
  }
}
