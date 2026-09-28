import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from "@/components/logo"
import { PageHero } from "@/components/page-hero"
import { siteContainer } from "@/lib/site-layout"
import {
  ATOMS,
  COLOR_SWATCHES,
  MOLECULES,
  ORGANISMS,
  PRIORITIES,
  STATUS_LABEL,
  TEMPLATES,
  TOKENS,
  type StyleguideItem,
  type StyleguideStatus,
} from "@/content/styleguide"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Styleguide",
  description:
    "Sistema de diseño Atomic Design — Nave Cine Metro. Uso interno.",
  robots: { index: false, follow: false },
}

function statusClass(status: StyleguideStatus) {
  switch (status) {
    case "have":
      return "bg-primary/15 text-primary"
    case "partial":
      return "bg-accent/20 text-[#8a3d00]"
    case "missing":
      return "bg-destructive/15 text-destructive"
    case "recommend":
      return "bg-secondary text-secondary-foreground"
  }
}

function InventoryList({
  title,
  items,
  description,
}: {
  title: string
  description: string
  items: StyleguideItem[]
}) {
  return (
    <section className="scroll-mt-28" id={title.toLowerCase()}>
      <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="text-muted-foreground mt-2 max-w-2xl text-pretty">
        {description}
      </p>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div className="min-w-0">
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-muted-foreground mt-0.5 text-sm text-pretty">
                {item.note}
              </p>
              {item.path ? (
                <p className="mt-1 font-mono text-xs text-foreground/50">
                  {item.path}
                </p>
              ) : null}
            </div>
            <span
              className={cn(
                "shrink-0 self-start rounded-md px-2 py-0.5 text-xs font-medium",
                statusClass(item.status)
              )}
            >
              {STATUS_LABEL[item.status]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function StyleguidePage() {
  return (
    <main className="pt-24 pb-20">
      <PageHero
        eyebrow="Sistema de diseño"
        title="Styleguide Atomic Design"
        description="Inventario vivo de Nave Cine Metro: qué tenemos, qué falta y qué conviene a un venue cultural independiente. Registro brand — escena, no oficina."
        align="start"
      />

      <div className={cn(siteContainer(), "mt-12 space-y-20")}>
        <div className="flex flex-wrap items-center gap-3 border-b border-border pb-4">
          <Button
            variant="outline"
            size="sm"
            render={<Link href="/components" />}
            nativeButton={false}
          >
            Vista UI Lab (Vite)
          </Button>
          <nav
            aria-label="Capas Atomic Design"
            className="flex flex-wrap gap-2"
          >
            {[
              ["tokens", "Tokens"],
              ["átomos", "Átomos"],
              ["moléculas", "Moléculas"],
              ["organismos", "Organismos"],
              ["templates", "Templates"],
              ["prioridad", "Prioridad"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* ——— Tokens live ——— */}
        <section className="scroll-mt-28" id="tokens">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Tokens
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-pretty">
            Fundación del sistema. Toda UI nueva debe leer CSS variables, no
            hex sueltos.
          </p>

          <h3 className="mt-8 text-lg font-semibold">Color</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {COLOR_SWATCHES.map((swatch) => (
              <div key={swatch.varName} className="min-w-0">
                <div
                  className="aspect-[4/3] rounded-lg border border-border"
                  style={{ backgroundColor: swatch.hex }}
                  title={swatch.hex}
                />
                <p className="mt-2 text-sm font-medium">{swatch.name}</p>
                <p className="font-mono text-xs text-foreground/55">
                  {swatch.hex}
                </p>
                <p className="text-muted-foreground text-xs">{swatch.role}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold">Tipografía</h3>
          <div className="mt-4 space-y-6 rounded-lg border border-border bg-card p-6">
            <div>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Display — Krona One
              </p>
              <p className="font-display mt-2 text-3xl tracking-tight sm:text-4xl">
                Nave Cine Metro
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Body — Chivo
              </p>
              <p className="mt-2 max-w-prose text-base text-pretty md:text-lg">
                Espacio independiente para presentaciones, formación y
                programación artística en el Centro Histórico de San Salvador.
              </p>
            </div>
          </div>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {TOKENS.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground text-sm">{item.note}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 self-start rounded-md px-2 py-0.5 text-xs font-medium",
                    statusClass(item.status)
                  )}
                >
                  {STATUS_LABEL[item.status]}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ——— Atoms live ——— */}
        <section className="scroll-mt-28" id="átomos">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Átomos
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-pretty">
            Piezas indivisibles. No combinan lógica de negocio; solo estilo y
            estado.
          </p>

          <div className="mt-8 space-y-10">
            <div>
              <h3 className="text-sm font-semibold">Button</h3>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Button size="xs">XS</Button>
                <Button size="sm">SM</Button>
                <Button size="default">Default</Button>
                <Button size="lg">LG</Button>
              </div>
            </div>

            <div className="max-w-md space-y-3">
              <h3 className="text-sm font-semibold">Input / Label / Textarea</h3>
              <div className="space-y-1.5">
                <Label htmlFor="sg-name">Nombre</Label>
                <Input id="sg-name" placeholder="Tu nombre" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="sg-msg">Mensaje</Label>
                <Textarea id="sg-msg" placeholder="Escribe aquí…" rows={3} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Logo</h3>
              <div className="mt-3 inline-flex rounded-lg border border-border bg-card p-4">
                <Logo className="h-10 w-auto" />
              </div>
            </div>
          </div>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {ATOMS.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground text-sm">{item.note}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 self-start rounded-md px-2 py-0.5 text-xs font-medium",
                    statusClass(item.status)
                  )}
                >
                  {STATUS_LABEL[item.status]}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <InventoryList
          title="Moléculas"
          description="Grupos de átomos con un propósito concreto: un hero de página, un formulario, un CTA."
          items={MOLECULES}
        />

        <InventoryList
          title="Organismos"
          description="Secciones completas del sitio: header, heroes, mission, mapa."
          items={ORGANISMS}
        />

        <InventoryList
          title="Templates"
          description="Esqueletos de página que ensamblan organismos en layouts reutilizables."
          items={TEMPLATES}
        />

        <section className="scroll-mt-28" id="prioridad">
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            Prioridad y encaje de producto
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl text-pretty">
            Venue cultural (cine + teatro + membresías). Priorizar marca
            coherente y patrones de programación; dejar seat-maps y admin denso
            en EntradasYA.
          </p>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {PRIORITIES.map((p) => (
              <li key={p.title} className="flex gap-4 py-4">
                <span className="shrink-0 rounded-md bg-primary/15 px-2 py-0.5 font-mono text-sm font-semibold text-primary">
                  {p.priority}
                </span>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-muted-foreground mt-0.5 text-sm text-pretty">
                    {p.why}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Qué conviene aquí</h3>
            <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm text-pretty">
              <li>
                <span className="text-foreground font-medium">Alto:</span>{" "}
                cartelera/filtros, hero fotográfico del lugar, membresías,
                mapa/cómo llegar, compañías con voz propia.
              </li>
              <li>
                <span className="text-foreground font-medium">Bajo ahora:</span>{" "}
                seat map / reserva de butacas (complejidad; crece en Tienda).
              </li>
              <li>
                <span className="text-foreground font-medium">Evitar:</span> UI
                de dashboard en el sitio institucional; badges de ONG;
                burocracia visual.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
