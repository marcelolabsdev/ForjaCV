"use client"

import * as React from "react"
import { CVPreview } from "@/components/cv-preview"
import { cn } from "@/lib/utils"
import type { CVData } from "@/types/cv"

const CV_WIDTH_PX = 8.27 * 96

interface CVPreviewFrameProps {
  data: CVData
  className?: string
}

export function CVPreviewFrame({ data, className }: CVPreviewFrameProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [scale, setScale] = React.useState(0.5)
  const [frameHeight, setFrameHeight] = React.useState<number | null>(null)
  const [measured, setMeasured] = React.useState(false)

  const measure = React.useCallback(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return
    const width = container.clientWidth
    const naturalHeight = inner.scrollHeight
    if (width > 0 && naturalHeight > 0) {
      const nextScale = Math.min(width / CV_WIDTH_PX, 1)
      setScale(nextScale)
      setFrameHeight(naturalHeight * nextScale)
      setMeasured(true)
    }
  }, [])

  React.useLayoutEffect(() => {
    measure()

    let observer: ResizeObserver | undefined
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(measure)
      if (containerRef.current) observer.observe(containerRef.current)
      if (innerRef.current) observer.observe(innerRef.current)
    }

    const fonts = (document as Document & {
      fonts?: { ready?: Promise<unknown> }
    }).fonts
    let cancelled = false
    if (fonts?.ready) {
      fonts.ready.then(() => {
        if (!cancelled) measure()
      })
    }

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [measure])

  return (
    <div
      ref={containerRef}
      style={frameHeight ? { height: frameHeight } : undefined}
      className={cn(
        "cv-preview-frame relative w-full min-w-0 overflow-hidden rounded-lg border border-border bg-white shadow-xl transition-opacity duration-300",
        measured ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <div
        ref={innerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "8.27in",
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <CVPreview data={data} />
      </div>
    </div>
  )
}
