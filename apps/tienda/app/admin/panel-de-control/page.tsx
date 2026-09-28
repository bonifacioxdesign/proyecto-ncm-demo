import Link from "next/link";
import { BarChart3, Package, Users } from "lucide-react";
import { getEventsStatusCounts } from "@/app/actions/events";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { active, inactive } = await getEventsStatusCounts();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-foreground mb-2 text-3xl font-bold">Panel de Control</h1>
        <p className="text-muted-foreground">Bienvenido al panel administrativo de EntradasYA</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/admin/eventos"
          className="border-border bg-card focus:ring-primary rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md focus:ring-2 focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg">
              <Package className="text-primary h-6 w-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Eventos Activos
              </p>
              <p className="text-foreground text-2xl font-bold">{active}</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/eventos?inactivos=1"
          className="border-border bg-card focus:ring-primary rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md focus:ring-2 focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
              <Package className="text-muted-foreground h-6 w-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                Eventos Inactivos
              </p>
              <p className="text-foreground text-2xl font-bold">{inactive}</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/suscripciones"
          className="border-border bg-card focus:ring-primary rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md focus:ring-2 focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <div className="bg-accent/20 flex h-12 w-12 items-center justify-center rounded-lg">
              <Users className="text-accent h-6 w-6" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-wider uppercase">Suscriptores</p>
              <p className="text-foreground text-2xl font-bold">0</p>
            </div>
          </div>
        </Link>

        <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/20">
              <BarChart3 className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs tracking-wider uppercase">Ingresos</p>
              <p className="text-foreground text-2xl font-bold">$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
