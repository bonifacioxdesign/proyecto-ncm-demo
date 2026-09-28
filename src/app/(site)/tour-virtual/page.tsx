import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VirtualTour } from "@/components/virtual-tour"

export const metadata: Metadata = {
  title: "Tour virtual",
  description:
    "Recorré la Nave Cine Metro en 360°: un tour virtual del espacio cultural en el Centro Histórico de San Salvador.",
}

export default function TourVirtualPage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="px-4 pt-4 pb-3 text-center sm:px-6 sm:pt-6 md:pt-8 md:pb-4">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-balance text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Tour virtual
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-xl text-pretty text-sm sm:mt-3 sm:text-base md:text-lg">
            Entrá a la Nave desde donde estés. Arrastrá para mirar alrededor; en
            el celular podés usar el giroscopio.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        {/* Full-bleed on mobile; slight inset on larger screens */}
        <div className="mx-auto w-full md:px-4 lg:px-6">
          <VirtualTour />
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-4 px-4 sm:px-6 md:mt-10 lg:px-8">
          <p className="text-muted-foreground text-center text-sm text-pretty md:text-base">
            ¿Querés vivirla en persona?{" "}
            <Link
              href="/contactanos"
              className="font-medium text-[#a95153] underline-offset-4 hover:underline"
            >
              Planificá tu visita
            </Link>
            .
          </p>
          <Button render={<Link href="/contactanos" />} nativeButton={false}>
            Contáctanos
          </Button>
        </div>
      </section>
    </main>
  )
}
