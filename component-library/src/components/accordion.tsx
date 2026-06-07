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
          className="neu-flat p-5 cursor-pointer"
          onClick={() => handleToggle(index)}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base text-gray-700 dark:text-gray-100">
              {val.title}
            </h2>
            <div className="neu-inset w-8 h-8 flex items-center justify-center flex-shrink-0 !rounded-full">
              <svg
                className={`w-4 h-4 transition-transform duration-200 text-gray-500 dark:text-gray-300 ${
                  hide[index] ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v14M5 12h14"
                />
              </svg>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              hide[index] ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="neu-inset p-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {val.text}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div data-looply className="flex flex-col gap-4 max-w-3xl font-inter">
      {values()}
    </div>
  );
}
