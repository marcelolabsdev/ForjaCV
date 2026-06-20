"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ListFieldProps {
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
  multiline?: boolean
  rows?: number
}

export function ListField({
  value,
  onChange,
  placeholder,
  className,
  multiline = false,
  rows = 2,
}: ListFieldProps) {
  const joinSep = multiline ? "\n" : ", "
  const splitSep = multiline ? "\n" : ","
  const [text, setText] = useState(value.join(joinSep))
  const focused = useRef(false)

  useEffect(() => {
    if (!focused.current) {
      setText(value.join(joinSep))
    }
  }, [value, joinSep])

  const parse = (raw: string) =>
    raw.split(splitSep).map((s) => s.trim()).filter(Boolean)

  const handleChange = (raw: string) => {
    setText(raw)
    onChange(parse(raw))
  }

  const handleBlur = () => {
    focused.current = false
    setText(parse(text).join(joinSep))
  }

  const common = {
    value: text,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      handleChange(e.target.value),
    onFocus: () => {
      focused.current = true
    },
    onBlur: handleBlur,
    placeholder,
    className,
  }

  if (multiline) {
    return <Textarea {...common} rows={rows} />
  }

  return <Input {...common} />
}
