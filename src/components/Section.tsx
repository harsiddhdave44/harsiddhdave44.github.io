import type { ReactNode } from "react";
import styles from "./Section.module.css";

/**
 * A labeled page section. The `route` eyebrow is the site's structural
 * device: sections are labeled by their literal anchor route.
 */
export function Section({
  id,
  route,
  title,
  tone = "paper",
  children,
}: {
  id: string;
  route: string;
  title: string;
  tone?: "paper" | "ink";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tone === "ink" ? "tone-ink" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="shell">
        <div className={styles.head}>
          <p className="route">{route}</p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
