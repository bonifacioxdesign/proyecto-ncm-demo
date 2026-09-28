import Link from "next/link"
import { Suspense, type ReactNode } from "react"
import { Bus, Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ParkingMapLoader from "@/components/parking-map-loader"
import { PageHero } from "@/components/page-hero"
import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

const panelClass =
  "rounded-xl bg-card ring-1 ring-foreground/10 transition-colors"

export default function ContactSection() {
  return (
    <>
      <PageHero
        title="Contáctanos"
        description="¿Querés saber más de nosotras? Escribinos y te contamos cómo sumarte a la Nave."
      />
      <section className="pb-12 md:pb-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2 lg:items-stretch md:gap-8">
          <Suspense
            fallback={
              <div className="flex h-full min-h-72 flex-col rounded-xl bg-card px-5 py-6 ring-1 ring-foreground/10 md:px-6 md:py-7" />
            }
          >
            <ContactForm />
          </Suspense>

          <aside className={cn(panelClass, "flex h-full flex-col px-5 py-6 md:px-6 md:py-7")}>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-medium tracking-tight md:text-xl">
                <MapPin className="size-5 shrink-0 text-[#a95153]" aria-hidden />
                La Nave
              </h2>
              <p className="text-muted-foreground mt-3 pl-7 text-sm leading-relaxed">
                {siteConfig.address}
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-[#a95153]" aria-hidden />
                  <span>
                    <span className="text-muted-foreground">Teléfono: </span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="font-medium transition-colors hover:text-[#a95153]"
                    >
                      {siteConfig.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#a95153]" aria-hidden />
                  <span>
                    <span className="text-muted-foreground">Correo: </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium transition-colors hover:text-[#a95153]"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-[#a95153]" aria-hidden />
                  <span>
                    <span className="text-muted-foreground">Horario: </span>
                    <span className="font-medium">{siteConfig.hours}</span>
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <SocialChip href={siteConfig.social.instagram} label="Instagram">
                  <InstagramIcon className="size-4" />
                </SocialChip>
                <SocialChip href={siteConfig.social.facebook} label="Facebook">
                  <FacebookIcon className="size-4" />
                </SocialChip>
                <SocialChip href={siteConfig.social.twitter} label="X / Twitter">
                  <XIcon className="size-4" />
                </SocialChip>
              </div>
            </div>

            <div className="mt-auto border-t border-foreground/10 pt-6">
              <h2 className="flex items-center gap-2 text-lg font-medium tracking-tight md:text-xl">
                <Bus className="size-5 shrink-0 text-[#a95153]" aria-hidden />
                ¿Cómo llegar?
              </h2>
              <p className="text-muted-foreground mt-3 pl-7 text-sm">Rutas de buses:</p>
              <p className="mt-2 pl-7 text-sm font-medium leading-relaxed">
                {siteConfig.busRoutes.join(", ")}
              </p>
            </div>
          </aside>
        </div>

        <div className={cn(panelClass, "mt-6 px-5 py-6 md:mt-8 md:px-6 md:py-7")}>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-medium tracking-tight md:text-xl">
                <MapPin className="size-5 shrink-0 text-[#a95153]" aria-hidden />
                Ubicación y estacionamientos
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-sm text-pretty">
                Encontranos en el Centro Histórico. Abrí el mapa para planear tu visita.
              </p>
            </div>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#a95153] px-4 py-2 text-sm font-medium text-[#fff8ef] transition-colors hover:bg-[#8f4244]"
            >
              Abrir en Google Maps
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </div>
          <div className="overflow-hidden rounded-lg ring-1 ring-foreground/10">
            <ParkingMapLoader />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

function SocialChip({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ring-1 ring-foreground/12 transition-colors hover:bg-[#a95153] hover:text-[#fff8ef] hover:ring-[#a95153]"
    >
      {children}
      {label}
    </Link>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
    </svg>
  )
}
