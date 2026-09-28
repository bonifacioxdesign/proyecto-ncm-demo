import { HeroEventsCarousel } from "@/components/hero-events-carousel"
import { getHeroEvents } from "@/lib/hero-events"

export default async function HeroSection() {
  const { events, shopUrl } = await getHeroEvents()

  return <HeroEventsCarousel events={events} shopUrl={shopUrl} />
}
