/**
 * Inventario Atomic Design — Nave Cine Metro (sitio) + puente a Tienda.
 * Fuente de verdad para /styleguide y decisiones de sistema.
 */

export type StyleguideStatus = "have" | "partial" | "missing" | "recommend"

export type StyleguideItem = {
  id: string
  name: string
  status: StyleguideStatus
  path?: string
  note: string
}

export const STATUS_LABEL: Record<StyleguideStatus, string> = {
  have: "Tenemos",
  partial: "Parcial",
  missing: "Falta",
  recommend: "Recomendado",
}

export const TOKENS: StyleguideItem[] = [
  {
    id: "color",
    name: "Paleta crema / rosa / naranja",
    status: "have",
    path: "src/app/globals.css",
    note: "#fff0dc · #a95153 · #f76b00",
  },
  {
    id: "type",
    name: "Krona One + Chivo",
    status: "have",
    path: "src/app/layout.tsx",
    note: "Display + cuerpo",
  },
  {
    id: "radius",
    name: "Radios (--radius)",
    status: "have",
    path: "src/app/globals.css",
    note: "0.625rem + sm/md/lg/xl",
  },
  {
    id: "layout",
    name: "Contenedor max-w-5xl",
    status: "have",
    path: "src/lib/site-layout.ts",
    note: "siteContainer / siteProse",
  },
  {
    id: "shadow",
    name: "Escala de sombra",
    status: "missing",
    note: "Sombras ad-hoc; definir ambient / hover",
  },
  {
    id: "motion",
    name: "Tokens de motion",
    status: "partial",
    note: "Easing repetido; reduced-motion incompleto",
  },
  {
    id: "unify",
    name: "Unificación sitio ↔ Tienda",
    status: "missing",
    note: "Primary y tipografía divergen",
  },
]

export const ATOMS: StyleguideItem[] = [
  {
    id: "button",
    name: "Button",
    status: "have",
    path: "src/components/ui/button.tsx",
    note: "6 variantes; migrar hex → CSS vars",
  },
  {
    id: "input",
    name: "Input / Textarea / Label / Select",
    status: "have",
    path: "src/components/ui/",
    note: "Base UI + shadcn",
  },
  {
    id: "card",
    name: "Card",
    status: "have",
    path: "src/components/ui/card.tsx",
    note: "Usar solo cuando hay interacción",
  },
  {
    id: "logo",
    name: "Logo",
    status: "have",
    path: "src/components/logo.tsx",
    note: "logo-nave.svg",
  },
  {
    id: "badge",
    name: "Badge / Tag / Chip",
    status: "missing",
    note: "P0 — cartelera, filtros, membresía",
  },
  {
    id: "feedback",
    name: "Skeleton / Toast / Separator",
    status: "missing",
    note: "Existen en Tienda; no en sitio",
  },
  {
    id: "overlay",
    name: "Dialog / Sheet",
    status: "missing",
    note: "Modal de eventos solo en Tienda",
  },
]

export const MOLECULES: StyleguideItem[] = [
  {
    id: "page-hero",
    name: "PageHero",
    status: "have",
    path: "src/components/page-hero.tsx",
    note: "Eyebrow + título + descripción",
  },
  {
    id: "contact-form",
    name: "Contact form",
    status: "have",
    path: "src/components/contact-form.tsx",
    note: "Campos + envío",
  },
  {
    id: "cta",
    name: "Call to action",
    status: "have",
    path: "src/components/call-to-action.tsx",
    note: "Bloque de acción",
  },
  {
    id: "membership",
    name: "Membership plans / deck",
    status: "have",
    path: "src/components/membership-*.tsx",
    note: "Tripulantes",
  },
  {
    id: "event-card",
    name: "Event card + filtros",
    status: "partial",
    path: "apps/tienda/components/",
    note: "No compartido con sitio",
  },
  {
    id: "showtime",
    name: "Showtime / ticket stub",
    status: "recommend",
    note: "Patrón cine/teatro cultural",
  },
  {
    id: "empty",
    name: "Empty / error states",
    status: "missing",
    note: "Kit de estados vacíos",
  },
]

export const ORGANISMS: StyleguideItem[] = [
  {
    id: "header",
    name: "SiteHeader",
    status: "have",
    path: "src/components/site-header.tsx",
    note: "Nav + crowdfunding + shop",
  },
  {
    id: "footer",
    name: "Footer",
    status: "have",
    path: "src/components/footer.tsx",
    note: "Chrome global",
  },
  {
    id: "hero",
    name: "Hero eventos",
    status: "have",
    path: "src/components/hero-events-carousel.tsx",
    note: "Puente a cartelera",
  },
  {
    id: "mission",
    name: "Mission / History / Stats",
    status: "have",
    note: "Narrativa institucional",
  },
  {
    id: "contact-map",
    name: "Contacto + mapa",
    status: "have",
    path: "src/components/contact.tsx",
    note: "Cómo llegar",
  },
  {
    id: "calendar",
    name: "Calendario de programación",
    status: "recommend",
    note: "Mejor práctica venues culturales",
  },
]

export const TEMPLATES: StyleguideItem[] = [
  {
    id: "root",
    name: "Root layout",
    status: "have",
    path: "src/app/layout.tsx",
    note: "Header + footer + fonts",
  },
  {
    id: "company",
    name: "Company page",
    status: "have",
    path: "src/components/company-page.tsx",
    note: "Azoro / La Cachada",
  },
  {
    id: "home",
    name: "Home composition",
    status: "have",
    path: "src/app/page.tsx",
    note: "Hero → Mission → History → CTA",
  },
]

export const PRIORITIES = [
  {
    priority: "P0" as const,
    title: "Tokens compartidos sitio ↔ Tienda",
    why: "Misma marca, dos hex y tipografías distintas erosionan confianza.",
  },
  {
    priority: "P0" as const,
    title: "Átomo Badge / Tag",
    why: "Base para género, sold-out, membresía y filtros.",
  },
  {
    priority: "P1" as const,
    title: "Hex → CSS variables en Button/CTA",
    why: "Hardcodes provocan drift respecto a globals.css.",
  },
  {
    priority: "P1" as const,
    title: "Motion tokens + reduced-motion global",
    why: "PRODUCT.md exige WCAG; cobertura incompleta.",
  },
  {
    priority: "P2" as const,
    title: "Patrones cine: showtime, stub, trailer",
    why: "Diferencian venue cultural de brochure genérico.",
  },
]

export const COLOR_SWATCHES = [
  { name: "Background", varName: "--background", hex: "#fff0dc", role: "Superficie de página" },
  { name: "Foreground", varName: "--foreground", hex: "#212121", role: "Texto principal" },
  { name: "Primary", varName: "--primary", hex: "#a95153", role: "Marca / CTAs" },
  { name: "Accent", varName: "--accent", hex: "#f76b00", role: "Énfasis puntual" },
  { name: "Secondary", varName: "--secondary", hex: "#f5e0c0", role: "Fondos suaves" },
  { name: "Muted fg", varName: "--muted-foreground", hex: "#5c4a3a", role: "Texto secundario" },
  { name: "Card", varName: "--card", hex: "#fff8eb", role: "Superficie elevada" },
  { name: "Destructive", varName: "--destructive", hex: "#b42318", role: "Errores" },
] as const
