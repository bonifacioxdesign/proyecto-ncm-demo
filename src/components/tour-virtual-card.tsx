import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/section-reveal"

export function TourVirtualCard() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <Link
            href="/tour-virtual"
            className="group relative block overflow-hidden rounded-2xl ring-1 ring-[#2a2422]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(169,81,83,0.45)] hover:ring-[#a95153]/35 md:rounded-3xl"
          >
            <div className="relative aspect-[16/10] sm:aspect-[21/9]">
              <Image
                src="/images/nave-interior.jpg"
                alt="Interior de la Nave Cine Metro"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#2a2422]/90 via-[#2a2422]/45 to-[#2a2422]/15"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8 md:p-10">
              <div className="max-w-xl">
                <p className="text-xs font-medium tracking-[0.14em] text-[#f76b00] uppercase sm:text-sm">
                  Recorrido 360°
                </p>
                <h2 className="mt-2 text-balance text-2xl font-semibold text-[#fff8ef] sm:text-3xl md:text-4xl">
                  Tour virtual
                </h2>
                <p className="mt-2 text-pretty text-sm text-[#efe4d4] sm:text-base">
                  Entrá a la Nave desde donde estés y mirá el espacio en 360°.
                </p>
              </div>

              <span className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#a95153] px-5 text-sm font-medium text-[#fff8ef] transition group-hover:bg-[#8f4244] sm:w-auto">
                Explorar
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
