---
name: Nave Cine Metro
description: Espacio cultural independiente — escena, no oficina.
colors:
  background: "#fff0dc"
  foreground: "#212121"
  primary: "#a95153"
  primary-deep: "#8f4244"
  primary-foreground: "#fff8ef"
  accent: "#f76b00"
  secondary: "#f5e0c0"
  secondary-foreground: "#2a1f1a"
  muted: "#f5e0c0"
  muted-foreground: "#5c4a3a"
  card: "#fff8eb"
  destructive: "#b42318"
typography:
  display:
    fontFamily: "Krona One, Chivo, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Krona One, Chivo, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Chivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Chivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Chivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
spacing:
  container: "max-w-5xl"
  prose: "max-w-3xl"
  gutter: "1rem / 1.5rem / 2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.625rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.primary-foreground}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.625rem"
  input-default:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "0.25rem 0.625rem"
    height: "2rem"
---

# Design System: Nave Cine Metro

## 1. Overview

**Creative North Star: "Escena, no oficina"**

Nave Cine Metro es el sitio de marca de un espacio cultural independiente en el Centro Histórico de San Salvador. El sistema visual debe sentirse como un escenario vivo: tipografía con carácter, fotografía del lugar, y un acento rosa-terracota sobre crema cálida — nunca como portal administrativo, ONG corporativa o brochure de ministerio.

La densidad es baja: una idea por sección, ritmo generoso, motion al servicio del contenido. EntradasYA (Tienda) comparte ADN de marca pero opera como producto transaccional; los tokens de color y tipografía deben converger, los patrones de checkout y admin no deben contaminar el sitio institucional.

**Key Characteristics:**
- Registro brand (comunicar, no transaccionar en el sitio principal)
- Crema de escenario + primary rosa + acento naranja puntual
- Krona One (display) + Chivo (cuerpo)
- Contenedor `max-w-5xl`; prosa `max-w-3xl`
- Menos ruido, más presencia — sin clutter de badges institucionales

## 2. Colors

Paleta cálida de sala: papel crema, tinta casi negra, rosa de marca y un naranja de foco.

### Primary
- **Rosa Nave** (#a95153): CTAs, links activos, foco de anillo, identidad de marca. Hover profundo (#8f4244). Texto sobre primary: #fff8ef.

### Secondary
- **Crema secundaria** (#f5e0c0): fondos suaves, chips de nav interna, superficies muted. Texto secundario sobre ella: #2a1f1a.

### Tertiary
- **Naranja de foco** (#f76b00): acento ≤10% de cualquier pantalla. Énfasis puntual, nunca wallpaper.

### Neutral
- **Papel de escena** (#fff0dc): fondo de página.
- **Tinta** (#212121): texto principal.
- **Tinta secundaria** (#5c4a3a): cuerpo muted; mantener contraste ≥4.5:1 sobre crema.
- **Superficie card** (#fff8eb): paneles elevados tonales.
- **Destructivo** (#b42318): errores y acciones irreversibles.

### Named Rules
**The Stage Light Rule.** El primary ocupa ≤15% de una superficie. Su rareza es lo que lo hace marca; inundar de rosa convierte el sitio en plantilla.

**The One Hex Rule.** Ningún componente nuevo hardcodea `#a95153` o `#f76b00`. Siempre `var(--primary)` / `bg-primary` / tokens equivalentes. Hex sueltos = drift hacia Tienda.

## 3. Typography

**Display Font:** Krona One (con Chivo / sans fallback)
**Body Font:** Chivo (con system-ui fallback)

**Character:** Krona es geométrica y escénica — cartel de sala. Chivo es limpia y cercana para lectura en español. El par no debe sustituirse por Inter en el sitio institucional (Inter es puente tipográfico del hero de eventos / Tienda).

### Hierarchy
- **Display** (400, clamp ~1.875–3rem, lh 1.15, tracking -0.02em): H1 de página y heroes. Floor de tracking ≥ -0.04em.
- **Headline** (400, clamp ~1.5–2.25rem): H2 de sección.
- **Title** (600, ~1.125rem): subtítulos y labels fuertes.
- **Body** (400, 1rem, lh 1.6): prosa; máximo ~65–75ch.
- **Label** (500, 0.875rem): metadatos, eyebrows puntuales — no en cada sección.

### Named Rules
**The One Kicker Rule.** Un eyebrow tipográfico puede ser voz de marca; repetirlo encima de cada sección es gramática de plantilla. Preferir ritmo tipográfico (tamaño/peso) sobre kickers.

## 4. Elevation

Sistema mayormente plano con capa tonal: el fondo crema y el card `#fff8eb` crean profundidad sin sombra estructural. Las sombras existen de forma ad-hoc (hover en decks/membership); no hay escala nombrada todavía — pendiente de formalizar.

### Shadow Vocabulary
- **Rest:** sin sombra; separación por tono o borde hairline (`color-mix` 14% tinta).
- **Hover (ad-hoc):** sombras suaves en componentes interactivos 3D (membership deck); no combinar borde 1px + blur ≥16px.

### Named Rules
**The Flat-By-Default Rule.** Superficies en reposo son planas. La elevación responde a estado (hover, focus, drag), no a decoración.

## 5. Components

### Buttons
- **Shape:** rounded-lg (~0.625rem)
- **Primary:** fondo Rosa Nave, texto crema clara; hover primary-deep
- **Outline / Ghost / Secondary / Link / Destructive:** variantes en `button.tsx`
- **Focus:** ring primary al 50%
- **Nota:** migrar hex hardcodeados a tokens CSS

### Cards / Containers
- **Corner Style:** radius-lg
- **Background:** card o transparente según contexto
- **Shadow Strategy:** flat-by-default
- **Uso:** solo cuando hay interacción o agrupación necesaria; no grids de cards decorativas

### Inputs / Fields
- **Style:** borde input hairline, fondo transparente, radius-lg, h-8
- **Focus:** border-ring + ring-3
- **Error:** aria-invalid + destructive ring

### Navigation
- **SiteHeader:** logo + links + crowdfunding + shop; sticky sobre crema
- **Mobile:** sheet/drawer pattern en header; targets táctiles adecuados

### Signature — PageHero
Bloque de título interior: eyebrow opcional (primary), H1 display, descripción muted. Alineación center o start. No es hero full-bleed; el full-bleed queda para home / fotografía de lugar.

## 6. Do's and Don'ts

### Do:
- **Do** tratar cada superficie como escena cultural: tipografía, imagen del lugar, un acento.
- **Do** usar `siteContainer()` / `siteProse()` para ancho coherente.
- **Do** respetar `prefers-reduced-motion` en cualquier animación nueva.
- **Do** dar voz visual propia a Teatro del Azoro y La Cachada.
- **Do** mantener contraste legible de muted-foreground sobre crema (WCAG 2.2 AA).

### Don't:
- **Don't** parecer portal gubernamental, ONG corporativa, universidad rígida o brochure de ministerio.
- **Don't** saturar con badges, sellos y copy burocrático.
- **Don't** importar UI de dashboard/admin del panel de Tienda al sitio de marca.
- **Don't** hardcodear hex de marca; usar tokens.
- **Don't** usar border-left grueso como acento, gradient text, o glassmorphism decorativo.
- **Don't** poner eyebrows uppercase tracked encima de cada sección.
- **Don't** desplegar dark mode hasta que haya decisión de producto (tokens `.dark` existen pero no están cableados).
