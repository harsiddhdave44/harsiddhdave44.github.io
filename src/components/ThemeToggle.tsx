"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark" | "system";

const ORDER: Theme[] = ["system", "light", "dark"];

const GLYPH: Record<Theme, string> = {
  system: "◐",
  light: "○",
  dark: "●",
};

/**
 * Cycles system → light → dark. "system" removes the data-theme attribute
 * so the prefers-color-scheme media query decides; explicit choices are
 * persisted to localStorage and applied before paint by the inline script
 * in layout.tsx.
 */
export function ThemeToggle() {
  // Render the "system" state on the server; sync to the saved value after
  // mount. suppressHydrationWarning on <html> covers the attribute itself.
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {
      // localStorage unavailable: stay on "system"
    }
  }, []);

  function cycle() {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(next);
    try {
      if (next === "system") {
        localStorage.removeItem("theme");
        delete document.documentElement.dataset.theme;
      } else {
        localStorage.setItem("theme", next);
        document.documentElement.dataset.theme = next;
      }
    } catch {
      // Persistence failed; the in-page state still applied above.
    }
  }

  const label = mounted ? theme : "system";
  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={cycle}
      aria-label={`Theme: ${label}. Switch to ${next}.`}
      title={`Theme: ${label}. Click for ${next}.`}
    >
      <span aria-hidden="true">{GLYPH[label as Theme]}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
