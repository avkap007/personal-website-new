"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const THEME_STORAGE_KEY = "theme";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-8 w-8 items-center justify-center rounded-full text-writingColor hover:text-darkAccent transition-colors"
    >
      {isDark === null ? (
        <span className="h-4 w-4" />
      ) : isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      )}
    </button>
  );
}
