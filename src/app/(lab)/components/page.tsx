import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "UI Lab",
  robots: { index: false, follow: false },
}

/**
 * El visualizador de componentes vive fuera del sitio Next:
 * carpeta `apps/ui-lab/` (Vite) → `npm run lab` → http://localhost:5280
 */
export default function ComponentsMovedPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-4 py-16">
      <p className="font-mono text-xs tracking-wide text-primary uppercase">
        App separada
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-tight">UI Lab</h1>
      <p className="text-muted-foreground mt-3 text-pretty">
        La galería de componentes corre fuera del sitio, en{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-sm">
          apps/ui-lab/
        </code>{" "}
        (Vite + React), importando componentes de{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-sm">src/</code>.
      </p>
      <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-sm">
        npm run lab
      </pre>
      <p className="text-muted-foreground mt-3 text-sm">
        Abrí{" "}
        <a
          className="text-primary underline-offset-4 hover:underline"
          href="http://localhost:5280"
        >
          http://localhost:5280
        </a>
        . El 5173 es otro proyecto (TinyTooth), no este lab.
      </p>
      <p className="mt-8">
        <Link
          href="/styleguide"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          ← Inventario Atomic Design
        </Link>
      </p>
    </main>
  )
}
