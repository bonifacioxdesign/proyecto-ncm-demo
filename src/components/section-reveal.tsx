"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionRevealProps = {
  className?: string
  delay?: number
  children: ReactNode
}

/**
 * Enter-on-scroll without hydration drift.
 * SSR + first client paint are always a plain visible div.
 * Motion is applied only after mount (progressive enhancement).
 */
export function SectionReveal({
  className,
  delay = 0,
  children,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      el.style.opacity = "1"
      el.style.transform = "translate3d(0, 0, 0)"
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show()
      return
    }

    const rect = el.getBoundingClientRect()
    const alreadyInView =
      rect.top < window.innerHeight * 0.95 && rect.bottom > 40

    // Above-the-fold / already visible: never leave stuck at opacity 0
    // (React Strict Mode can set opacity 0 on the first effect pass).
    if (alreadyInView) {
      show()
      return
    }

    el.style.opacity = "0"
    el.style.transform = "translate3d(0, 16px, 0)"

    let revealed = false
    const reveal = () => {
      if (revealed) return
      revealed = true
      el.style.transition = [
        `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        `transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      ].join(", ")
      show()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        reveal()
        io.disconnect()
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    )

    io.observe(el)

    // Safety: never stay invisible if IO misses (dynamic height / Strict Mode)
    const fallback = window.setTimeout(reveal, 1800)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
      // On cleanup (Strict Mode remount), restore visibility so the next
      // effect doesn't inherit a stuck opacity: 0 from the first pass.
      show()
    }
  }, [delay])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
