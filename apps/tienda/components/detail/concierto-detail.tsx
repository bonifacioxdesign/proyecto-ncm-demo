"use client";

import Image from "next/image";
import { Calendar, Clock, Music, Zap } from "lucide-react";
import { type TicketEvent, formatDate, formatTime12h } from "@/lib/events-shared";
import AddToCartButton from "./add-to-cart-button";

interface ConciertoDetailProps {
  event: TicketEvent;
}

export default function ConciertoDetail({ event }: ConciertoDetailProps) {
  const firstScreening = event.screenings[0];
  return (
    <div className="relative">
      {/* Full-bleed concert hero */}
      <div className="relative h-[35vh] min-h-62.5 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.name}
          fill
          className="object-cover"
          priority
        />
        <div className="from-background via-background/50 absolute inset-0 bg-linear-to-t to-sky-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/20 px-4 py-1.5 backdrop-blur-sm">
          <Music className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">En Vivo</span>
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-10 px-6 pb-6">
          <h1 className="font-display text-foreground mb-2 text-2xl font-black tracking-tight uppercase md:text-4xl">
            {event.name}
          </h1>

          {firstScreening && (
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-1.5 text-sky-300">
                <Calendar className="h-4 w-4" />
                {formatDate(firstScreening.date)}
              </span>
              <span className="flex items-center gap-1.5 text-sky-300">
                <Clock className="h-4 w-4" />
                {formatTime12h(firstScreening.time)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          <div className="flex-1">
            {/* Info cards */}
            <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="bg-card rounded-xl border border-sky-500/20 p-4 text-center">
                <Zap className="mx-auto mb-1.5 h-5 w-5 text-sky-400" />
                <p className="text-muted-foreground text-[10px]">Formato</p>
                <p className="text-foreground text-xs font-bold">En Vivo</p>
              </div>
              <div className="bg-card rounded-xl border border-sky-500/20 p-4 text-center">
                <Music className="mx-auto mb-1.5 h-5 w-5 text-sky-400" />
                <p className="text-muted-foreground text-[10px]">Disponibles</p>
                <p className="text-foreground text-xs font-bold">
                  {event.screenings.reduce((n, s) => n + s.availableTickets, 0)}
                </p>
              </div>
            </div>

            <div className="border-border bg-card rounded-xl border p-5">
              <h3 className="text-foreground mb-2 text-base font-bold">Sobre el Evento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.longDescription}
              </p>
            </div>
          </div>

          {/* Ticket panel */}
          <div className="lg:w-72">
            <div className="bg-card overflow-hidden rounded-2xl border border-sky-500/20">
              <div className="bg-linear-to-r from-sky-600 to-sky-500 p-4">
                <p className="text-sm font-bold tracking-wider text-sky-50 uppercase">
                  Asegura tu lugar
                </p>
                <p className="text-xs text-sky-100/80">Entradas limitadas</p>
              </div>
              <div className="p-5">
                <AddToCartButton event={event} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
