"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  type: "link" | "button" | "icon";
  label: string;
  href: string;
  slot?: "left" | "right";
  iconPath?: string;
  imageSrc?: string;
  visible?: boolean;
  viewBox?: string;
};

type NavProps = { navObj: NavItem[]; split?: number; hamburgerIcon?: string };

export default function NewNav({ navObj }: NavProps) {
  const router = useRouter();

  const leftItems = navObj.filter((el) => el.slot === "left" || !el.slot);
  const rightItems = navObj.filter((el) => el.slot === "right");

  function renderNav(navSection: Array<NavItem>) {
    return navSection.map((element, index) => (
      <li className="list-none pl-6 first:pl-0" key={index}>
        {element.type === "link" ? (
          <Link
            className="text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors duration-200"
            href={element.href}
          >
            {element.label}
          </Link>
        ) : element.type === "button" ? (
          <button
            className="text-white hover:text-black hover:bg-white border cursor-pointer py-2.5 px-6 bg-black rounded-lg text-sm transition-all duration-200"
            onClick={() => router.push(element.href)}
          >
            {element.label}
          </button>
        ) : null}

        {element.type === "icon" ? (
          <Link href={element.href}>
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
          <ul className="flex items-center gap-10">{renderNav(leftItems)}</ul>
          <ul className="flex items-center gap-10">{renderNav(rightItems)}</ul>
        </nav>
      </div>
    </>
  );
}
