# Live Mode Reference

Interactive live variant mode: select elements in the browser, pick a design action, and get AI-generated HTML+CSS variants hot-swapped via the dev server's HMR.

## Prerequisites

A running dev server with hot module replacement (Vite, Next.js, Bun, etc.), OR a static HTML file open in the browser.

## The contract (read once)

Execute in order. No step skipped, no step reordered.

1. `live.mjs`: boot.
2. Open the app URL that serves `pageFile`.
3. Poll loop with the default long timeout (600000 ms).
4. On `generate`: read screenshot if present; load the action's reference; plan three distinct directions; write all variants in one edit; `--reply done`; poll again.
5. On `steer`: read the message and pageUrl; do the work; `--reply steer_done`; poll again.
6. On `accept` / `discard`: acknowledge and clean up.
7. On `exit`: run the cleanup at the bottom.

## Variant Generation Rules

### Planning three variants

**Default mode**: Each variant commits to a different **primary axis** of difference:
1. Hierarchy
2. Layout topology
3. Typographic system
4. Color strategy
5. Density
6. Structural decomposition

Each variant must be readable as the same brand identity if rendered side by side.

**Departure mode**: Each variant anchors to a different aesthetic direction from PRODUCT.md.

### Writing variants

One edit, all variants. Each variant is a full HTML replacement:

```html
<style data-impeccable-css="SESSION_ID">
  /* variant CSS */
</style>
<div data-impeccable-variant="1"><!-- variant 1 --></div>
<div data-impeccable-variant="2" style="display: none"><!-- variant 2 --></div>
<div data-impeccable-variant="3" style="display: none"><!-- variant 3 --></div>
```

## Absolute Bans in Live Mode

- Side-stripe borders
- Gradient text
- Glassmorphism as default
- Identical card grids
- Tiny uppercase tracked eyebrow above every section

See main SKILL.md for full anti-pattern details.
