import Image from "next/image"
import { cn } from "@/lib/utils"

const placeImages = [
  {
    src: "/images/hero-fachada.jpg",
    alt: "Fachada del Cine Metro en el Centro Histórico de San Salvador",
    className: "aspect-[4/5] sm:aspect-[5/6]",
    sizes: "(max-width: 640px) 100vw, 55vw",
    priority: true,
  },
  {
    src: "/images/nave-interior.jpg",
    alt: "Interior de la Nave Cine Metro",
    className: "aspect-[16/10]",
    sizes: "(max-width: 640px) 100vw, 55vw",
    priority: false,
  },
] as const

type HistoryMasonryProps = {
  className?: string
}

/** Visual place-first para la historia: fachada + interior. */
export function HistoryMasonry({ className }: HistoryMasonryProps) {
  return (
    <div className={cn("grid gap-3 sm:gap-4", className)}>
      {placeImages.map((item) => (
        <figure key={item.src} className="m-0">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl ring-1 ring-[#212121]/10 md:rounded-3xl",
              item.className
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.sizes}
              priority={item.priority}
              className="object-cover"
            />
          </div>
        </figure>
      ))}
    </div>
  )
}
