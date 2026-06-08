# FuseDash - Settings Page

A modern settings page implementation based on the Figma design for Account settings/MCP & Models, integrated with the FuseDash design system.

## Features

- **Navigation Bar**: Logo, menu items (Projects, Resources, Community), search functionality, notifications, and user account
- **Settings Tabs**: General, Brand Identity, Visualisations, Login Interface, AI tools, Privacy Policy
- **Agents Section**: Display default agents (Basic, Optimized, Pro) and custom agents with usage indicators
- **Models Section**: List of connected AI models with toggle switches
- **MCPs Section**: Model Context Protocol servers with connection status

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- FuseDash Design System tokens

## Design System Integration

This project uses design tokens from the FuseDash design system located at `/Users/sawa/Git/FuseDash-test`. The tokens have been integrated into Tailwind CSS configuration:

- **Colors**: Primary (Indigo), Gray scale, Success, Warning, Error, and transparent variants
- **Typography**: Heading and body text styles with proper line heights
- **Spacing**: Consistent spacing scale (3xs, 2xs, xs, sm, md, lg, xl, 2xl)
- **Border Radius**: Design system radius values (2xs, xs, sm, md, lg, 2lg, xl, 2xl, full)
- **Shadows**: Elevation shadows (sm, md, lg, focus)

### Design Tokens

The design tokens are defined in `tokens.js` and imported into `tailwind.config.js`. All components use these tokens for consistent styling.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navigation.tsx   # Top navigation bar
│   ├── Subheader.tsx    # Settings header with tabs
│   ├── SectionCard.tsx  # Reusable section wrapper
│   ├── AgentCard.tsx    # Agent card component
│   ├── ModelCard.tsx    # Model card component
│   └── MCPCard.tsx      # MCP card component
├── src/
│   └── tokens/
│       └── design-tokens.ts  # TypeScript design tokens (for reference)
├── tokens.js            # JavaScript design tokens (used by Tailwind)
└── tailwind.config.js  # Tailwind configuration with design system tokens
```

## Design System Usage

All components use Tailwind classes that reference the design system tokens:

- Colors: `text-primary-08`, `bg-gray-01`, `border-gray-02`
- Typography: `text-heading-lg`, `text-md`, `text-sm`
- Spacing: `p-sm`, `gap-md`, `m-lg`
- Border Radius: `rounded-md`, `rounded-sm`, `rounded-full`
- Shadows: `shadow-sm`, `shadow-md`

## Design System Source

The design tokens are sourced from the FuseDash design system repository at:
`/Users/sawa/Git/FuseDash-test`

Key files referenced:
- `src/themes/tokens.ts` - Design tokens definitions
- `src/themes/theme.ts` - Theme configuration
- `tokens/colors.json` - Color tokens
- `tokens/spacing.json` - Spacing tokens
- `tokens/topography.json` - Typography tokens
