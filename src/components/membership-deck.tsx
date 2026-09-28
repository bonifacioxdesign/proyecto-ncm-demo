"use client"

/**
 * Embarque orbital — CSS 3D coverflow membership selector.
 * Stable with Next/Turbopack (no WebGL / texture-loader path).
 */

import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { membershipTiers, type MembershipTier } from "@/content/site"

type DeckProps = {
  tiers: MembershipTier[]
  activeIndex: number
  onChange: (index: number) => void
  className?: string
}

function CssCoverflow({
  tiers,
  activeIndex,
  onChange,
}: {
  tiers: MembershipTier[]
  activeIndex: number
  onChange: (index: number) => void
}) {
  const drag = useRef({ active: false, startX: 0, lastStep: 0 })
  const activeRef = useRef(activeIndex)
  activeRef.current = activeIndex

  const onPointerDown = (e: ReactPointerEvent) => {
    drag.current = { active: true, startX: e.clientX, lastStep: 0 }
  }
  const onPointerMove = (e: ReactPointerEvent) => {
    if (!drag.current.active) return
    const step = Math.trunc((e.clientX - drag.current.startX) / 64)
    if (step !== drag.current.lastStep) {
      const delta = step - drag.current.lastStep
      onChange(
        Math.max(0, Math.min(tiers.length - 1, activeRef.current - delta))
      )
      drag.current.lastStep = step
    }
  }
  const endDrag = () => {
    drag.current.active = false
  }

  return (
    <div
      className="relative flex h-full items-center justify-center overflow-hidden bg-transparent touch-none [perspective:1200px]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <div className="relative h-[200px] w-full max-w-3xl sm:h-[240px] md:h-[280px] [transform-style:preserve-3d]">
        {tiers.map((tier, index) => {
          const offset = index - activeIndex
          const abs = Math.abs(offset)
          return (
            <button
              key={tier.id}
              type="button"
              aria-label={`Seleccionar ${tier.name}`}
              aria-pressed={offset === 0}
              onClick={() => onChange(index)}
              className="absolute top-1/2 left-1/2 origin-center overflow-hidden rounded-xl shadow-2xl transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: "min(72vw, 420px)",
                aspectRatio: "16 / 10",
                transform: `
                  translate(-50%, -50%)
                  translateX(${offset * 38}%)
                  translateZ(${-abs * 90}px)
                  rotateY(${offset * -28}deg)
                  scale(${offset === 0 ? 1 : 0.86})
                `,
                zIndex: 20 - abs,
                opacity: abs > 2 ? 0 : offset === 0 ? 1 : 0.72,
                filter: offset === 0 ? "none" : "brightness(0.75)",
                pointerEvents: abs > 2 ? "none" : "auto",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tier.card}
                alt={`Tarjeta Tripulante ${tier.name}`}
                className="size-full object-cover"
                draggable={false}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function MembershipDeck({
  tiers = membershipTiers,
  activeIndex,
  onChange,
  className,
}: DeckProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onChange(Math.max(0, activeIndex - 1))
      if (e.key === "ArrowRight")
        onChange(Math.min(tiers.length - 1, activeIndex + 1))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex, onChange, tiers.length])

  return (
    <div className={cn("relative bg-transparent", className)}>
      <div className="relative h-[280px] sm:h-[340px] md:h-[400px]">
        <CssCoverflow
          tiers={tiers}
          activeIndex={activeIndex}
          onChange={onChange}
        />

        <button
          type="button"
          aria-label="Membresía anterior"
          className="absolute top-1/2 left-0 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2422]/10 bg-[#fff8ef]/95 text-[#2a2422] shadow-[0_4px_16px_-6px_rgba(42,36,34,0.35)] backdrop-blur-md transition hover:border-[#a95153] hover:bg-[#a95153] hover:text-[#fff8ef] sm:left-1 sm:size-10 md:left-2"
          onClick={() => onChange(Math.max(0, activeIndex - 1))}
        >
          <ChevronLeft className="size-4 sm:size-5" />
        </button>
        <button
          type="button"
          aria-label="Membresía siguiente"
          className="absolute top-1/2 right-0 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2422]/10 bg-[#fff8ef]/95 text-[#2a2422] shadow-[0_4px_16px_-6px_rgba(42,36,34,0.35)] backdrop-blur-md transition hover:border-[#a95153] hover:bg-[#a95153] hover:text-[#fff8ef] sm:right-1 sm:size-10 md:right-2"
          onClick={() => onChange(Math.min(tiers.length - 1, activeIndex + 1))}
        >
          <ChevronRight className="size-4 sm:size-5" />
        </button>
      </div>
    </div>
  )
}
