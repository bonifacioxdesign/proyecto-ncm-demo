import { cn } from "@/lib/utils"

/** Ancho de layout del sitio (~1024px; ~20% menos que max-w-7xl). */
export const SITE_MAX = "max-w-5xl"

/** Contenedor horizontal coherente en todo el sitio. */
export function siteContainer(className?: string) {
  return cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)
}

/** Contenedor de lectura (artículos / privacidad). */
export function siteProse(className?: string) {
  return cn("mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8", className)
}
