import Link from "next/link";
import type { Metadata } from "next";
import { ui } from "@/content/ui";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: ui.notFound.metaTitle,
};

export default function NotFound() {
  return (
    <div className={`shell ${styles.wrap}`}>
      <p className="route">{ui.notFound.route}</p>
      <h1 className={styles.title}>{ui.notFound.title}</h1>
      <dl className={styles.report}>
        <div>
          <dt>status</dt>
          <dd className={styles.warn}>{ui.notFound.statusLabel}</dd>
        </div>
        <div>
          <dt>impact</dt>
          <dd>{ui.notFound.impact}</dd>
        </div>
        <div>
          <dt>remediation</dt>
          <dd>
            <Link href="/">Return to {ui.notFound.homeLinkLabel}</Link> or jump straight to{" "}
            <Link href="/#work">{ui.notFound.workLinkLabel}</Link>.
          </dd>
        </div>
      </dl>
    </div>
  );
}
