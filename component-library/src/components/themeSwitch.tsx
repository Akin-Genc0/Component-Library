"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  lightIcon?: React.ReactNode;
  darkIcon?: React.ReactNode;
  label?: string;
};

const defaultLight = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const defaultDark = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export default function ThemeToggle({
  lightIcon,
  darkIcon,
  label,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  function switchTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      data-looply
      onClick={switchTheme}
      aria-label={label ?? "Toggle theme"}
    >
      {isDark ? (darkIcon ?? defaultDark) : (lightIcon ?? defaultLight)}
    </button>
  );
}
