"use client";
import Image from "next/image";
import { useState } from "react";

type links = {
  navLink: string;
  lin: string;
  icon: string;
  iconLink: string;
};

type rightLink = {
  el: string;
  icon: string;
  iconLink: string;
};

type NavProps = { link: links[]; rlink: rightLink[]; hamburgerIcon?: string };

export default function Nav({ link, rlink, hamburgerIcon }: NavProps) {
  const [mobile, setMobile] = useState(false);

  function renderNavItems(isMobile = false) {
    return link.map((a, b) => (
      <li
        key={b}
        className={
          isMobile
            ? "flex flex-col"
            : `flex flex-row items-center ${
                b === link.length - 1 ? "mr-auto" : ""
              }`
        }
      >
        {!isMobile && (a.icon !== "" || a.iconLink !== "") && (
          <a href={a.iconLink} className="flex items-center">
            <Image
              className="hidden md:block mr-[25px]"
              alt=""
              src={a.icon}
              width={25}
              height={25}
            />
          </a>
        )}

        <a
          className={
            isMobile
              ? "text-gray-500 hover:text-gray-700 text-sm py-2"
              : "hidden md:flex text-gray-500 hover:text-gray-700 text-sm items-center"
          }
          href={a.lin}
          onClick={isMobile ? () => setMobile(false) : undefined}
        >
          {a.navLink}
        </a>
      </li>
    ));
  }

  return (
    <div className="flex justify-between items-center w-full flex-row relative">
      <nav className="flex flex-row list-none gap-[40px] items-center w-full">
        <button className="block md:hidden" onClick={() => setMobile(!mobile)}>
          <Image
            className="mr-[25px]"
            alt="menu"
            src={hamburgerIcon ?? ""}
            width={25}
            height={25}
          />
        </button>

        {renderNavItems(false)}

        <div className="flex flex-row items-center gap-x-8">
          {rlink.map((a, b) => {
            return (
              <li key={b} className="flex items-center">
                {a.el !== "" ? (
                  <input
                    type="text"
                    placeholder={a.el}
                    className="hidden md:block bg-gray-200 text-gray-100 rounded-sm px-2 py-1 
                      text-sm focus:outline-none placeholder-gray-400 border-0 "
                  />
                ) : null}

                {a.icon !== "" || a.iconLink !== "" ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="hidden md:block w-px h-6 bg-gray-300 mx-4"
                    />
                    <a href={a.iconLink}>
                      <Image
                        className="ml-0 md:ml-[25px] min-[500px]:block"
                        alt=""
                        src={a.icon}
                        width={23}
                        height={23}
                      />
                    </a>
                  </>
                ) : null}
              </li>
            );
          })}
        </div>
      </nav>

      {mobile && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <ul className="flex flex-col list-none p-4 gap-4">
            {renderNavItems(true)}
          </ul>
        </div>
      )}
    </div>
  );
}
