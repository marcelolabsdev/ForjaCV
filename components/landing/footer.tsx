import Link from "next/link"
import { Github } from "lucide-react"

const SECTIONS = [
  { href: "#features", label: "Características" },
  { href: "#mit", label: "Formato MIT" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
]

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="ForjaCV"
                className="h-7 w-7 rounded-md object-contain"
              />
              <span className="text-base font-semibold tracking-tight">
                ForjaCV
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Creador de currículums en formato MIT. Edita, previsualiza en
              tiempo real y exporta a PDF o LaTeX.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Navegación</h3>
            {SECTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Recursos</h3>
            <Link
              href="/editor"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Crear mi CV
            </Link>
            <a
              href="https://github.com/marcelolabsdev/ForjaCV"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <span className="text-sm text-muted-foreground">Licencia MIT</span>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} marcelolabsdev. Distribuido bajo la
            licencia MIT.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con Next.js, Tailwind CSS y shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
