"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type NavItem = {
  type: "link" | "button" | "icon";
  label: string;
  href: string;
  slot?: "left" | "right";
  iconPath?: string;
  imageSrc?: string;
  viewBox?: string;
};

export type NavProps = {
  navObj: NavItem[];
  hamburger?: boolean;
  hamburgerIcon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "top" | "sidebar";
  sidebarTitle?: string;
  sidebarLogoSrc?: string;
};

export default function NewNav({
  navObj,
  hamburger,
  hamburgerIcon,
  children,
  variant = "top",
  sidebarTitle = "Looply UI",
  sidebarLogoSrc = "/looplogoli.png",
}: NavProps) {
  const [mobile, setMobile] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const leftItems = navObj.filter((el) => el.slot === "left" || !el.slot);
  const rightItems = navObj.filter((el) => el.slot === "right");

  function renderNav(navSection: Array<NavItem>, isMobile = false) {
    return navSection.map((element, index) => (
      <li
        key={index}
        className={
          isMobile
            ? "flex flex-col"
            : `flex flex-row items-center ${
                index === navSection.length - 1 ? "mr-auto" : ""
              }`
        }
      >
        {element.type === "link" ? (
          <Link
            className={
              isMobile
                ? "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm py-2 transition-colors duration-200"
                : "hidden md:flex text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm py-2 transition-colors duration-200"
            }
            href={element.href}
            onClick={isMobile ? () => setMobile(false) : undefined}
          >
            {element.label}
          </Link>
        ) : element.type === "button" ? (
          <button
            className={
              isMobile
                ? "neu-inset !rounded-lg cursor-pointer py-2.5 px-6 text-sm transition-all duration-200 dark:text-gray-100"
                : "hidden md:flex neu-inset !rounded-lg cursor-pointer py-2.5 px-6 text-sm transition-all duration-200 dark:text-gray-100"
            }
            onClick={() => {
              router.push(element.href);
              if (isMobile) setMobile(false);
            }}
          >
            {element.label}
          </button>
        ) : null}

        {element.type === "icon" && !isMobile ? (
          <Link
            className={element.slot === "right" ? "flex" : "hidden md:flex"}
            href={element.href}
          >
            {element.imageSrc ? (
              <Image
                src={element.imageSrc}
                alt={element.label}
                width={24}
                height={24}
                className="rounded-full dark:invert"
              />
            ) : (
              <svg width="24" height="24" viewBox={element.viewBox}>
                <title>{element.label}</title>
                <path fill="currentColor" d={element.iconPath} />
              </svg>
            )}
          </Link>
        ) : null}
      </li>
    ));
  }

  if (variant === "sidebar") {
    return (
      <aside
        className={`neu-pressed no-hover relative z-40 flex h-auto w-full shrink-0 self-stretch flex-col p-5 !rounded-[20px] transition-[width] duration-300 md:sticky md:top-5 md:h-[calc(100dvh-2.5rem)] md:self-start ${
          sidebarCollapsed ? "md:w-20" : "md:w-72"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-2 py-3">
          <Link
            href="/"
            className={`flex min-w-0 items-center gap-3 font-semibold text-gray-800 dark:text-gray-100 ${
              sidebarCollapsed ? "justify-center" : ""
            }`}
            aria-label={sidebarTitle}
          >
            <Image
              src={sidebarLogoSrc}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 object-contain dark:invert"
            />
            {!sidebarCollapsed && (
              <span className="truncate">{sidebarTitle}</span>
            )}
          </Link>
          <button
            type="button"
            className="neu-btn hidden h-8 w-8 shrink-0 items-center justify-center rounded-full md:flex"
            onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
            aria-label={
              sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            <svg
              className={`h-4 w-4 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="neu-btn mt-3 flex h-10 items-center justify-center rounded-xl md:hidden"
          onClick={() => setMobile((open) => !open)}
          aria-expanded={mobile}
          aria-label="Toggle sidebar menu"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav
          className={`${mobile ? "flex" : "hidden"} mt-10 flex-col gap-4 md:flex`}
        >
          {navObj.map((item) => {
            const active = pathname === item.href;
            const itemClass = `flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm transition-all duration-200 ${
              active
                ? "neu-pressed no-hover font-semibold text-gray-900 dark:text-white"
                : "text-gray-500 hover:neu-flat hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
            } ${sidebarCollapsed ? "justify-center" : ""}`;
            const icon = item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0 rounded-full dark:invert"
              />
            ) : item.iconPath ? (
              <svg
                className="h-5 w-5 shrink-0"
                viewBox={item.viewBox ?? "0 0 24 24"}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={item.iconPath} />
              </svg>
            ) : (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-current text-[10px] font-semibold">
                {item.label.slice(0, 1)}
              </span>
            );

            return item.type === "button" ? (
              <button
                key={`${item.label}-${item.href}`}
                type="button"
                className={`${itemClass} w-full text-left`}
                onClick={() => {
                  router.push(item.href);
                  setMobile(false);
                }}
                title={sidebarCollapsed ? item.label : undefined}
              >
                {icon}
                {!sidebarCollapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </button>
            ) : (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={itemClass}
                onClick={() => setMobile(false)}
                title={sidebarCollapsed ? item.label : undefined}
                aria-current={active ? "page" : undefined}
              >
                {icon}
                {!sidebarCollapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {!sidebarCollapsed && (
          <a
            href="https://www.npmjs.com/package/looply-comp-lib"
            target="_blank"
            rel="noreferrer"
            className="neu-inset no-hover mt-8 flex items-center gap-3 rounded-xl p-4 text-gray-700 dark:text-gray-200"
          >
            <svg
              className="h-7 w-7 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 3h20v18H2V3Zm4 4v10h4V9h4v8h4V7H6Z" />
            </svg>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">
                Check out on npm
              </span>
              <span className="block truncate text-xs text-gray-500 dark:text-gray-400">
                looply-comp-lib
              </span>
            </span>
          </a>
        )}

        {children && (
          <div className="mt-auto flex justify-center border-t border-gray-200/50 pt-4 dark:border-gray-700/50">
            {children}
          </div>
        )}
      </aside>
    );
  }

  return (
    <>
      <div data-site-top-nav className="flex items-center w-full relative">
        <nav className="neu-pressed flex justify-between items-center w-full px-3 py-3 md:px-6 md:py-4">
          {hamburger && (
            <button
              className="block md:hidden neu-btn p-2"
              onClick={() => setMobile(!mobile)}
              aria-label="Toggle menu"
            >
              {hamburgerIcon ?? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          )}
          <ul className="flex items-center gap-10">{renderNav(leftItems)}</ul>
          <ul className="flex items-center gap-5 md:gap-5 shrink-0">
            <a
              href="https://www.npmjs.com/package/looply-comp-lib"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex neu-inset !rounded-xl items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-gray-600 dark:text-gray-200 hover:neu-flat transition-all duration-200 cursor-pointer no-underline"
              title="npm downloads last month"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="downloads"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="min-w-8 text-center tabular-nums">—</span>
            </a>
            {renderNav(rightItems)}

            {children && <li className="flex items-center">{children}</li>}
          </ul>
        </nav>

        {hamburger && mobile && (
          <div className="md:hidden absolute top-full left-0 w-full neu-raised z-50 mt-2">
            <ul className="flex flex-col list-none p-4 gap-4">
              {renderNav(navObj, true)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
