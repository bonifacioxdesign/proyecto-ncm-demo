"use client"

import Image from "next/image"
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur"
import { cn } from "@/lib/utils"

export type Production = {
  title: string
  image: string
}

type ProductionsShelfProps = {
  title?: string
  productions: readonly Production[]
  className?: string
}

export function ProductionsShelf({
  title = "Producciones",
  productions,
  className,
}: ProductionsShelfProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium">{title}</h2>
      </div>

      <div className="relative mt-6 md:mt-8">
        <div
          className={cn(
            "flex gap-3 overflow-x-auto overscroll-x-contain pb-3",
            "snap-x snap-mandatory scroll-smooth",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            "px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-64rem)/2+2rem))]"
          )}
        >
          {productions.map((production) => (
            <article
              key={production.title}
              className="group relative aspect-[2/3] w-[9.5rem] shrink-0 snap-start overflow-hidden rounded-xl ring-1 ring-[#2a2422]/10 transition duration-300 hover:-translate-y-1 hover:ring-[#a95153]/35 sm:w-44 md:w-48"
            >
              <Image
                src={production.image}
                alt={production.title}
                fill
                sizes="(max-width: 640px) 152px, 192px"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#2a2422]/90 via-[#2a2422]/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                <p className="text-[11px] font-medium tracking-[0.14em] text-[#f76b00] uppercase">
                  Obra
                </p>
                <h3 className="mt-1 text-sm leading-snug font-semibold text-[#fff8ef] text-balance sm:text-[0.95rem]">
                  {production.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div
          aria-hidden
          className="from-background pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-linear-to-r to-transparent sm:block md:w-20"
        />
        <div
          aria-hidden
          className="from-background pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-linear-to-l to-transparent sm:block md:w-20"
        />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-12 sm:block md:w-16"
          direction="left"
          blurIntensity={0.8}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-12 sm:block md:w-16"
          direction="right"
          blurIntensity={0.8}
        />
      </div>
    </section>
  )
}
