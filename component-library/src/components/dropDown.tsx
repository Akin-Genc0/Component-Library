"use client";
import { useState } from "react";
import Link from "next/link";

type dropdownContent = {
  dropDownURL?: string;
  dropDownLable: string;
};

type dropDownMenu = {
  dropDownType: "neu-flat" | "neu-inset" | "neu-raised";
  dropDownMenuLabel: string;
  dropDownItem: dropdownContent[];
  DropdownMenuSeparator?: any;
};

type dropDownCollection = {
  dropDowns: dropDownMenu[];
};

const styleMap = {
  "neu-flat": { base: "neu-flat", hover: "hover:neu-inset" },
  "neu-raised": { base: "neu-raised", hover: "hover:neu-inset" },
  "neu-inset": { base: "neu-inset", hover: "hover:neu-flat" },
};

export default function DropDown({ dropDowns }: dropDownCollection) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <div className="flex flex-row gap-5 font-inter">
        {dropDowns.map((element, index) => {
          const style = styleMap[element.dropDownType];
          const isOpen = openIndex === index;
          return (
            <div key={index} className="relative">
              <button
                onClick={() => handleToggle(index)}
                className={`${style.base} !rounded-lg cursor-pointer ${style.hover} transition-all duration-200 px-5 py-2 font-medium text-sm flex items-center gap-2`}
              >
                {element.dropDownMenuLabel}
                <div className="neu-inset w-6 h-6 flex items-center justify-center flex-shrink-0 !rounded-full">
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 text-gray-500 dark:text-gray-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {isOpen ? (
                <div className="absolute mt-2 min-w-[200px] z-10 flex flex-col gap-2 animate-[fadeSlideIn_0.25s_ease-out]">
                  {element.dropDownItem.map((item, itemIndex) => {
                    return (
                      <Link href={item.dropDownURL ?? "#"} key={itemIndex}>
                        <div
                          className={`${style.base} px-4 py-3 text-sm text-gray-700 dark:text-gray-300 ${style.hover} transition-all duration-200 cursor-pointer`}
                        >
                          {item.dropDownLable}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
