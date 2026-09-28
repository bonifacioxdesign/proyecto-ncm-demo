import Image from "next/image"
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur"
import { SectionReveal } from "@/components/section-reveal"
import { partners } from "@/content/site"

export default function LogoCloud() {
  return (
    <section className="bg-background border-t py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-medium md:text-3xl">Colaboradores de la Nave</h2>
            <p className="text-muted-foreground mt-3 text-pretty md:mt-4">
              Estamos comprometidas con realizar una gestión cultural honesta, clara y
              transparente. Agradecemos el apoyo de estas organizaciones.
            </p>
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.06}>
      <div className="group relative m-auto mt-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 md:mt-12">
        <div className="relative py-4 md:py-6">
          <InfiniteSlider speedOnHover={20} speed={40} gap={72}>
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 w-28 shrink-0 items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={140}
                  height={48}
                  className="max-h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </InfiniteSlider>

          <div
            aria-hidden
            className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
          />
          <div
            aria-hidden
            className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-20"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-20"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
      </SectionReveal>
    </section>
  )
}
