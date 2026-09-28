"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { type TicketEvent, formatPrice, formatShortDate, isEventPast } from "@/lib/events-shared";
import { useEventModal } from "@/lib/event-modal-context";

interface EventCardProps {
  event: TicketEvent;
  index?: number;
}

export default function EventCard({ event, index = 99 }: EventCardProps) {
  const { openEvent } = useEventModal();
  const firstScreening = event.screenings[0];
  const past = isEventPast(event);

  return (
    <div
      role={past ? undefined : "button"}
      tabIndex={past ? undefined : 0}
      onClick={past ? undefined : () => openEvent(event)}
      onKeyDown={past ? undefined : (e) => e.key === "Enter" && openEvent(event)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all ${
        past ? "" : "cursor-pointer hover:scale-105 hover:shadow-2xl"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-900">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.name}
          fill
          priority={index < 4}
          loading={index < 4 ? "eager" : "lazy"}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

        {/* Content pinned to bottom of image */}
        <div className="absolute right-0 bottom-0 left-0 p-4">
          <h3 className="mb-2 line-clamp-2 text-base leading-tight font-bold text-white">
            {event.name}
          </h3>
          {firstScreening && (
            <div className="mb-3 flex items-center gap-1.5 text-xs text-gray-300">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formatShortDate(firstScreening.date)}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className={`text-base font-bold ${past ? "text-gray-400" : "text-white"}`}>
              {formatPrice(event.priceInCents)}
            </span>
            {past ? (
              <span className="rounded px-3 py-1.5 text-xs font-bold text-gray-400">
                Evento finalizado
              </span>
            ) : (
              <button
                type="button"
                style={{ backgroundColor: "#9e5656" }}
                className="rounded px-3 py-1.5 text-xs font-bold text-white transition-all hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  openEvent(event);
                }}
              >
                COMPRAR
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
