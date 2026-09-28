"use client"

import { useEffect, useRef, useState } from "react"

function parseStatValue(value: string) {
  const prefix = value.startsWith("+") ? "+" : ""
  const target = Number(value.replace(/[^\d]/g, ""))
  return { prefix, target: Number.isFinite(target) ? target : 0 }
}

function formatStat(n: number) {
  return new Intl.NumberFormat("es-SV").format(Math.round(n))
}

export function AnimatedCounter({
  value,
  className,
  duration = 1600,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const { prefix, target } = parseStatValue(value)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(target * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target, duration])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {formatStat(display)}
    </div>
  )
}
