"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/themeSwitch";

const pageLabels: Record<string, string> = {
  "/": "Overview",
  "/about": "About",
  "/docs": "Components",
  "/examples": "Install",
  "/contact": "Contact",
};

export default function SiteHeader() {
  const pathname = usePathname();
  const label = pageLabels[pathname] ?? "Component details";
  const [starCount, setStarCount] = useState("...");

  useEffect(() => {
    let active = true;

    fetch("https://api.github.com/repos/Akin-Genc0/Component-Library")
      .then((response) => (response.ok ? response.json() : null))
      .then((repository: { stargazers_count?: number } | null) => {
        if (active && typeof repository?.stargazers_count === "number") {
          setStarCount(repository.stargazers_count.toLocaleString());
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  return (
    <header className="flex min-h-18 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-5 py-3 sm:px-8">
      <div className="flex items-center gap-3 text-sm">
        <span className="font-medium text-[var(--muted)]">Components</span>
        <svg
          className="h-4 w-4 text-[var(--muted)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span className="rounded-md bg-[var(--surface-subtle)] px-2.5 py-1 font-semibold text-[var(--foreground)]">
          {label}
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://github.com/Akin-Genc0/Component-Library"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 px-2 py-2 text-[var(--muted)] transition-colors hover:text-[var(--foreground)] sm:inline-flex"
          aria-label="View Looply on GitHub"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.7-4.56 4.95.36.31.68.9.68 1.8v2.67c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
          <span className="text-sm font-semibold tabular-nums">{starCount}</span>
        </a>
        <div className="p-1 text-[var(--muted)]">
          <ThemeToggle />
        </div>
        <Link href="/login" className="sketch-btn top-nav-action hidden px-3 py-2 text-sm font-semibold sm:inline-flex">
          Sign in
        </Link>
        <Link href="/docs" className="sketch-btn-raised top-nav-action px-3 py-2 text-sm font-semibold">
          Browse docs
        </Link>
      </div>
    </header>
  );
}
