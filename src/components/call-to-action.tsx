import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"

type CallToActionProps = {
  title?: string
  description?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string | null
}

export default function CallToAction({
  title = "¿Querés realizar tu actividad aquí?",
  description = "Contanos más de tu idea. La Nave tiene las puertas abiertas para presentaciones, formaciones y encuentros.",
  primaryHref = "/contactanos",
  primaryLabel = "Contáctanos",
  secondaryHref = "/servicios",
  secondaryLabel = "Ver servicios",
}: CallToActionProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2a2422] px-5 py-12 text-center shadow-xl md:rounded-3xl md:px-12 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(169,81,83,0.35),transparent_55%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(247,107,0,0.12),transparent_45%)]"
            />

            <h2 className="relative text-balance text-2xl font-semibold text-[#fff8ef] sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-3 max-w-2xl text-pretty text-[#d9cfc3] md:mt-4">
              {description}
            </p>

            <div className="relative mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Button
                size="lg"
                className="w-full bg-[#a95153] text-[#fff8ef] hover:bg-[#8f4244] hover:text-[#fff8ef] sm:w-auto"
                render={<Link href={primaryHref} />}
                nativeButton={false}
              >
                {primaryLabel}
              </Button>
              {secondaryLabel ? (
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/25 bg-transparent text-[#fff8ef] hover:border-[#a95153] hover:bg-[#a95153] hover:text-[#fff8ef] sm:w-auto"
                  render={<Link href={secondaryHref} />}
                  nativeButton={false}
                >
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
