import type { Metadata } from "next"
import StatsSection from "@/components/stats"
import ContentSection from "@/components/content-1"
import CompanyCards from "@/components/company-cards"
import CallToAction from "@/components/call-to-action"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Conócenos",
  description:
    "Historia de la Asociación Cultural Azoro, Teatro del Azoro, La Cachada Teatro y Nave Cine Metro.",
}

export default function QuienesSomosPage() {
  return (
    <main className="pt-24">
      <PageHero
        title="Conócenos"
        description="Somos la Asociación Cultural Azoro. La Nave Cine Metro es nuestro centro cultural en el Centro Histórico de San Salvador."
        className="pb-2"
      />
      <StatsSection />
      <ContentSection />
      <CompanyCards />
      <CallToAction
        title="Sumate a la tripulación"
        description="Escribinos para visitas, alianzas o para realizar tu actividad en la Nave."
        primaryLabel="Ver servicios"
        primaryHref="/servicios"
        secondaryLabel={null}
      />
    </main>
  )
}
