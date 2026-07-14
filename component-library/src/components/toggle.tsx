"use client";

import { useState } from "react";

type ToggleProps = {
  lable?: string;
  styleType: "neu-flat" | "neu-inset" | "neu-pressed";
  size: "sm" | "md" | "lg";
  onChange?: (checked: boolean) => void;
};

export default function Toggle({
  lable,
  styleType,
  size,
  onChange,
}: ToggleProps) {
  const [isOn, setOn] = useState<boolean>(false);

  const sizeMap = {
    sm: {
      track: "w-[3rem] h-[1.5rem]",
      thumb: "w-[1.2rem] h-[1.2rem]",
      translate: "translate-x-[1.5rem]",
    },
    md: {
      track: "w-[4rem] h-[2rem]",
      thumb: "w-[1.6rem] h-[1.6rem]",
      translate: "translate-x-[2.1rem]",
    },
    lg: {
      track: "w-[5rem] h-[2.5rem]",
      thumb: "w-[2rem] h-[2rem]",
      translate: "translate-x-[2.6rem]",
    },
  };

  function handleClick() {
    const next = !isOn;
    setOn(next);
    onChange?.(next);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {lable && <h2 className="text-sm dark:text-gray-300">{lable}</h2>}
      <div
        onClick={handleClick}
        className={`${styleType} ${sizeMap[size].track} flex items-center rounded-full cursor-pointer p-[3px] no-hover`}
      >
        <div
          className={`${styleType} ${sizeMap[size].thumb} rounded-full transition-transform duration-300 bg-gray-900 dark:bg-gray-600 no-hover ${isOn ? sizeMap[size].translate : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
}
