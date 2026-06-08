# Drillsense — Design System & Screens

This project hosts the **FuseDash design system** (`src/`) and the **Drillsense screens** built on top of it (`screens/`). Read this before creating or editing any page.

## The stack — use this for EVERY new page

| Layer | Choice | Notes |
|-------|--------|-------|
| Host / bundler | **Vite** + **React 18** + **TypeScript** | Run with `npm run preview` (dev) / `npm run preview:build` |
| Styling | **styled-components v6** | No CSS files, no Tailwind, no inline brand hexes |
| Design system | **FuseDash** components in `src/` | Import via `@src/components/<Name>` |
| Theme | **`darkTheme`** from `@src/themes` | Injected once via `ThemeProvider` in `preview/main.tsx` |
| Tokens (source of truth) | **`src/themes/tokens.ts`** | Teal brand (`primary #007EB0`). All color traces here. |

**Do NOT** use: Next.js, Tailwind, the root `tokens.js` (indigo demo), or hardcoded brand colors. Those belong to the legacy demo and are off-brand.

## Where pages live

- Every screen is **one file** in **`screens/`**, e.g. `screens/DrillingOverview.tsx`.
- It must be a **default-exported** React component.
- Import it with the **`@screens/...`** alias.
- Register it for viewing in `preview/App.tsx` (or the router, once added).

## How to build a page (the rules)

1. **Compose from DS primitives.** Prefer real components — `Button`, `Link`, `Avatar`, `Badge`, `ProgressBar`, `Typography`, `Input`, `Card`, `DataTable`, `Tabs`, `Tooltip`, etc. — imported from `@src/components/<Name>`.
2. **Color only from tokens.** Pull values from `@src/themes` (`colors.ui.*`, `colors.transparent.*`). Never paste a hex for a brand color. The teal is `colors.ui.indigo['07']` (the swapped brand ramp).
3. **Custom layout containers are fine** (the DS `Card` takes no children), but they must be **styled-components** that read colors from the token set — keeping one source of truth.
4. **Dark theme.** Surfaces step `gray-14 → 13 → 12`; structure via low-opacity white borders (`colors.transparent.white`).
5. **Status semantics:** drilling → `success` (green), tripping → `warning` (amber), idle → `default` (gray), maintenance → `error` (red). Reserve teal for brand/identity/actions and progress.

## Components to AVOID (token split-brain)

These still read an old-blue palette from `tokens/tokens.js`, not the teal `tokens.ts`:
- **`AvatarGroup`** — use the single **`Avatar`** instead.
- **`Widgets/Heatmap`** — its `getContrastColor` defaults pull old neutral text tokens.

The single `Avatar`, `Button`, `Link`, `Badge`, `ProgressBar`, `Typography`, `Input`, etc. are all clean teal.

## Reference implementation

`screens/DrillingOverview.tsx` is the canonical example — copy its structure (themed shell + DS primitives + token-driven custom pieces) when adding new screens.

## Run

```bash
npm run preview        # vite dev server (http://localhost:5173)
npm run preview:build  # production build (validates the whole import graph)
```

## After every task

At the end of every response, list which agents and skills were used to produce the result:

```
**Used:** agent: screen-builder · skills: color-rules, component-rules
```

If no agent or skill was invoked, omit the line entirely.
