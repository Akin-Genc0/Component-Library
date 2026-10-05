import Link from "next/link";
import NewNav from "@/components/newnav";
import SiteHeader from "@/components/siteHeader";

const navItems = [
  { type: "link" as const, label: "Overview", href: "/", section: "Resources", iconPath: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z" },
  { type: "link" as const, label: "Component docs", href: "/docs", iconPath: "M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z" },
  { type: "link" as const, label: "Install", href: "/examples", iconPath: "M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" },
  { type: "link" as const, label: "Buttons", href: "/button", section: "Actions & input", iconPath: "M7 12h10M12 7v10" },
  { type: "link" as const, label: "Dropdowns", href: "/dropdown", iconPath: "m8 10 4 4 4-4" },
  { type: "link" as const, label: "Toggles", href: "/toggle", iconPath: "M7 12h10M17 12a3 3 0 1 0 0 .01Z" },
  { type: "link" as const, label: "Cards", href: "/card", section: "Content", iconPath: "M4 5h16v14H4zM4 9h16" },
  { type: "link" as const, label: "Accordion", href: "/accordion", iconPath: "M5 8h14M5 12h14M5 16h14" },
  { type: "link" as const, label: "Calendar", href: "/calendar", iconPath: "M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1 1-1V6a1 1 0 0 1 1-1Z" },
  { type: "link" as const, label: "Tables", href: "/table", section: "Data display", iconPath: "M4 5h16v14H4zM4 10h16M10 5v14" },
  { type: "link" as const, label: "Charts", href: "/barchart", iconPath: "M5 19V9m5 10V5m5 14v-7m5 7V3" },
];

const components = [
  ["Accordion", "Expandable content sections", "/accordion"],
  ["Bar charts", "Simple, responsive data charts", "/barchart"],
  ["Buttons", "Clear actions and button states", "/button"],
  ["Calendar", "Date selection and scheduling", "/calendar"],
  ["Cards", "Flexible content containers", "/card"],
  ["Chat", "Conversational interface elements", "/chat"],
  ["Dropdowns", "Compact action menus", "/dropdown"],
  ["Drawer", "Slide-over content panels", "/drawer"],
  ["Tables", "Structured data displays", "/table"],
  ["Text areas", "Multi-line form inputs", "/textarea"],
  ["Toggles", "Binary choice controls", "/toggle"],
  ["Callout cards", "Focused content announcements", "/calloutcard"],
] as const;

function ComponentPreview({ index }: { index: number }) {
  const variant = index;

  return (
    <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--surface-subtle)]">
      <span className="absolute h-px w-3/4 bg-[var(--border)] opacity-60" />
      <span className="absolute h-20 w-px bg-[var(--border)] opacity-60" />
      {variant === 0 && (
        <div className="relative w-36 rounded-md border border-[var(--border)] bg-[var(--surface)] p-2.5 text-[9px]">
          <span className="flex items-center justify-between border-b border-[var(--border)] pb-1.5">Section one <b>+</b></span>
          <span className="flex items-center justify-between border-b border-[var(--border)] py-1.5">Section two <b>+</b></span>
          <span className="flex items-center justify-between pt-1.5">Section three <b>+</b></span>
        </div>
      )}
      {variant === 1 && (
        <div className="relative flex h-16 items-end gap-2 border-b border-[var(--border-strong)] px-2">
          <span className="h-6 w-3 rounded-t bg-[var(--border)]" /><span className="h-11 w-3 rounded-t bg-[var(--foreground)]" /><span className="h-8 w-3 rounded-t bg-[var(--border)]" /><span className="h-14 w-3 rounded-t bg-[var(--foreground)]" /><span className="h-10 w-3 rounded-t bg-[var(--border)]" />
        </div>
      )}
      {variant === 2 && (
        <div className="relative flex gap-2">
          <span className="rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold">Cancel</span>
          <span className="rounded-md bg-[var(--accent)] px-3 py-1.5 text-[10px] font-semibold text-white dark:text-[#171717]">Continue</span>
        </div>
      )}
      {variant === 3 && (
        <div className="relative w-28 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] p-2 text-[9px]">
          <span className="mb-1 block border-b border-[var(--border)] pb-1 text-center font-semibold">April 2026</span>
          <span className="grid grid-cols-4 gap-1 text-center text-[7px]"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><b className="rounded bg-[var(--foreground)] py-0.5 text-[var(--surface)]">7</b><i>8</i></span>
        </div>
      )}
      {variant === 4 && <div className="relative flex -space-x-8"><span className="h-16 w-24 rounded-md border border-[var(--border)] bg-[var(--surface-subtle)]" /><span className="mt-3 h-16 w-24 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] p-3"><i className="block h-2 w-10 rounded bg-[var(--foreground)]" /><i className="mt-2 block h-1.5 w-full rounded bg-[var(--border)]" /></span></div>}
      {variant === 5 && <div className="relative flex w-36 flex-col gap-2 text-[9px]"><span className="w-24 self-start rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5">Hello there</span><span className="w-24 self-end rounded-md bg-[var(--foreground)] px-2 py-1.5 text-[var(--surface)]">How can I help?</span></div>}
      {variant === 6 && <div className="relative w-32 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] text-[9px]"><span className="flex justify-between border-b border-[var(--border)] px-3 py-2">Select item <b>⌄</b></span><span className="block px-3 py-1.5">Profile</span><span className="block bg-[var(--surface-subtle)] px-3 py-1.5">Settings</span></div>}
      {variant === 7 && <div className="relative h-16 w-36 rounded-md border border-[var(--border)] bg-[var(--surface-subtle)]"><span className="absolute right-0 top-0 h-full w-16 border-l border-[var(--border-strong)] bg-[var(--surface)] p-2"><i className="block h-2 w-8 rounded bg-[var(--foreground)]" /><i className="mt-3 block h-1.5 w-10 rounded bg-[var(--border)]" /></span></div>}
      {variant === 8 && <div className="relative grid w-36 grid-cols-3 overflow-hidden rounded-md border border-[var(--border-strong)] bg-[var(--surface)] text-[8px]"><b className="border-b border-r border-[var(--border)] p-1.5">Name</b><b className="border-b border-r border-[var(--border)] p-1.5">Role</b><b className="border-b border-[var(--border)] p-1.5">State</b><span className="border-r border-[var(--border)] p-1.5">Alex</span><span className="border-r border-[var(--border)] p-1.5">Dev</span><span className="p-1.5">Ready</span></div>}
      {variant === 9 && <div className="relative w-36 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] p-3"><i className="mb-2 block h-1.5 w-3/5 rounded bg-[var(--border)]" /><i className="mb-2 block h-1.5 w-full rounded bg-[var(--border)]" /><i className="block h-1.5 w-4/5 rounded bg-[var(--border)]" /></div>}
      {variant === 10 && <div className="relative flex flex-col gap-2"><span className="flex h-5 w-10 items-center rounded-full bg-[var(--foreground)] p-1"><i className="ml-auto h-3 w-3 rounded-full bg-[var(--surface)]" /></span><span className="flex h-5 w-10 items-center rounded-full border border-[var(--border-strong)] p-1"><i className="h-3 w-3 rounded-full bg-[var(--border)]" /></span></div>}
      {variant === 11 && <div className="relative flex w-40 items-center gap-3 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] p-3"><span className="h-8 w-8 rounded bg-[var(--foreground)]" /><span><i className="mb-1 block h-2 w-14 rounded bg-[var(--foreground)]" /><i className="block h-1.5 w-20 rounded bg-[var(--border)]" /></span></div>}
    </div>
  );
}

export default function Home() {
  return (
    <div data-sidebar-shell className="flex min-h-screen flex-col bg-background md:flex-row">
      <NewNav variant="sidebar" navObj={navItems} />
      <main className="min-w-0 flex-1 bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <section className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[var(--accent)]">LOOPLY UI</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              React UI components, ready to build with.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A practical collection of reusable React components for clean, accessible interfaces. Browse a component, copy the code, and make it your own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/docs" className="sketch-btn-raised px-4 py-2.5 text-sm font-semibold">
                Explore components
              </Link>
              <Link href="/examples" className="sketch-btn px-4 py-2.5 text-sm font-semibold">
                Installation guide
              </Link>
            </div>
          </section>

          <section className="mt-20 border-t border-dashed border-[var(--border)] pt-12">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">Base components</h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                Building blocks for forms, content, navigation, and application interfaces.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {components.map(([title, description, href], index) => (
                <Link
                  key={title}
                  href={href}
                  className="sketch-pressed group overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                >
                  <ComponentPreview index={index} />
                  <div className="p-5">
                    <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{description}</p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)]">View component &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
