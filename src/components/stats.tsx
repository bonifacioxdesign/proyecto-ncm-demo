import { AnimatedCounter } from "@/components/animated-counter"
import { SectionReveal } from "@/components/section-reveal"
import { stats } from "@/content/site"

export default function StatsSection() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8 md:space-y-16">
        <SectionReveal>
          <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-6">
            <h2 className="text-2xl font-medium sm:text-3xl lg:text-5xl">
              Algunos datos
            </h2>
            <p className="text-muted-foreground text-pretty">
              Cifras de la Nave Cine Metro desde que abrimos nuestras puertas en el
              Centro Histórico.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-8 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <SectionReveal key={stat.value} delay={index * 0.05}>
              <div className="space-y-3 px-2 py-2 md:space-y-4 md:px-4">
                <AnimatedCounter
                  value={stat.value}
                  className="text-primary text-4xl font-bold sm:text-5xl"
                />
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {stat.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
