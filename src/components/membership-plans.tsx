"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"
import {
  membershipExtras,
  membershipTiers,
  type MembershipTier,
} from "@/content/site"
import { cn } from "@/lib/utils"

const DEFAULT_TIER_ID = "navegante"
/** How many plan cards visible at once on desktop (matches the drawing). */
const VISIBLE = 3

const MembershipDeck = dynamic(
  () =>
    import("@/components/membership-deck").then((m) => m.MembershipDeck),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[280px] items-center justify-center text-sm text-[#5c4a3a] sm:h-[340px] md:h-[400px]">
        Preparando pases de abordaje…
      </div>
    ),
  }
)

type Billing = "monthly" | "annual"

function formatUsd(amount: number) {
  return `$${amount}`
}

function joinHref(tier: MembershipTier, billing: Billing) {
  const hasAnnual = tier.annual != null
  const period = billing === "annual" && hasAnnual ? "anual" : "mensual"
  const price = period === "anual" ? tier.annual : tier.monthly
  const subject = `Membresía ${tier.name} (${period}${price != null ? ` · $${price}` : ""})`
  return `/contactanos?asunto=${encodeURIComponent(subject)}`
}

function extraHref(name: string) {
  return `/contactanos?asunto=${encodeURIComponent(`Aporte ${name}`)}`
}

function tierPrice(tier: MembershipTier, billing: Billing) {
  if (billing === "annual" && tier.annual != null) return tier.annual
  return tier.monthly
}

function tierPeriod(tier: MembershipTier, billing: Billing) {
  if (billing === "annual" && tier.annual != null) return "/ año"
  return "/ mes"
}

