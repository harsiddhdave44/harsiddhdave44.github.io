"use client";

import { ui } from "@/content/ui";
import styles from "./not-found.module.css";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={`shell ${styles.wrap}`}>
      <p className="route">{ui.error.route}</p>
      <h1 className={styles.title}>{ui.error.title}</h1>
      <dl className={styles.report}>
        <div>
          <dt>status</dt>
          <dd className={styles.warn}>{ui.error.statusLabel}</dd>
        </div>
        {error.digest && (
          <div>
            <dt>ref</dt>
            <dd className="mono">{error.digest}</dd>
          </div>
        )}
        <div>
          <dt>remediation</dt>
          <dd>
            <button className={styles.retry} type="button" onClick={reset}>
              {ui.error.retryLabel}
            </button>{" "}
            {ui.error.retrySuffix}
          </dd>
        </div>
      </dl>
    </div>
  );
}
