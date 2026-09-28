import {
  FALLBACK_HERO_EVENTS,
  type HeroEvent,
} from "@/content/hero-events"

function shopBaseUrl() {
  return (
    process.env.TIENDA_URL ||
    process.env.NEXT_PUBLIC_SHOP_URL ||
    "http://localhost:3002"
  ).replace(/\/$/, "")
}

function resolveImage(image: string, base: string) {
  if (!image) return "/images/hero-fachada.jpg"
  if (image.startsWith("http://") || image.startsWith("https://")) return image
  // Prefer local copies under /events; fall back to Tienda absolute URL
  if (image.startsWith("/events/")) return image
  return `${base}${image.startsWith("/") ? image : `/${image}`}`
}

/**
 * Latest featured events for the home hero (most recent createdAt first).
 * Tries Tienda API; falls back to local mirror of demo featured events.
 */
export async function getHeroEvents(): Promise<{
  events: HeroEvent[]
  shopUrl: string
  source: "tienda" | "fallback"
}> {
  const shopUrl = shopBaseUrl()

  try {
    const res = await fetch(`${shopUrl}/api/featured-events`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(4000),
    })

    if (!res.ok) throw new Error(`Tienda API ${res.status}`)

    const data = (await res.json()) as { events?: HeroEvent[] }
    const events = (data.events ?? [])
      .map((event) => ({
        ...event,
        image: resolveImage(event.image, shopUrl),
      }))
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )

    if (events.length === 0) {
      return { events: FALLBACK_HERO_EVENTS, shopUrl, source: "fallback" }
    }

    return { events, shopUrl, source: "tienda" }
  } catch {
    return { events: FALLBACK_HERO_EVENTS, shopUrl, source: "fallback" }
  }
}

export function eventTicketHref(shopUrl: string, _eventId?: string) {
  return shopUrl
}
