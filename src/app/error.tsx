"use client";

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
      <p className="route">/incident/500</p>
      <h1 className={styles.title}>Something failed</h1>
      <dl className={styles.report}>
        <div>
          <dt>status</dt>
          <dd className={styles.warn}>● unexpected error while rendering this page</dd>
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
              Retry the request
            </button>{" "}
            or reload the page if it happens again.
          </dd>
        </div>
      </dl>
    </div>
  );
}
