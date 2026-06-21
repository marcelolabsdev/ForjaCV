"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/components/landing/navbar"
import { Menu, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(className)}
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetTitle className="sr-only">Navegación</SheetTitle>
        <nav className="mt-2 flex flex-col gap-1 px-2">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto border-t border-border p-4">
          <SheetClose asChild>
            <Button asChild className="w-full gap-2">
              <Link href="/editor">
                Crear mi CV
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
