"use client";

import Image from "next/image";
import { Calendar, Clock, Theater } from "lucide-react";
import { type TicketEvent, formatDate, formatTime12h } from "@/lib/events-shared";
import AddToCartButton from "./add-to-cart-button";

interface TeatroDetailProps {
  event: TicketEvent;
}

export default function TeatroDetail({ event }: TeatroDetailProps) {
  const firstScreening = event.screenings[0];
  return (
    <div className="relative">
      {/* Elegant theater curtain-style header */}
      <div className="via-background to-background relative overflow-hidden bg-gradient-to-b from-rose-950/40 px-6 pt-8 pb-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(244,63,94,0.2),transparent_50%)]" />
        </div>

        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-2">
            <Theater className="h-5 w-5 text-rose-400" />
            <span className="text-sm font-semibold tracking-widest text-rose-400 uppercase">
              Teatro
            </span>
          </div>

          <h1 className="font-display text-foreground mb-2 max-w-3xl text-2xl font-bold text-balance italic md:text-4xl">
            {event.name}
          </h1>

          <p className="text-muted-foreground mb-4 max-w-2xl text-base leading-relaxed">
            {event.description}
          </p>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
            <Theater className="h-4 w-4 text-rose-500/40" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
          </div>
        </div>
      </div>

      <div className="px-6 pb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          <div className="flex-1">
            {/* Main image with theater frame */}
            <div className="mb-6 overflow-hidden rounded-2xl border-2 border-rose-500/10">
              <div className="relative aspect-video">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-[8px] border-rose-950/20" />
              </div>
            </div>

            <div className="border-border bg-card rounded-xl border p-5">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-5 w-1 rounded-full bg-rose-500" />
                <h3 className="text-foreground text-base font-bold">Sobre la Obra</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.longDescription}
              </p>
            </div>
          </div>

          {/* Sidebar ticket panel */}
          <div className="lg:w-72">
            <div className="bg-card rounded-2xl border border-rose-500/20 p-5">
              {firstScreening && (
                <div className="mb-5 flex flex-col gap-3">
                  <div className="text-muted-foreground flex items-center gap-3 text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10">
                      <Calendar className="h-4 w-4 text-rose-400" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Fecha</p>
                      <p className="text-foreground text-sm font-medium">
                        {formatDate(firstScreening.date)}
                      </p>
                    </div>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-3 text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10">
                      <Clock className="h-4 w-4 text-rose-400" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Hora</p>
                      <p className="text-foreground text-sm font-medium">
                        {formatTime12h(firstScreening.time)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="border-border border-t pt-5">
                <AddToCartButton event={event} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
