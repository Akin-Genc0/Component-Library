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
  //anything with left in it goes yto the left anything > then the split index entered
  //const r = navObj.filter((el, i) => (el.slot === "right"))
  return (
    <>
      <div className="">
        <nav className="flex gap-[2.5rem]">
          <ul>
            {navObj.map((element, index) => (
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
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
