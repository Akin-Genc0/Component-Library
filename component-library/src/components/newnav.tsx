"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

type NavItem = {
  type: "link" | "button" | "icon";
  label: string;
  href: string;
  slot?: "left" | "right";
  iconPath?: string;
  visible?: boolean;
};

type NavProps = { navObj: NavItem[]; split?: number };

export default function NewNav({ navObj }: NavProps) {
  const router = useRouter();

  const leftItems = navObj.filter((el) => el.slot === "left" || !el.slot);
  const rightItems = navObj.filter((el) => el.slot === "right");

  function renderNav(navSection: Array<NavItem>) {
    return navSection.map((element, index) => (
      <li className="list-none" key={index}>
        {element.type === "link" ? (
          <Link href={element.href}>{element.label}</Link>
        ) : element.type === "button" ? (
          <button onClick={() => router.push(element.href)}>
            {element.label}
          </button>
        ) : undefined}

        {element.type === "icon" ? (
          <Link href={element.href}>
            <svg width="80" height="80" viewBox="0 0 38.89 38.91">
              <title>{element.label}</title>
              <path d={element.iconPath} />
            </svg>
          </Link>
        ) : undefined}
      </li>
    ));
  }

  return (
    <>
      <div className="flex justify-between items-center w-full flex-row relative ">
        <nav className="flex justify-between flex-row items-center w-full">
          <ul className="flex flex-row items-center gap-8">
            {renderNav(leftItems)}
          </ul>
          <ul className="flex flex-row items-center gap-6 ml-auto">
            {renderNav(rightItems)}
          </ul>
        </nav>
      </div>
    </>
  );
}
