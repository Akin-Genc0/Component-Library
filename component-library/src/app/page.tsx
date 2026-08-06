import Accordion from "@/components/accordion";
import BarChart from "@/components/barChart";
import Calendar from "@/components/calendar";
import CalloutCard from "@/components/calloutCard";
import Chat from "@/components/chat";
import NewNav from "@/components/newnav";
import Table from "@/components/table";
import TextArea from "@/components/textarea";
import ThemeToggle from "@/components/themeSwitch";
import Toggle from "@/components/toggle";
import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import packageJson from "../../package.json";

const navItems = [
  {
    type: "link" as const,
    label: "Home",
    href: "/",
    iconPath: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z",
  },
  {
    type: "link" as const,
    label: "About",
    href: "/about",
    iconPath: "M12 11v5m0-9h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    type: "link" as const,
    label: "Documentation",
    href: "/docs",
    iconPath: "M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z",
  },
  {
    type: "link" as const,
    label: "Install",
    href: "/examples",
    iconPath: "M12 3v12m0 0 4-4m-4 4-4-4M5 21h14",
  },
  {
    type: "link" as const,
    label: "Settings",
    href: "/userinfo",
    iconPath:
      "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  },
];

type NpmDownloadsResponse = { downloads: number };
type GitHubRepositoryResponse = { stargazers_count: number };

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    return response.ok ? ((await response.json()) as T) : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [npmData, githubData, packageEntrypoint] = await Promise.all([
    getJson<NpmDownloadsResponse>("https://api.npmjs.org/downloads/point/last-month/looply-comp-lib"),
    getJson<GitHubRepositoryResponse>("https://api.github.com/repos/Akin-Genc0/Component-Library"),
    readFile(path.join(process.cwd(), "src", "index.ts"), "utf8"),
  ]);
  const npmDownloads = npmData?.downloads.toLocaleString() ?? "—";
  const githubStars = githubData?.stargazers_count.toLocaleString() ?? "—";
  const componentCount = (packageEntrypoint.match(/^export \{ default as /gm)?.length ?? 0).toString();
  const metrics = [
    { icon: "grid", value: componentCount, label: "Components" },
    { icon: "npm", value: npmDownloads, label: "npm Downloads" },
    { icon: "github", value: githubStars, label: "GitHub Stars" },
    { icon: "bars", value: packageJson.version, label: "Version" },
  ];

  return (
    <div className="-mx-4 -my-2 flex min-h-screen flex-col gap-6 bg-background p-5 md:-mx-[5.5rem] md:-my-6 md:flex-row md:gap-10">
      <NewNav variant="sidebar" navObj={navItems}>
        <a
          href="https://github.com/Akin-Genc0/Component-Library"
          target="_blank"
          rel="noreferrer"
          className="neu-pressed no-hover flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-100"
        >
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.7-4.56 4.95.36.31.68.9.68 1.8v2.67c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
          <span className="truncate">Star on GitHub</span>
        </a>
      </NewNav>

      <main className="min-w-0 flex-1 space-y-10 pb-10">
        <header className="neu-pressed no-hover flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-bold tracking-tight">Neumorphic UI Built for Your Apps</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Soft, tactile UI elements for modern apps. Free. Flexible. Open Source.
            </p>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <a
              href="https://www.npmjs.com/package/looply-comp-lib"
              target="_blank"
              rel="noreferrer"
              className="neu-btn flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 3h20v18H2V3Zm4 4v10h4V9h4v8h4V7H6Z" />
              </svg>
              {npmDownloads}
            </a>
            <Link href="/login" className="neu-btn rounded-xl p-3" aria-label="Open profile">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>
            </Link>
            <div className="neu-btn rounded-xl p-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4" aria-label="Library metrics">
          {metrics.map((metric) => (
            <article key={metric.label} className="neu-pressed no-hover flex items-center gap-5 p-6 !rounded-xl">
              <span className="neu-inset no-hover flex h-12 w-12 items-center justify-center !rounded-full text-xs font-bold text-gray-600 dark:text-gray-300">
                {metric.icon === "grid" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />
                  </svg>
                )}
                {metric.icon === "npm" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M2 3h20v18H2V3Zm4 4v10h4V9h4v8h4V7H6Z" />
                  </svg>
                )}
                {metric.icon === "github" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.7-4.56 4.95.36.31.68.9.68 1.8v2.67c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
                  </svg>
                )}
                {metric.icon === "bars" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4 19h3V9H4v10Zm6 0h4V4h-4v15Zm7 0h3v-7h-3v7Z" />
                  </svg>
                )}
              </span>
              <div>
                <p className="text-2xl font-bold leading-none">{metric.value}</p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-10 xl:grid-cols-[1.05fr_1fr]">
          <article className="neu-inset no-hover flex min-h-[420px] min-w-0 flex-col p-6">
            <h2 className="mb-5 text-base font-bold">Analytics Overview</h2>
            <BarChart
              fill
              content={[
                { lable: "Mon", size: 180 },
                { lable: "Tue", size: 95 },
                { lable: "Wed", size: 120 },
                { lable: "Thu", size: 88 },
                { lable: "Fri", size: 150 },
                { lable: "Sat", size: 57 },
                { lable: "Sun", size: 200 },
              ]}
            />
          </article>

          <article className="neu-inset no-hover p-6">
            <h2 className="mb-5 text-base font-bold">FAQ</h2>
            <Accordion
              items={[
                { title: "What is Looply UI?", text: "A React and Tailwind CSS component library with a tactile neumorphic visual language." },
                { title: "How do I get started?", text: "Install the package with npm and use the documentation to import the components you need." },
                { title: "Is it free to use?", text: "Yes. Looply UI is free and open source for personal and commercial projects." },
                { title: "Does it support dark mode?", text: "Yes. Components include dark-mode aware styles through Tailwind CSS." },
              ]}
            />
          </article>
        </section>

        <section className="neu-inset no-hover p-6">
          <h2 className="mb-5 text-base font-bold">Cards</h2>
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              ["Soft Edge", "Flat surface", "A subtle, tactile card with layered shadows. Great for feature blocks or previews.", "neu-flat"],
              ["Pressed", "Inset surface", "A pressed-in card that recedes into the background. Perfect for grouped content.", "neu-inset"],
              ["Floating", "Raised surface", "A strongly raised card that hovers above the surface. Ideal for hero tiles.", "neu-raised"],
            ].map(([title, subtitle, description, style]) => (
              <article key={title} className={`${style} flex min-h-60 flex-col p-6`}>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
                <p className="mt-7 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
                <Link href="/examples" className="neu-btn mt-auto w-fit rounded-xl px-5 py-2.5 text-sm font-medium">
                  Explore
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="neu-inset no-hover p-6">
          <h2 className="mb-5 text-base font-bold">Tables</h2>
          <Table
            tables={[
              {
                label: "Soft Edge",
                styleType: "neu-flat",
                header: ["Component", "Category", "Status"],
                rows: [
                  { Component: "Card", Category: "Layout", Status: "Ready" },
                  { Component: "Button", Category: "Controls", Status: "Ready" },
                  { Component: "Drawer", Category: "Overlay", Status: "Ready" },
                ],
              },
              {
                label: "Inset",
                styleType: "neu-inset",
                header: ["Component", "Category", "Status"],
                rows: [
                  { Component: "Table", Category: "Data", Status: "Ready" },
                  { Component: "Calendar", Category: "Input", Status: "Ready" },
                  { Component: "Toggle", Category: "Controls", Status: "Ready" },
                ],
              },
              {
                label: "Pressed",
                styleType: "neu-pressed",
                header: ["Component", "Category", "Status"],
                rows: [
                  { Component: "Chat", Category: "AI", Status: "Ready" },
                  { Component: "Carousel", Category: "Media", Status: "Ready" },
                  { Component: "Accordion", Category: "Content", Status: "Ready" },
                ],
              },
            ]}
          />
        </section>

        <section className="neu-inset no-hover grid items-stretch gap-10 p-6 md:grid-cols-3">
          <div className="neu-raised min-w-0">
            <Chat
              embedded
              title="Looply AI"
              img="/looplogoli.png"
              propt="How do I install Looply?"
              invertImageInDark
            />
          </div>
          <div className="neu-raised min-w-0">
            <Calendar embedded />
          </div>
          <div className="neu-raised flex h-full flex-col p-6">
            <div className="neu-inset no-hover flex flex-col items-start gap-6 p-4">
              <Toggle styleType="neu-flat" size="sm" />
              <Toggle styleType="neu-inset" size="md" />
              <Toggle styleType="neu-pressed" size="lg" />
            </div>
            <div className="neu-inset no-hover mt-6 flex flex-wrap gap-3 p-4">
              <button type="button" className="neu-btn-flat !rounded-lg px-3 py-2 text-xs font-medium">Flat</button>
              <button type="button" className="neu-btn-raised !rounded-lg px-3 py-2 text-xs font-medium">Raised</button>
              <button type="button" className="neu-btn-inset !rounded-lg px-3 py-2 text-xs font-medium">Inset</button>
              <button type="button" className="neu-btn !rounded-lg p-2" aria-label="Like this component">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="neu-inset no-hover p-6">
          <h2 className="mb-5 text-base font-bold">Callout Cards</h2>
          <CalloutCard
            callOut={[
              {
                header: "Start Building Today",
                subHeader: "Install Looply and start creating soft, tactile interfaces in minutes.",
                styleType: "neu-soft-edge",
                radiusType: "soft-edge",
                buttons: [{ label: "Get Started", href: "/docs" }],
              },
              {
                header: "Open Source and Free",
                subHeader: "Use Looply in personal or commercial projects and help shape the library.",
                styleType: "neu-floating",
                radiusType: "soft-edge",
                buttons: [{ label: "View Components", href: "/examples" }],
              },
              {
                header: "Need a Hand?",
                subHeader: "Browse the documentation for guides, API references, and practical examples.",
                styleType: "neu-pressed",
                radiusType: "soft-edge",
                buttons: [{ label: "Read Docs", href: "/docs" }],
              },
            ]}
          />
        </section>

        <section className="neu-inset no-hover p-6">
          <h2 className="mb-5 text-base font-bold">Text Areas</h2>
          <div className="grid gap-10 lg:grid-cols-3">
            <TextArea lable="Soft Edge" helperText="Write a note..." resize="on" styleType="neu-flat" />
            <TextArea lable="Pressed" helperText="Write a note..." resize="on" styleType="neu-pressed" />
            <TextArea lable="Inset" helperText="Write a note..." resize="off" styleType="neu-inset" />
          </div>
        </section>

      </main>
    </div>
  );
}
