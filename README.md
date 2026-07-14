# Looply Component Library

A neumorphic UI component library built with Next.js, TypeScript, and Tailwind CSS.

**Live Site:** [loopl-y.com](https://loopl-y.com)  
**Install Guide:** [loopl-y.com/docs](https://loopl-y.com/examples)

## Components

- **Card** — Flexible cards with multiple neumorphic styles (flat, pressed, floating)
- **Callout Card** — Promotional/CTA cards with image support
- **Table** — Data tables with flat, pressed, and inset variants
- **Toggle** — Switch toggles in multiple sizes (sm, md, lg)
- **Button** — Buttons with icon support and multiple styles
- **Calendar** — Interactive date picker
- **Bar Chart** — Animated bar chart visualizations
- **Chat** — AI chat interface component
- **Accordion** — Expandable content sections
- **Dropdown** — Menu dropdowns with multiple styles
- **Carousel** — Image/text carousel slider
- **Drawer** — Slide-out drawing canvas
- **TextArea** — Styled text areas with resize control

## Installation

```bash
npm install looply-comp-lib
```

```tsx
import { Card, Table, Toggle } from "looply-comp-lib";
import "looply-comp-lib/styles.css";
```

## Development

```bash
cd component-library
npm install
npm run dev
```

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- MDX for documentation
- Prisma (database)
- next-themes (dark mode)

## Branch Strategy

- `develop` — active development
- `qa` — QA testing
- `prod` — production releases

## License

MIT
