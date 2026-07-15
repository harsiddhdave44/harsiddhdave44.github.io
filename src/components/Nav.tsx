import Link from "next/link";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { StatusChip } from "./StatusChip";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          {site.shortName.toLowerCase()}
          <span className={styles.brandTld}>{ui.nav.brandSuffix}</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className={styles.list}>
            {ui.nav.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.tools}>
          <span className={styles.status}>
            <StatusChip compact />
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
