"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  { src: "/videos/hero-01.mp4", poster: "/images/hero-fachada.jpg" },
  { src: "/videos/hero-02.mp4", poster: "/images/nave-interior.jpg" },
]

const SLIDE_MS = 9000

export function HeroVideoSlider() {
  const [active, setActive] = useState(0)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length)
  }

  const goPrev = () => goTo(active - 1)
  const goNext = () => goTo(active + 1)

  useEffect(() => {
    const current = videoRefs.current[active]
    if (!current) return

    videoRefs.current.forEach((video, index) => {
      if (!video) return
      if (index === active) {
        video.currentTime = 0
        void video.play().catch(() => undefined)
      } else {
        video.pause()
      }
    })

    const timer = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, SLIDE_MS)

    return () => window.clearTimeout(timer)
  }, [active])

  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {slides.map((slide, index) => (
          <video
            key={slide.src}
            ref={(el) => {
              videoRefs.current[index] = el
            }}
            className={cn(
              "absolute inset-0 size-full scale-110 object-cover transition-opacity duration-1000 ease-out",
              "blur-[2px]",
              index === active ? "opacity-100" : "opacity-0"
            )}
            src={slide.src}
            poster={slide.poster}
            muted
            playsInline
            loop
            preload={index === 0 ? "auto" : "metadata"}
          />
        ))}

        <div className="absolute inset-0 backdrop-blur-[6px]" />
        <div className="absolute inset-0 bg-[#2a2422]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(42,36,34,0.45)_70%,rgba(42,36,34,0.85)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#fff0dc] to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <button
          type="button"
          aria-label="Video anterior"
          onClick={goPrev}
          className="pointer-events-auto absolute top-[42%] left-2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#2a2422]/40 text-[#fff8ef] backdrop-blur-md transition hover:border-white/40 hover:bg-[#a95153]/80 sm:flex md:top-1/2 md:left-6 md:size-12"
        >
          <ChevronLeft className="size-5 md:size-6" />
        </button>

        <button
          type="button"
          aria-label="Video siguiente"
          onClick={goNext}
          className="pointer-events-auto absolute top-[42%] right-2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#2a2422]/40 text-[#fff8ef] backdrop-blur-md transition hover:border-white/40 hover:bg-[#a95153]/80 sm:flex md:top-1/2 md:right-6 md:size-12"
        >
          <ChevronRight className="size-5 md:size-6" />
        </button>

        <div className="pointer-events-auto absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-6">
          <button
            type="button"
            aria-label="Video anterior"
            onClick={goPrev}
            className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-[#2a2422]/40 text-[#fff8ef] backdrop-blur-md sm:hidden"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Ir al video ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === active
                    ? "w-8 bg-[#a95153]"
                    : "w-3 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Video siguiente"
            onClick={goNext}
            className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-[#2a2422]/40 text-[#fff8ef] backdrop-blur-md sm:hidden"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </>
  )
}
