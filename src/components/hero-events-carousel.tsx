"use client"

import { useCallback, useEffect, useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import type { HeroEvent } from "@/content/hero-events"
import { eventTicketHref } from "@/lib/hero-events"
import { cn } from "@/lib/utils"

const SLIDE_MS = 6000

type HeroEventsCarouselProps = {
  events: HeroEvent[]
  shopUrl: string
}

/** Match Tienda `categoryBadgeStyle` — colored text on tinted pill. */
function categoryBadgeStyle(hex: string): CSSProperties {
  return {
    color: hex,
    backgroundColor: `${hex}33`,
    borderColor: `${hex}66`,
  }
}

export function HeroEventsCarousel({ events, shopUrl }: HeroEventsCarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % events.length)
  }, [events.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length)
  }, [events.length])

  useEffect(() => {
    if (events.length <= 1) return
    const timer = window.setInterval(next, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [next, events.length])

  if (events.length === 0) return null

  const event = events[current]

  return (
    <section className="hero-events relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-black">
      {events.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden={index !== current}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-5xl px-4 pb-12 md:pb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[#f76b00] uppercase sm:text-sm">
            Últimos eventos
          </p>

          <span
            style={categoryBadgeStyle(event.category.color)}
            className="mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase"
          >
            {event.category.name}
          </span>

          <h1 className="mb-3 max-w-2xl text-balance text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-5xl lg:text-7xl">
            {event.name}
          </h1>

          <p className="mb-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow md:text-lg">
            {event.description}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
            {event.dateLabel ? (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden />
                {event.dateLabel}
              </span>
            ) : null}
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden />
              {event.venue}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={eventTicketHref(shopUrl, event.id)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#a95153] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Comprar desde {event.priceLabel}
            </Link>
          </div>
        </div>
      </div>

      {events.length > 1 ? (
        <>
          <div className="absolute right-4 bottom-12 z-20 flex items-center gap-2 md:right-8">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-[#a95153] hover:text-white"
              aria-label="Evento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-[#a95153] hover:text-white"
              aria-label="Siguiente evento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {events.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === current ? "w-8 bg-[#a95153]" : "w-1.5 bg-white/40"
                )}
                aria-label={`Ir al evento ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}
