"use client";
import { useState } from "react";

type AccordionItem = {
  title: string;
  text: string;
};

type AccordionProps = { items: AccordionItem[] };

export default function Accordion({ items }: AccordionProps) {
  const [hide, setHide] = useState<boolean[]>(Array(items.length).fill(false));

  function handleToggle(index: number) {
    setHide((prev) => {
      const newHide = Array(items.length).fill(false);
      newHide[index] = !prev[index];
      return newHide;
    });
  }

  function values() {
    return items.map((val, index) => {
      return (
        <div
          key={index}
          className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          <div
            className="flex items-center gap-4 p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => handleToggle(index)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 text-gray-900 dark:text-gray-100 flex-shrink-0 ${
                hide[index] ? "rotate-180" : ""
              }`}
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
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              {val.title}
            </h2>
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              hide[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-5 pb-5 pl-[3.75rem] text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {val.text}
            </p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="border border-black dark:border-gray-700 rounded-lg overflow-hidden max-w-3xl bg-white dark:bg-gray-900 font-inter">
      {values()}
    </div>
  );
}
