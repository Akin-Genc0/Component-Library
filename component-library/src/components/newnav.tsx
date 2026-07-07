"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type NavItem = {
  type: "link" | "button" | "icon";
  label: string;
  href: string;
  slot?: "left" | "right";
  iconPath?: string;
  imageSrc?: string;
  viewBox?: string;
};

type NavProps = {
  navObj: NavItem[];
  hamburger?: boolean;
  hamburgerIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export default function NewNav({
  navObj,
  hamburger,
  hamburgerIcon,
  children,
}: NavProps) {
  const [mobile, setMobile] = useState(false);
  const [npmDownloads, setNpmDownloads] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchNpmDownloads() {
      try {
        const resp = await fetch(
          "https://api.npmjs.org/downloads/point/last-month/looply-comp-lib"
        );
        if (!resp.ok) throw new Error("Failed to fetch npm downloads");
        const data = await resp.json();
        setNpmDownloads(data.downloads.toString());
      } catch {
        setNpmDownloads(null);
      }
    }
    fetchNpmDownloads();
  }, []);

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
                className="rounded-full"
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

  return (
    <>
      <div className="flex items-center w-full relative">
        <nav className="neu-flat flex justify-between items-center w-full px-3 py-3 md:px-6 md:py-4">
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
            <li
              className="hidden md:flex neu-inset !rounded-xl items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-gray-600 dark:text-gray-200"
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
              <span className="min-w-8 text-center tabular-nums">
                {npmDownloads ?? "—"}
              </span>
            </li>
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
