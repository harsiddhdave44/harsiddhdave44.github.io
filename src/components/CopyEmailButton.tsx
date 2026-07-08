"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CopyEmailButton.module.css";

type CopyState = "idle" | "copied" | "error";

/**
 * Copies the email to the clipboard with explicit success/error states.
 * Falls back gracefully: if the Clipboard API is unavailable, the visible
 * mailto link next to it still works.
 */
export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2500);
  }

  const label =
    state === "copied"
      ? "Copied to clipboard"
      : state === "error"
        ? "Copy failed, use the link"
        : "Copy email address";

  return (
    <button
      type="button"
      className={styles.button}
      data-state={state}
      onClick={copy}
    >
      {label}
      <span aria-live="polite" className={styles.srOnly}>
        {state === "copied" ? "Email address copied" : ""}
      </span>
    </button>
  );
}
