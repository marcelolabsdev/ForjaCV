import { PencilLine, Eye, Download } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const STEPS = [
  {
    icon: PencilLine,
    step: "01",
    title: "Completa tus datos",
    description:
      "Rellena tus secciones de contacto, educación, experiencia, proyectos, habilidades y publicaciones en el panel lateral.",
  },
  {
    icon: Eye,
    step: "02",
    title: "Previsualiza en vivo",
    description:
      "Observa tu CV actualizarse en tiempo real con el formato MIT mientras editas cada campo.",
  },
  {
    icon: Download,
    step: "03",
    title: "Exporta y comparte",
    description:
      "Descarga un PDF listo para enviar o el código LaTeX para seguir personalizándolo.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-28">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Cómo funciona
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tu CV listo en tres pasos
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, step, title, description }, index) => (
            <Reveal
              key={step}
              delay={index * 100}
              className="relative flex flex-col gap-4"
            >
              {index < STEPS.length - 1 && (
                <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-border to-transparent md:block" />
              )}
              <div className="flex items-center gap-4">
                <div className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/30">
                  {step}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
