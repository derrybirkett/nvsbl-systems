"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

// Keep in sync with the inline theme script in app/layout.tsx.
function currentMode(): Mode {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the DOM once after hydration
    setMode(currentMode());
  }, []);

  function toggle() {
    const next: Mode = currentMode() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice then lasts for this page only.
    }
    setMode(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="meta cursor-pointer transition-colors duration-[var(--motion-fast)] hover:text-foreground"
    >
      <span aria-hidden="true">{mode === "dark" ? "☀ Light" : "☾ Dark"}</span>
    </button>
  );
}
