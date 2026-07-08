import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./ProjectCard.module.css";

/**
 * Index entry for a runbook: mono metadata row, title, summary.
 * The whole card is one link for easy keyboard/touch use.
 */
export function ProjectCard({ project }: { project: Project }) {
  const outcome = project.meta.find((m) => m.label === "outcome");
  return (
    <article className={styles.card}>
      <div className={styles.metaRow}>
        <span className={styles.slug}>/work/{project.slug}</span>
        <span
          className={styles.state}
          data-status={project.status}
        >
          {project.status === "resolved" ? "resolved" : "in progress"}
        </span>
      </div>
      <h3 className={styles.title}>
        <Link href={`/work/${project.slug}`} className={styles.link}>
          {project.title}
        </Link>
      </h3>
      <p className={styles.summary}>{project.summary}</p>
      {outcome && (
        <p className={styles.outcome}>
          <span className={styles.outcomeLabel}>outcome:</span> {outcome.value}
        </p>
      )}
      <span className={styles.readCue} aria-hidden="true">
        Read the runbook →
      </span>
    </article>
  );
}
