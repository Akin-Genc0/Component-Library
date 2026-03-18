"use client";
import { useState, useEffect } from "react";

type themeToggleIcon = {
  lightIcon: string;
  darkIcon: string;
  lable?: string;
  viewBox?: string;
};

export default function Theme({
  lable,
  lightIcon,
  darkIcon,
  viewBox,
}: themeToggleIcon) {
  const [theme, setTheme] = useState(false);

  function switchTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <>
      <div className="">
        <button onClick={switchTheme} aria-label={lable ?? "Toggle theme"}>
          <svg width="24" height="24" viewBox={viewBox ?? "0 0 24 24"}>
            <path fill="currentColor" d={theme ? darkIcon : lightIcon} />
          </svg>
        </button>
      </div>
    </>
  );
}
