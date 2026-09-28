import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"
import { missionBullets } from "@/content/site"

export default function MissionSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8 md:space-y-10">
        <SectionReveal>
          <div className="mx-auto w-full text-center">
            <h2 className="text-pretty text-[1.7rem] leading-[1.25] font-medium tracking-normal sm:text-3xl sm:leading-snug md:text-[2.75rem] md:leading-[1.2] lg:text-5xl">
              Un espacio independiente y comprometido con el arte y la cultura.
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="mx-auto w-full max-w-5xl">
            <h3 className="text-xl font-medium md:text-2xl">¿Qué es Nave Cine Metro?</h3>
            <ul className="mt-5 space-y-4 md:mt-6">
              {missionBullets.map((bullet) => (
                <li
                  key={bullet.slice(0, 32)}
                  className="text-muted-foreground relative pl-4 text-base leading-relaxed before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-[#a95153]"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <div className="rounded-[calc(var(--radius-xl)+0.125rem)] border border-[#a95153]/20 bg-[#a95153]/5 p-0.5">
                <Button
                  size="lg"
                  className="w-full rounded-xl bg-[#a95153] px-5 text-base text-[#fff8ef] hover:bg-[#8f4244] sm:w-auto"
                  render={<Link href="/quienes-somos" />}
                  nativeButton={false}
                >
                  <span className="text-nowrap">Conócenos</span>
                </Button>
              </div>
              <Button
                size="lg"
                variant="ghost"
                className="h-10.5 w-full rounded-xl px-5 sm:w-auto"
                render={<Link href="/servicios" />}
                nativeButton={false}
              >
                <span className="text-nowrap">Nuestros servicios</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
