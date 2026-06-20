import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/landing/mobile-nav"
import { ArrowRight } from "lucide-react"

export const NAV_LINKS = [
  { href: "#features", label: "Características" },
  { href: "#mit", label: "Formato MIT" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ForjaCV"
            className="h-8 w-8 rounded-md object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">ForjaCV</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden gap-1.5 sm:inline-flex">
            <Link href="/editor">
              Crear mi CV
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <MobileNav className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
