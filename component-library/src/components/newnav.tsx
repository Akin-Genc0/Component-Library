"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
};

export default function NewNav({ navObj, hamburger, hamburgerIcon }: NavProps) {
  const [mobile, setMobile] = useState(false);
  const router = useRouter();

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
                ? "text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors duration-200"
                : "hidden md:flex text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors duration-200"
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
                ? "text-white hover:text-black hover:bg-white border cursor-pointer py-2.5 px-6 bg-black rounded-lg text-sm transition-all duration-200"
                : "hidden md:flex text-white hover:text-black hover:bg-white border cursor-pointer py-2.5 px-6 bg-black rounded-lg text-sm transition-all duration-200"
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
        <nav className="flex justify-between items-center w-full">
          {hamburger && (
            <button
              className="block md:hidden"
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
          <ul className="flex items-center gap-10">{renderNav(rightItems)}</ul>
        </nav>

        {hamburger && mobile && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
            <ul className="flex flex-col list-none p-4 gap-4">
              {renderNav(navObj, true)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
