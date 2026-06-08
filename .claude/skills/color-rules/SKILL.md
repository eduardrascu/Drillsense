---
name: color-rules
description: >-
  DrillSense color token rules. Three-layer system: primitives (tokens.ts) → semantic roles
  (theme.ts) → data viz. Defines which layer applies to screens and how to reference each group.
  Load before generating or reviewing any DrillSense screen.
---

# DrillSense Color Rules

The color system has three layers. Each layer has a strict scope — never cross them.

```
tokens.ts       → primitives (raw ramps)       → OFF LIMITS in screens
theme.ts        → ux, semantic roles, dataViz  → only semantic roles apply to screens
                                                  ux is OFF LIMITS
                                                  dataViz is charts only
```

---

## Layer 1 — Primitives (`tokens.ts`) — OFF LIMITS in screens

`colors.ui.*`, `colors.transparent.*`, `colors.black`, `colors.white` are building blocks.
They are consumed by `theme.ts` to construct the semantic layer.
**Never reference them directly in a screen file.**

```ts
// ❌ never
background: ${colors.ui.gray['13']};
border: 1px solid ${colors.transparent.white['8%']};

// ✅ always — alias from the semantic layer
background: ${t.surface};
border: 1px solid ${t.border};
```

---

## Layer 2 — `ux` and `attributes` (`theme.ts`) — OFF LIMITS in screens

`ux` (`ux.primary`, `ux.success`, `ux.warning`, `ux.error`, `ux.info`, `ux.secondary`) is a
one-dimensional alias over primitives. It has no state variants, no transparency scale, and no
theme-awareness. **Never use it in screens.**

`attributes` (`categorical`, `dateTime`, `numeric`, `geo`, `meta`) is reserved for data attribute
type indicators in table column headers and filter chips only. Not for general UI color.

---

## Layer 3 — Semantic roles (`theme.ts`) — USE THESE in screens

DrillSense uses `darkTheme`. Access semantic tokens via `darkTheme.colors.*` or alias them
locally at the top of each screen file in a `const t = { ... }` object.

Always alias first, use the alias throughout — never inline `darkTheme.colors.neutral.text.default`
directly inside a styled-component.

---

### `neutral` — surfaces, text, icons, borders

#### `neutral.text`
| Token | Dark value | Usage |
|---|---|---|
| `neutral.text.default` | `gray['01']` `#F5F5F5` | Primary text — headings, labels, body copy |
| `neutral.text.weak` | `gray['05']` `#A8A8A8` | Supporting text — descriptions, secondary labels |
| `neutral.text.weaker` | `gray['07']` `#757575` | Muted text — timestamps, helper text, metadata |
| `neutral.text.weakest` | `gray['08']` `#5D5D5E` | Disabled text |
| `neutral.text.static` | `#FFFFFF` | Always-white text — use only on solid colored fills |
| `neutral.text.inverted.default` | `gray['13']` `#181818` | Dark text for use on light/inverted backgrounds |
| `neutral.text.inverted.weak` | `gray['09']` `#444547` | Secondary dark text on light backgrounds |
| `neutral.text.inverted.weaker` | `gray['07']` `#757575` | Muted dark text on light backgrounds |
| `neutral.text.inverted.weakest` | `gray['06']` `#8E8E8E` | Disabled dark text on light backgrounds |

#### `neutral.icon`
Mirrors `neutral.text` — same token names, same values. Use `neutral.icon.*` for icon fills,
`neutral.text.*` for text. Do not mix them across roles.

#### `neutral.border`
| Token | Dark value | Usage |
|---|---|---|
| `neutral.border.strong` | `gray['03']` | High-emphasis divider, selected row outline |
| `neutral.border.default` | `gray['08']` | Standard border — rarely used on dark; prefer transparent |
| `neutral.border.weak` | `gray['10']` | Subtle section divider |
| `neutral.border.weaker` | `gray['11']` | Input borders, nested panel edges |
| `neutral.border.weakest` | `gray['12']` | Barely-visible separator |

