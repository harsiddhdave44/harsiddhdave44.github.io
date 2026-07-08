import { site } from "@/content/site";
import styles from "./StatusChip.module.css";

/**
 * The site's status vocabulary: a pulsing dot + mono label,
 * mirroring a status-page "operational" indicator.
 */
export function StatusChip({ compact = false }: { compact?: boolean }) {
  return (
    <span className={styles.chip}>
      <span className={styles.dot} aria-hidden="true" />
      {compact ? site.status.compactLabel : site.status.label}
    </span>
  );
}
