import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import HomeHistory from "@/components/home-history"
import { TourVirtualCard } from "@/components/tour-virtual-card"
import LogoCloud from "@/components/logo-cloud"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <TourVirtualCard />
      <HomeHistory />
      <LogoCloud />
      <CallToAction />
    </main>
  )
}
