import Link from "next/link"
import { CVPreviewFrame } from "@/components/landing/cv-preview-frame"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/landing/reveal"
import { sampleCVData } from "@/lib/sample-cv-data"
import { ArrowRight, Sparkles, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklch, var(--primary) 18%, transparent), transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-6 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Reveal as="div">
            <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Formato MIT · Compatible ATS
            </Badge>
          </Reveal>

          <Reveal as="h1" delay={80} className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Forja tu currículum con el{" "}
            <span className="text-primary">formato MIT</span>
          </Reveal>

          <Reveal as="p" delay={160} className="max-w-xl text-lg text-muted-foreground text-pretty">
            Crea un CV profesional, limpio y minimalista. Edita en un panel
            lateral, previsualiza en tiempo real y exporta a PDF o LaTeX en un
            clic.
          </Reveal>

          <Reveal as="div" delay={240} className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/editor">
                Crear mi CV gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a
                href="https://github.com/marcelolabsdev/ForjaCV"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                Ver en GitHub
              </a>
            </Button>
          </Reveal>

          <Reveal as="p" delay={320} className="text-sm text-muted-foreground">
            Sin registro · Tus datos se quedan en tu navegador
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl opacity-40 blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 30%, transparent), transparent)",
            }}
          />
          <CVPreviewFrame data={sampleCVData} className="relative" />
        </Reveal>
      </div>
    </section>
  )
}
