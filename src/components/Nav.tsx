import Link from "next/link";
import { site } from "@/content/site";
import { StatusChip } from "./StatusChip";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

const navItems = [
  { href: "/#about", label: "/about" },
  { href: "/#work", label: "/work" },
  { href: "/#contact", label: "/contact" },
];

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          {site.shortName.toLowerCase()}
          <span className={styles.brandTld}>.dave</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className={styles.list}>
            {navItems.map((item) => (
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
