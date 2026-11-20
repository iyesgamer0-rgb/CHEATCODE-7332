# Cheat Code Vault — Design

Style: retro arcade. Dark CRT-black base, neon accents, pixel display type.
Matches the topic (game cheats) since no saved house style exists.

## Colors
- Background: #0A0A12 (near-black, slight blue)
- Panel: #14142B
- Border: #2A2A4A
- Text: #E8E8F0, muted #8A8AA8
- Accent (primary, codes): #39FF88 (phosphor green)
- Accent 2 (hover, warnings): #FF3D9A (magenta)
- Accent 3 (console tags): #FFD23F (amber)

## Typography
- Display: Silkscreen (pixel) — headings, console tags, buttons
- Body/code: IBM Plex Mono — descriptions and code strings
- Scale: 48 / 28 / 18 / 15 / 13 px. Line height 1.6 body.

## Layout
- Single column, max width 1100px, 24px gutters.
- Sticky search bar at top. Console chips below it.
- Results: 1 col mobile, 2 col desktop cards.

## Components
- Card: panel bg, 2px border, hard offset shadow in magenta on hover.
- Code block: green text on black, click-to-copy button with "COPIED" state.
- Console chip: toggle, amber when active.

## Motion
- One staggered fade-in on load. Scanline overlay at 3% opacity.
- Respect prefers-reduced-motion.

## Avoid
- Purple gradients on white, Inter/Roboto, rounded generic card grids.
