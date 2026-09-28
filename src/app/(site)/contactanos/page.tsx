import type { Metadata } from "next"
import ContactSection from "@/components/contact"

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Escribinos a Nave Cine Metro. Dirección, teléfono, rutas de bus y mapa en el Centro Histórico de San Salvador.",
}

export default function ContactanosPage() {
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  )
}
