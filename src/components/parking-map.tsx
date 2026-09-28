"use client"

import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map"
import { siteConfig } from "@/content/site"

export default function ParkingMap() {
  const { lat, lng } = siteConfig.coordinates

  return (
    <div className="h-[22rem] w-full overflow-hidden md:h-[28rem]">
      <Map
        center={[lng, lat]}
        zoom={16}
        theme="light"
        className="h-full w-full"
      >
        <MapControls position="top-left" />
        <MapMarker longitude={lng} latitude={lat}>
          <MarkerContent>
            <div className="relative flex size-8 items-center justify-center">
              <span className="bg-primary/30 absolute inset-0 animate-ping rounded-full" />
              <span className="bg-primary relative size-3.5 rounded-full border-2 border-white shadow-md" />
            </div>
          </MarkerContent>
          <MarkerPopup>
            <div className="bg-card text-card-foreground max-w-56 rounded-xl border p-3 shadow-md">
              <p className="text-sm font-medium">{siteConfig.name}</p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                {siteConfig.address}
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  )
}
