import Link from "next/link";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404: route not found",
};

export default function NotFound() {
  return (
    <div className={`shell ${styles.wrap}`}>
      <p className="route">/incident/404</p>
      <h1 className={styles.title}>Route not found</h1>
      <dl className={styles.report}>
        <div>
          <dt>status</dt>
          <dd className={styles.warn}>◌ 404: no matching entry in the routing table</dd>
        </div>
        <div>
          <dt>impact</dt>
          <dd>This page only. The rest of the site is operational.</dd>
        </div>
        <div>
          <dt>remediation</dt>
          <dd>
            <Link href="/">Return to /</Link> or jump straight to{" "}
            <Link href="/#work">/work</Link>.
          </dd>
        </div>
      </dl>
    </div>
  );
}
