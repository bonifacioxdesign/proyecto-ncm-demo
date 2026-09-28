import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HistoryMasonry } from "@/components/history-masonry"
import { SectionReveal } from "@/components/section-reveal"

/** Historia del espacio — usada en Conócenos. */
export default function ContentSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <SectionReveal className="md:col-span-7">
            <HistoryMasonry />
          </SectionReveal>

          <SectionReveal delay={0.06} className="md:col-span-5">
            <div className="relative flex flex-col justify-center md:sticky md:top-28">
              <p className="text-xs font-medium tracking-[0.14em] text-[#a95153] uppercase sm:text-sm">
                Centro Histórico · San Salvador
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-[#212121] sm:text-4xl lg:text-5xl">
                Nuestra historia
              </h2>

              <div className="mt-5 space-y-4 md:mt-6 md:space-y-5">
                <p className="text-base leading-[1.75] text-pretty text-[#2a2422] md:text-lg">
                  La{" "}
                  <strong className="font-semibold text-[#a95153]">
                    Nave Cine Metro
                  </strong>{" "}
                  es nuestro centro cultural en el corazón de la capital: la
                  esquina histórica del Cine Metro reconvertida en un espacio
                  vivo para ensayar, presentar y encontrarse con el arte.
                </p>
                <p className="text-base leading-[1.75] text-pretty text-[#2a2422] md:text-lg">
                  Abrimos sus puertas en 2020. Desde entonces, salas, talleres y
                  programación conviven bajo el mismo techo — un lugar físico
                  para la creación, la formación y el público del Centro
                  Histórico.
                </p>
                <p className="text-base leading-[1.75] text-pretty text-[#2a2422] md:text-lg">
                  El espacio nace del trabajo de{" "}
                  <strong className="font-semibold text-[#a95153]">
                    Teatro del Azoro
                  </strong>{" "}
                  y{" "}
                  <strong className="font-semibold text-[#a95153]">
                    La Cachada Teatro
                  </strong>
                  , fundadoras de la Asociación Cultural Azoro: más de 90
                  proyectos y 20 obras originales que hoy tienen casa aquí.
                </p>
              </div>

              <div className="mt-7 md:mt-8">
                <Button
                  variant="outline"
                  className="w-full border-[#a95153] text-[#a95153] sm:w-auto"
                  render={<Link href="/contactanos" />}
                  nativeButton={false}
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
