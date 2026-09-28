import type { ReactNode } from "react"
import { ArrowRightIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from "@/components/logo"
import { PageHero } from "@/components/page-hero"
import CallToAction from "@/components/call-to-action"
import { StyleguideSelectDemo } from "@/components/styleguide-select-demo"
import { COLOR_SWATCHES } from "@/content/styleguide"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "#colores", label: "Colores" },
  { href: "#tipo", label: "Tipo" },
  { href: "#botones", label: "Botones" },
  { href: "#formularios", label: "Formularios" },
  { href: "#card", label: "Card" },
  { href: "#marca", label: "Marca" },
  { href: "#moleculas", label: "Moléculas" },
] as const

function Spec({
  id,
  label,
  hint,
  children,
  className,
}: {
  id: string
  label: string
  hint?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-sm font-semibold tracking-wide">{label}</h2>
        {hint ? (
          <p className="font-mono text-xs text-foreground/45">{hint}</p>
        ) : null}
      </div>
      <div
        className={cn(
          "rounded-xl border border-border bg-card/60 p-5 sm:p-6",
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div>
            <p className="font-mono text-[11px] tracking-wide text-primary uppercase">
              App separada · Vite
            </p>
            <p className="text-sm font-semibold">NCM UI Lab</p>
          </div>
          <nav className="hidden flex-wrap justify-end gap-1 md:flex" aria-label="Secciones">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="hidden font-mono text-[10px] text-foreground/40 sm:block">
            :5280
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <header className="mb-12 max-w-2xl">
          <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
            Component gallery
          </h1>
          <p className="text-muted-foreground mt-3 text-pretty">
            Front aparte del sitio Next.js. Importa los componentes reales desde{" "}
            <code className="rounded bg-secondary px-1 py-0.5 text-xs">
              ../src
            </code>
            . Arranca con{" "}
            <code className="rounded bg-secondary px-1 py-0.5 text-xs">
              npm run lab
            </code>
            .
          </p>
        </header>

        <div className="space-y-12">
          <Spec id="colores" label="Colores" hint="tokens de marca">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {COLOR_SWATCHES.map((swatch) => (
                <div key={swatch.varName} className="min-w-0">
                  <div
                    className="aspect-square rounded-lg border border-border"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <p className="mt-2 truncate text-xs font-medium">{swatch.name}</p>
                  <p className="truncate font-mono text-[10px] text-foreground/50">
                    {swatch.hex}
                  </p>
                </div>
              ))}
            </div>
          </Spec>

          <Spec id="tipo" label="Tipografía" hint="Krona One · Chivo">
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wide">
                  Display
                </p>
                <p className="font-display text-4xl tracking-tight sm:text-5xl">
                  Nave Cine Metro
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wide">
                  Headline
                </p>
                <p className="font-display text-2xl tracking-tight sm:text-3xl">
                  Escena, no oficina
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wide">
                  Body
                </p>
                <p className="max-w-prose text-base text-pretty md:text-lg">
                  Espacio independiente para presentaciones, formación y
                  programación artística en el Centro Histórico de San Salvador.
                </p>
              </div>
            </div>
          </Spec>

          <Spec id="botones" label="Button" hint="src/components/ui/button.tsx">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="xs">XS</Button>
                <Button size="sm">SM</Button>
                <Button size="default">Default</Button>
                <Button size="lg">LG</Button>
                <Button>
                  <MailIcon data-icon="inline-start" />
                  Escribirnos
                </Button>
                <Button variant="outline">
                  Ver más
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </Spec>

          <Spec id="formularios" label="Form controls" hint="input · select · textarea">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="lab-name">Nombre</Label>
                  <Input id="lab-name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lab-email">Correo</Label>
                  <Input id="lab-email" type="email" placeholder="hola@ejemplo.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lab-msg">Mensaje</Label>
                  <Textarea id="lab-msg" placeholder="Contanos tu idea…" rows={4} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Categoría</Label>
                  <StyleguideSelectDemo />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lab-disabled">Disabled</Label>
                  <Input id="lab-disabled" disabled defaultValue="No editable" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lab-invalid">Invalid</Label>
                  <Input id="lab-invalid" aria-invalid defaultValue="campo@malo" />
                </div>
              </div>
            </div>
          </Spec>

          <Spec id="card" label="Card" hint="src/components/ui/card.tsx">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Teatro del Azoro</CardTitle>
                  <CardDescription>Compañía residente</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Montajes contemporáneos con voz propia.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    Conocer
                  </Button>
                </CardFooter>
              </Card>
              <Card size="sm">
                <CardHeader>
                  <CardTitle>La Cachada Teatro</CardTitle>
                  <CardDescription>Tamaño sm</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Formación y escena.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Spec>

          <Spec id="marca" label="Marca" hint="logo.tsx + public/images">
            <div className="flex flex-wrap items-center gap-8">
              <div className="rounded-lg border border-border bg-background p-6">
                <Logo className="h-12 w-auto" />
              </div>
              <div className="rounded-lg bg-[#2a2422] p-6">
                <Logo className="h-12 w-auto brightness-0 invert" />
              </div>
            </div>
          </Spec>

          <Spec
            id="moleculas"
            label="Moléculas"
            hint="PageHero · CallToAction"
            className="overflow-hidden p-0 sm:p-0"
          >
            <div className="border-b border-border px-5 py-8 sm:px-8">
              <p className="text-muted-foreground mb-4 text-xs font-medium">
                PageHero
              </p>
              <PageHero
                className="px-0 pt-0"
                eyebrow="Servicios"
                title="Alquila la Nave"
                description="Espacios para presentaciones, formaciones y encuentros."
                align="start"
              />
            </div>
            <div className="bg-background px-2 py-4 sm:px-4">
              <p className="text-muted-foreground mb-2 px-3 text-xs font-medium sm:px-4">
                CallToAction
              </p>
              <CallToAction
                title="¿Querés realizar tu actividad aquí?"
                description="Ejemplo de bloque CTA del sistema."
                primaryLabel="Contáctanos"
                secondaryLabel="Ver servicios"
              />
            </div>
          </Spec>
        </div>
      </main>
    </div>
  )
}
