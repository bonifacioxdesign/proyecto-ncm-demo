"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const TOUR_SRC =
  "https://tour.panoee.net/iframe/6a581e97fee518e2d47d72aa"
const IFRAME_ID = "tour-embeded"

type VirtualTourProps = {
  className?: string
}

/**
 * Panoee 360° embed + device-motion bridge (gyro on mobile).
 * Mobile: near full-viewport. Desktop: wide cinematic pane.
 */
export function VirtualTour({ className }: VirtualTourProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const onDeviceMotion = (e: DeviceMotionEvent) => {
      const iframe = document.getElementById(
        IFRAME_ID
      ) as HTMLIFrameElement | null
      if (!iframe?.contentWindow) return

      iframe.contentWindow.postMessage(
        {
          type: "devicemotion",
          deviceMotionEvent: {
            acceleration: {
              x: e.acceleration?.x ?? null,
              y: e.acceleration?.y ?? null,
              z: e.acceleration?.z ?? null,
            },
            accelerationIncludingGravity: {
              x: e.accelerationIncludingGravity?.x ?? null,
              y: e.accelerationIncludingGravity?.y ?? null,
              z: e.accelerationIncludingGravity?.z ?? null,
            },
            rotationRate: {
              alpha: e.rotationRate?.alpha ?? null,
              beta: e.rotationRate?.beta ?? null,
              gamma: e.rotationRate?.gamma ?? null,
            },
            interval: e.interval,
            timeStamp: e.timeStamp,
          },
        },
        "*"
      )
    }

    window.addEventListener("devicemotion", onDeviceMotion)
    return () => window.removeEventListener("devicemotion", onDeviceMotion)
  }, [mounted])

  return (
    <div
      className={cn(
        "overflow-hidden bg-card ring-1 ring-foreground/10",
        // Mobile: tall immersive pane under the compact header + title
        "h-[calc(100svh-9.5rem)] min-h-[480px] rounded-none",
        // Tablet+
        "sm:h-[calc(100svh-11rem)] sm:min-h-[560px] sm:rounded-2xl",
        // Desktop: cinematic width-friendly height
        "md:h-[min(82vh,820px)] md:min-h-[640px]",
        "lg:h-[min(85vh,900px)]",
        className
      )}
    >
      {mounted ? (
        <iframe
          id={IFRAME_ID}
          title="Tour virtual Nave Cine Metro"
          name="Nave Cine Metro"
          src={TOUR_SRC}
          className="h-full w-full border-0"
          allow="vr; xr; accelerometer; gyroscope; autoplay; fullscreen"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-sm text-muted-foreground"
          aria-hidden
        >
          Cargando tour…
        </div>
      )}
    </div>
  )
}
