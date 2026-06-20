import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const HIGHLIGHTS = [
  "Diseño limpio y minimalista, sin columnas, iconos ni gráficos.",
  "Estructura pensada para una sola página.",
  "Énfasis en logros cuantificables y resultados de impacto.",
  "Tipografía profesional y compatible con sistemas ATS.",
]

const COMPANIES = ["Google", "Microsoft", "Meta", "Amazon", "Startups"]

export function MitFormat() {
  return (
    <section id="mit" className="border-b border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-6 lg:py-28">
        <Reveal className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            ¿Qué es el formato MIT?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Claridad e impacto por encima del diseño
          </h2>
          <p className="text-muted-foreground text-pretty">
            El formato MIT prioriza el contenido sobre la forma. Es ampliamente
            aceptado en el sector tecnológico por ser fácil de leer para
            reclutadores y compatible con sistemas ATS (Applicant Tracking
            Systems).
          </p>

          <ul className="flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8"
        >
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Aceptado en las principales empresas
            </h3>
            <p className="text-lg font-semibold">
              El formato preferido del sector tecnológico
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {COMPANIES.map((company) => (
              <Badge
                key={company}
                variant="outline"
                className="px-3 py-1 text-sm font-medium"
              >
                {company}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
            <div>
              <p className="text-2xl font-bold text-primary">PDF + LaTeX</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Exportación directa
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Legible por sistemas ATS
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
