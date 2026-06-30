"use client"

import { useState } from "react"
import type { CVData } from "@/types/cv"
import { defaultCVData } from "@/lib/default-cv-data"
import { generateLaTeX } from "@/lib/latex-generator"
import { downloadCV } from "@/lib/pdf-generator"
import { CVEditor } from "@/components/cv-editor"
import { CVPreview } from "@/components/cv-preview"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Download, FileCode, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function CVBuilderPage() {
  const [cvData, setCvData] = useState<CVData>(defaultCVData)
  const [isExporting, setIsExporting] = useState(false)

  const handleDownloadPDF = async () => {
    setIsExporting(true)
    try {
      await downloadCV(cvData)
    } catch (err) {
      console.error("Error generando PDF:", err)
    } finally {
      setIsExporting(false)
    }
  }

  const handleExportLaTeX = () => {
    const latex = generateLaTeX(cvData)
    const blob = new Blob([latex], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${cvData.contact.fullName.replace(/\s+/g, "_") || "curriculum"}.tex`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleClearAll = () => {
    setCvData({
      contact: {
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        city: "",
        professionalProfile: "",
      },
      education: [],
      experience: [],
      certifications: [],
      skills: [],
      projects: [],
      publications: [],
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="no-print sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="ForjaCV"
                className="h-8 w-8 rounded-md object-contain"
              />
              <span className="text-lg font-semibold tracking-tight">ForjaCV</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              size="sm"
              className="h-8 gap-1.5 text-xs font-medium"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{isExporting ? "Generando..." : "Descargar PDF"}</span>
              <span className="sm:hidden">{isExporting ? "..." : "PDF"}</span>
            </Button>
            <Button 
              onClick={handleExportLaTeX} 
              variant="outline" 
              size="sm"
              className="h-8 gap-1.5 text-xs font-medium"
            >
              <FileCode className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">LaTeX</span>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8 gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Reiniciar</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reiniciar curriculum</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta accion eliminara toda la informacion ingresada. No se puede deshacer.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearAll}>
                    Reiniciar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row">
        {/* Editor Panel */}
        <aside className="no-print w-full lg:w-[420px] xl:w-[480px] border-r border-border bg-card">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div className="p-4 lg:p-5">
              <div className="mb-4">
                <h2 className="text-sm font-medium text-muted-foreground">Editor</h2>
              </div>
              <CVEditor data={cvData} onChange={setCvData} />
            </div>
          </div>
        </aside>

        {/* Preview Panel */}
        <section className="flex-1 bg-muted/40">
          <div className="cv-stage sticky top-14 p-4 lg:p-6">
            <div className="no-print mb-3">
              <h2 className="text-sm font-medium text-muted-foreground">Vista previa</h2>
            </div>
            <div className="cv-preview-wrapper flex justify-center items-start overflow-auto max-h-[calc(100vh-7rem)] rounded-lg bg-muted/60 p-4 lg:p-6">
              <CVPreview data={cvData} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
