"use client";

import NewNav from "@/components/newnav";
import ThemeToggle from "@/components/themeSwitch";
import { usePathname } from "next/navigation";

const navItems = [
  {
    type: "link" as const,
    label: "Home",
    href: "/",
    iconPath:
      "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z",
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
    iconPath:
      "M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z",
  },
  {
    type: "link" as const,
    label: "Install",
    href: "/examples",
    iconPath: "M12 3v12m0 0 4-4m-4 4-4-4M5 21h14",
  },
];

export default function SiteSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/") return children;

  if (pathname === "/login") {
    return (
      <div data-sidebar-shell className="min-h-screen">
        {children}
      </div>
    );
  }

  return (
    <div
      data-sidebar-shell
      className="-mx-4 -my-2 flex min-h-screen flex-col gap-6 bg-background p-5 md:-mx-[5.5rem] md:-my-6 md:flex-row md:gap-10"
    >
      <NewNav variant="sidebar" navObj={navItems}>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Akin-Genc0/Component-Library"
            target="_blank"
            rel="noreferrer"
            className="neu-pressed no-hover flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 dark:text-gray-100"
          >
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.7-4.56 4.95.36.31.68.9.68 1.8v2.67c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
            <span className="truncate">Star on GitHub</span>
          </a>
          <div className="neu-btn rounded-xl p-2">
            <ThemeToggle />
          </div>
        </div>
      </NewNav>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
