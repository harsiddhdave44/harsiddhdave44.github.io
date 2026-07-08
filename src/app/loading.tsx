import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={`shell ${styles.wrap}`} role="status" aria-label="Loading page">
      <p className={`mono ${styles.label}`}>loading…</p>
      <div className={styles.bars} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
