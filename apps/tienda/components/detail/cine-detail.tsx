"use client";

import Image from "next/image";
import { Calendar, Clock, Film } from "lucide-react";
import { type TicketEvent, formatDate, formatTime12h } from "@/lib/events-shared";
import AddToCartButton from "./add-to-cart-button";

interface CineDetailProps {
  event: TicketEvent;
}

export default function CineDetail({ event }: CineDetailProps) {
  const firstScreening = event.screenings[0];
  return (
    <div className="relative">
      {/* Cinematic full-width backdrop */}
      <div className="relative h-[40vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.name}
          fill
          className="object-cover"
          priority
        />
        <div className="from-background via-background/70 to-background/20 absolute inset-0 bg-gradient-to-t" />
        <div className="from-background/80 to-background/80 absolute inset-0 bg-gradient-to-r via-transparent" />

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1">
          <Film className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Cine
          </span>
        </div>
      </div>

      <div className="relative z-10 -mt-28 px-6 pb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          {/* Poster style card */}
          <div className="shrink-0 lg:w-56">
            <div className="overflow-hidden rounded-2xl border-2 border-amber-500/20 shadow-2xl shadow-amber-500/5">
              <div className="relative aspect-[2/3]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                <div className="from-card/60 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="font-display text-foreground mb-3 text-2xl font-bold text-balance md:text-3xl lg:text-4xl">
              {event.name}
            </h1>

            {firstScreening && (
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="border-border bg-card text-muted-foreground flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm">
                  <Calendar className="h-4 w-4 text-amber-400" />
                  {formatDate(firstScreening.date)}
                </span>
                <span className="border-border bg-card text-muted-foreground flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm">
                  <Clock className="h-4 w-4 text-amber-400" />
                  {formatTime12h(firstScreening.time)}
                </span>
              </div>
            )}

            <div className="border-border bg-card mb-6 rounded-xl border p-5">
              <h3 className="mb-2 text-sm font-semibold tracking-wider text-amber-400 uppercase">
                Sinopsis
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.longDescription}
              </p>
            </div>

            <div className="from-card rounded-xl border border-amber-500/20 bg-gradient-to-br to-amber-950/10 p-5">
              <AddToCartButton event={event} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
