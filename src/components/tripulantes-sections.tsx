import { Building2, HeartHandshake, Users } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { OrbitTimeline } from "@/components/orbit-timeline"
import { SectionReveal } from "@/components/section-reveal"
import {
  tripulantesImpact,
  tripulantesIntro,
  tripulantesOrbit,
} from "@/content/site"

const impactIcons = [Building2, Users, HeartHandshake] as const
const TRIPULANTES_VIDEO_ID = "0KVf48S5qrE"

export function TripulantesHero() {
  return (
    <PageHero
      title={tripulantesIntro.title}
      description={tripulantesIntro.description}
      className="pb-12 md:pb-16"
    >
      <div className="mx-auto mt-8 w-full max-w-5xl md:mt-10">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#2a2422]/10 shadow-[0_20px_48px_-28px_rgba(42,36,34,0.45)] ring-1 ring-[#2a2422]/10">
          <iframe
            title="Video Comunidad Tripulantes — Nave Cine Metro"
            src={`https://www.youtube-nocookie.com/embed/${TRIPULANTES_VIDEO_ID}?rel=0`}
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </PageHero>
  )
}

export function TripulantesImpact() {
  return (
    <section className="border-y border-[#2a2422]/8 bg-[#fff8ef]/60 py-12 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
              ¿Para qué sirve tu donación?
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-pretty">
              Las donaciones de Tripulantes se utilizan íntegramente para sostener
              los proyectos de la Nave.
            </p>
          </div>
        </SectionReveal>

        <ul className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-6">
          {tripulantesImpact.map((item, index) => {
            const Icon = impactIcons[index] ?? Building2
            return (
              <SectionReveal key={item.title} delay={index * 0.05}>
                <li className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-[#a95153]/10 text-[#a95153] ring-1 ring-[#a95153]/15">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-pretty text-[#2a2422]">
                    {item.description}
                  </p>
                </li>
              </SectionReveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function TripulantesOrbit() {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(169,81,83,0.07),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.16em] text-[#a95153] uppercase sm:text-sm">
              Inversión de tu aporte
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold sm:text-3xl md:text-4xl">
              Bitácora de órbita
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-pretty">
              Desde 2021, Nave Cine Metro ha realizado esfuerzos para mantener este
              espacio con actividades artísticas variadas. Aquí una muestra de la
              inversión de tu aporte.
            </p>
          </div>
        </SectionReveal>

        <div className="mx-auto mt-10 max-w-2xl md:mt-14">
          <OrbitTimeline entries={tripulantesOrbit} />
        </div>
      </div>
    </section>
  )
}
