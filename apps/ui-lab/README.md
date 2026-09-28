# NCM UI Lab

App **Vite + React** en `apps/ui-lab/`, separada del sitio Next.js, para visualizar componentes en vivo.

## Arranque

Desde la raíz del monorepo:

```bash
npm run lab
```

O dentro de esta carpeta:

```bash
npm install
npm run dev
```

Abrí [http://localhost:5280](http://localhost:5280).

> Puerto fijo **5280** (`strictPort`) para no chocar con otros Vite (p. ej. 5173 = TinyTooth).

## Cómo funciona

- Importa componentes reales desde `../../src` (`@/components/...`).
- Shims de `next/link`, `next/image` y `next/navigation` para que corran fuera de Next.
- Tokens de marca espejados en `src/styles.css`.
- Assets desde `../../public` (logos, etc.).
