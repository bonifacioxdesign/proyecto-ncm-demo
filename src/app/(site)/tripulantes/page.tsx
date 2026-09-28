import type { Metadata } from "next"
import { MembershipPlans } from "@/components/membership-plans"
import {
  TripulantesHero,
  TripulantesImpact,
  TripulantesOrbit,
} from "@/components/tripulantes-sections"

export const metadata: Metadata = {
  title: "Tripulantes",
  description:
    "Unite a la comunidad Tripulantes de Nave Cine Metro. Membresías y donaciones para sostener el arte y la cultura en San Salvador.",
}

export default function TripulantesPage() {
  return (
    <main className="pt-24">
      <TripulantesHero />
      <TripulantesImpact />
      <MembershipPlans />
      <TripulantesOrbit />
    </main>
  )
}
