"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TypedText.module.css";

/**
 * Types out `text` on mount, terminal-style.
 * Renders the full string on first paint (matches SSR/no-JS output),
 * then clears and retypes once mounted so there's no flash of empty
 * content before hydration. Skips the animation entirely when the
 * visitor prefers reduced motion.
 */
export function TypedText({
  text,
  startDelay = 500,
  speed = 32,
  className = "",
}: {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone] = useState(true);
  const textRef = useRef(text);
  textRef.current = text;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    setDisplayed("");
    setDone(false);

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(textRef.current.slice(0, i));
        if (i >= textRef.current.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [startDelay, speed]);

  return (
    <span className={`${styles.wrap} ${className}`}>
      {/* Invisible, always full-length: reserves the box's final width/height
          so the animated copy below never causes surrounding layout to shift. */}
      <span className={styles.ghost} aria-hidden="true">
        {text}
      </span>
      <span className={styles.typed}>
        {displayed}
        <span
          className={`${styles.cursor} ${done ? styles.cursorIdle : ""}`}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
