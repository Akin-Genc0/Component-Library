"use client";

import NewNav from "@/components/newnav";
import SiteHeader from "@/components/siteHeader";
import { usePathname } from "next/navigation";

const navItems = [
  {
    type: "link" as const,
    label: "Overview",
    href: "/",
    section: "Resources",
    iconPath:
      "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z",
  },
  {
    type: "link" as const,
    label: "Component docs",
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
  {
    type: "link" as const,
    label: "Buttons",
    href: "/button",
    section: "Actions & input",
    iconPath: "M7 12h10M12 7v10",
  },
  {
    type: "link" as const,
    label: "Dropdowns",
    href: "/dropdown",
    section: "Actions & input",
    iconPath: "m8 10 4 4 4-4",
  },
  {
    type: "link" as const,
    label: "Toggles",
    href: "/toggle",
    iconPath: "M7 12h10M17 12a3 3 0 1 0 0 .01Z",
  },
  {
    type: "link" as const,
    label: "Cards",
    href: "/card",
    section: "Content",
    iconPath: "M4 5h16v14H4zM4 9h16",
  },
  {
    type: "link" as const,
    label: "Accordion",
    href: "/accordion",
    iconPath: "M5 8h14M5 12h14M5 16h14",
  },
  {
    type: "link" as const,
    label: "Calendar",
    href: "/calendar",
    iconPath: "M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  },
  {
    type: "link" as const,
    label: "Tables",
    href: "/table",
    section: "Data display",
    iconPath: "M4 5h16v14H4zM4 10h16M10 5v14",
  },
  {
    type: "link" as const,
    label: "Charts",
    href: "/barchart",
    iconPath: "M5 19V9m5 10V5m5 14v-7m5 7V3",
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
      className="flex min-h-screen flex-col bg-background md:flex-row"
    >
      <NewNav variant="sidebar" navObj={navItems} />
      <main className="min-w-0 flex-1 bg-background">
        <SiteHeader />
        <div className="site-content">{children}</div>
      </main>
    </div>
  );
}
