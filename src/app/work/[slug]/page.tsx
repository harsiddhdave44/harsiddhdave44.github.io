import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { Reveal } from "@/components/Reveal";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

// Only prerendered slugs exist; anything else is a hard 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className={`shell ${styles.runbook}`}>
      <header className={styles.head}>
        <p className="route">/work/{project.slug}</p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>

        {/* Runbook metadata block — the signature element. */}
        <dl className={styles.metaBlock}>
          <div className={styles.metaItem}>
            <dt>status</dt>
            <dd
              className={styles.statusValue}
              data-status={project.status}
            >
              {project.status === "resolved" ? ui.projectPage.resolvedStatus : ui.projectPage.inProgressStatus}
            </dd>
          </div>
          {project.meta.map((m) => (
            <div key={m.label} className={styles.metaItem}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {ui.projectPage.sections.map((s) => (
        <Reveal as="section" key={s.key} className={styles.section}>
          <p className="route">{s.route}</p>
          <h2 className={styles.sectionTitle}>{s.title}</h2>
          <p>{project[s.key]}</p>
        </Reveal>
      ))}

      <Reveal as="section" className={styles.section}>
        <p className="route">{ui.projectPage.process.route}</p>
        <h2 className={styles.sectionTitle}>{ui.projectPage.process.title}</h2>
        <ol className={styles.process}>
          {project.process.map((step, i) => (
            <li key={step}>
              <span className={styles.stepIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal as="section" className={styles.section}>
        <p className="route">{ui.projectPage.decisions.route}</p>
        <h2 className={styles.sectionTitle}>{ui.projectPage.decisions.title}</h2>
        <dl className={styles.decisions}>
          {project.keyDecisions.map((d) => (
            <div key={d.decision} className={styles.decision}>
              <dt>{d.decision}</dt>
              <dd>{d.why}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal as="section" className={styles.section}>
        <p className="route">{ui.projectPage.result.route}</p>
        <h2 className={styles.sectionTitle}>{ui.projectPage.result.title}</h2>
        <p className={styles.result}>{project.result}</p>
      </Reveal>

      <Reveal as="section" className={styles.section}>
        <p className="route">{ui.projectPage.learned.route}</p>
        <h2 className={styles.sectionTitle}>{ui.projectPage.learned.title}</h2>
        <p>{project.learned}</p>
      </Reveal>

      <nav className={styles.footNav} aria-label="Case study navigation">
        <Link href="/#work">{ui.projectPage.backLink}</Link>
        <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Re: ${project.title}`)}`}>
          {ui.projectPage.askLink}
        </a>
      </nav>
    </article>
  );
}
