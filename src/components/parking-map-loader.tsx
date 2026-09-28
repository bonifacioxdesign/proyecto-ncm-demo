"use client"

import dynamic from "next/dynamic"

const ParkingMap = dynamic(() => import("@/components/parking-map"), {
  ssr: false,
  loading: () => (
    <div className="bg-muted flex h-80 w-full items-center justify-center rounded-2xl border text-sm">
      Cargando mapa…
    </div>
  ),
})

export default function ParkingMapLoader() {
  return <ParkingMap />
}