> On dark surfaces, prefer `neutral.background.transparent.*` for borders — they respect
> the layer beneath and avoid opaque banding.

#### `neutral.background`
| Token | Dark value | Usage |
|---|---|---|
| `neutral.background.base` | `#121212` | Page canvas — the lowest layer |
| `neutral.background.default` | `gray['13']` `#181818` | Primary card / panel surface |
| `neutral.background.hover` | `gray['12']` `#1B1B1B` | Hover state on a neutral surface |
| `neutral.background.active` | `gray['11']` `#2C2D30` | Active/pressed state, nested panel |
| `neutral.background.strongest` | `gray['01']` | Inverted fill (e.g. tooltip on light) |
| `neutral.background.transparent.backdrop` | `gray 24%` | Modal/drawer backdrop overlay |
| `neutral.background.transparent.strong` | `white 16%` | Emphasis border, focus ring |
| `neutral.background.transparent.default` | `white 12%` | Standard border on dark surface |
| `neutral.background.transparent.weak` | `white 8%` | Subtle border, card edge |
| `neutral.background.transparent.weaker` | `white 4%` | Ghost separator, inset tint |

---

### `primary` — brand / action

#### `primary.text`
| Token | Dark value | Usage |
|---|---|---|
| `primary.text.default` | `indigo['04']` `#80BED7` | Active/selected label with brand emphasis |
| `primary.text.weak` | `indigo['05']` `#66B2D0` | Hover state on brand text |
| `primary.text.weaker` | `indigo['06']` `#3398C0` | Secondary brand label |
| `primary.text.weakest` | `indigo['07']` `#007EB0` | Links, breadcrumb active, nav active |
| `primary.text.inverted.default` | `indigo['10']` | Brand text on light background |

#### `primary.icon`
Mirrors `primary.text` — same values, use for icon fills in brand-role contexts.

#### `primary.border`
| Token | Dark value | Usage |
|---|---|---|
| `primary.border.default` | `indigo['08']` | Default brand border (button outline) |
| `primary.border.hover` | `indigo['07']` | Hover on brand-bordered element |
| `primary.border.active` | `indigo['06']` | Active/focus brand border |
| `primary.border.disabled` | `indigo['12']` | Disabled brand border |

#### `primary.background`
| Token | Dark value | Usage |
|---|---|---|
| `primary.background.strong` | `indigo['07']` | Primary button fill, active indicator |
| `primary.background.stronger` | `indigo['06']` | Hover on primary button |
| `primary.background.strongest` | `indigo['05']` | Active/pressed primary button |
| `primary.background.default` | `indigo['12']` | Brand-tinted panel background |
| `primary.background.transparent.strong` | `primary 24%` | High-visibility brand tint |
| `primary.background.transparent.default` | `primary 16%` | Selected chip, active pill |
| `primary.background.transparent.weak` | `primary 12%` | AI card tint, soft brand surface |
| `primary.background.transparent.weaker` | `primary 8%` | Subtle hover on brand-adjacent row |

---

### `system` — status communication only

System colors are **strictly for semantic status**. Never use them for decoration, data series,
or layout differentiation.

| System role | When to use |
|---|---|
| `system.success` | Drilling active, completed stage, positive outcome |
| `system.warning` | Anomaly, event flag, parameter drift, tripping state |
| `system.error` | Critical alert, maintenance required, failed operation |
| `system.info` | Informational notice, adjusted parameters, neutral update |

Each role exposes the same slot shape:

```
system.<role>.text.default       → label text on dark
system.<role>.text.inverted      → label text on light
system.<role>.icon.default       → icon fill
system.<role>.icon.weak          → secondary icon
system.<role>.border.default     → badge / chip border
system.<role>.background.default       → solid fill (badge background)
system.<role>.background.hover         → hover on solid fill
system.<role>.background.active        → pressed on solid fill
system.<role>.background.weakest       → deeply muted tinted surface
system.<role>.background.transparent   → subtle status tint behind content
```

