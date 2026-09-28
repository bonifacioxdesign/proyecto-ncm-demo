import { Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default function SubscriptionsPage() {
  return (
    <div>
      <div>
        <h2 className="font-display text-foreground text-2xl font-bold">Suscripciones</h2>
        <p className="text-muted-foreground">Gestiona las suscripciones de usuarios</p>
      </div>

      <div className="border-border bg-card mt-6 rounded-lg border p-8 text-center shadow-sm">
        <Users className="text-muted-foreground/30 mx-auto mb-4 h-12 w-12" />
        <p className="text-muted-foreground">No hay suscripciones registradas aún</p>
      </div>
    </div>
  );
}
