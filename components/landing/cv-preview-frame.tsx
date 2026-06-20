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

  React.useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const update = () => {
      const width = container.clientWidth
      const naturalHeight = inner.scrollHeight
      if (width > 0 && naturalHeight > 0) {
        const nextScale = Math.min(width / CV_WIDTH_PX, 1)
        setScale(nextScale)
        setFrameHeight(naturalHeight * nextScale)
      }
    }

    update()

    if (typeof ResizeObserver === "undefined") return
    const observer = new ResizeObserver(update)
    observer.observe(container)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={frameHeight ? { height: frameHeight } : undefined}
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-white shadow-xl",
        className,
      )}
    >
      <div
        ref={innerRef}
        style={{
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
