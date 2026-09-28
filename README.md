# Nave Cine Metro

Monorepo de **Nave Cine Metro** / Asociación Cultural Azoro: sitio institucional, tienda de entradas y laboratorio de UI.

## Estructura

```
/
├── src/                 # Sitio marketing (Next.js) → http://localhost:3000
├── apps/
│   ├── tienda/          # EntradasYA (ticketing + admin)
│   └── ui-lab/          # Styleguide / galería de componentes (Vite) → :5280
├── public/              # Assets del sitio
├── docs/STRUCTURE.md    # Mapa de carpetas
├── PRODUCT.md           # Brief de producto
└── DESIGN.md            # Sistema visual
```

## Desarrollo

### Sitio marketing

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

### UI Lab (componentes en vivo)

```bash
pnpm lab:install   # primera vez
pnpm lab
```

Abrí [http://localhost:5280](http://localhost:5280) (no uses 5173: suele ser otro proyecto).

### Tienda

```bash
pnpm --dir apps/tienda install
pnpm dev:tienda
```

## Páginas del sitio

- `/` — Home
- `/servicios`, `/quienes-somos`, `/tripulantes`
- `/teatro-del-azoro`, `/la-cachada-teatro`
- `/contactanos`, `/tour-virtual`, `/descubre-san-salvador`
- `/styleguide` — inventario Atomic Design
- `/components` — puntero al UI Lab

La tienda **no** forma parte del deploy de `navecinemetro.org` (solo staging si se autoriza).

## Contacto (email)

Opcional: copiá `.env.example` a `.env.local` y configurá `RESEND_API_KEY`.
