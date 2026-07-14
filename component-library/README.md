# Looply

A neumorphic React component library built with Tailwind CSS.

**Live Site:** [loopl-y.com](https://loopl-y.com)  
**Docs & Examples:** [loopl-y.com/examples](https://loopl-y.com/examples)

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
      <Card cards={[{ cardStyle: "neu-pressed", headerText: "Hello", subHeaderText: "World", descriptionText: "A neumorphic card", buttons: [{ label: "Click" }] }]} />
      <Toggle styleType="neu-flat" size="md" />
      <Table tables={[{ label: "Users", styleType: "neu-pressed", header: ["Name", "Role"], rows: [{ Name: "Alice", Role: "Engineer" }] }]} />
      <TextArea lable="Notes" helperText="Type here..." resize="on" styleType="neu-flat" />
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
| `Card`       | Flexible cards with neumorphic styles          |
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
