export type HeroEvent = {
  id: string
  name: string
  description: string
  image: string
  venue: string
  city: string
  priceInCents: number
  priceLabel: string
  category: {
    name: string
    color: string
  }
  date: string | null
  dateLabel: string | null
  time: string | null
  createdAt: string
}

function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInCents / 100)
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00Z")
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)
}

/** Stable dates — avoid Date.now() so SSR/client markup stays in sync. */
const FALLBACK_DATE_A = "2026-07-20"
const FALLBACK_DATE_B = "2026-07-22"

/**
 * Fallback featured events (mirrors Tienda DEMO featured),
 * most recent first by createdAt.
 */
export const FALLBACK_HERO_EVENTS: HeroEvent[] = [
  {
    id: "00000000-0000-4000-8000-000000000101",
    name: "Hamlet Contemporáneo",
    description:
      "Una reinterpretación audaz del clásico de Shakespeare con escenografía minimalista.",
    image: "/events/teatro-01.jpg",
    venue: "Nave Cine Metro",
    city: "San Salvador",
    priceInCents: 8500,
    priceLabel: formatPrice(8500),
    category: { name: "Teatro", color: "#10b981" },
    date: FALLBACK_DATE_A,
    dateLabel: formatDate(FALLBACK_DATE_A),
    time: "19:00",
    createdAt: "2026-07-15T18:00:00.000Z",
  },
  {
    id: "00000000-0000-4000-8000-000000000102",
    name: "La Casa de Bernarda Alba",
    description:
      "Una puesta en escena íntima del clásico de García Lorca sobre la represión y el deseo.",
    image: "/events/teatro-02.jpg",
    venue: "Nave Cine Metro",
    city: "San Salvador",
    priceInCents: 7500,
    priceLabel: formatPrice(7500),
    category: { name: "Teatro", color: "#10b981" },
    date: FALLBACK_DATE_B,
    dateLabel: formatDate(FALLBACK_DATE_B),
    time: "20:00",
    createdAt: "2026-07-14T18:00:00.000Z",
  },
].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
)