export function MembershipPlans() {
  const [billing, setBilling] = useState<Billing>("monthly")
  const [activeId, setActiveId] = useState(DEFAULT_TIER_ID)
  // Start window so Navegante is visible in the 3-column row
  const [windowStart, setWindowStart] = useState(() => {
    const idx = membershipTiers.findIndex((t) => t.id === DEFAULT_TIER_ID)
    const max = Math.max(0, membershipTiers.length - VISIBLE)
    return Math.max(0, Math.min(max, idx - 1))
  })

  const activeIndex = Math.max(
    0,
    membershipTiers.findIndex((tier) => tier.id === activeId)
  )

  const maxStart = Math.max(0, membershipTiers.length - VISIBLE)
  const start = Math.min(windowStart, maxStart)
  const visibleTiers = membershipTiers.slice(start, start + VISIBLE)

  const selectTier = (index: number) => {
    const next = membershipTiers[index]
    if (!next) return
    setActiveId(next.id)
    if (index < start) setWindowStart(index)
    else if (index >= start + VISIBLE) setWindowStart(index - VISIBLE + 1)
  }

  const shiftWindow = (delta: number) => {
    setWindowStart((prev) => Math.max(0, Math.min(maxStart, prev + delta)))
  }

  const anyAnnual = useMemo(
    () => membershipTiers.some((t) => t.annual != null),
    []
  )

  return (
    <section className="py-14 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              ¿Cómo unirte a nuestra Tripulación?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed">
              Elegí tu pase de abordaje. Giralo en órbita, mirá el diseño de cada
              membresía y sumate al viaje.
            </p>
          </div>
        </SectionReveal>

        {/* Hint + billing above the carousel */}
        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 md:mt-12 md:gap-5">
          <p className="text-center text-xs tracking-wide text-[#5c4a3a]/80">
            Arrastrá o usá las flechas · {activeIndex + 1}/{membershipTiers.length}
          </p>

          {anyAnnual ? (
            <div
              className="flex w-fit items-center gap-0.5 rounded-full bg-[#2a2422]/[0.06] p-1 ring-1 ring-[#2a2422]/10"
              role="group"
              aria-label="Periodo de membresía"
            >
              {(
                [
                  { id: "monthly", label: "Mensual" },
                  { id: "annual", label: "Anual" },
                ] as const
              ).map((option) => {
                const isActive = billing === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setBilling(option.id)}
                    className={cn(
                      "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#fff8ef]"
                        : "text-[#2a2422]/65 hover:text-[#2a2422]"
                    )}
                  >
                    {isActive ? (
                      <span className="absolute inset-0 -z-10 rounded-full bg-[#a95153]" />
                    ) : null}
                    {option.label}
                  </button>
                )
              })}
            </div>
          ) : null}
        </div>

        <div className="mt-6 md:mt-7">
          <MembershipDeck
            tiers={membershipTiers}
            activeIndex={activeIndex}
            onChange={selectTier}
          />
        </div>

        {/* Plans: inset for side arrows so cards never collide */}
        <div className="relative mt-10 md:mt-12">
          <button
            type="button"
            aria-label="Ver membresías anteriores"
            disabled={start <= 0}
            onClick={() => shiftWindow(-1)}
            className="absolute top-[42%] left-0 z-10 flex size-9 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2422]/10 bg-[#fff8ef]/95 text-[#2a2422] shadow-[0_4px_16px_-6px_rgba(42,36,34,0.35)] backdrop-blur-md transition hover:border-[#a95153] hover:bg-[#a95153] hover:text-[#fff8ef] disabled:pointer-events-none disabled:opacity-25 sm:size-10 sm:-translate-x-2 md:-translate-x-3 lg:-translate-x-4"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            aria-label="Ver membresías siguientes"
            disabled={start >= maxStart}
            onClick={() => shiftWindow(1)}
            className="absolute top-[42%] right-0 z-10 flex size-9 translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-[#2a2422]/10 bg-[#fff8ef]/95 text-[#2a2422] shadow-[0_4px_16px_-6px_rgba(42,36,34,0.35)] backdrop-blur-md transition hover:border-[#a95153] hover:bg-[#a95153] hover:text-[#fff8ef] disabled:pointer-events-none disabled:opacity-25 sm:size-10 sm:translate-x-2 md:translate-x-3 lg:translate-x-4"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>

          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {visibleTiers.map((tier) => {
              const selected = tier.id === activeId
              const price = tierPrice(tier, billing)
              const periodLabel = tierPeriod(tier, billing)
              return (
                <li key={tier.id} className="min-w-0">
                  <article
                    className={cn(
                      "flex h-full min-h-0 cursor-pointer flex-col rounded-2xl bg-card px-5 py-6 transition-[box-shadow,transform,ring-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 sm:py-7",
                      selected
                        ? "ring-2 ring-[#a95153] shadow-[0_20px_44px_-24px_rgba(169,81,83,0.55)]"
                        : "ring-1 ring-[#2a2422]/10 hover:-translate-y-0.5 hover:ring-[#a95153]/30 hover:shadow-[0_16px_36px_-22px_rgba(42,36,34,0.35)]"
                    )}
                    onClick={() => {
                      const idx = membershipTiers.findIndex(
                        (t) => t.id === tier.id
                      )
                      selectTier(idx)
                    }}
                  >
                    {/* Header stack — vertical rhythm beats cramped side-by-side */}
                    <header className="space-y-3">
                      <div className="space-y-1">
                        {tier.featured ? (
                          <p className="text-[11px] font-medium tracking-[0.14em] text-[#a95153] uppercase">
                            Más completo
                          </p>
                        ) : null}
                        <h3 className="font-[family-name:var(--font-krona)] text-lg leading-snug tracking-tight text-[#2a2422] text-balance sm:text-xl">
                          Tripulante {tier.name}
                        </h3>
                        <p
                          className={cn(
                            "min-h-[1.25rem] text-sm leading-snug",
                            tier.note ? "text-[#5c4a3a]" : "invisible"
                          )}
                        >
                          {tier.note ?? "\u00a0"}
                        </p>
                      </div>
                      <p className="flex items-baseline gap-1.5 text-[#2a2422]">
                        <span className="text-3xl font-semibold tracking-tight tabular-nums">
                          {price != null ? formatUsd(price) : "—"}
                        </span>
                        <span className="text-sm text-[#5c4a3a]">
                          {periodLabel}
                        </span>
                      </p>
                    </header>

                    <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-[#2a2422]/8 pt-6">
                      {tier.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex gap-2.5 text-sm leading-relaxed"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-[#a95153]"
                            aria-hidden
                          />
                          <span className="text-pretty text-[#2a2422]/90">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <Button
                        className="w-full"
                        variant={selected ? "default" : "outline"}
                        size="lg"
                        render={<Link href={joinHref(tier, billing)} />}
                        nativeButton={false}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Quiero ser {tier.name}
                      </Button>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          <p className="mt-5 text-center text-xs tracking-wide text-[#5c4a3a]/80">
            {start + 1}–{Math.min(start + VISIBLE, membershipTiers.length)} de{" "}
            {membershipTiers.length}
          </p>
        </div>

        {membershipExtras.map((extra) => (
          <article
            key={extra.id}
            className="mx-auto mt-12 flex max-w-xl flex-col rounded-2xl bg-[#2a2422] px-6 py-7 text-[#fff8ef] ring-1 ring-white/10 md:mt-14 md:px-8 md:py-8"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-[family-name:var(--font-krona)] text-lg tracking-tight md:text-xl">
                {extra.name}
              </h3>
              <p className="text-sm text-[#d9cfc3]">{extra.priceLabel}</p>
            </header>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-[#d9cfc3]">
              {extra.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
              {extra.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2.5 text-sm leading-relaxed">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#dc8d69]"
                    aria-hidden
                  />
                  <span className="text-pretty text-[#fff8ef]/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button
                className="w-full border-white/25 bg-transparent text-[#fff8ef] hover:border-[#a95153] hover:bg-[#a95153] sm:w-auto"
                variant="outline"
                render={<Link href={extraHref(extra.name)} />}
                nativeButton={false}
              >
                Hacer donación
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
