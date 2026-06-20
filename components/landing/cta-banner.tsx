import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/landing/reveal"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-6 lg:py-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(50% 70% at 50% 0%, color-mix(in oklch, var(--primary) 22%, transparent), transparent)",
            }}
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Empieza a forjar tu currículum hoy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
            Sin registro, sin coste y sin límites. Tu próximo paso profesional
            empieza con un CV claro y profesional.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/editor">
                Crear mi CV gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