---

## Data Visualization — `dataViz` (`theme.ts`) — charts only

> `dataViz.*` colors are **exclusively for chart elements** — lines, bars, dots, fills.
> Never use them for UI chrome (buttons, badges, text, borders, backgrounds).
> Access via `darkTheme.colors.dataViz.*`.

### Sequential — `dataViz.sequential_7_1`
```
index: [0]        [1]        [2]        [3]        [4]        [5]        [6]
hex:  #E8F2FF   #C5DCFF   #A1C6FF   #7EB0FF   #5A9AFF   #3784FF   #136EFF
       ↑ low                                                         high ↑
```
**Use for:** Single-variable continuous data where magnitude or intensity matters.
- Depth-vs-value heatmaps (formation density, pressure gradient, temperature)
- Choropleth / spatial overlays with a single metric
- Histogram or bar charts encoding quantity of a single measure
- Fill gradients on a single progress or gauge element

Rules:
- `[0]` = lowest/lightest, `[6]` = highest/strongest — never reverse without explicit legend
- Use all 7 steps for smooth gradients; use 3–5 discrete steps for bucketed data
- Never mix with qualitative palette colors in the same chart

---

### Qualitative — unordered distinct categories

Use when categories are **independent with no inherent order** (well names, formation types, crew IDs, bit types).

#### `dataViz.qualitative_2_1` → `['#136EFF', '#FF6B3D']`
Blue + orange — maximum contrast, opposing hues.
Use for: A/B well comparisons, two-series overlays, boolean splits (target vs. offset).

#### `dataViz.qualitative_2_2` → `['#136EFF', '#34C759']`
Blue + green — paired with a positive/neutral framing.
Use for: Actual vs. plan, current vs. benchmark, on-track vs. completed comparisons.

#### `dataViz.qualitative_4` → `['#136EFF', '#34C759', '#FF6B3D', '#FFCC00']`
Four distinct hues — blue, green, orange, yellow.
Use for: Formation quadrant breakdowns, 4-crew or 4-parameter charts, multi-series with up to 4 categories.

#### `dataViz.qualitative_12` — full 12-color palette
```
#136EFF  #34C759  #FF6B3D  #FFCC00  #AF52DE
#FF2D55  #5856D6  #FF9500  #32ADE6  #007AFF
#5AC8FA  #4CD964
```
Use for: Multi-well dashboards (5+ wells), formation type legends, drill string component breakdowns,
any chart with 5–12 unordered categories.

**Rules for all qualitative palettes:**
- Pick the smallest palette that covers your category count: 2→`_2_x`, 3–4→`_4`, 5+→`_12`
- Assign colors in index order — do not skip or rearrange to "avoid a color"
- The greens in `qualitative_2_2` and `qualitative_12` are data-series colors — not success indicators. Never substitute `system.success` and a qualitative green for each other
- For two-well comparison screens (e.g. WellComparison), use `qualitative_2_1[0]` and `qualitative_2_1[1]` as `seriesA` / `seriesB`

---

## Quick reference — layer violations to avoid

| ❌ Don't | ✅ Do instead |
|---|---|
| `colors.ui.gray['13']` in a styled component | `t.surface` aliased from `neutral.background.default` |
| `colors.transparent.white['8%']` inline | `t.border` aliased from `neutral.background.transparent.weak` |
| `ux.success` for a badge | `system.success.background.transparent` + `system.success.text.default` |
| `dataViz.qualitative_4[1]` for a success state | `system.success.*` — qualitative green ≠ status green |
| `dataViz.sequential_7_1` for category labels | Sequential = magnitude only; use qualitative for categories |
| Hardcoded hex anywhere in a screen | No exceptions — every value traces to a token |
