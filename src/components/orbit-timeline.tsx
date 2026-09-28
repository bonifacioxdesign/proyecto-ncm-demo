"use client"

import { useEffect, useState } from "react"
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur"
import { cn } from "@/lib/utils"

type OrbitEntry = {
  year: string
  title: string
}

type OrbitTimelineProps = {
  entries: readonly OrbitEntry[]
  className?: string
}

function TimelineItems({
  entries,
  listClassName,
}: {
  entries: readonly OrbitEntry[]
  listClassName?: string
}) {
  return (
    <ol className={cn("relative w-full max-w-xl space-y-0", listClassName)}>
      {entries.map((entry, index) => (
        <li
          key={`${entry.year}-${entry.title}`}
          className="group relative flex gap-6 pb-14 last:pb-14 sm:gap-8"
        >
          <div className="relative flex w-10 shrink-0 flex-col items-center self-stretch sm:w-12">
            <span
              aria-hidden
              className="absolute top-3 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#a95153]/55 via-[#a95153]/20 to-[#a95153]/10"
            />
            <span className="relative z-[1] mt-1 flex size-8 items-center justify-center sm:size-9">
              <span className="absolute inset-0 rounded-full bg-[#a95153]/12 ring-1 ring-[#a95153]/20 transition duration-500 group-hover:bg-[#a95153]/20" />
              <span className="relative size-2.5 rounded-full bg-[#a95153] shadow-[0_0_0_4px_rgba(169,81,83,0.12)] transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(169,81,83,0.18)]" />
            </span>
          </div>

          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex items-baseline gap-3">
              <p className="font-[family-name:var(--font-krona)] text-2xl tracking-tight text-[#a95153] sm:text-3xl">
                {entry.year}
              </p>
              <span className="text-[11px] font-medium tracking-[0.16em] text-[#a95153]/55 uppercase">
                _{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-2 max-w-md text-base leading-snug font-medium text-pretty text-[#2a2422] sm:text-lg sm:leading-snug">
              {entry.title}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function OrbitTimeline({ entries, className }: OrbitTimelineProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  if (reduceMotion) {
    return (
      <div className={cn("mx-auto flex w-full justify-center px-2", className)}>
        <TimelineItems entries={entries} />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative mx-auto h-[24rem] w-full overflow-hidden sm:h-[28rem] md:h-[32rem]",
        className
      )}
    >
      {/* Soft stage glow behind the rail */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-[2.35rem] h-[70%] w-24 -translate-y-1/2 rounded-full bg-[#a95153]/8 blur-3xl sm:left-[2.75rem]"
      />

      <InfiniteSlider
        direction="vertical"
        gap={0}
        speed={9}
        speedOnHover={3}
        className="h-full"
      >
        <div className="flex w-full justify-center px-2">
          <TimelineItems entries={entries} />
        </div>
      </InfiniteSlider>

      {/* Edge fades */}
      <div
        aria-hidden
        className="from-background pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-linear-to-b to-transparent"
      />
      <div
        aria-hidden
        className="from-background pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-linear-to-t to-transparent"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28"
        direction="top"
        blurIntensity={1}
        blurLayers={10}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28"
        direction="bottom"
        blurIntensity={1}
        blurLayers={10}
      />
    </div>
  )
}
