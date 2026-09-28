import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"

/** Teaser de historia en Home — distinto al detalle de Conócenos. */
export default function HomeHistory() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16">
          <SectionReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-[#2a2422]/10 sm:aspect-[5/6] md:rounded-3xl">
              <Image
                src="/images/hero-fachada.jpg"
                alt="Fachada histórica del Cine Metro en el Centro Histórico"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.06}>
            <div className="flex flex-col justify-center text-center sm:text-left">
              <p className="text-xs font-medium tracking-[0.14em] text-[#f76b00] uppercase sm:text-sm">
                Desde 2011
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-[#212121] sm:text-4xl md:text-5xl">
                Nuestra historia
              </h2>
              <p className="text-muted-foreground mt-4 text-pretty text-base leading-relaxed sm:text-lg">
                Teatro del Azoro y La Cachada Teatro fundaron la Asociación Cultural
                Azoro. En 2020 abrimos la Nave Cine Metro en el corazón de San
                Salvador.
              </p>
              <div className="mt-7 flex justify-center sm:justify-start">
                <Button
                  size="lg"
                  className="rounded-xl bg-[#a95153] px-5 text-[#fff8ef] hover:bg-[#8f4244]"
                  render={<Link href="/quienes-somos" />}
                  nativeButton={false}
                >
                  Conocé más de nosotras
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
