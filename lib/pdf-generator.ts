import type { CVData } from "@/types/cv"

export async function downloadCV(data: CVData): Promise<void> {
  const res = await fetch("/api/pdf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error(`Error generando PDF: ${res.status}`)
  }

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${data.contact.fullName.replace(/\s+/g, "_") || "curriculum"}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
