import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { sanSalvadorGuide } from "@/content/site"

export const metadata: Metadata = {
  title: "Descubre San Salvador",
  description:
    "Guía rápida del Centro Histórico de San Salvador: templos, plazas, cafés y edificios emblemáticos cerca de Nave Cine Metro.",
}

export default function DescubreSanSalvadorPage() {
  return (
    <main className="pt-24">
      <PageHero
        align="start"
        title="Explora San Salvador y conoce su arte"
        description="Esta es una guía rápida de qué ver y a dónde ir cuando visités el Centro Histórico de San Salvador, que poco a poco está reviviendo como un lugar de desarrollo artístico, cultural y turístico."
      />

      <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2">
          {sanSalvadorGuide.map((section) => (
            <div key={section.title} className="bg-card rounded-2xl border p-6">
              <h2 className="text-xl font-medium">{section.title}</h2>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground border-l-primary/50 border-l-2 pl-3 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button render={<Link href="/contactanos" />} nativeButton={false}>
            Planificá tu visita a la Nave
          </Button>
        </div>
      </section>
    </main>
  )
}
