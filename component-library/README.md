# Looply

A monochrome, sketch-inspired React component library built with Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/looply-comp-lib?logo=npm&label=npm)](https://www.npmjs.com/package/looply-comp-lib)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Terraform](https://img.shields.io/badge/Terraform-managed-7B42BC?logo=terraform)](https://github.com/Akin-Genc0/Component-Library/tree/prod/component-library/infra)
![License](https://img.shields.io/badge/license-MIT-22C55E)
[![CI](https://github.com/Akin-Genc0/Component-Library/actions/workflows/linter.yml/badge.svg)](https://github.com/Akin-Genc0/Component-Library/actions/workflows/linter.yml)

**Live Site:** [loopl-y.com](https://loopl-y.com)
**Docs & Examples:** [loopl-y.com/examples](https://loopl-y.com/examples)
**GitHub Repo:** [Akin-Genc0/Component-Library](https://github.com/Akin-Genc0/Component-Library)

## Installation

```bash
npm install looply-comp-lib
```

## Setup

### 1. Add the library styles

In your root layout file (e.g. `app/layout.tsx`), import the library's CSS:

```tsx
import "looply-comp-lib/styles.css";
```

### 2. Add the Tailwind source

In your `globals.css` (or wherever you have `@import "tailwindcss"`), add this line so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "../node_modules/looply-comp-lib/dist";
```

That's it - both lines are required for the components to render correctly.

## Usage

```tsx
import { Card, Table, Toggle, TextArea } from "looply-comp-lib";
import "looply-comp-lib/styles.css";

function App() {
  return (
    <div>
      <Card cards={[{ cardStyle: "sketch-pressed", headerText: "Hello", subHeaderText: "World", descriptionText: "A flexible content card", buttons: [{ label: "Click" }] }]} />
      <Toggle styleType="sketch-flat" size="md" />
      <Table tables={[{ label: "Users", styleType: "sketch-pressed", header: ["Name", "Role"], rows: [{ Name: "Alice", Role: "Engineer" }] }]} />
      <TextArea lable="Notes" helperText="Type here..." resize="on" styleType="sketch-flat" />
    </div>
  );
}
```

## Components

| Component    | Description                                    |
| ------------ | ---------------------------------------------- |
| `Accordion`  | Expandable/collapsible content sections        |
| `BarChart`   | Animated bar chart visualisation               |
| `Buttons`    | Buttons with icon support and multiple styles  |
| `Calendar`   | Interactive date picker                        |
| `CalloutCard`| Promotional/CTA cards with image support       |
| `Card`       | Flexible cards with multiple surface styles    |
| `Carousel`   | Image/text carousel slider                     |
| `Chat`       | AI chat interface component                    |
| `Drawer`     | Slide-out drawing canvas                       |
| `DropDown`   | Menu dropdowns with multiple styles            |
| `Table`      | Data tables with flat, pressed, inset variants |
| `TextArea`   | Styled text areas with resize control          |
| `Toggle`     | Switch toggles in sm, md, lg sizes             |

## Peer Dependencies

These are installed automatically (npm v7+):

- `react` >= 18
- `react-dom` >= 18
- `next` >= 14
- `tailwindcss` >= 4
- `next-themes` >= 0.4

## License

MIT
