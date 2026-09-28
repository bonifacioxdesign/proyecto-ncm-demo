# Documentación

| Archivo | Ubicación |
|---------|-----------|
| PRODUCT.md | raíz (brief de producto) |
| DESIGN.md | raíz (sistema visual) |
| AGENTS.md / CLAUDE.md | raíz (reglas de agentes) |

## Estructura del monorepo

```
/
├── src/                 # Sitio marketing (Next.js) → localhost:3000
├── apps/
│   ├── tienda/          # EntradasYA / ticketing → suele :3002
│   └── ui-lab/          # Galería de componentes (Vite) → :5280
├── public/              # Assets del sitio
├── docs/                # Notas de estructura
└── DESIGN.md / PRODUCT.md
```
