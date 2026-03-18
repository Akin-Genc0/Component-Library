"use client";
import { useState, useEffect } from "react";

type themeToggleIcon = {
  lightIcon?: string;
  darkIcon?: string;
  lable?: string;
};

export default function Theme({ lable, lightIcon, darkIcon }: themeToggleIcon) {
  const [theme, setTheme] = useState(false);

  function switchTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <>
      <div className="">
        {theme ? (
          <svg onClick={switchTheme} width="24" height="24" viewBox="0 0 24 24">
            <title>{lable}</title>
            <path fill="currentColor" d={lightIcon} />
          </svg>
        ) : (
          <svg onClick={switchTheme} width="24" height="24" viewBox="0 0 24 24">
            <title>{lable}</title>
            <path fill="currentColor" d={darkIcon} />
          </svg>
        )}
      </div>
    </>
  );
}
