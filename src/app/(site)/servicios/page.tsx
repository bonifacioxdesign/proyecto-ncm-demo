import type { Metadata } from "next"
import Features from "@/components/features-1"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Alquileres, presentaciones, formación y audiovisual en Nave Cine Metro, Centro Histórico de San Salvador.",
}

export default function ServiciosPage() {
  return (
    <main className="pt-24">
      <Features />
      <CallToAction
        title="¿Querés realizar tus actividades aquí?"
        description="Cuentanos más de tu idea. Tenemos lo necesario para empezar ahora."
        primaryLabel="Cuéntanos tu idea"
        primaryHref="/contactanos"
        secondaryLabel={null}
      />
    </main>
  )
}
