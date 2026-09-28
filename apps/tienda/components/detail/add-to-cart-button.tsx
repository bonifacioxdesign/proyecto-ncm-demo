"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import {
  formatDate,
  formatPrice,
  formatTime12h,
  isScreeningPast,
  type TicketEvent,
} from "@/lib/events-shared";

interface AddToCartButtonProps {
  event: TicketEvent;
}

export default function AddToCartButton({ event }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const upcomingScreenings = useMemo(
    () => event.screenings.filter((s) => !isScreeningPast(s.date, s.time)),
    [event.screenings],
  );
  const [screeningId, setScreeningId] = useState<string>(upcomingScreenings[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selected = useMemo(
    () => upcomingScreenings.find((s) => s.id === screeningId) ?? null,
    [upcomingScreenings, screeningId],
  );
  const maxTickets = selected?.availableTickets ?? 0;

  const handleAdd = () => {
    if (!selected) return;
    addItem(event, { id: selected.id, date: selected.date, time: selected.time }, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const noScreenings = upcomingScreenings.length === 0;
  const disabled = added || noScreenings || !selected || maxTickets === 0;

  return (
    <div className="flex flex-col gap-4">
      {noScreenings ? (
        <p className="border-border text-muted-foreground rounded-lg border border-dashed p-3 text-sm">
          No hay funciones disponibles.
        </p>
      ) : (
        <div className="flex flex-col gap-1.5">
          <label className="text-muted-foreground text-sm">Función</label>
          <select
            value={screeningId}
            onChange={(e) => {
              setScreeningId(e.target.value);
              setQuantity(1);
            }}
            className="border-border bg-input text-foreground rounded-lg border px-3 py-2 text-sm"
          >
            {upcomingScreenings.map((s) => (
              <option key={s.id} value={s.id}>
                {formatDate(s.date)} · {formatTime12h(s.time)}
                {s.availableTickets === 0 ? " (agotado)" : ""}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex items-center gap-3">
        <span className="text-muted-foreground text-sm">Cantidad:</span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            style={{ backgroundColor: "#9e5656" }}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-all hover:shadow-lg"
            aria-label="Reducir cantidad"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-foreground w-10 text-center text-base font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(maxTickets || q, q + 1))}
            style={{ backgroundColor: "#9e5656" }}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-all hover:shadow-lg"
            aria-label="Aumentar cantidad"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-primary text-3xl font-bold">
          {formatPrice(event.priceInCents * quantity)}
        </span>
        {quantity > 1 && (
          <span className="text-muted-foreground text-sm">
            ({formatPrice(event.priceInCents)} c/u)
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={handleAdd}
        disabled={disabled}
        className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold transition-all disabled:opacity-50 ${
          added
            ? "bg-emerald-600 text-emerald-50"
            : "bg-primary text-primary-foreground hover:brightness-110"
        }`}
      >
        {added ? (
          <>
            <Check className="h-5 w-5" />
            Agregado al carrito
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5" />
            Agregar al carrito
          </>
        )}
      </button>

      {selected && (
        <p className="text-muted-foreground text-xs">{maxTickets} entradas disponibles</p>
      )}
    </div>
  );
}
