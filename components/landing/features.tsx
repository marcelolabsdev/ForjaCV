import {
  Eye,
  FileDown,
  FileCode2,
  ScanLine,
  ShieldCheck,
  GraduationCap,
} from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const FEATURES = [
  {
    icon: Eye,
    title: "Vista previa en tiempo real",
    description:
      "Edita en un panel lateral y ve los cambios al instante. Lo que ves es lo que exportas.",
  },
  {
    icon: FileDown,
    title: "Exportación a PDF",
    description:
      "Genera un PDF en el servidor con @react-pdf/renderer y fuentes Latin Modern Roman, listo para imprimir.",
  },
  {
    icon: FileCode2,
    title: "Exportación a LaTeX",
    description:
      "Descarga el código LaTeX de tu CV y personalízalo a fondo en tu editor favorito.",
  },
  {
    icon: ScanLine,
    title: "Compatible ATS",
    description:
      "Diseño minimalista sin columnas ni gráficos que los sistemas de seguimiento de candidatos puedan leer sin errores.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad por diseño",
    description:
      "Toda la información vive en tu navegador. No hay cuentas, ni servidores que almacenen tus datos.",
  },
  {
    icon: GraduationCap,
    title: "Formato MIT",
    description:
      "La plantilla usada y recomendada por el MIT, valorada por reclutadores en las grandes tecnológicas.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-28">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Características
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Todo lo que necesitas para un CV profesional
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            ForjaCV combina la simplicidad del formato MIT con herramientas
            modernas de edición y exportación.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{title}</h3>
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
