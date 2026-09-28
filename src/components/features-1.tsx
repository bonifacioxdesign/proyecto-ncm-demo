"use client"

import { Building2, Clapperboard, GraduationCap, Mic2 } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { services } from "@/content/site"
import { PageHero } from "@/components/page-hero"
import { cn } from "@/lib/utils"

const icons = {
  building: Building2,
  mic: Mic2,
  graduation: GraduationCap,
  film: Clapperboard,
} as const

export default function Features() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <PageHero
        title="Nuestros servicios"
        description="Contá con nosotras para la realización de tus actividades en un espacio único en San Salvador."
      />
      <section className="pb-12 md:pb-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <ul className="mx-auto mt-8 grid max-w-sm auto-rows-[1fr] gap-4 sm:max-w-none sm:grid-cols-2 md:mt-10 md:gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon]

            return (
              <motion.li
                key={service.title}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -4% 0px" }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.15),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-h-0"
              >
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-xl bg-card px-5 py-5 ring-1 ring-foreground/10",
                    "transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "hover:bg-[#dc8d69] hover:text-[#2a2422] hover:ring-[#dc8d69]",
                    "motion-safe:hover:-translate-y-0.5",
                    "md:px-6 md:py-7"
                  )}
                >
                  <div
                    className={cn(
                      "mb-4 flex size-11 items-center justify-center rounded-lg",
                      "bg-[#fff0dc] text-[#a95153] ring-1 ring-foreground/8",
                      "transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "group-hover:bg-[#2a2422]/10 group-hover:text-[#2a2422] group-hover:ring-[#2a2422]/15"
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-balance text-lg font-medium tracking-tight">
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-snug text-pretty text-[#5c4a3a]",
                        "transition-colors duration-300",
                        "group-hover:text-[#2a2422]/80"
                      )}
                    >
                      {service.subtitle}
                    </p>
                  </div>

                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed text-pretty text-[#5c4a3a] md:mt-4",
                      "transition-colors duration-300",
                      "group-hover:text-[#2a2422]/90"
                    )}
                  >
                    {service.description}
                  </p>
                </article>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
    </>
  )
}
