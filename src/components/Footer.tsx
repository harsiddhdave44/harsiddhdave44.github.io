import { site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <p className={styles.line}>
          <span className="mono">© {new Date().getFullYear()}</span> {site.name}
          {" · "}
          {site.role}
        </p>
        <p className={`mono ${styles.uptime}`}>
          built with Next.js · fully static · no trackers
        </p>
        {site.links.length > 0 && (
          <ul className={styles.links}>
            {site.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
